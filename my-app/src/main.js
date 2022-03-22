import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store/index'
import VueSession from "vue-session";

// import 'bulma/css/bulma.css';

// Import the Auth0 configuration
import { domain, clientId } from '../auth_config.json';

// Import the plugin here
import { Auth0Plugin } from './auth';

// Install the authentication plugin here
Vue.config.productionTip = false;

Vue.use(VueSession);

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname,
    );
  },
});

new Vue({
  vuetify,
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from "vue";
// //import Vue from 'vue/dist/vue.js';
// import App from "./App";

// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";

// import router from "./router";

// Vue.use(Vuetify);

// //Vue.config.productionTip = false;

// /* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   router,
//   components: { App },
//   template: "<App/>"
// });
