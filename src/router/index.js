import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/random",
    name: "Random",
    component: () => import("../views/Random.vue"),
  },
  {
    path: "/my-fav",
    name: "Favourites",
    component: () => import("../views/Favourites.vue"),
  },
];

const router = new VueRouter({ routes });

export default router;
