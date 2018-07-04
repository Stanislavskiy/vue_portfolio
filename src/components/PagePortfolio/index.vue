<template>
  <div id="pagePortfolio" class="page-portfolio">
    <top-nav />
    <transition-group 
      name="list-complete" 
      tag="div"
      v-masonry 
      transition-duration="0.3s" 
      item-selector=".gallery__item" 
      class="gallery" 
    >
      <img 
        v-masonry-tile
        v-for="photo in photos"
        :key="photo.id"
        class="gallery__item" 
        :src="photo.image" 
        alt="photo"
      >
    </transition-group>
  </div>
</template>

<script>
import Vue from "vue";
import TopNav from "../TopNav";
import { mapGetters } from "vuex";

export default {
  components: { TopNav },
  computed: {
    ...mapGetters(["photos"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/transition";
@import "../../styles/gallery";
@import "../../styles/page-portfolio";
</style>
