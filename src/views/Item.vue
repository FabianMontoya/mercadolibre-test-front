<template>
    <div>
        Información del item {{$route.params.id}}
        <v-card class=" mx-auto" width="80%">
            <v-container>
                <v-row justify="space-between">
                    <v-col cols="auto">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                        ></v-img>
                    </v-col>

                    <v-col cols="auto" class="text-center pl-0" >
                        <v-row class="flex-column ma-0 fill-height" justify="center">
                            <v-col class="px-0">
                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            </v-col>

                            <v-col class="px-0">
                            <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                            </v-btn>
                            </v-col>

                            <v-col class="px-0">
                            <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "view-info-item",
    data() {
        return {
            loading: true,
            info: {},
            descripcion: ''
        }
    },
    methods:{
        //Metodo de consulta de items
        async searchInfo(){
            this.info = await this.$store.getters.getInfoItem(this.$route.params.id);
            this.descripcion = await this.$store.getters.getDescriptionItem(this.$route.params.id);
            console.log(this.info, this.descripcion)
        }
    },
    created(){
        if(this.$route.params.id){
            this.searchInfo();
        }else{
            this.$router.push("/");
        }
    }
}
</script>