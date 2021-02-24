<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
  data() {
    return {
      scrolled: false,
    };
  },
};
</script>

<style>
@font-face {
  font-family: Haas;
  src: url("./assets/fonts/Neue.ttf");
}
@font-face {
  font-family: Playfair;
  src: url("./assets/fonts/Playfair.ttf");
}
@font-face {
  font-family: Shippori;
  src: url("./assets/fonts/Shippori.ttf");
}
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-family: Haas;
  background-color: #aae7e2;
  -webkit-text-size-adjust: 100%;
}
*,
::after,
::before {
  scrollbar-width: none;
  box-sizing: border-box;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
#app {
  width: 100%;
  height: 100%;
}
input,
select,
textarea,
input:focus,
select:focus {
  padding: 1em;
  border: none;
  outline: none;
  font-size: 17px;
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
}
input:-webkit-autofill::first-line {
  font-size: 17px;
}
input {
  border-radius: 0;
  -webkit-border-radius: 0;
  -webkit-appearance: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 1px solid #38146b;
  -webkit-text-fill-color: #38146b !important;
  box-shadow: 0 0 0 2em #38146b inset !important;
  -webkit-box-shadow: 0 0 0 2em #38146b inset !important;
}
textarea,
textarea:focus,
textarea:active {
  border-radius: 0;
  -webkit-border-radius: 0;
  -webkit-appearance: none;
  font-family: Playfair !important;
}
::placeholder {
  font-family: Playfair;
  color: #f5c1cd !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 769px) {
  html,
  body,
  input,
  select,
  textarea,
  input:focus,
  select:focus,
  textarea:focus,
  input:-webkit-autofill::first-line {
    font-size: 1.5vw;
  }
}
</style>
