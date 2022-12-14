import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Accordion from "../views/Accordion.vue";
import Dropdown from "@/views/Dropdown.vue";
import Modal from "@/views/Modal.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/accordion",
      name: "accordion",
      component: Accordion,
    },
    {
      path: "/dropdown",
      name: "dropdown",
      component: Dropdown,
    },
    {
      path: "/modal",
      name: "modal",
      component: Modal,
    },
  ],
});

export default router;
