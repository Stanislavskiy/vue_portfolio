<template>
  <div 
    id="pagePortfolio" 
    class="page-portfolio"
    @scroll="windowScroll()"
  >
    <gallery 
      class="page-portfolio__gallery"
      ref="gallery"
      :items="imageList"
      @image-click="imageClicked"
    />
    <lightbox 
      class="page-portfolio__lightbox page-portfolio__lightbox_hide_on_small"
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
    },
    checkMenu() {
      let prevScrollpos = window.pageYOffset;
      windowScroll();
    },
    windowScroll() {
      const gallery = document.getElementById("gallery");
      const nav = document.getElementById("topNav");
      // TODO: Кнопка возвращения к меню
      // const up = document.getElementById("upButton");
      const top = gallery.getBoundingClientRect().top - gallery.offsetTop;
      if (top < -1) {
        nav.style.opacity = "0";
      } else {
        nav.style.opacity = "1";
      }
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
