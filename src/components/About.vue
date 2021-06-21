<template>
  <div class="main-wrapper">
    <!-- About -->
    <section class="info">
      <!-- Header -->
      <section class="info-header">
        <span>What is this?</span>
        <span @click="toggle">{{ toggler }}</span>
      </section>
      <!-- Body -->
      <span class="info-body" v-if="toggleInfo">
        On February 2, 2021, the Prime Minister set out a roadmap to cautiously
        ease lockdown restrictions in the United Kingdom. By the last step,
        which is reached no earlier than June 21, all legal limits on social
        contact are hoped to be removed. This website lives to emphasize
        people's anticipation for a normal life and invites the public to submit
        things that they look forward to doing in a post-covid England.
      </span>
      <!-- Update -->
      <span class="info-body" v-if="toggleInfo">
        On June 14, 2021, the Prime Minister announced a delay of four weeks to
        the next phase of England’s lockdown reopening, which is now set for
        July 19.
      </span>
    </section>
    <!-- Data -->
    <section class="phrases">
      <!-- Header -->
      <section class="phrases-header">
        <span>Not much longer until...</span>
        <span>{{ "(" + phrases.length + ")" }}</span>
      </section>
      <!-- Body -->
      <section class="phrases-body">
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
span {
  padding: 1em;
}
section {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: column;
}
.info {
  height: auto;
  background-color: #aae7e2;
}
.info-header {
  height: auto;
  color: #aae7e2;
  flex-direction: row;
  background-color: #f04f33;
  justify-content: space-between;
}
.info-body {
  color: #f04f33;
  font-family: Playfair;
  border-bottom: 1px solid #f04f33;
}
.info-header span:nth-of-type(2) {
  opacity: 0;
  pointer-events: none;
  font-family: Playfair;
}
.phrases {
  height: auto;
  background-color: #f5c1cd;
}
.phrases-header {
  height: auto;
  flex-shrink: 0;
  color: #f5c1cd;
  flex-direction: row;
  background-color: #38146b;
  justify-content: space-between;
}
.phrases-header span:nth-of-type(2) {
  font-family: Playfair;
}
.phrases-body {
  overflow: scroll;
}
.phrases-body span {
  color: #38146b;
  font-family: Playfair;
  border-bottom: 1px solid #38146b;
}
.phrases-body span:nth-last-of-type(1) {
  border: none;
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
    opacity: 1;
    pointer-events: all;
  }
  .info-body:nth-of-type(2) {
    border: none;
  }
}
</style>
