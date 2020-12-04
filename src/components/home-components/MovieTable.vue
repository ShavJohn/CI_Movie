<template>
    <div>
        <div class="recomend-movie">
            <span>{{ $t('rec-movies') }}</span>
        </div>
        <div class="rec-movie-list">

            <div class="movie-info-table" v-for="rec_movie in rec_movies.results" :key="rec_movie.id">
                <router-link :to="{name: 'MovieWatch', params: { id: rec_movie.id}}">
                    <div class="movie-afish">
                        <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + rec_movie.poster_path">
                    </div>
                    <div class="movie-info">
                        <div class="text-info">
                            
                                <p class="title">{{ rec_movie.title }}</p>
                                <p class="number-info"><span class="info">Year:</span> {{ rec_movie.realease_data }}</p>
                                <p class="number-info"><span class="info">Votes:</span> {{ rec_movie.vote_count }}</p>
                            
                        </div>
                        <div class="num-ifno">
                            <span class="raiting">{{ rec_movie.vote_average }}</span>
                        </div>
                    </div>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            rec_movies(){
                return this.$store.getters.rec_movies_getter
            }
        },
        mounted() {
            this.$store.dispatch('getRecMovies')
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>

</style>