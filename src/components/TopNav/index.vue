<template>
  <div 
    id="topNav"
    ref="topNav" 
    class="top-nav"
    @scroll="windowScroll()"
  >
    <button 
      class="top-nav__logo font-semibold" 
      @click="$emit('logo-click')"
    >
    К
    </button>
    <!-- small_screen -->
    <list-view
      v-if="items" 
      class="top-nav__list-view top-nav__list-view_show_on_small font-light"
      caption="Categories"
      :items="items"
      @item-click="listItemClicked"
    />
    <!-- large screen -->
    <div v-if="items" class="top-nav__items top-nav__items_hide_on_small">
      <button 
        class="top-nav__item font-light" 
        href="#"
        v-for="(item, i) in items"
        :key="i"
        :class="{'top-nav__item_active': item===activeItem}"
        @click="listItemClicked(item)" 
      >
        {{item}}
      </button>
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
import ListView from "../ListView";

export default {
  data() {
    return {
      // activeItem: this.defaultItem
    };
  },
  components: {
    ListView
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
  },
  methods: {
    listItemClicked(item) {
      this.$emit("item-click", item);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/top-nav";
@import "../../styles/hamburger";
</style>
