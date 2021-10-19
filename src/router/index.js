import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import OrderPage from '@/views/OrderPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/OrderPage',
      name: 'OrderPage',
      component: OrderPage
    }
  ]
})
