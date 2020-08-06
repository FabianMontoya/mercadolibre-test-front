<template>
    <div>
        <v-container>
            <v-row class="fill-height" align-content="center" justify="center" v-if="loading">
                <v-col class="subtitle-1 text-center" cols="12">
                    Consultando items, por favor espere...
                </v-col>
                <v-col cols="8">
                    <v-progress-linear
                        color="black"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                </v-col>
            </v-row>
            <v-row class="fill-height" align-content="center" justify="center" v-else-if="!loading && items.length > 0">                
                <v-col cols="12">
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index">
                            <router-link :to="'/items/' + item.id">
                                <v-img :src="item.secure_thumbnail ? item.secure_thumbnail : item.thumbnail" width="180" height="180" class="pa-16"></v-img>
                            </router-link>
                            <v-row class="fill-height ml-6">  
                                <v-col cols="12">
                                    <h1>$ {{$store.getters.formatPrice(item.price)}} <small style="font-size: 12px">({{item.currency_id}})</small></h1>
                                </v-col>
                                <v-col cols="12">
                                    <router-link :to="'/items/' + item.id">
                                        <h4>{{item.title}}</h4>
                                    </router-link>
                                </v-col>     
                            </v-row>   
                            <v-row>  
                                <v-col cols="12">
                                    <span style="color: #999999">{{item.address.state_name}}</span>
                                </v-col>                                    
                            </v-row>                            
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
            <v-row class="fill-height" align-content="center" justify="center" v-else>
                <v-col class="subtitle-1 text-center" cols="12">
                    <p>No se encontraron productos que coincidan con la busqueda <b>"{{$route.query.search}}"</b>.</p>
                </v-col>
                <v-col cols="12">
                    
                </v-col>
            </v-row>
        </v-container>        
    </div>
</template>

<script>
export default {
    name: "view-busqueda",
    data() {
        return {
            items: [],
            loading: true,
        }
    },
    //Verificamos el query search para detectar cambios
    watch: {
        '$route.query.search'() {
            this.searchItems();
        }
    },
    methods:{
        //Metodo de consulta de items
        async searchItems(){
            this.loading = true;
            this.items = [];
            this.items = await this.$store.getters.getItems(this.$route.query.search, 4);
            console.log(this.items)
            this.loading = false;
        }
    },
    created(){
        this.$route.query.search;
        if(this.$route.query.search){
            this.searchItems();
        }else{
            this.$router.push("/");
        }
    }
}
</script>

<style lang="stylus">
a
    text-decoration: none
    color: #333333 !important
</style>