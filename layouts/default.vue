<template>
  <v-app id="app">
    <v-app-bar
      app
      color="white"
      height="100"
    >
      <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="70"
      >
        <v-img
          contain
          max-height="70%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        />
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline">
        VUETIFY
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <Nuxt />
    </v-content>
    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} — Vuetify, LLC — Made with 💜 by John Leider
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {

}

</script>
<style lang="scss">
#app{
  font-family: 'El Messiri' !important;
}

</style>
