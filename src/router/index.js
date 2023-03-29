import { createRouter, createWebHistory } from "vue-router";

let routes = [{ path: "/", component: () => import("@/components/Panel.vue") }];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
