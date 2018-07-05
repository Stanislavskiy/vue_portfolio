<template>
  <transition name="fade">
    <div 
      v-if="visible" 
      id="lightbox" 
      class="lightbox" 
      @click="hide()" 
      @mousemove="showCursor()"
      :class="{'lightbox_cursor': cursor}"
    >
      <img class="lightbox__image" :src="image" alt="image">
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      cursor: false,
      timerId: null
    };
  },
  props: {
    image: {
      type: String,
      default: null
    }
  },
  watch: {
    image: function() {
      if (this.image) this.visible = true;
      else this.visible = false;
    }
  },
  methods: {
    hide() {
      this.$emit("close");
    },
    showCursor() {
      this.cursor = true;
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.cursor = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/transition";
@import "../../styles/lightbox";
</style>
