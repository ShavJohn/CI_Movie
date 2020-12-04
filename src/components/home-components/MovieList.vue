<template>
    <div>
        <b-pagination
            v-model="page"
            :total-rows="movie_list_ditails.total_results"
            :per-page="20"
            align="center"
        ></b-pagination>    
        <b-row>
            <b-col v-for="movie in movie_list_ditails.results" :key="movie.id" class="movie-lis" sm="12" md="6" lg="4" >
                <router-link :to="{name: 'MovieWatch', params: { id: movie.id}}">
                    <div class="movie-afish">
                        <div class="movie-info-table">
                            <div class="info-table">
                                <p class="title">{{ movie.title }}</p>
                                <p class="year"><span class="first-word">Year: </span>{{ movie.release_date }}</p>
                                <p class="votes"><span class="first-word">Votes: </span>{{ movie.vote_count }}</p>
                                <p class="popular"><span class="first-word">Popularity: </span> {{ movie.popularity }}</p>
                            </div>
                        </div>
                        <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + movie.poster_path">
                    </div>
                    <b-form-rating :value="movie.vote_average" no-border variant="warning" stars="10"></b-form-rating>
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
    export default {
        data() {
            return {
                page: 1
            }
        },
        watch: {
            'page': function (val) {
                this.$store.dispatch('getMovieslist', val)
            }
        },
        computed: {
            movie_list_ditails(){
                return this.$store.getters.movies_getter
            }
        },
        mounted() {
            this.$store.dispatch('getMovieslist', this.page )
        },
        methods: {
        },
    }
</script>

<style>

</style>