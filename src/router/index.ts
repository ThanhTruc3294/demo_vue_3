import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vue3-todomvc",
    name: "vue3 todomvc",
    props: (route: any) => ({ condition: route.query.q }),
    component: () =>
      import(/* webpackChunkName: "todosinfo" */ "../views/Todomvc.vue"),
  },
  {
    path: "/vue3-apexcharts",
    name: "vue3 apexcharts",
    component: () =>
      import(/* webpackChunkName: "narkdowninfo" */ "../views/ApexCharts.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
