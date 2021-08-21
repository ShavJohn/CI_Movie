<template>
    <div>
        <b-container>
            <b-navbar toggleable="lg" class="custom_header">

                <router-link :to="{name: 'Home'}"> 
                    <img src="../../assets/logo.png" alt="Logo">
                </router-link>   
                <select class="leng-select" v-model="locale" @change="setLeng()">
                    <option value="en" >{{ $t('en') }}</option>
                    <option value="ru">{{ $t('ru') }}</option>
                </select>

                <b-navbar-toggle target="navbar-toggle-collapse" class="nav-toggle-collapse">
                    <template #default="{ expanded }">
                        <b-icon class="nav-toggle-icon" v-if="expanded" icon="menu-up"></b-icon>
                        <b-icon class="nav-toggle-icon" v-else icon="menu-down"></b-icon>
                    </template>
                </b-navbar-toggle>
                <b-collapse id="navbar-toggle-collapse" is-nav>

                    <b-nav-form class="search-input">
                        <div class="position-relative">
                            <b-form-input v-model="search" size="sm" class="mr-sm-2 input" @focus="openDropDown()" placeholder="Search"></b-form-input>
                            <div ref="dropDown" class="position-absalute width-100 height-0">
                                <div class="search-content width-100 mh-200">
                                    <div class="padding hover-movie pointer" v-for="(searched, key) in searchedMovies" :key="key" @click="searchMovie(searched)">
                                        <span>{{ searched }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <b-button size="sm" class="my-2 my-sm-0 button" @click.prevent="searchMovie" type="submit">{{ $t('search') }}</b-button>
                    </b-nav-form>
                    <div class="switch">
                        <button class="random-movie-btn" @click="randomMovie">{{  $t('random')  }}</button>
                        <b-form-checkbox @change="darModFunc" v-model="checked" name="check-button" switch></b-form-checkbox>
                        <label class="night-mode-text">{{ $t('night-mode') }}</label>
                    </div>
                </b-collapse>    
            </b-navbar>
        </b-container>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                checked: localStorage.getItem('mode') ? localStorage.getItem('mode') :  false,
                locale:  this.$i18n.locale,
                search: null,
                searchedMovies: [],
                page: 1
            }
        },
        computed: {
            search_movies(){
                return this.$store.getters.search_movies_getter
            },
            top_movies(){
                return this.$store.getters.top_movies_getter
            },
            movie_list_ditails(){
                return this.$store.getters.movies_getter
            },
            rec_movies(){
                return this.$store.getters.rec_movies_getter
            },
            get_movie(){
                return this.$store.getters.get_movie_getter
            },
            sim_movies(){
                return this.$store.getters.sim_movies_getter
            }
        },
        methods: {
            openDropDown() {
                this.$refs.dropDown.classList.add("open-dropdown")
            },
            closeDropDown() {
                this.$refs.dropDown.classList.remove("open-dropdown")
            },
            randomMovie(){
                let page = Math.floor(Math.random() * this.movie_list_ditails.total_pages)
                this.$store.dispatch('getRandomMovie', page).then((res) => {
                    let item = res.data.results[Math.floor(Math.random() * res.data.results.length)]
                    this.$router.push({name: 'MovieWatch', params: {id: item.id}})
                })
            },
            darModFunc(){
                this.$root.$emit('dark-checker', this.checked);

                if(localStorage.getItem('mode') === null){
                    localStorage.setItem('mode', this.checked)
                }
                else {
                    localStorage.removeItem('mode')
                }
                
            },
            getSerchedList() {
                this.searchedMovies = JSON.parse(localStorage.getItem('Searched'))
            },
            searchMovie(search){

                let data = {
                    search: typeof search === String || this.search === null ? search : this.search,
                    page: this.page
                }

                let searched = []
                
                if(this.search !== null) {
                    if(localStorage.getItem('Searched')) {
                        searched = JSON.parse(localStorage.getItem('Searched'))
                        if(searched.length === 20 ){
                            searched.shift()
                        }
                        let exist = false;
                        searched.forEach((search, key) => {
                            if(search === this.search) {
                                exist = true
                            }
                        });
                        if(!exist) {
                            searched.push(this.search)
                        }
                        localStorage.setItem('Searched', JSON.stringify(searched))
                        this.getSerchedList()
                    }
                    else {
                        searched.push(this.search)

                        localStorage.setItem('Searched', JSON.stringify(searched))
                        this.getSerchedList()
                    }
                }
                
                
                this.$store.dispatch('searchMovies', data).then(() => {
                    this.$router.push({name: 'SearchMovie', params: {search: data.search}})
                    this.search = null
                    this.closeDropDown()
                })
                    
            },
            setLeng(){
                this.$i18n.locale = this.locale

                localStorage.setItem('leng', this.locale)

                this.$Progress.start()

                this.$store.dispatch('getMovieslist', this.movie_list_ditails.page)

                this.$store.dispatch('getGenars')

                this.$store.dispatch('getRecMovies')

                this.$store.dispatch('getTopMovies').then(() => {
                    this.$Progress.finish()
                })

                if(this.$route.name == 'MovieWatch') {

                    this.$store.dispatch('getMovie', this.$route.params.id)

                    this.$store.dispatch('getSimMovies', this.$route.params.id).then(() => {
                        this.$Progress.finish()
                    })
                }
                
                if(this.$route.name == 'SearchMovie') {

                    let data = {
                        search: this.search,
                        page: this.page
                    }

                    this.$store.dispatch('searchMovies', data).then(() => {
                        this.$Progress.finish()
                    })
                }

                
            }
        },
        mounted() {
             this.getSerchedList()
        },

    }
</script>

<style lang="scss" scoped>

</style>