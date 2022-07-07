import Vue from "vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default () => {
  Vue.use(NProgress);
};

// router.beforeEach((to, from, next) => {
//   if (!to.hash && typeof document !== "undefined") {
//     NProgress.start();
//   }
//   next();
// });

// router.afterEach((to, from) => {
//   if (!to.hash && typeof document !== "undefined") {
//     NProgress.done();
//   }
// });
export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from) => {
    //do something to validate
  });
};
