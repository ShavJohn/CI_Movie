<template>
    <div>
        <b-row>
            <b-col md="4" >
                <img v-if="get_movie.poster_path" class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + get_movie.poster_path">
            </b-col>
            <b-col md="8">
                <div class="movie-info-table-list">
                    <p><span>{{ $t('title') }}</span> {{ get_movie.title }}</p>
                </div>
                <div class="movie-info-table-list other">
                    <p><span>{{ $t('orig-name') }}</span> {{ get_movie.original_title }}</p>
                </div>
                <div class="movie-info-table-list">
                    <p><span>{{ $t('year') }}</span> {{ get_movie.release_date }}</p>
                </div>
                <div class="movie-info-table-list other">
                    <p><span>{{ $t('genre') }}</span> <strong v-for="genre in get_movie.genres" :key="genre.id"> {{ genre.name}} </strong></p>
                </div>
                <div class="movie-info-table-list">
                    <p><span>{{ $t('duration') }}</span> {{ get_movie.runtime }} m</p>
                </div>
                <div class="movie-info-table-list other">
                    <p><span>{{ $t('budget') }}</span> {{ get_movie.popularity }} $</p>
                </div>
            </b-col>
            <b-col md="12">
                <div class="info-about-movie">
                    <h5>{{ $t('about-film') }}</h5>
                    <p>{{ get_movie.overview }}</p>
                </div>
            </b-col>
            <b-col md="8">
                <b-form-rating class="voting-stars" :value="get_movie.vote_average" readonly no-border variant="warning" stars="10"></b-form-rating>
            </b-col>
            <b-col md="4" class="movie-rate-info">
                <div class="movie-rate-info">
                    <p><span>{{ $t('movie-rating') }}:</span> {{ get_movie.vote_average }}</p>
                </div>
                <div class="movie-rate-info">
                    <p><span>{{ $t('total-votes') }}:</span> {{ get_movie.vote_count }}</p>
                </div>
            </b-col>
            <b-col md="12">
                <div class="player-box">
                    <pre style="background-color: aliceblue;">{{  get_movie.title  }}</pre>
                    <div v-if="Object.keys(get_movie).length">
                        <div :data-title="get_movie.title + ' ' + getYear(get_movie.release_date) + ' / ' + get_movie.original_title + ' ' +  getYear(get_movie.release_date)" id="kinoplayertop"  class="w-100"></div>
                    </div>
                </div>
            </b-col>
            <b-col md="12" v-if="sim_movies.results.length">
                <span class="similar-movies">{{ $t('sim-movies') }}</span>
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
            <b-col md="12" v-else>
                <span class="similar-movies">{{ $t('sim-movies') }}</span>
                <div class="no-similar-movies text-white">
                    <span>{{ $t('no-sim-movies') }}</span>
                </div>       
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        watch: {
            $route(){
                this.$store.dispatch('getMovie', this.$route.params.id)
                    .then(() => {
                        
                        this.$store.dispatch('getSimMovies', this.$route.params.id)
                            .then(() => {

                                this.$nextTick(() => {
                                    runKinoplayertop();
                                })
                            })

                    })
                
            },
        },
        methods: {
            getYear(date) {
                let dt = new Date(date)
                return dt.getFullYear()
            },
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
            this.$nextTick(() => {
                runKinoplayertop();
            })   
        }

    }
</script>

<style lang="scss" scoped>

</style>