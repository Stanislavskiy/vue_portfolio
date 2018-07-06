import Vue from "vue";
import Vuex from "vuex";
// Подключаем модуль регистрации
import gallery from "./modules/gallery";
import menu from "./modules/menu";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    gallery,
    menu
  }
});

export default store;
