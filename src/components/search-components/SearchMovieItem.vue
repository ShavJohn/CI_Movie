<template>
    <div>
        <b-row>
            <b-col md="6" v-for="search_movie in search_movies.results" :key="search_movie.id">
                <router-link :to="{name: 'MovieWatch', params: { id: search_movie.id}}">
                    <div class="movie-info-table">
                        <b-row>
                            <b-col md="4">
                            
                                <div class="movie-afish">
                                    <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + search_movie.poster_path">
                                </div>
                            
                            </b-col>
                            <b-col md="8">
                                <div class="movie-info">
                                    <div class="text-info">
                                        <h5 class="title">{{ search_movie.title }}</h5>
                                        <p>{{ search_movie.overview | trun_cate }}</p>
                                    </div>
                                    <div class="star-raiting"> 
                                            <b-form-rating :value="search_movie.vote_average" no-border variant="warning" stars="10"></b-form-rating>
                                        </div>
                                    <div class="num-ifno">
                                        <span class="raiting">{{ search_movie.vote_average }}</span>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </router-link>
            </b-col>
        </b-row>
        <b-pagination
            v-model="page"
            :total-rows="search_movies.total_results"
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
        filters: {
            trun_cate(val){
                if(val.length > 100) {
                    val = val.substring(0, (100 - 3)) + '...';
                }

                return val;

            }
        },
        watch: {
            'page': function (val) {
                let data = {
                    search: this.$route.params.search,
                    page: val
                }
                this.$store.dispatch('searchMovies', data)
            }
        },
        computed: {
            search_movies(){
                return this.$store.getters.search_movies_getter
            }
        },
        created() {

            let data = {
                search: this.$route.params.search,
                page: this.page
            }

            this.$store.dispatch('searchMovies', data)
        }
    }
</script>

<style>

</style>