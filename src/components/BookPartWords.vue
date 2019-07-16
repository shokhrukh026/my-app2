<template>
    <div>
        <v-container fluid>
            <span class="display-1">Слова</span>
            <v-data-iterator :items="words"
                content-tag="v-layout" 
                :hide-actions="true"
                row wrap>
                <template v-slot:item="props">
                    <v-flex xs12 sm6 md4 lg3>
                        <v-card>
                            <v-card-title>
                                <h4>{{ props.item.origWord }}</h4>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                {{props.item.transWord}}
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn fab dark small color="primary">
                                    <v-icon dark>add</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </template>
            </v-data-iterator>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            "words": {
                type: Array,
                required: true
            }
        }
    }
</script>

<style>

</style>