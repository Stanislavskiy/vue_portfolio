<template>
  <div id="pageAbout" class="page-about">
    <div class="content">
      <h1 class="content__title font-bold">{{$t("pageAbout.title")}}</h1>
      <p class="content__description font-extralight">
        {{$t("pageAbout.description")}}
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