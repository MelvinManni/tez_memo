<template>
  <nav>
    <div class="logo">
      <img src="../assets/logo.svg" alt="" />
    </div>

    <div>
      <button v-if="getConnected" @click="disconnect" class="is-connected">
        {{ formatAddress(getPkh) }}
      </button>
      <button v-else @click="connect">Connect Wallet</button>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { formatPkhString } from "../utils";

export default {
  name: " NavHeader",

  computed: {
    ...mapGetters(["getPkh", "getConnected"]),
  },

  methods: {
    ...mapActions(["connectWallet", "disconnectWallet"]),
    connect() {
      this.connectWallet();
    },

    disconnect() {
      this.disconnectWallet();
    },

    formatAddress(pkh) {
      return formatPkhString(pkh);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #424975;

  .logo {
    max-width: 150px;
    img {
      width: 100%;
    }
  }

  button {
    background: #11152b;
    color: rgb(211, 211, 211);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &.is-connected{
      font-size: 18px;
    }
  }
}
</style>
