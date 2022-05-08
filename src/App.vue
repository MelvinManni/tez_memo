<template>
  <div id="app">
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";

export default {
  name: "App",
  components: {
    Header,
    Body,
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

button {
  cursor: pointer;
  &:active {
    box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.2);
    animation: 0.7s pulse 1 forwards;
  }

  &:disabled {
    animation: none;
    cursor: not-allowed;
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
</style>
