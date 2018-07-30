import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import i18n from "./i18n";

new Vue({
  el: "#app",
  i18n,
  router,
  store,
  render: h => h(App)
});
