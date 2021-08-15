<template>
  <div>
    <div v-bind:key="quote._id" v-for="quote in quotes">
      <Quote v-bind:quote="quote.content" />
    </div>
  </div>
</template>

<script>
import Quote from "../components/Quote";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Quote,
  },
  data() {
    return {
      quotes: [],
    };
  },
  created() {
    axios
      .get("/quotes")
      .then((res) => {
        this.quotes = res.data.results;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>