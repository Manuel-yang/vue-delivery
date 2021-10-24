import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import OrderPage from '@/views/OrderPage'
import LoginPage from '@/views/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/OrderPage',
      name: 'OrderPage',
      component: OrderPage
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
