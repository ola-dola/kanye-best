<template>
  <div>
    <p>{{ quote }} <button>Add to Fav</button></p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: ["quote"],
};
</script>