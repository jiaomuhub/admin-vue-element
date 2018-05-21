import Vue from 'vue'
import Router from 'vue-router'

import AppView from '@/components/app-view'
import Home from '@/pages/home'

Vue.use(Router)

const page = name => () => import('@/pages/' + name)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: AppView,
      children: [
        {path: '/home', name: 'home', component: Home},
        {path: '/proManger', name: 'proManger', component: page('productManage')},
        {path: '/productDetail', name: 'productDetail', component: page('productDetail')},
        {path: '/houseManage', name: 'houseManage', component: page('houseManage')},
        {path: '/houseDetail', name: 'houseDetail', component: page('houseDetail')},
        {path: '/houseAdministrators', name: 'houseAdministrators', component: page('houseAdministrators')},
        {path: '/cardManage', name: 'cardManage', component: page('cardManage')},
        {path: '/cardDetail', name: 'cardDetail', component: page('cardDetail')},
        {path: '/companyInfo', name: 'companyInfo', component: page('companyInfo')},
        {path: '/contactUs', name: 'contactUs', component: page('contactUs')},
        {path: '/404', name: '404', component: page('404')},
        {path: '/500', name: '500', component: page('500')}
      ]
    },
    {path: '/login', name: 'login', component: page('login')},
    {path: '/cnode', name: 'cnode', component: page('cnode')},
    // pages
    {path: '/home-login', name: 'p-login', component: page('home-login')},
    {path: '/register', name: 'p-register', component: page('register')},
    {path: '/keyboard', name: 'p-keyboard', component: page('c-keyboard')},
    {path: '*', redirect: {name: '404'}}
  ]
})
