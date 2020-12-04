import Vue from 'vue'
import Vuex from 'vuex'

import getMovie from './modals/getMovie'
import searchMovie from './modals/searchMovie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    getMovie: getMovie,
    searchMovie: searchMovie
  }
})
