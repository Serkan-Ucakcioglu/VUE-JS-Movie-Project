import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "HomePage",
      path: "/",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/register",
      component: () => import("@/views/RegisterPage.vue"),
    },
    {
      path: "/actor",
      component: () => import("@/views/ActorPage.vue"),
    },
    {
      path: "/movie",
      component: () => import("@/views/MoviePage.vue"),
    },
    {
      name: "profile",
      path: "/detail/:id",
      component: () => import("@/views/DetailMovie.vue"),
      props: true,
    },
    {
      name: "MovieList",
      path: "/search/:name",
      component: () => import("@/views/SearchList.vue"),
      props: true,
    },
  ],
});
export default router;
