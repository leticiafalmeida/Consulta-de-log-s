import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import Loader from "vue-ui-preloader";

Vue.use(Vuetify);

Vue.use(Loader);

new Vue({
  el: "#app",
  components: {
    loader: Loader
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
