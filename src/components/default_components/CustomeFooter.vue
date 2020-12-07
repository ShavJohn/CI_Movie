<template>
    <div v-if="background.results && video.results">
        <div class="custom-footer" :style="'background-image: url(https://image.tmdb.org/t/p/original/' + background.results[0].backdrop_path + ');'">
            <div class="youtube-trailer">
                <iframe class="iframe-video" width="560" height="315" :src="'https://www.youtube.com/embed/' + video.results[0].key" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div id="copyright">
                <span>Compyright Ⓒ 2020 CI_movie.com All Rightts Reserved</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch('getBackground').then(() => {
                this.$store.dispatch('getVideo', this.background.results[0].id)
            })    
        },
        computed: {
            background(){
                return this.$store.getters.background_getter
            },
            video() {
                return this.$store.getters.video_getter
            }   
        }
    }
</script>

<style>

</style>