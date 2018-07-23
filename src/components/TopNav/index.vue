<template>
  <div 
    id="topNav"
    ref="topNav" 
    class="top-nav"
    @scroll="windowScroll()"
  >
    <div 
      class="top-nav__logo font-semibold" 
      @click="$emit('logo-click')"
    >
    К
    </div>
    <div v-if="items" class="top-nav__items">
        <a 
          class="top-nav__item font-light" 
          href="#"
          v-for="(item, i) in items"
          :key="i"
          :class="{'top-nav__item_active': item===activeItem}"
          @click="$emit('item-click', item)" 
        >
          {{item}}
        </a>
      </div>  
    <div 
      class="hamburger" 
      @click="$emit('hamburger-click')"
      :class="{'hamburger_opened': opened}"
    >
      <div class="hamburger__item"></div>
      <div class="hamburger__item"></div>
      <div class="hamburger__item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeItem: this.defaultItem
    };
  },
  props: {
    // pathName: {
    //   default: "menu"
    // },
    items: {
      type: Array,
      default: null
    },
    activeItem: {
      type: String,
      default: null
    },
    opened: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/top-nav";
@import "../../styles/hamburger";
</style>
