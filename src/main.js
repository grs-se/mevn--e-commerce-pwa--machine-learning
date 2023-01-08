import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

// import chart from "chart.js";
// import chartkick from "vue-chartkick";

import store from "./store/index";

createApp(App).use(store).use(router).use(VueChartkick).mount("#app");

// import Vue from "vue";
// import App from "./App.vue";
// import router from "./routes";
// Vue.config.productionTip = false;

// import chart from "chart.js";
// import chartkick from "vue-chartkick";

// Vue.use(chartkick.use(chart));
// // Store
// import store from "./store/index";

// new Vue({
// 	store,
// 	router,
// 	render: (h) => h(App),
// }).$mount("#app");
