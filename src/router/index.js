import Vue from 'vue'
import Dashboard from '@/views/Dashboard'
import OrderPage from '@/views/OrderPage'
import LoginPage from '@/views/LoginPage'
import ReturnPage from '@/views/ReturnPage'
import CreditPage from '@/views/CreditPage'
import Router from 'vue-router'


Vue.use(Router)


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/OrderPage',
      name: 'OrderPage',
      component: OrderPage
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/ReturnPage',
      name: 'ReturnPage',
      component: ReturnPage
    },
    {
      path: '/CreditPage',
      name: 'CreditPage',
      component: CreditPage
    },
  ]
})
