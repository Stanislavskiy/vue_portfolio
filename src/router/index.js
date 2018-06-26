import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "../components/PageHome";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: PageHome
    }
  ]
});
