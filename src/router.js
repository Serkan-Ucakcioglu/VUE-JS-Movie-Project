import { createRouter, createWebHashHistory } from "vue-router";
function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: lazyLoad('HomePage')
    },
    {
      path: "/login",
      component: lazyLoad('LoginPage')
    },
    {
      path: "/register",
      component:  lazyLoad('RegisterPage')
    },
    {
      path: "/actor",
      component:  lazyLoad('ActorPage')
    },
    {
      path: "/movie",
      component: lazyLoad('MoviePage')
    },
    {
      name: 'profile',
      path: "/detail/:id",
      component:  lazyLoad('DetailMovie'),
      props: true,
    },

  ],
});
export default router;
