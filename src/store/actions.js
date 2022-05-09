import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { ColorMode, NetworkType } from "@airgap/beacon-sdk";
import { CONTRACT_ADDRESS } from "@/utils";
import BigNumber from "bignumber.js";

// Set the network
const network = { type: NetworkType.ITHACANET };

// initialiize the SDK
const Tezos = new TezosToolkit("https://ithacanet.ecadinfra.com");

const wallet = new BeaconWallet({
  name: "Tez memo",
  preferredNetwork: network.type,
}); // Takes the same arguments as the DAppClient constructor

Tezos.setWalletProvider(wallet);

// setting the color mode for beacon wallet
wallet.client.setColorMode(ColorMode.DARK);

const getContract = async () => await Tezos.wallet.at(CONTRACT_ADDRESS);

export default {
  /**
   * @description requests permission to connect to the network
   */
  async connectWallet({ dispatch }) {
    try {
      await wallet.requestPermissions({
        network: network,
      });
      dispatch("checkWalletConnection");
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * @description Check if the wallet is connected, updates the pkh in state if connected
   */
  async checkWalletConnection({ commit }) {
    try {
      const activeAccount = await wallet.client.getActiveAccount();
      let pkh;

      if (activeAccount) {
        // If defined, the user is connected to a wallet.
        pkh = activeAccount.address;
        commit("updatePkh", pkh);
        commit("updateConnected", true);
      } else {
        commit("updatePkh", "");
        commit("updateConnected", false);
      }
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * @description disconnects the wallet connection to the dApp
   */
  async disconnectWallet({ dispatch }) {
    await wallet.clearActiveAccount();
    dispatch("checkWalletConnection");

    // set the pkh to empty
  },

  /**
   * @description Gets a list of a users memos from the contract and updates the state
   */
  async getMemoList({ state, commit }) {
    commit("updateLoading", true);

    try {
      let active_memo = [];
      let done_memo = [];

      if (state.connected) {
        console.log("started");
        const contract = await getContract();
        const storage = await contract.storage();
        const storage_user_memos = await storage.users.get(state.pkh);

        const user_memos = storage_user_memos.map((val) => new BigNumber(val).toNumber());
        console.log(user_memos);

        for (let index = 0; index < user_memos.length; index++) {
          const memo = await storage.memos.get({
            owner: state.pkh,
            id: user_memos[index].toString(),
          });

          const formated_memo = { ...memo, id: new BigNumber(memo.id).toString() };

          if (!memo.done) {
            active_memo.push(formated_memo);
          } else {
            done_memo.push(formated_memo);
          }
        }
      }

      commit("updateActiveMemo", active_memo);
      commit("updateDoneMemo", done_memo);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        commit("updateLoading", false);
      }, 2000);
    } // end try catch
  },
  /**
   * @param {string} memo
   * @description Creates a new memo and adds it to the contract storage
   */
  async addMemo({ dispatch }, memo) {
    console.log("started");
    try {
      const contract = await getContract();
      await contract.methods.addMemo(memo).send();
      dispatch("getMemoList");
    } catch (error) {
      console.log(error);
    }
    console.log("started");
  },
};
