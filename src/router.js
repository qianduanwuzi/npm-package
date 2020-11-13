import VueRouter from "vue-router";
import Vue from 'vue'
import Test from "./components/Test.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/test",
    name: "Test",
    component: Test
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
