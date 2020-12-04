<template>
    <div>
        <div class="loader_bg" v-show="loader">
            <div class="loader"></div>
        </div>
        <div class="home-body">
            <b-container>
                <b-row>
                    <b-col sm="12" md="8">
                        <movie-list/>
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
import MovieList from '../components/home-components/MovieList.vue'
import MovieTable from '../components/home-components/MovieTable.vue'
    export default {
        data(){
            return{
                loader: true
            }
        },
        components: { MovieList, MovieTable },
        beforeCreate(){
            setTimeout(() => {
                this.loader = false
            }, 1500);
        }
    }
</script>

<style>

</style>