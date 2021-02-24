<template>
  <div class="main-wrapper">
    <!-- About the page -->
    <section class="info">
      <!-- About -->
      <section class="info-header">
        <span>Wtf is this?</span>
        <span @click="toggle">{{ toggler }}</span>
      </section>

      <span class="info-body" v-if="toggleInfo">
        On February 2, 2021, the Prime Minister set out a roadmap to cautiously
        ease lockdown restrictions in the United Kingdom. By the last step,
        which is reached no earlier than June 21, all legal limits on social
        contact are hoped to be removed. This website lives to emphasize
        people's anticipation for a normal life and invites the public to submit
        things that they look forward to doing in a post-covid England.
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
  data() {
    return {
      toggleInfo: true,
    };
  },
  methods: {
    toggle() {
      this.toggleInfo = !this.toggleInfo;
    },
  },
  computed: {
    toggler() {
      if (this.toggleInfo) {
        return "(Hide)";
      } else {
        return "(Show)";
      }
    },
  },
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
  height: auto;
  background-color: #aae7e2;
}
.info span {
  width: auto;
  padding: 1em;
  height: auto;
}
.info-header {
  width: 100%;
  height: auto;
  display: flex;
  color: #aae7e2;
  flex-direction: row;
  background-color: #f04f33;
  justify-content: space-between;
}
.info-body {
  color: #f04f33;
  font-family: Playfair;
}
.info-header span:nth-of-type(2) {
  display: none;
  font-family: Playfair;
}
.phrases {
  height: 100%;
  background-color: #f5c1cd;
}
.phrases span {
  padding: 1em;
  color: #38146b;
  border-bottom: 1px solid #38146b;
}
.phrases > span {
  background-color: #38146b;
  color: #f5c1cd;
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
  font-family: Playfair;
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
  .info-header span:nth-of-type(2) {
    display: inline;
  }
  section {
    height: auto;
  }
}
</style>
