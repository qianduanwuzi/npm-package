// import { createApp } from 'vue'
// import App from './App.vue'
// import router from "./router";

// createApp(App, router).mount('#app')

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
Vue.config.productionTip = false;
// import * as WZUI from "wuzi-package";
// console.log(WZUI.default);
// Vue.use(WZUI.default);
new Vue({
  router,
//   store,
  render: h => h(App)
}).$mount("#app");
