import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import store from "./ui/store";
import App from "./App.vue";
import router from "./ui/router";
import ApiService from "./shared/services/ApiService";
import MockService from "./shared/services/MockService";

import "bootstrap";

const app = createApp(App);

app.use(router);
app.use(store);

ApiService.init(app);
MockService.init(app);

app.mount("#app");
