<template>
    <div>
        <b-pagination
        ></b-pagination>    
        <b-row>
            <b-col class="movie-lis" sm="12" md="6" lg="4" >
                <div class="movie-afish">
                    <div class="movie-info-table">
                        <div class="info-table">
                            <p class="title">Women FIght</p>
                            <p class="year"><span class="first-word">Year: </span>2020</p>
                            <p class="votes"><span class="first-word">Votes: </span> 5000</p>
                            <p class="popular"><span class="first-word">Popularity: </span> 5656465</p>
                        </div>
                    </div>
                    <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                </div>
                <b-form-rating v-model="value" variant="warning" stars="10"></b-form-rating>
                <p class="mt-2">Value: {{ value }}</p>
            </b-col>
            <b-col class="movie-lis" sm="12" md="6" lg="4" >
                <div class="movie-afish">
                    <div class="movie-info-table">
                        <div class="info-table">
                            <p class="title">Women FIght</p>
                            <p class="year"><span class="first-word">Year: </span>2020</p>
                            <p class="votes"><span class="first-word">Votes: </span> 5000</p>
                            <p class="popular"><span class="first-word">Popularity: </span> 5656465</p>
                        </div>
                    </div>
                    <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                </div>
                <b-form-rating v-model="value" variant="warning" stars="10"></b-form-rating>
                    <p class="mt-2">Value: {{ value }}</p>
            </b-col>
            <b-col class="movie-lis" sm="12" md="6" lg="4" >
                <div class="movie-afish">
                    <div class="movie-info-table">
                        <div class="info-table">
                            <p class="title">Women FIght</p>
                            <p class="year"><span class="first-word">Year: </span>2020</p>
                            <p class="votes"><span class="first-word">Votes: </span> 5000</p>
                            <p class="popular"><span class="first-word">Popularity: </span> 5656465</p>
                        </div>
                    </div>
                    <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                </div>
                <b-form-rating v-model="value" variant="warning" stars="10"></b-form-rating>
                    <p class="mt-2">Value: {{ value }}</p>
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

<style>

</style>