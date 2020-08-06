<template>
    <v-app>      
        <v-main>
            <buscador-items></buscador-items>
            <dashboard-View></dashboard-View>
        </v-main>  
    </v-app>
</template>

<script>
export default {
    name: 'main-layout',
    components: {
        DashboardView: () => import('./Vista.vue'),
        BuscadorItems: () => import('@/components/Buscador.vue'),
    },
    data: () => ({
        model:{
            appName: '',
        }, 
    }),
    methods:{
    },
}
</script>
<style lang="stylus">
.theme--light .v-main
    background-color: #ecf0f5b8;

.col
    padding-bottom: 0 !important;

</style>