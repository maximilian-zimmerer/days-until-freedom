<template>
  <div class="main-wrapper">
    <!-- Header -->
    <section class="snap">
      <Header :phrases="phrases" />
    </section>
    <!-- Form -->
    <section class="snap">
      <Submission @addPhrase="updatePhrases($event)" />
    </section>
    <!-- About -->
    <section class="snap">
      <About :phrases="phrases" />
    </section>
  </div>
</template>

<script>
import About from "@/components/About.vue";
import Header from "@/components/Header.vue";
import Submission from "@/components/Submission.vue";
export default {
  name: "Home",
  components: { Header, Submission, About },
  data() {
    return {
      phrases: [
        { text: "freedom", id: 0 },
        { text: "we can dance again", id: 1 },
        { text: "I can get drunk in public", id: 2 },
      ],
    };
  },
  methods: {
    updatePhrases(data) {
      this.phrases.push(data);
      console.log(this.phrases);
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
  overflow: scroll;
  scroll-snap-type: y mandatory;
}
.snap {
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
}
</style>
