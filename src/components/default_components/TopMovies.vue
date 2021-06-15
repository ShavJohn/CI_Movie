<template>
    <div>
        <carousel

        class="custom-carusel"
        :perPageCustom="[[576, 2], [768, 4], [1024, 6], [1300, 8]]"
        :navigationEnabled="true"
        :navigationNextLabel='`<i class="fas fa-chevron-right"></i>`'
        :navigationPrevLabel='`<i class="fas fa-chevron-left"></i>`'
        :paginationEnabled="false"
        >
            <slide v-for="top_movie in top_movies.results" :key="top_movie.id" v-if="top_movie.id !== 632357">
                <router-link v-if="top_movie.id !== 632357" :to="{name: 'MovieWatch', params: { id: top_movie.id}}">
                    <div >
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + top_movie.poster_path">
                        <h6  class="movie-name">{{ top_movie.title }}</h6>
                    </div>
                </router-link>
            </slide>
        </carousel> 
    </div>
</template>

<script>
    export default {
        computed: {
            top_movies(){
                return this.$store.getters.top_movies_getter
            }
        },
        mounted() {
            this.$store.dispatch('getTopMovies')
        },
        methods: {
            
        }
    }
</script>

<style>

</style>