import "./assets/main.css";

import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import App from "./App.vue";
import router from "./router";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(autoAnimatePlugin);
app.use(router);

app.mount("#app");
