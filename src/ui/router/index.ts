import { createRouter, createWebHistory } from "vue-router";
import Home from "@ui/pages/client/Home.vue";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("@ui/layout/DefaultLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("@ui/pages/client/About.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "auth",
      redirect: "/auth/login",
      component: () => import("@ui/layout/AuthLayout.vue"),
      children: [
        {
          path: "/auth/login",
          name: "login",
          component: () => import("@ui/pages/admin/auth/Login.vue"),
          meta: {
            noauth: true,
          },
        },
        {
          path: "/auth/register",
          name: "register",
          component: () => import("@ui/pages/admin/auth/Register.vue"),
          meta: {
            noauth: true,
          },
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      redirect: "admin/home",
      component: () => import("@ui/layout/AdminLayout.vue"),
      meta: {
        auth: true,
      },
      children: [
        {
          path: "/admin/home",
          name: "adminHome",
          component: () => import("@ui/pages/admin/Home.vue"),
          meta: {
            auth: true,
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.getters["auth/isAuthenticated"]) {
      next();
    } else {
      next("/auth/login");
    }
    return;
  }

  if (to.meta.noauth) {
    if (store.getters["auth/isAuthenticated"]) {
      next("/admin/home");
    } else {
      next();
    }
    return;
  }
  next();
});

export default router;
