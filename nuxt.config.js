import colors from 'vuetify/es5/util/colors'
import ar from 'vuetify/es5/locale/ar'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | ' + 'أخبار فيروس كورونا (COVID-19)',
    title: process.env.npm_package_name || '',
    meta: [
      { name: 'google-site-verification', content: 'AOJy1ivF_J1t_qA58HTMd0JFPG96tBWNznseHu_ovKg' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'favicon', type: 'image/x-icon', href: 'icon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rajdhani|Cairo|Charm|El+Messiri&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/ga', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  pwa: {
    manifest: {
      short_name: 'COVID-19',
      name: 'أخبار فيروس كورونا (COVID-19)',
      description: 'أخر أخبار واحصاءات فيروس كورونا حول العالم',
      lang: 'ar',
      icons: [
        {
          src: 'icon.png',
          type: 'image/png'
        }
      ],
      start_url: '/',
      background_color: '#3367D6',
      display: 'standalone',
      theme_color: '#3367D6'
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    lang: {
      locales: { ar },
      current: 'ar'
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    },
    icons: {
      iconfont: 'mdi'
    },
    rtl: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
