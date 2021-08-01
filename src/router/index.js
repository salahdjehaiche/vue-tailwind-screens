import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/select',
    name: 'Select',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/screens/SelectScreen.vue')
  },
  {
    path: '/enonce',
    name: 'Enonce',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/screens/Enonce.vue')
  },
  {
    path: '/reponse',
    name: 'Reponse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/screens/Reponses.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
