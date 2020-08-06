<template>
  <div>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col>
          <fade-transition :duration="100" mode="out-in" origin="center top">
            <router-view></router-view>
          </fade-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
export default {
  name: "dashboard-view",
  components: {
    FadeTransition
  }
};
</script>
