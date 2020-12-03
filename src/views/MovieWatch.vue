<template>
    <div>
        <div class="room-body">
            <b-container>
                <b-row>
                    <b-col sm="12" md="8">
                        <about-movie/>
                    </b-col>
                    <b-col sm="12" md="4">
                        <movie-table/>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import MovieTable from '../components/home-components/MovieTable.vue'
import AboutMovie from '../components/watch-movie-components/AboutMovie.vue'
    export default {
        components: {MovieTable, AboutMovie },
    }
</script>

<style lang="scss" scoped>

</style>