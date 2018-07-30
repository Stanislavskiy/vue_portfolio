<template>
  <div id="listView" class="list-view">
      <button 
        class="list-view__button font-light"
        @click="toggleList()"
        >
        {{caption}}
      </button>
      <transition name="fade">
        <div 
          v-if="items && visible" 
          class="list-view__list"
          @click="toggleList()"
        >
          <button 
            class="list-view__item" 
            href="#"
            v-for="(item, i) in items"
            :key="i"
            @click.stop="$emit('item-click', item)" 
          >
            {{item}}
          </button>
        </div>  
      </transition>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  props: {
    caption: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    toggleList() {
      this.visible = !this.visible;
    }
  },
  mounted() {
    this.$on("item-click", this.toggleList);
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/list-view";
@import "../../styles/transition";
</style>

