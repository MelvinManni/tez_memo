import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { ColorMode, NetworkType } from "@airgap/beacon-sdk";

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

export default {
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

  async disconnectWallet({ dispatch }) {
    await wallet.clearActiveAccount();
    dispatch("checkWalletConnection");

    // set the pkh to empty
  },
};
