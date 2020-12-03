<template>
    <div>
        <b-row>
            <b-col md="4" >
                <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
            </b-col>
            <b-col md="8">
                <div class="movie-info-table-list">
                    <p><span>Title</span> Chick Fight</p>
                </div>
                <div class="movie-info-table-list other">
                    <p><span>Original Name</span> Chick Fight</p>
                </div>
                <div class="movie-info-table-list">
                    <p><span>Year</span> 2020</p>
                </div>
                <div class="movie-info-table-list other">
                    <p><span>Gener</span> Action Fight</p>
                </div>
                <div class="movie-info-table-list">
                    <p><span>Duration</span> 120 m</p>
                </div>
                <div class="movie-info-table-list other">
                    <p><span>Budget</span> 150.000 $</p>
                </div>
            </b-col>
            <b-col md="12">
                <div class="info-about-movie">
                    <h5>About Film</h5>
                    <p>About film When Anna Wyncomb is introduced to an an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.</p>
                </div>
            </b-col>
            <b-col md="8">
                <b-form-rating v-model="value"  variant="warning" stars="10"></b-form-rating>
                <p class="mt-2">Value: {{ value }}</p>
            </b-col>
            <b-col md="4" class="movie-rate-info">
                <div class="movie-rate-info">
                    <p><span>Movie rating:</span> 5.8</p>
                </div>
                <div class="movie-rate-info">
                    <p><span>Total Votes:</span> 48</p>
                </div>
            </b-col>
            <b-col md="12">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ziaunYauFbc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </b-col>
            <b-col md="12">
                <span class="similar-movies">Similar Movies</span>
                <carousel
                class="custom-carusel"
                :perPage="4"
                :navigationEnabled="true"
                :navigationNextLabel='`<i class="fas fa-chevron-right"></i>`'
                :navigationPrevLabel='`<i class="fas fa-chevron-left"></i>`'
                :paginationEnabled="false"
                >
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                    <slide>
                        <img v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                    </slide>
                </carousel> 
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: null
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>