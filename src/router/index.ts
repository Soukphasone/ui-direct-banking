// src/router/index.ts
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import dashboard from "@/views/dashboard.vue";
import index from "@/views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: dashboard,
    children: [
      {
        path: "/",
        name: "Home",
        component: index,
      },
      // {
      //   path: "/profile",
      //   name: "Profile",
      //   component: Profile,
      // },
      // {
      //   path: "/setting",
      //   name: "Setting",
      //   component: Setting,
      // },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
