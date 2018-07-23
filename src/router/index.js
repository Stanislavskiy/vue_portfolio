import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "../components/PageHome";
import PageMenu from "../components/PageMenu";
import PagePortfolio from "../components/PagePortfolio";
import PageAbout from "../components/PageAbout";
import PageContact from "../components/PageContact";
import PageSite from "../components/PageSite";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
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
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PagePortfolio
    },
    {
      path: "/about",
      name: "about",
      component: PageAbout
    },
    {
      path: "/contact",
      name: "contact",
      component: PageContact
    },
    {
      path: "/site",
      name: "site",
      component: PageSite
    }
  ]
});
