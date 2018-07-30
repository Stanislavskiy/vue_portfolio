<template>
  <div id="pageAbout" class="page-about">
    <div class="content">
      <h1 class="content__title font-bold">Hello</h1>
      <p class="content__description font-extralight">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua non.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div class="content__line"></div>
    </div>
    <social />
  </div>
</template>

<script>
import Social from "../Social";

export default {
  components: { Social }
};
</script>


<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/page-about";
@import "../../styles/content";
</style>