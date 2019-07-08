<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1>
                <book-details :book="book"></book-details>
            </v-flex>
            <v-flex xs12 sm10 offset-sm1 v-for="part in book.parts" :key="part.id">
                <!-- <book-part-list-item></book-part-list-item> -->
            </v-flex>
        </v-layout>
    </v-container>
</template>



<script>
import BookDetails from '../components/BookDetails.vue'

export default {
    props:{
        "id":{
            type: String,
            required: true
        }
    },
    components:{
        BookDetails
    },
    computed:{
        book(){
            return this.$store.getters.getBook.find(b => b.id == this.id)
        }
    }
}
</script>



<style>

</style>
