import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Router from './router'
// import WebHome from '@/components/WebHome'

Vue.config.productionTip = false

new Vue({
  vuetify,
  Router,
  render: h => h(App)
}).$mount('#app')

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'WebHome',
//       component: WebHome
//     }
//   ]
// })
