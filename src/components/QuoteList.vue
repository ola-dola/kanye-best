<template>
  <div>
    <div v-bind:key="quote._id" v-for="quote in quotes">
      <Quote v-bind:quote="quote" v-on:del-fav="$emit('del-fav', quote._id)" />
    </div>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  name: "QuoteList",
  props: ["quotes"],
  components: {
    Quote,
  },
};
</script>