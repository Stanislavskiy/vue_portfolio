<template>
  <div id="pageHome" class="page-home">
    <div class="content">
      <h1 class="page-home__title font-bold">Vladislav Kruglyak</h1>
      <h3 class="page-home__description font-thin">Photographer</h3>
      <router-link 
        class="page-home__button font-regular"
        :to="{name: 'portfolio'}"
        tag="button"
      >
        Watch portfolio
      </router-link>
    </div>
    <locale />
  </div>
</template>

<script>
import Locale from "../Locale";

export default {
  components: { Locale }
};
</script>

<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/page-home";
@import "../../styles/content";
</style>

