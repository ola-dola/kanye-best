<template>
  <div>
    <p>
      {{ quote.content }}
      <button @click="addToFav" v-if="this.$route.name != 'Favourites'">
        Add to Fav
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: ["quote"],
  methods: {
    addToFav() {
      const clientDb = JSON.parse(localStorage.getItem("myFavQuotes"));

      if (!clientDb) {
        // Initialize new storage
        return localStorage.setItem(
          "myFavQuotes",
          JSON.stringify([this.quote])
        );
      }

      localStorage.setItem(
        "myFavQuotes",
        JSON.stringify([...clientDb, this.quote])
      );
    },
  },
};
</script>