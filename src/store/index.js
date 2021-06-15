import Vue from 'vue'
import Vuex from 'vuex'

import getMovie from './modals/getMovie'
import searchMovie from './modals/searchMovie'
import getGenars from './modals/getGenars'
import getfooterdetales from './modals/getfooterdetales'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    getGenars: getGenars,
    getMovie: getMovie,
    searchMovie: searchMovie,
    getfooterdetales: getfooterdetales
  }
})
