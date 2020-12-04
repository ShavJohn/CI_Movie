<template>
  <div id="app" :class="{'dark-mod' : cheked}">
    <customeHeader/>
    <top-movies/>
    <router-view/>
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
    }
  },
  created() {
   
    this.$root.$on('dark-checker', (val) => {
      this.cheked = val;
    })
  },
}
</script>

<style>
</style>
