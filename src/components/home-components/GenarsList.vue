<template>
    <div>
        <b-dropdown :text="gener !== '' ? gener : 'Geners'" variant="warning" class="m-2">
            <b-dropdown-item v-for="movie in genarsList.genres" :key="movie.id" @click="filterWithGener(movie)">{{ movie.name }}</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                page: 1,
                gener: ''
            }
        },
        computed: {
            genarsList() {
                return this.$store.getters.genars_getters 
            },
            generMoviesList() {
                return this.$store.getters.movies_with_ganers_getters
            }
        },
        methods: {
            filterWithGener(gener) {
                let data = {
                    gener: gener.id,
                    page: this.page
                }
                this.gener = gener.name
                this.$root.$emit('gener_transfer', data)
                this.$store.dispatch('getMovies_with_ganers', data).then(() => {
                    this.$store.commit('movies_setter', this.generMoviesList)
                    this.$store.commit('top_movies_setter', this.generMoviesList)
                    
                })
            }
        },
        mounted() {
            this.$store.dispatch('getGenars').then(() => {
                this.$root.$emit('page-loader')
            })
        }
    }
</script>

