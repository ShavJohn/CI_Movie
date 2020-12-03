import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import MovieWatch from '../views/MovieWatch'
import  SearchMovie from '../views/SearchMovie'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'HOME | CI_movie' } },
  { path: '/movie', name: 'MovieWatch', component: MovieWatch, meta: { title: 'WatchRoom | CI_movie'}},
  { path: '/search', name: 'SearchMovie', component: SearchMovie, meta: {title: 'Search | CI_movie'} }
  // { path: '/about', name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Movie'

  next()
})

export default router
