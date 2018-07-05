<template>
  <div id="app" class="app">
    <top-nav 
      :items="menuItems"
      defaultItem="all"
      @item-click="loadPhotos" 
    />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  components: { TopNav },
  computed: {
    ...mapGetters(["categories"]),
    menuItems: function() {
      if (this.categories) {
        return this.categories.map(item => {
          return item.name;
        });
      }
    }
  },
  methods: {
    ...mapActions(["loadPhotos"])
  },
  mounted() {
    this.$store.dispatch("initGallery");
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/app";
@import "./styles/transition";
</style>
