<template>
  <div id="app" class="app" ref="app">
    <video class="app__video" autoplay muted loop>
      <source src="/static/bg.mp4" type="video/mp4">
    </video>
    <top-nav 
      :items="localizedMenuItems"
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
    localizedMenuItems: function() {
      if (this.categories) {
        return this.categories.map(item => {
          return item[this.$i18n.locale];
        });
      }
    }
  },
  methods: {
    ...mapActions(["loadPhotos"]),

    menuItemClicked(name) {
      const findItem = this.categories.find(item => {
        if (name === item.en || name === item.ru || name === item.pl)
          return true;
      });
      this.loadPhotos(findItem.en);
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
    },

    animateBlackout() {
      const app = this.$refs["app"]
      const animate = () => {
        app.classList.add("app_blackout")
      }
      requestAnimationFrame(animate)
      this.$nextTick(app.classList.remove("app_blackout"))
    }
  },
  mounted() {
    this.$store.dispatch("initGallery");
    this.animateBlackout()
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/app";
@import "./styles/transition";
</style>
