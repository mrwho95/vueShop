import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "popper.js";
import jQuery from "jquery";
import "./assets/app.scss";
import { fb } from "./firebase";
import VueFirestore from "vue-firestore";
import Swal from "sweetalert2";

Vue.use(VueFirestore);

window.$ = window.jQuery = jQuery;

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;

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
