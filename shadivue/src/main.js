import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import router from './router'

createApp(App).use(router).use(vuetify).mount('#app')
// import WebHome from '@/components/WebHome'

// Vue.config.productionTip = false

// new Vue({
//   vuetify,
//   Router,
//   components: { App },
//   render: h => h(App)
// }).$mount('#app')

// new Vue({
//   vuetify,
//   router,
//   store,
//   components: { App },
//   render: h => h(App)
// }).$mount('#app')

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
