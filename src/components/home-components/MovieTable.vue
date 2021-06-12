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
                            <span class="title">{{ rec_movie.title }}</span>
                            <p class="number-info"><span class="info">{{ $t('year') }}:</span> {{ rec_movie.release_date }}</p>
                            <p class="number-info"><span class="info">{{ $t('total-votes') }}:</span> {{ rec_movie.vote_count }}</p>
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
            this.$store.dispatch('getRecMovies').then(() => {
                this.$root.$emit('page-loader')
            })
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>

</style>