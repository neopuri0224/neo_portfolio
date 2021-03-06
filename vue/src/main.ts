import Vue from "vue";
import Post from "./views/Post.vue";
import axios from "axios";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// Axios Settings
axios.defaults.baseURL = "http://localhost:3000/api/v1/";
axios.defaults.headers.common["Content-type"] = "application/json";

new Vue({
  store,
  vuetify,
  render: h => h(Post)
}).$mount("#app");
