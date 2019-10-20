import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Login from '../views/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../views/layout/Layout'),
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('../views/home/Home')
        },
        {
          name: 'Login',
          path: '/login',
          component: () => import('../views/login/Login')
        }
      ]
    }
  ]
})
