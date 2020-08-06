<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col sm="11" md="9">
          <v-card>
            <v-container v-if="info">
              <v-row>
                <v-col sm="7">
                  <v-img :src="(info.pictures && info.pictures[0].secure_url) ? info.pictures[0].secure_url : info.pictures[0].url" aspect-ratio="1" contain="false" max-width="680" max-height="680"></v-img>
                </v-col>
                <v-col sm="4">
                  <v-row>
                    <v-col>
                      <small>{{info.condition == 'new' ? 'Nuevo' : 'Usado'}} - {{info.sold_quantity}} vendidos</small>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h1>{{info.title}}</h1><small style="margin-top:-10px">{{info.warranty}}</small>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h1>$ {{$store.getters.formatPrice(info.price)}} <small style="font-size: 12px">({{info.currency_id}})</small></h1>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col class="mt-5">
                      <v-btn color="primary" @click="buyItem"><span class="ma-10 pd-10">Comprar</span></v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>              
              <v-row> 
                <v-col cols="auto">
                  <v-row class="ma-0 mb-3" >
                    <h2>Descripción del producto</h2>
                  </v-row>
                  <v-row class="ma-0">
                    <p>{{descripcion}}</p>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "view-info-item",
  data() {
    return {
      loading: true,
      info: null,
      descripcion: ""
    };
  },
  methods: {
    //Metodo de consulta de items
    async searchInfo() {
      this.info = await this.$store.getters.getInfoItem(this.$route.params.id);
      this.descripcion = await this.$store.getters.getDescriptionItem(this.$route.params.id);
      console.log(this.info, this.descripcion);
    },
    buyItem(){
      window.open(this.info.permalink);
    }
  },
  created() {
    if (this.$route.params.id) {
      this.searchInfo();
    } else {
      this.$router.push("/");
    }
  }
};
</script>
