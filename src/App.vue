<template>
  <div id="app" class="app">
    <!-- <div class="app__video-wrapper"> -->
      <!-- <div > -->
        <video class="app__video" width="100%" height="auto" preload="auto" autoplay="autoplay"
        loop="loop" poster="/static/bg.jpg">
            <source src="/static/bg.mp4" type="video/mp4"></source>
        </video>
      <!-- </div> -->
    <!-- </div> -->
    <top-nav 
      :items="menuItems"
      :opened="menuOpened"
      :activeItem="menuActiveItem"
      @item-click="menuItemClicked"
      @hamburger-click="menuHamburgerClicked" 
      @logo-click="menuLogoClicked"
    />
    <transition name="fade">
      <router-view class="" />
        <!-- @menu-item-click="this.menuOpened=false" -->
    </transition>
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      menuActiveItem: "all"
    };
  },
  name: "app",
  components: { TopNav },
  computed: {
    ...mapGetters(["categories", "menuOpened"]),
    menuItems: function() {
      if (this.categories) {
        return this.categories.map(item => {
          return item.name;
        });
      }
    }
  },
  methods: {
    ...mapActions(["loadPhotos"]),

    menuItemClicked(name) {
      this.loadPhotos(name);
      this.menuActiveItem = name;
    },

    menuHamburgerClicked() {
      if (!this.menuOpened) {
        this.$router.push({ name: "menu" });
      } else {
        this.$router.go(-1);
      }
    },

    menuLogoClicked() {
      this.$router.push("/");
    }
  },
  created() {
    this.i18n.locale = "ru";
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
