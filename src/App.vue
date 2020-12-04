<template>
  <div id="app" :class="{'dark-mod' : cheked}">
    <customeHeader/>
    <top-movies/>
    <router-view/>
    <i class="fas fa-chevron-up fixed" v-show="visible" @click="scrollTop"></i>
    <vue-progress-bar></vue-progress-bar>
    <custome-footer/>
  </div>
</template>

<script>
import CustomeFooter from './components/default_components/CustomeFooter.vue'
import CustomeHeader from './components/default_components/CustomeHeader.vue'
import TopMovies from './components/default_components/TopMovies.vue'
export default {
  components: {CustomeHeader, TopMovies, CustomeFooter},
  name: 'App',
  data() {
    return {
      cheked:  localStorage.getItem('mode') ? localStorage.getItem('mode') :  false,
      visible: false
    }
  },
  methods: {
    scrollTop(){
       this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150
    }
  },
  mounted(){
    this.$Progress.finish()
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  created() {
   
    this.$root.$on('dark-checker', (val) => {
      this.cheked = val;
    })

    this.$Progress.start()

    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })

  },
}


</script>

<style>
</style>
