<template>
  <div id="app">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Body,
  },

  computed: {
    ...mapGetters(["getConnected"]),
  },

  watch: {
    getConnected(newValue) {
      if (newValue) {
        this.getMemoList();
      }
    },
  },

  created() {
    this.checkWalletConnection();
  },
  methods: {
    ...mapActions(["checkWalletConnection", "getMemoList"]),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  transition: 0.3s ease all;
  font-family: "Noto Sans", sans-serif;
}

body {
  background: #11152b;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #707594;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

.form-input,
.form-input:focus,
.form-input {
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 2px solid #707594a3;
  padding: 10px 20px;
  font-size: 16px;
  color: #707594;
  background: transparent;
}

.form-input::placeholder {
  font-size: 14px;
  font-weight: 200;
  font-family: "Noto Sans", sans-serif;
}

.memo-input-count {
  font-size: 12px;
  line-height: 0;
  font-weight: 200;
  margin-left: 3px;
}

button {
  cursor: pointer;
  overflow: hidden;

  &:active {
    box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.2);
    animation: 0.7s pulse 1 forwards;
  }

  &:disabled {
    animation: none;
    cursor: not-allowed;
    opacity: 0.4;
  }

  &.loading {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      position: absolute;
      border: 3px solid transparent;
      border-radius: 50%;
      border-top: 3.5px solid #3498db;
      border-right: 3.5px solid #3498db;
      width: 10px;
      height: 10px;
      -webkit-animation: spin 2s linear infinite; /* Safari */
      animation: spin 2s linear infinite;
      z-index: 1000;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #fff;
      opacity: 0.75;
    }
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
