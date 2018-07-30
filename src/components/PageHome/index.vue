<template>
  <div id="pageHome" class="page-home">
    <div class="content content_align_center content_margin_0">
      <div>
        <transition
          appear
          mode="in-out"
          :duration="{enter:250, leave:500}"
        >
          <h1 class="page-home__title font-bold">
            Vladislav Kruglyak
          </h1>
        </transition>
        <div class="page-home__description">
          <!-- <div class="content__line content__line_margin_0 content__line_hide_on_small"></div> -->
          <h3 class="font-thin">Photographer</h3>
          <!-- <div class="content__line content__line_margin_0 content__line_hide_on_small"></div> -->
        </div>
      </div>
      <router-link 
        class="page-home__button font-extralight"
        :to="{name: 'portfolio'}"
        tag="button"
      >
        {{$t("pageHome.watch")}}
      </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/page-home";
@import "../../styles/content";
</style>

