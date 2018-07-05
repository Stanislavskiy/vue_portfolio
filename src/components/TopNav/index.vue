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
      :class="{'hamburger_opened': opened}"
    >
      <div class="hamburger__item"></div>
      <div class="hamburger__item"></div>
      <div class="hamburger__item"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    menuPath: {
      default: "menu/"
    }
  },
  methods: {
    toggleMenu() {
      if (!this.opened) {
        this.$router.push(this.menuPath);
      } else {
        this.$router.go(-1);
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
