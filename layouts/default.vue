<template>
  <v-app id="app">
    <v-app-bar app height="100">
      <v-avatar class="mr-3" color="grey lighten-5" size="70">
        <v-img
          contain
          max-height="70%"
          :src=" require('../assets/imgs/icon.png')"
        />
      </v-avatar>

      <v-toolbar-title class="font-weight-black headers">
        أخبار فيروس كورونا
        <span class="pink--text"> (COVID-19)</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-breadcrumbs :items="items" router large />

      <Nuxt />
    </v-main>

    <v-footer class="mt-5 justify-center" color="#292929">
      <v-card-text class="text-center">
        <v-btn
          v-for="(item,i) in icons"
          :key="i"
          class="mx-2 white--text"
          icon
          :aria-label="item.label"
          :href="item.url"
        >
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <div
        class=" mb-4 title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ (new Date()).getFullYear() }} — Vuango — Made with 💜 by Sohep
        Alslamat
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [{
        text: 'الرئيسية',
        disabled: false,
        to: '/'
      }, { text: 'افحص نفسك', disabled: false, to: 'checked' }],
      icons: [{
        icon:
'fab fa-facebook',
        url: 'https://www.facebook.com/sohep.alslamat91',
        label: 'facebook'
      }, { icon: 'fab fa-twitter', url: 'https://twitter.com/SohepAlslamat', label: 'twitter' }, { icon: 'fab fa-github', url: 'https://github.com/sohepalslamat', label: 'github' }, {
        icon: 'fab fa-linkedin',
        url: 'https://www.linkedin.com/in/sohep-alslamat-12022658',
        label: 'linkedin'
      }, {
        icon: 'fab fa-youtube',
        url: 'https://www.youtube.com/channel/UCzfT1tSJXPkrtllnTSUIvZQ',
        label: 'youtube'
      }]
    }
  }
}
</script>

<style lang="scss">

</style>
