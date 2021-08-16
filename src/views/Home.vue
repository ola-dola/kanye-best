<template>
  <div>
    <QuoteList v-bind:quotes="quotes" />
  </div>
</template>

<script>
import QuoteList from "../components/QuoteList";
import axios from "axios";

export default {
  name: "Home",
  components: {
    QuoteList,
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