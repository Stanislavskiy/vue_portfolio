<template>
  <div id="pageSite" class="page-site">
    <div class="content">
      <h1 class="content__title font-bold">{{$t("pageSite.title")}}</h1>
      <div class="content__description font-extralight">
        <span class="content__subheader font-regular">{{$t("pageSite.development")}}:</span>
        <br>{{$t("pageSite.developer")}}
        <br><a class="content__link" href="#">examplewebsite.com</a>
      </div>
      <div class="content__description font-extralight">
        <span class="content__subheader font-regular">{{$t("pageSite.video")}}:</span>
        <br>{{$t("pageSite.videomaker")}}
        <br><a class="content__link" href="#">anotherwebsite.com</a>
      </div> 
      <div class="content__line"></div>
    </div>
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
@import "../../styles/page-site";
@import "../../styles/content";
</style>