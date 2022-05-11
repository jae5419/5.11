import Vue from 'vue'
import VueRouter from 'vue-router'
import StartView from '../views/StartView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: StartView
  },
  {
    path: '/register',
    component: function() {
      return import('../views/RegisterView.vue')
    }
  },
  {
    path: '/login', 
    component: function() {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/main',
    component: function() {
      return import('../views/MainView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
