import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path:'/',
      name:'zym',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/table-1',
    name:'table-1',
    component:()=>import('@/views/table-1.vue')
  },
  {
    path:'/splx',
    name:'splx',
    component:()=>import('@/views/splx.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
