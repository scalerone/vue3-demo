import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Time from '../views/Time.vue'
import Dog from '../views/Dog.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/time',
    name: 'Time',
    component: Time
  },
  {
    path: '/dog',
    name: 'Dog',
    component: Dog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/router/:path*',
    name: 'router',
    component: () => import('../views/Router.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../views/Vuex.vue')
  },
  {
    path: '/teleport',
    name: 'Teleport',
    component: () => import('../views/Teleport.vue')
  },
  {
    path: '/suspense',
    name: 'Suspense',
    component: () => import('../views/Suspense.vue')
  },
  {
    path: '/composition',
    name: 'Composition',
    redirect: '/composition/reactive',
    component: () => import('../views/composition/index.vue'),
    children:[
      {
        path: 'reactive',
        name: 'Reactive',
        component: () => import('../views/composition/reactive.vue'),
      },
      {
        path: 'readonly',
        name: 'Readonly',
        component: () => import('../views/composition/readonly.vue'),
      },
      {
        path: 'computed',
        name: 'Computed',
        component: () => import('../views/composition/computed.vue'),
      },
      {
        path: 'watch',
        name: 'Watch',
        component: () => import('../views/composition/watch.vue'),
      },
    
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
