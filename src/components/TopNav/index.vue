<template>
  <div id="topNav" class="top-nav">
    <div 
      src="assets/logo.png" 
      alt="img" class="top-nav__logo font-semibold" 
      @click="$router.push('/')"
    >
    К
    </div>
    <slot></slot>
    <div 
      class="hamburger" 
      @click="toggleMenu()"
      :class="{'hamburger_opened': menuOpened}"
    >
      <div class="hamburger__item"></div>
      <div class="hamburger__item"></div>
      <div class="hamburger__item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false
    };
  },
  methods: {
    toggleMenu() {
      if (!this.menuOpened) {
        this.$router.push({ name: "menu" });
        this.menuOpened = true;
      } else {
        if (this.menuOpened) {
          this.$router.go(-1);
          this.menuOpened = false;
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/top-nav";
@import "../../styles/hamburger";
</style>
