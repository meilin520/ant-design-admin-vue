import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { getToken } from "@/libs/utils";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes,
});

// 登录拦截器
// router.beforeEach((to, from, next) => {
//   console.log(to, from, 99);
//   const token = getToken();
//   if (token) {
//     next();
//   } else {
//     next("/");
//   }
// });
export default router;
