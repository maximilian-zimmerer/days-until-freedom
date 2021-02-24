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
        :placeholder="this.placeholder"
        onblur="this.placeholder = 'I miss doing this...'"
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
const Filter = require("bad-words");
const filter = new Filter();

export default {
  name: "Submission",
  data() {
    return {
      max: 50,
      text: "",
      placeholder: "I miss doing this...",
    };
  },
  methods: {
    addPhrase() {
      if (filter.isProfane(this.text)) {
        this.placeholder = "Please don't use profanity.";
        this.text = "";
      } else if (this.text != "") {
        const date = new Date();
        const timeStamp = firebase.firestore.Timestamp.fromDate(date);
        let tempPhrase = {
          text: this.text,
          id: uuidv4(),
          timeStamp: timeStamp.seconds,
        };
        this.$emit("addPhrase", tempPhrase);
        this.placeholder = "Submitted!";
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
  background-color: #f5c1cd;
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
  color: #f5c1cd;
  border-radius: 50px;
  background-color: #38146b;
}
.wordCount {
  padding: 1em;
  min-width: 5em;
  color: #f5c1cd;
  margin-right: 1em;
  text-align: center;
  font-family: Playfair;
  background-color: #38146b;
}
.profanity {
  padding: 1em;
  min-width: 5em;
  color: #f5c1cd;
  margin-left: 1em;
  text-align: center;
  font-family: Playfair;
  background-color: #f04f33;
  border-radius: 50px 0 50px 0;
}
textarea {
  width: 100%;
  height: 100%;
  resize: none;
  color: #f5c1cd;
  box-sizing: border-box;
  background-color: #38146b;
}
::-moz-selection {
  background: #f5c1cd;
  color: #38146b;
}
::selection {
  background: #f5c1cd;
  color: #38146b;
}

@media (min-width: 320px) and (max-width: 480px) {
  .wordCount,
  input[type="submit"] {
    flex: 1;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  .wordCount,
  input[type="submit"] {
    flex: 1;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .wordCount,
  input[type="submit"] {
    flex: 1;
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  input[type="submit"]:hover {
    background: #f04f33;
  }
}
@media (min-width: 1201px) {
  input[type="submit"]:hover {
    background: #f04f33;
  }
}
</style>
