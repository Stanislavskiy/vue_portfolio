<template>
  <div id="pageSite" class="page-site">
    <div class="content">
      <h1 class="content__title font-bold">Website</h1>
      <div class="content__description font-extralight">
        <span class="content__subheader font-regular">Development:</span>
        <br>Alexander Stanislavsky
        <br><a class="content__link" href="#">examplewebsite.com</a>
      </div>
      <div class="content__description font-extralight">
        <span class="content__subheader font-regular">Video:</span>
        <br>Konstantin Fedorenko
        <br><a class="content__link" href="#">anotherwebsite.com</a>
      </div> 
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
@import "../../styles/page-contact";
@import "../../styles/content";
</style>