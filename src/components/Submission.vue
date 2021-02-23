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
import firebase from "firebase/app";
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
        const date = new Date();
        const timeStamp = firebase.firestore.Timestamp.fromDate(date);
        let tempPhrase = {
          text: this.text,
          id: uuidv4(),
          timeStamp: timeStamp.seconds,
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
  background-color: #4d511e;
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
  color: #4d511e;
  border-radius: 100px;
  background-color: #92b3c6;
}
.wordCount {
  padding: 1em;
  color: #4d511e;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  background-color: #92b3c6;
}
textarea {
  resize: none;
  color: #4d511e;
  border-bottom: 1px solid #4d511e;
  background-color: #92b3c6;
}
::-moz-selection {
  background: #4d511e;
  color: #92b3c6;
}
::selection {
  background: #4d511e;
  color: #92b3c6;
}
@media (min-width: 600px) {
  input[type="submit"]:hover {
    color: #4d511e;
    transition: 0.2s;
    border: 1px solid #4d511e;
  }
}
</style>
