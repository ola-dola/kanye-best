<template>
  <div v-if="quotes.length < 1">You have no favourites saved yet.</div>
  <div v-else>
    <QuoteList v-bind:quotes="quotes" v-on:del-fav="removeFromFav" />
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
  methods: {
    removeFromFav(id) {
      this.quotes = this.quotes.filter((quote) => quote._id != id);

      localStorage.setItem("myFavQuotes", JSON.stringify(this.quotes));
    },
  },
};
</script>