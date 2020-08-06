/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiSearch: "https://api.mercadolibre.com/sites/MLA/search?q=",
    apiItems: "https://api.mercadolibre.com/items/"
  },
  mutations: {},
  getters: {    
    //Función que obtiene el valor de un parametro obtenido en la URL
    getParameterByName: (state) => (name) => {
      var search = location.search;
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(search);      
      var info = (results === null) ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      return info;
    },
    getItems: (state) => async (query, count) =>{
      let resultItems = await axios.get(state.apiSearch + query);
      if(resultItems.data.results.length > count){
      return resultItems.data.results.slice(0, count);
      }else{
        return resultItems.data.results;
      }
    },
    getInfoItem: (state) => async (id) => {
      let result = await axios.get(state.apiItems + '/' + id);
      con
      return result.data;
    },
    getDescriptionItem: (state) => async (id) => {
      let result = await axios.get(state.apiItems + '/' + id) + '/description';
      return result.data.plain_text;
    },
    formatPrice: (state) => (value) => {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
  actions: {
    
  },
  modules: {}
});
