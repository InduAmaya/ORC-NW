import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/events",
    name: "events",
    component: () =>
      import(/* webpackChunkName: "events" */ "../views/Events.vue")
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/join",
    name: "join",
    component: () =>
      import(/* webpackChunkName: "join" */ "../views/Join.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
