<template>
    <v-card color="info" class="white--text">
                    <v-container fluid>
                        <!-- Layout for desktop version -->
                        <v-layout row class="hidden-sm-and-down">
                            <v-flex xs4 md3>
                                <v-card-media src="https://images-na.ssl-images-amazon.com/images/I/514TVV6S1ML._SY445_.jpg" height="150px"></v-card-media>
                                <div class="text-xs-center">
                                    <v-btn flat color="white">
                                        <v-icon left>visibility</v-icon>Youtube
                                    </v-btn>
                                </div>
                            </v-flex>
                            <v-flex xs8 md9>
                                <v-card-title>
                                    <div>
                                        <div class="headline">{{ book.title }}</div>
                                        <div>{{ book.description }}</div>
                                        <v-divider class="white"></v-divider>
                                        <div>Уровень: {{getBookLevel(book.level)}}, {{book.parts.length}} частей</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                                    <div ml1>
                                        <span>{{book.rating}}</span>
                                        <span>({{book.ratingsCount}})</span>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-btn class="primary" flat :to="{name: 'book', params: {id: book.id}}">Открыть</v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                        <!-- Layout for mobile version -->
                        <div class="hidden-md-and-up">
                            <v-layout row >
                                <v-flex xs4 md3>
                                    <v-card-media 
                                    src="https://images-na.ssl-images-amazon.com/images/I/514TVV6S1ML._SY445_.jpg"
                                    height="150px">
                                    </v-card-media>
                                </v-flex>
                                <v-flex xs12>
                                    <v-card-title>
                                        <div>
                                            <h4>{{book.title}}</h4>
                                        </div>
                                    </v-card-title>
                                    <div class="text-xs-center">
                                        <v-btn flat color="white">
                                            <v-icon left>visibility</v-icon>Youtube
                                        </v-btn>
                                    </div>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <div class="caption">{{book.description}}</div>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex xs12>
                                    <div>Уровень: {{getBookLevel(book.level)}}, {{book.parts.length}} частей</div>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex>
                                    <v-card-actions>
                                        <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                                        <div ml1>
                                            <span>{{book.rating}}</span>
                                            <span>({{book.ratingsCount}})</span>
                                        </div>
                                        <v-spacer></v-spacer>
                                        <v-btn class="primary" flat :to="{name: 'book', params: {id: book.id}}">Открыть</v-btn>
                                    </v-card-actions>
                                  </v-flex>
                            </v-layout>
                        </div>
                    </v-container>
                </v-card>
</template>



<script>
import * as BookHelper from '../helpers/book.js'
export default {
    props:{
        'book':{
            type: Object,
            required: true
        }
    },
    methods:{
        getBookLevel: BookHelper.getBookLevel
    }
}
</script>



<style>

</style>
