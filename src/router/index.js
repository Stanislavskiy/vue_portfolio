import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "../components/PageHome";
import PageMenu from "../components/PageMenu";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: PageHome
    },
    {
      path: "/menu",
      name: "menu",
      component: PageMenu
    }
  ]
});
