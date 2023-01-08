import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

import store from "./store/index";

createApp(App).use(store).use(router).use(VueChartkick).mount("#app");
