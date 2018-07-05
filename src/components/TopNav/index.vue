<template>
  <div id="topNav" class="top-nav">
    <div 
      src="assets/logo.png" 
      alt="img" class="top-nav__logo font-semibold" 
      @click="$router.push('/')"
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
          @click="itemClicked(item)" 
        >
          {{item}}
        </a>
      </div>  
    <div 
      class="hamburger" 
      @click="toggleMenu()"
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
      activeItem: this.defaultItem,
      opened: false
    };
  },
  props: {
    menuPath: {
      default: "menu/"
    },
    items: {
      type: Array,
      default: null
    },
    defaultItem: {
      type: String,
      default: null
    }
  },
  methods: {
    toggleMenu() {
      if (!this.opened) {
        this.opened = true;
        this.$router.push(this.menuPath);
      } else {
        this.opened = false;
        this.$router.go(-1);
      }
    },
    itemClicked(item) {
      this.$emit("item-click", item);
      this.activeItem = item;
    }
  },

  beforeRouteLeave(to, from, next) {
    this.opened = false;
    next();
  }
};
</script>


<style lang="scss" scoped>
@import "../../styles/font";
@import "../../styles/top-nav";
@import "../../styles/hamburger";
</style>
