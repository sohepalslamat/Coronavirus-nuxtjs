module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    camelcase: 'off',
    eqeqeq: 'off',
    "vue/comment-directive": ["error", {
      "reportUnusedDisableDirectives": false
    }]
  }
}
