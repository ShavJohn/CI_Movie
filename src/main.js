import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'
import './scss/main.scss'
import i18n from './i18n'


require('./plugins');


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/dist/err.png',
  loading: '/dist/poster_loader.gif',
  attempt: 1,
})




new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

