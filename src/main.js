import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'
import './scss/main.scss'
import i18n from './i18n'
import VueProgressBar from 'vue-progressbar'


require('./plugins');

const options = {
  color: '#fe7900',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.5s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/dist/err.png',
  loading: '/dist/poster_loader.gif',
  attempt: 1,
})


window.i18n = i18n;


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

