<template>
  <div id="app" class="app">
    <!-- <transition name="fade"> -->
      <router-view />
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    this.$store.dispatch("loadPhotos");
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/app";
@import "./styles/transition";
</style>
