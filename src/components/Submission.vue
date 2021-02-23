<template>
  <div class="main-wrapper">
    <!-- input -->
    <form class="submission-form" v-on:submit.prevent="addPhrase">
      <textarea
        rows="15"
        type="text"
        v-model="text"
        :maxlength="max"
        placeholder="Damn, I miss doing this..."
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Damn, I miss doing this...'"
      ></textarea>
      <!-- buttons -->
      <section class="buttons">
        <span class="wordCount">{{ this.remainingChars }}</span>
        <input type="submit" value="Submit" />
      </section>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Submission",
  data() {
    return {
      max: 50,
      text: "",
    };
  },
  methods: {
    addPhrase() {
      if (this.text != "") {
        let tempPhrase = {
          text: this.text,
          id: uuidv4(),
        };
        this.$emit("addPhrase", tempPhrase);
        this.text = "";
      }
    },
  },
  computed: {
    remainingChars() {
      let difference = this.max - this.text.length;
      if (difference > 0) {
        return difference;
      } else {
        return "Less is more";
      }
    },
  },
};
</script>

<style scoped>
.main-wrapper {
  width: 100%;
  height: 100%;
  border-top: 1px solid black;
}
.submission-form {
  width: 100%;
  height: 100%;
  display: grid;
  height: min-content;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
}
.buttons {
  gap: 1em;
  height: auto;
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
input[type="submit"] {
  height: 100%;
  color: black;
  border-radius: 100px;
  border: 1px solid black;
}
.wordCount {
  padding: 1em;
  color: black;
  text-align: center;
  border: 1px solid black;
  font-family: "Times New Roman", Times, serif;
}
textarea {
  resize: none;
  color: black;
  caret-color: black;
  border-bottom: 1px solid black;
}
@media (min-width: 600px) {
  input[type="submit"]:hover {
    color: black;
    transition: 0.2s;
    border: 1px solid black;
  }
}
</style>
