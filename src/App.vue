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
};
</script>

<style>
@font-face {
  font-family: Haas;
  src: url("./assets/fonts/Neue.ttf");
}
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 17px;

  -webkit-text-size-adjust: 100%;
  font-family: Haas;
}
*,
::after,
::before {
  box-sizing: border-box;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
.accent {
  color: #eba23b;
  display: inline;
  font-family: "Times New Roman", Times, serif !important;
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
  color: #eba23b;
  font-size: 17px;
  cursor: pointer;
  caret-color: #4d511e;
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
  border-bottom: 1px solid #eba23b;
  -webkit-text-fill-color: #eba23b !important;
  box-shadow: 0 0 0 2em #eba23b inset !important;
  -webkit-box-shadow: 0 0 0 2em #eba23b inset !important;
}
textarea,
textarea:focus,
textarea:active {
  font-family: "Times New Roman", Times, serif !important;
}
::placeholder {
  color: #5603ad !important;
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
