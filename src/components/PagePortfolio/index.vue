<template>
  <div id="pagePortfolio" class="page-portfolio">
    <top-nav> 
      <div class="page-portfolio__categories">
        <a 
          class="page-portfolio__category font-light" 
          href="#"
          v-for="category in categories"
          :key="category.id"
          :class="{'page-portfolio__category_active': category.name === currentCategory}"
          @click="loadPhotos(category.name)" 
        >
          {{category.name}}
        </a>
      </div>  
    </top-nav>
    <gallery 
      :items="imageList"
      @image-click="pushSlideImage"
    />
    <lightbox 
      :image="slideImage"
      @close="slideImage=null" 
    />
  </div>
</template>

<script>
import Vue from "vue";
import TopNav from "../TopNav";
import Gallery from "../Gallery";
import Lightbox from "../Lightbox";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      slideImage: null
    };
  },
  components: { TopNav, Gallery, Lightbox },
  computed: {
    ...mapGetters(["photos", "categories", "currentCategory"]),

    imageList: function() {
      if (this.photos)
        return this.photos.map(item => {
          return item.small || item.image;
        });
    }
  },
  methods: {
    ...mapActions(["loadPhotos"]),
    pushSlideImage(image) {
      const result = this.photos.find(item => {
        return item.small === image;
      });
      if (result.image) this.slideImage = result.image;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/page-portfolio";
</style>
