<template>
  <v-app dark>
    <v-main>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="11"
          sm="10"
          md="7"
          lg="7"
          xl="7"
        >
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <NuxtLink to="/">
            الصفحة الرئيسية
          </NuxtLink>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
