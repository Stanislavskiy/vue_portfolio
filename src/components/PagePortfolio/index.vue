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
          @click="changeCategory(category.name)" 
        >
          {{category.name}}
        </a>
      </div>  
    </top-nav>
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
import { mapGetters, mapActions } from "vuex";

export default {
  components: { TopNav },
  computed: {
    ...mapGetters(["photos", "categories", "currentCategory"])
  },
  methods: {
    ...mapActions(["loadPhotos"]),
    changeCategory(name) {
      this.loadPhotos(name).then(() => {
        // TODO: Исправить костыль
        setTimeout(this.$redrawVueMasonry, 500);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/transition";
@import "../../styles/gallery";
@import "../../styles/page-portfolio";
</style>
