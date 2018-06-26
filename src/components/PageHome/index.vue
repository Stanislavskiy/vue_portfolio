<template>
  <div id="pageHome" class="page-home">
    <top-nav />
    <h1 class="page-home__title">Vladislav Kruglyak</h1>
    <h3 class="page-home__description">Photographer</h3>
    <button class="page-home__button">Watch portfolio</button>
    <locale />
  </div>
</template>

<script>
import TopNav from "../TopNav";
import Locale from "../Locale";

export default {
  components: { TopNav, Locale }
};
</script>

