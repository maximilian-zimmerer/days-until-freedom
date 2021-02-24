<template>
  <div class="main-wrapper" @scroll="handleScroll">
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
    <!-- Copyright -->
    <section class="snap">
      <Copyright />
    </section>
    <!-- main -->
    <transition name="fade">
      <section v-if="fader && !scrolled" class="nav">
        <span>(Scroll to Add)</span>
      </section>
    </transition>
  </div>
</template>

<script>
import db from "../firebaseInit";
import About from "@/components/About.vue";
import Header from "@/components/Header.vue";
import Submission from "@/components/Submission.vue";
import Copyright from "@/components/Copyright.vue";
const fbPhrases = db.collection("phrases");

export default {
  name: "Home",
  components: { Header, Submission, About, Copyright },
  data() {
    return {
      phrases: [],
      fader: false,
      scrolled: false,
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
    handleScroll: function() {
      this.scrolled = true;
    },
  },
  mounted() {
    this.watchData();
    this.fader = true;
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
  z-index: 100;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
}
.nav {
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 1em;
  display: flex;
  position: absolute;
  justify-content: space-around;
}
.nav span {
  color: #38146b;
  font-family: Playfair;
}
</style>
