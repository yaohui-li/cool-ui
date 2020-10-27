import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CoolUI from "../packages/index";
import "../packages/default-style/index.less";
// console.log(CoolUI);
Vue.config.productionTip = false;
Vue.use(CoolUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
