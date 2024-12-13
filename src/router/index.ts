// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("@/views/dashboard.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
