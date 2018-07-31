<template>
  <div id="pageMenu" class="page-menu">
    <div class="content">
        <!-- <transition name="fade"> -->
        <router-link 
          :to="{name: 'home'}"
          class="page-menu__item font-regular font-light_hover_bold"
          tag="button"
        >
          {{$t("pageMenu.home")}}
        </router-link>
        <!-- </transition> -->
        <router-link 
          :to="{name: 'portfolio'}"
          class="page-menu__item font-regular font-light_hover_bold"
          tag="button"
        >
          {{$t("pageMenu.portfolio")}}
        </router-link>
        <router-link 
          :to="{name: 'about'}"
          class="page-menu__item font-regular font-light_hover_bold"
          tag="button"
        >
          {{$t("pageMenu.about")}}
        </router-link>
        <router-link 
          :to="{name: 'contact'}"
          class="page-menu__item font-regular font-light_hover_bold"
          tag="button"
        >
          {{$t("pageMenu.contact")}}
        </router-link>
        <router-link 
          :to="{name: 'site'}"
          class="page-menu__item font-regular font-light_hover_bold"
          tag="button"
        >
          {{$t("pageMenu.website")}}
        </router-link>
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
@import "../../styles/transition";
@import "../../styles/content";
</style>

