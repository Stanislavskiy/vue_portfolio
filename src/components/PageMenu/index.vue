<template>
  <div id="pageMenu" class="page-menu">
    <top-nav />
    <div class="page-menu__menu">
      <div class="page-menu__item font-light">Home</div>
      <div class="page-menu__item font-light">Portfolio</div>
      <div class="page-menu__item font-light">About me</div>
      <div class="page-menu__item font-light">Contact</div>
      <div class="page-menu__item font-light">Website</div>
    </div>  
  </div>
</template>

<script>
import TopNav from "../TopNav";

export default {
  components: { TopNav }
};
</script>

<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/page-menu";
</style>

