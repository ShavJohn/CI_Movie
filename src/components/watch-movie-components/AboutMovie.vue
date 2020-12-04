<template>
    <div>
        <b-row>
            <b-col md="4" >
                <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + get_movie.poster_path">
            </b-col>
            <b-col md="8">
                <div class="movie-info-table-list">
                    <p><span>Title</span> {{ get_movie.title }}</p>
                </div>
                <div class="movie-info-table-list other">
                    <p><span>Original Name</span> {{ get_movie.original_title }}</p>
                </div>
                <div class="movie-info-table-list">
                    <p><span>Year</span> {{ get_movie.release_date }}</p>
                </div>
                <div class="movie-info-table-list other">
                    <p><span>Gener</span> <strong v-for="genre in get_movie.genres" :key="genre.id"> {{ genre.name}} </strong></p>
                </div>
                <div class="movie-info-table-list">
                    <p><span>Duration</span> {{ get_movie.runtime }} m</p>
                </div>
                <div class="movie-info-table-list other">
                    <p><span>Budget</span> {{ get_movie.popularity }} $</p>
                </div>
            </b-col>
            <b-col md="12">
                <div class="info-about-movie">
                    <h5>About Film</h5>
                    <p>{{ get_movie.overview }}</p>
                </div>
            </b-col>
            <b-col md="8">
                <b-form-rating class="voting-stars" :value="get_movie.vote_average" readonly no-border variant="warning" stars="10"></b-form-rating>
            </b-col>
            <b-col md="4" class="movie-rate-info">
                <div class="movie-rate-info">
                    <p><span>Movie rating:</span> 5.8</p>
                </div>
                <div class="movie-rate-info">
                    <p><span>Total Votes:</span> 48</p>
                </div>
            </b-col>
            <b-col md="12">
                <div id="yohoho" :data-title="get_movie.title" class="w-100"></div>
            </b-col>
            <b-col md="12">
                <span class="similar-movies">Similar Movies</span>
                <carousel
                class="custom-carusel"
                :perPageCustom="[[576, 2], [768, 3], [1024, 4], [1300, 4]]"
                :navigationEnabled="true"
                :navigationNextLabel='`<i class="fas fa-chevron-right"></i>`'
                :navigationPrevLabel='`<i class="fas fa-chevron-left"></i>`'
                :paginationEnabled="false"
                >
                    <slide v-for="sim_movie in sim_movies.results" :key="sim_movie.id">
                        <router-link :to="{name: 'MovieWatch', params: { id: sim_movie.id}}">
                            <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + sim_movie.poster_path">
                            <span class="sim_movie_text">{{ sim_movie.title }}</span>
                        </router-link>
                    </slide>
                </carousel> 
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        watch: {
            $route(){
                this.$store.dispatch('getMovie', this.$route.params.id)
                this.$store.dispatch('getSimMovies', this.$route.params.id)
                setTimeout(() => {
                    yo()
                }, 1000)     
            }
        },
        computed: {
            get_movie(){
                return this.$store.getters.get_movie_getter
            },
            sim_movies(){
                return this.$store.getters.sim_movies_getter
            }
        },
        mounted() {

            setTimeout(() => {
                    yo()
                }, 1000)    
        }

    }
</script>

<style lang="scss" scoped>

</style>