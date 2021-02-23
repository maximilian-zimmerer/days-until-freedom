<template>
  <div class="main-wrapper">
    <span id="countdown">{{ remaining }}</span>
    <span id="until">until</span>
    <span id="phrase">
      {{ currentPhrase }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["phrases"],
  data() {
    return {
      end: new Date("06/21/2021 12:00 AM"),
      remaining: "",
      timer: "",
      index: 0,
    };
  },
  methods: {
    showRemaining() {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      let now = new Date();

      // add function to handle time-reached event

      let distance = this.end - now;
      let d = Math.floor(distance / day);
      let h = Math.floor((distance % day) / hour);
      let m = Math.floor((distance % hour) / minute);
      let s = Math.floor((distance % minute) / second);
      this.remaining = d + "d " + h + "h " + m + "m " + s + "s ";
    },
    toggleIndex() {
      this.index < this.phrases.length - 1 ? this.index++ : (this.index = 0);
    },
  },
  computed: {
    currentPhrase() {
      return this.phrases[this.index].text.toLowerCase();
    },
  },
  mounted() {
    if (this.phrases) {
      this.timer = setInterval(this.showRemaining, 1000);
      setInterval(this.toggleIndex, 3000);
    }
  },
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
  padding: 2em;
  display: flex;
  color: #eba23b;
  align-items: center;
  background: #4d511e;
  flex-direction: column;
  justify-content: center;
}
span {
  width: 100%;
  text-align: center;
}
#countdown,
#until {
  padding: 0 0 1em 0;
}
#until {
  font-family: "Times New Roman", Times, serif;
}
@media (min-width: 320px) and (max-width: 480px) {
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
