import Vue from 'vue'
import VueRouter from 'vue-router'
import WebHome from '@/components/WebHome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WebHome',
    component: () => WebHome
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router