import Vue from "vue";
import Vuex from "vuex";
// Подключаем модуль регистрации
import gallery from "./modules/gallery";
import { VueMasonryPlugin } from "vue-masonry";

Vue.use(VueMasonryPlugin);
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    gallery
  }
});

export default store;
