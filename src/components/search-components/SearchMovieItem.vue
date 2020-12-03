<template>
    <div>
        <b-row>
            <b-col md="6">
                <div class="movie-info-table">
                    <b-row>
                        <b-col md="4">
                        
                            <div class="movie-afish">
                                <img class="img-fluid movie-img" v-lazy="'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'">
                            </div>
                        
                        </b-col>
                        <b-col md="8">
                            <div class="movie-info">
                                <div class="text-info">
                                    <h5 class="title">Women Fight</h5>
                                    <p>{{ desct | trun_cate }}</p>
                                </div>
                                <div class="star-raiting"> 
                                        <b-form-rating v-model="value" variant="warning" stars="10" readonly></b-form-rating>
                                        <p class="mt-2">Value: {{ value }}</p>
                                    </div>
                                <div class="num-ifno">
                                    <span class="raiting">20</span>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: 4.5,
                desct: 'About film When Anna Wyncomb is introduced to an an underground, all-female fight club in order to turn the mess of her life around, she discovers she is much more personally connected to the history of the club than she could ever imagine.'
            }
        },
        filters: {
            trun_cate(val){
                if(val.length > 100) {
                    val = val.substring(0, (100 - 3)) + '...';
                }

                return val;

            }
        }
    }
</script>

<style>

</style>