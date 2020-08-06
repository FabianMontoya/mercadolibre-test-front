<template>
    <div>
        <v-app-bar app color="#FFE600" elevate-on-scroll>
            <div class="d-flex align-center mr-5">
                <router-link to="/">
                    <v-img alt="mercadolibre Logo" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.7.0/mercadolibre/logo__large_plus.png" transition="scale-transition"/>
                </router-link>
            </div>   
            <v-text-field flat solo hide-details prepend-inner-icon="mdi-magnify" class="hidden-sm-and-down pa-10" 
            label="Buscar productos" v-model="text" v-on:keyup.enter="searchItems"></v-text-field>  
        </v-app-bar>        
    </div>
</template>

<script>
export default {
    name: 'buscador-items',
    data() {
        return {
            text: '',
            oldText: '',
        }
    },
    watch: {
        '$route.query.search'() {
            this.verifySearch();
        }
    },
    methods:{
        searchItems(){
            if(this.text != this.oldText){
                this.oldText = this.text;
                this.$router.push({ path: '/items', query: { search: this.text } });
            }
        },
        verifySearch(){
            if(this.$route.query.search){
                this.text = this.$route.query.search;
            }else{
                this.text = '';
            }
        }
    },
    created(){
        this.verifySearch();
    }
}
</script>