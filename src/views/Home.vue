<template>
    <div>
        <div class="home-body">
            <b-container>
                <b-row>
                    <b-col sm="12" md="12" lg="8">
                        <movie-list/>
                    </b-col>
                    <b-col sm="12" md="12" lg="4">
                        <movie-table/>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import MovieList from '../components/home-components/MovieList.vue'
import MovieTable from '../components/home-components/MovieTable.vue'
    export default {
        components: { MovieList, MovieTable},
    }
</script>

<style>

</style>