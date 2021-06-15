<template>
    <div>
        <b-pagination
            v-model="page"
            :total-rows="movie_list_ditails.total_results"
            :per-page="20"
            align="center"
        ></b-pagination>
        <genars-list :page_prop="page" /> 
            <b-row>
                <b-col v-for="movie in movie_list_ditails.results" :key="movie.id" v-if="movie.id !== 632357" class="movie-lis" sm="6" md="6" lg="4" >
                    <router-link :to="{name: 'MovieWatch', params: { id: movie.id}}">
                        <div  class="movie-detales">
                            <div class="movie-afish">
                                <div class="movie-info-table">
                                    <div class="info-table">
                                        <p class="title">{{ movie.title }}</p>
                                        <p class="year"><span class="first-word">{{ $t('year') }}: </span>{{ movie.release_date }}</p>
                                        <p class="votes"><span class="first-word">{{ $t('total-votes') }}: </span>{{ movie.vote_count }}</p>
                                        <p class="popular"><span class="first-word">{{ $t('popularity') }}: </span> {{ movie.popularity }}</p>
                                    </div>
                                </div>
                                <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path">
                            </div>
                            <b-form-rating class="voting-stars" :value="movie.vote_average" readonly no-border variant="warning" stars="10"></b-form-rating>
                        </div>
                    </router-link>
                </b-col>
            </b-row> 
        <b-pagination
            v-model="page"
            :total-rows="movie_list_ditails.total_results"
            :per-page="20"
            align="center"
        ></b-pagination>
    </div>         
</template>

<script>
import GenarsList from './GenarsList.vue'
    export default {
        components: { GenarsList },
        data() {
            return {
                page: 1,
                gener: ''
            }
        },
        watch: {
            'page': function (val) {
                this.$Progress.start()
                if(this.gener !== '') {
                    let data = {
                        gener: this.gener,
                        page: this.page
                    }
                    this.$store.dispatch('getMovies_with_ganers', data).then(() => {
                        this.$store.commit('movies_setter', this.generMoviesList)
                        this.$Progress.finish()
                    })
                }
                else {
                    this.$store.dispatch('getMovieslist', val).then(() => {
                    this.$Progress.finish()
                })
                }
                
                    
            }
        },
        computed: {
            movie_list_ditails(){
                return this.$store.getters.movies_getter
            },
            generMoviesList() {
                return this.$store.getters.movies_with_ganers_getters
            }
        },
        mounted() {
            this.$root.$on('gener_transfer', (data) => {
                this.gener = data.gener
                this.page = data.page
            })

            this.$store.dispatch('getMovieslist', this.page ).then(() => {
                this.$root.$emit('page-loader')
            })
            
        },
    }
</script>
