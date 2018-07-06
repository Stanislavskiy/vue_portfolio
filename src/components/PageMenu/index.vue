<template>
  <div id="pageMenu" class="page-menu">
    <div class="content">
      <router-link 
        :to="{name: 'home'}"
        class="page-menu__item font-light font-light_hover_bold"
      >
        Home
      </router-link>
      <router-link 
        :to="{name: 'portfolio'}"
        class="page-menu__item font-light font-light_hover_bold"
      >
        Portfolio
      </router-link>
      <!-- <router-link class="page-menu__item font-light font-light_hover_bold">About me</router-link>
      <router-link class="page-menu__item font-light font-light_hover_bold">Contact</router-link>
      <router-link class="page-menu__item font-light font-light_hover_bold">Website</router-link> -->
    </div>  
  </div>
</template>

<script>
export default {
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

