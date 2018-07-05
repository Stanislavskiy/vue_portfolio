<template v-if="items">
  <transition-group 
      id="gallery"
      name="list-complete" 
      tag="div"
      v-masonry 
      transition-duration="0.3s" 
      item-selector=".gallery__item" 
      class="gallery" 
    >
      <img 
        v-masonry-tile
        v-for="(item, i) in items"
        :key="i"
        class="gallery__item" 
        :src="item" 
        alt="item"
        @click="$emit('image-click', item)"
      >
  </transition-group>
</template>

<script>
import Vue from "vue";
import { VueMasonryPlugin } from "vue-masonry";

Vue.use(VueMasonryPlugin);

export default {
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  updated: function() {
    this.$redrawVueMasonry();
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/transition";
@import "../../styles/gallery";
</style>
