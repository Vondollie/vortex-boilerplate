export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['~assets/css/global.css', '~assets/less/global.less'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~plugins/nuxt-client-init', mode: 'client' },
    { src: '~plugins/axios' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-izitoast',
      {
        position: 'bottomLeft',
        transitionIn: 'bounceInRight',
        transitionOut: 'fadeOutRight',
      },
    ],
    [
      '@nuxtjs/pwa',
      {
        meta: false,
        icon: false,
        workbox: {
          importScripts: [
            // ...
            '/firebase-auth-sw.js',
          ],
          // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
          // only set this true for testing and remember to always clear your browser cache in development
          dev: false,
        },
      },
    ],
    [
      '@nuxtjs/firebase',
      {
        // Required:
        config: {
          development: {
            apiKey: 'AIzaSyBtf8H9U6pzjsLMJLNs1p86e_95B4ASYH4',
            authDomain: 'vortex-4b6db.firebaseapp.com',
            databaseURL: 'https://vortex-4b6db.firebaseio.com',
            projectId: 'vortex-4b6db',
            storageBucket: '',
            messagingSenderId: '951093526823',
            appId: '1:951093526823:web:691535202ea0b370',
          },
          production: {
            apiKey: 'AIzaSyBtf8H9U6pzjsLMJLNs1p86e_95B4ASYH4',
            authDomain: 'vortex-4b6db.firebaseapp.com',
            databaseURL: 'https://vortex-4b6db.firebaseio.com',
            projectId: 'vortex-4b6db',
            storageBucket: '',
            messagingSenderId: '951093526823',
            appId: '1:951093526823:web:691535202ea0b370',
          },
        },
        services: {
          auth: {
            persistence: 'local', // default

            // it is recommended to configure either a mutation or action but you can set both
            initialize: {
              // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
            },

            ssr: true, // false default
          },
        },
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
