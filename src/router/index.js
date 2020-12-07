import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
// import MovieWatch from '../views/MovieWatch'
import  SearchMovie from '../views/SearchMovie'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'HOME | CI_movie' } },
  { path: '/movie/:id', name: 'MovieWatch', component: () => import('../views/MovieWatch'), meta: { title: 'WatchRoom | CI_movie'}},
  { path: '/search/:search', name: 'SearchMovie', component: SearchMovie, meta: {title: 'Search | CI_movie'} }
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

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || 'Movie'

  if(to.name === 'Home') {
    await store.dispatch('getMovieslist')
    
    next()
  }
  else if (to.name === 'MovieWatch') {
    await store.dispatch('getMovie', to.params.id)
    await store.dispatch('getSimMovies', to.params.id)
    next()
  }
  else {
    next()
  }
  
})

export default router
