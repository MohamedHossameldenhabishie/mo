import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "@/assets/style/main.css";

library.add(fas);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
