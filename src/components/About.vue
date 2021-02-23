<template>
  <div class="main-wrapper">
    <!-- About the page -->
    <section class="info">
      <!-- About -->
      <span>Wtf is this</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        accusantium reiciendis in incidunt ipsa neque, fugiat rerum. Totam
        temporibus ea possimus quos quo autem quam labore! Vero aut debitis
        similique?
      </span>
    </section>
    <!-- Stuff people miss -->
    <section class="phrases">
      <span>Not much longer until...</span>
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
  name: "About",
  props: ["phrases"],
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
}
.info {
  background: #eba23b;
}
.info span {
  padding: 1em;
  color: #4d511e;
}
.info span:nth-of-type(1) {
  background-color: #4d511e;
  color: #eba23b;
}
.info span:nth-of-type(2) {
  font-family: "Times New Roman", Times, serif;
}
.phrases {
  background: #5603ad;
}
.phrases span {
  padding: 1em;
  color: #92b3c6;
  border-bottom: 1px solid #92b3c6;
}
.phrases > span {
  background-color: #92b3c6;
  color: #5603ad;
  border: none;
}
section {
  height: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
}
.scroll-container {
  overflow: scroll;
}
.scroll-container span {
  font-family: "Times New Roman", Times, serif;
}
.scroll-container span:nth-last-of-type(1) {
  border-bottom: none;
}

@media (min-width: 320px) and (max-width: 480px) {
  .main-wrapper {
    display: flex;
    flex-direction: column;
  }
  .info {
    flex-shrink: 0;
    border-right: none;
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
