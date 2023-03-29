import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import router from "@/router";

import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

axios.defaults.baseURL = "http://localhost:8080";
app.config.globalProperties.$http = axios;

app.use(ElementPlus);
app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
