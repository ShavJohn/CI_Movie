<template>
    <div>
        <div class="search-body">
            <b-container>
                <search-movie-item/>
            </b-container>
        </div>
    </div>
</template>

<script>
import SearchMovieItem from '../components/search-components/SearchMovieItem.vue'
    export default {
  components: { SearchMovieItem },
        
    }
</script>

<style>

</style>