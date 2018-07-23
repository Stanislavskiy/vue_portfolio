<template>
  <div id="pageContact" class="page-contact">
    <div class="content">
      <h1 class="content__title font-bold">Contact me</h1>
      <div class="content__description font-extralight">
        <span class="content__subheader font-regular">Phone:</span>
        <br>+38 (072) 123 23 32
        <br>+38 (051) 111 14 64
      </div>
      <div class="content__description font-extralight">
        <span class="content__subheader font-regular">Email:</span>
        <br>example@gmail.com
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