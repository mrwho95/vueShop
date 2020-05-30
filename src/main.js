import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "popper.js";
import jQuery from "jquery";
import "./assets/app.scss";
import { fb } from "./firebase";

window.$ = window.jQuery = jQuery;

Vue.component("Navbar", require("./components/NavBar.vue").default);

Vue.config.productionTip = false;

let app = "";

fb.auth().onAuthStateChanged(function() {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
