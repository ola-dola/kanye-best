<template>
  <div>
    <QuoteList v-bind:quotes="quotes" />
  </div>
</template>

<script>
import QuoteList from "../components/QuoteList";
import axios from "axios";

export default {
  name: "Random",
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
      .get("/random")
      .then((res) => {
        this.quotes = [res.data];
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>