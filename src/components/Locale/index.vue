<template>
  <div id="locale" class="locale footer font-thin">
    <button 
      :class="{'locale__button': true, 'locale__button_active': $i18n.locale==='ru'}"
      @click="setLocale('ru')"
    >
      RU
    </button>
    <button 
      :class="{'locale__button': true, 'locale__button_active': $i18n.locale==='en'}"
      @click="setLocale('en')"
    >
      EN
    </button>
    <button 
      :class="{'locale__button': true, 'locale__button_active': $i18n.locale==='pl'}"
      @click="setLocale('pl')"
    >
    PL
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale(lang) {
      this.$i18n.locale = lang;
      this.animateContent();
    },
    animateContent() {
      const animate = () => {
        document.querySelector(".content").classList.add("content_fade-in");
      };
      requestAnimationFrame(animate);
      setTimeout(
        document.querySelector(".content").classList.remove("content_fade-in"),
        0
      );
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/locale";
@import "../../styles/footer";
</style>
