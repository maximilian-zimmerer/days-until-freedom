<template>
  <div class="main-wrapper">
    <section class="info">
      <!-- About -->
      <span>1. About</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        accusantium reiciendis in incidunt ipsa neque, fugiat rerum. Totam
        temporibus ea possimus quos quo autem quam labore! Vero aut debitis
        similique?
      </span>
    </section>
    <!-- Stuff people miss -->
    <section class="phrases">
      <span>2. Not much longer until...</span>
      <section class="scroll-container">
        <span v-for="phrase in phrases" :key="phrase.id"
          >{{ phrase.text }}
        </span>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Prompts",
  props: ["phrases"],
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  background: white;
  flex-direction: column;
  border-top: 1px solid black;
  grid-template-columns: 1fr 1fr;
}
span {
  padding: 1em;
  color: black;
}
section {
  height: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
}
span {
  border-bottom: 1px solid black;
}
.info {
  border-right: 1px solid black;
}
.info span:nth-of-type(2) {
  font-family: "Times New Roman", Times, serif;
  border: none;
}
.scroll-container {
  overflow: scroll;
}
.list-item {
  font-family: "Times New Roman", Times, serif;
}
@media (min-width: 320px) and (max-width: 480px) {
  .main-wrapper {
    display: flex;
    flex-direction: column;
  }
  .info {
    flex-shrink: 0;
    border-right: none;
    border-bottom: 1px solid black;
  }
  section {
    height: auto;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
}
@media (min-width: 769px) and (max-width: 1024px) {
}
@media (min-width: 1025px) and (max-width: 1200px) {
}
@media (min-width: 1201px) {
}
</style>
