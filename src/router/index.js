import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";

let routes = [{ path: "/", component: Home }];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
