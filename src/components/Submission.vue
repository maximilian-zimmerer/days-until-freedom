<template>
  <div class="main-wrapper">
    <!-- input -->
    <form class="submission-form" v-on:submit.prevent="addPhrase">
      <textarea
        rows="15"
        type="text"
        v-model="text"
        :maxlength="max"
        onfocus="this.placeholder = ''"
        placeholder="Damn, I miss doing this..."
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
  background-color: #5603ad;
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
  height: auto;
  padding: 1em;
  display: flex;
  flex-direction: row;
}
input[type="submit"] {
  color: #5603ad;
  border-radius: 50px;
  background-color: #92b3c6;
}
.wordCount {
  padding: 1em;
  color: #5603ad;
  margin-right: 1em;
  text-align: center;
  background-color: #92b3c6;
  font-family: "Times New Roman", Times, serif;
}
textarea {
  resize: none;
  color: #5603ad;
  background-color: #92b3c6;
  border-bottom: 1px solid #5603ad;
}
::-moz-selection {
  background: #5603ad;
  color: #92b3c6;
}
::selection {
  background: #5603ad;
  color: #92b3c6;
}
@media (min-width: 600px) {
  input[type="submit"]:hover {
    background: #eba23b;
  }
}
</style>
