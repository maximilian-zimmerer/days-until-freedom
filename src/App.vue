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
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  color: black;
  font-size: 17px;
  background: white;
  -webkit-text-size-adjust: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  color: black;
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
  color: black;
  font-size: 17px;
  cursor: pointer;
  caret-color: black;
  border-color: transparent;
  background-color: transparent;
}
input:-webkit-autofill::first-line {
  font-size: 17px;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 1px solid black;
  -webkit-text-fill-color: black !important;
  box-shadow: 0 0 0 2em black inset !important;
  -webkit-box-shadow: 0 0 0 2em black inset !important;
}
textarea,
textarea:focus,
textarea:active {
  font-family: "Times New Roman", Times, serif !important;
}
::placeholder {
  color: black !important;
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
