<template>
  <div>
    <QuoteList v-bind:quotes="quotes" />
  </div>
</template>

<script>
import QuoteList from "../components/QuoteList";

export default {
  name: "Favourites",
  components: {
    QuoteList,
  },
  data() {
    return {
      quotes: [],
    };
  },
  created() {
    const myFavs = JSON.parse(localStorage.getItem("myFavQuotes"));

    if (myFavs) {
      this.quotes = myFavs;
    }
  },
};
</script>