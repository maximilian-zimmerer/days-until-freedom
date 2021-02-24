<template>
  <div class="main-wrapper">
    <a href="https://www.maxi.studio" target="_blank">maxi.studio</a>
    <span>©2021</span>
  </div>
</template>

<script>
export default {
  name: "Copyright",
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #38146b;
}
a,
a:hover,
a:active,
a:visited {
  cursor: pointer;
  color: #aae7e2;
  text-decoration: none;
}
span {
  color: #aae7e2;
  font-family: Shippori;
}

@media (min-width: 1025px) and (max-width: 1200px) {
  a:hover {
    color: #f04f33;
  }
}
@media (min-width: 1201px) {
  a:hover {
    color: #f04f33;
  }
}
</style>
