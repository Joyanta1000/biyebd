
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'WebHome',
    component: () => import('../components/WebHome.vue')
  },
]

const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router