import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import PhotoList from "./pages/PhotoList.vue";
import Login from "./pages/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PhotoList
  },
  {
    path: "/login",
    component: Login,
    beforeEnter(to, from, next) {
      if (store.getters["auth/check"]) {
        next("/");
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
