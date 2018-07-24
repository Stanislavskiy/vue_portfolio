<template>
  <div id="pageMenu" class="page-menu">
    <div class="content">
      <router-link 
        :to="{name: 'home'}"
        class="page-menu__item font-light font-light_hover_bold"
        tag="button"
      >
        Home
      </router-link>
      <router-link 
        :to="{name: 'portfolio'}"
        class="page-menu__item font-light font-light_hover_bold"
        tag="button"
      >
        Portfolio
      </router-link>
      <router-link 
        :to="{name: 'about'}"
        class="page-menu__item font-light font-light_hover_bold"
        tag="button"
      >
        About me
      </router-link>
      <router-link 
        :to="{name: 'contact'}"
        class="page-menu__item font-light font-light_hover_bold"
        tag="button"
      >
        Contact
      </router-link>
      <router-link 
        :to="{name: 'site'}"
        class="page-menu__item font-light font-light_hover_bold"
        tag="button"
      >
        Website
      </router-link>
      <!-- 
      <router-link class="page-menu__item font-light font-light_hover_bold">Contact</router-link>
      <router-link class="page-menu__item font-light font-light_hover_bold">Website</router-link> -->
    </div>  
      <locale />
  </div>
</template>

<script>
import Locale from "../Locale";

export default {
  components: { Locale },
  mounted() {
    /* 
      Set "menuOpened" state to true 
    */
    this.$store.dispatch("menuOpen");
  },
  beforeRouteLeave(to, from, next) {
    /* 
      Set "menuOpened" state to false, 
      when leaving the menu 
    */
    this.$store.dispatch("menuClose");
    next();
  }
};
</script>


<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/page-menu";
@import "../../styles/content";
</style>

