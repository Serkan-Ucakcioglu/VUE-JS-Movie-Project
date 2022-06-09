import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/register",
      component: () => import("@/views/RegisterPage"),
    },
    {
      path: "/actor",
      component: () => import("@/views/ActorPage"),
    },
    {
      path: "/movie",
      component: () => import("@/views/MoviePage"),
    },
    {
      name: 'profile',
      path: "/detail/:id",
      component: () => import("@/components/DetailMovie"),
      props: true,
    },

  ],
});
export default router;
