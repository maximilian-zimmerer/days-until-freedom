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
import db from "../firebaseInit";
import About from "@/components/About.vue";
import Header from "@/components/Header.vue";
import Submission from "@/components/Submission.vue";
const fbPhrases = db.collection("phrases");

export default {
  name: "Home",
  components: { Header, Submission, About },
  data() {
    return {
      phrases: [],
    };
  },
  methods: {
    updatePhrases(data) {
      fbPhrases
        .doc()
        .set(data)
        .catch((err) => {
          console.error(err);
        });
    },
    watchData() {
      fbPhrases.onSnapshot((snapshot) => {
        let array = [];
        snapshot.forEach((doc) => {
          array.push(doc.data());
        });
        this.phrases = array;
        this.phrases.sort((p1, p2) => p2.timeStamp - p1.timeStamp);
      });
    },
  },
  mounted() {
    this.watchData();
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
