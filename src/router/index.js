import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main'
import Recommend from '@/views/Recommend'
import Singer from '@/views/Singer'
import Rank from '@/views/Rank'
import Search from '@/views/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '', redirect: 'recommend' },
      { path: 'recommend', component: Recommend },
      { path: 'singer', component: Singer },
      { path: 'rank', component: Rank },
      { path: 'search', component: Search }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
