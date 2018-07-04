import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import { VueMasonryPlugin } from "vue-masonry";

Vue.use(VueMasonryPlugin);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
