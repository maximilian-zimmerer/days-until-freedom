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
  color: #f5c1cd;
  margin-right: 1em;
  text-align: center;
  background-color: #38146b;
  font-family: "Times New Roman", Times, serif;
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
