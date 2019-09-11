import Vue from "vue";
import App from "./App.vue";

import store from "./store.js"

import {library} from "@fortawesome/fontawesome-svg-core";
import {faPlay, faPause, faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faTrash);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
