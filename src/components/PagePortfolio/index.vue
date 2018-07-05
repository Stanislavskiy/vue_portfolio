<template>
  <div id="pagePortfolio" class="page-portfolio">
    <gallery 
      class="page-portfolio__gallery"
      :items="imageList"
      @image-click="imageClicked"
    />
    <lightbox 
      :image="slideImage"
      @close="slideImage=null" 
    />
  </div>
</template>

<script>
import Vue from "vue";
import Gallery from "../Gallery";
import Lightbox from "../Lightbox";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      slideImage: null
    };
  },
  components: { Gallery, Lightbox },
  computed: {
    ...mapGetters(["photos"]),

    imageList: function() {
      if (this.photos)
        return this.photos.map(item => {
          return item.small || item.image;
        });
    }
  },
  methods: {
    ...mapActions(["loadPhotos", "clearCategories", "loadCategories"]),
    imageClicked(image) {
      const result = this.photos.find(item => {
        return item.small === image;
      });
      if (result.image) this.slideImage = result.image;
    }
  },

  mounted() {
    this.loadCategories();
  },

  beforeRouteLeave(to, from, next) {
    this.clearCategories();
    next();
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/page-portfolio";
</style>
