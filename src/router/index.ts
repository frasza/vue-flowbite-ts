import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Accordion from "../views/Accordion.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/accordion",
      name: "accordion",
      component: Accordion,
    },
  ],
});

export default router;
