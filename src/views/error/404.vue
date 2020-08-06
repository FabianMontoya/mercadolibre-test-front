<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>404</h1>
        </v-col>
        <v-col cols="12">
          <p>
            Lo sentimos, la ruta a la que deseas acceder no existe o está fuera
            de tus límites.
          </p>
          <p>
            Pulsa
            <router-link to="/">aquí para ir al inicio.</router-link>
          </p>
        </v-col>
        <v-col cols="12">
          <v-row justify="center">
            <v-img src="/static/img/warning_cyit.svg" max-width="350px"></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
