module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Melika Tursic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Melika Tursic, photographer' },
      { name: 'keywords', content: 'Melika, Photography, Weddings, Photo, Portraits' },
      { itemprop: 'name', content: 'Walter, Your strategic BIM partner' },
      { itemprop: 'description', content: 'Your strategic BIM partner' },
      { itemprop: 'image', content: '/walter.png' },

      { name: 'twitter:card', content: '/walter.png' },
      { name: 'twitter:site', content: '@walter' },
      { name: 'twitter:title', content: 'Walter, Your strategic BIM partner' },
      { name: 'twitter:description', content: 'Your strategic BIM partner' },
      { name: 'twitter:creator', content: '@walter' },
      { name: 'twitter:image:src', content: '/walter.png' },

      { hid: 'og:title', property: 'og:title', content: 'Walter, Your strategic BIM partner' },
      { hid: 'og:url', property: 'og:url', content: 'http://walter.ba/' },
      { hid: 'og:image', property: 'og:image', content: 'http://walter.ba' },
      { hid: 'og:description', property: 'og:description', content: 'Your strategic BIM partner' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Walter' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#8bcbc8' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [
              {removeDoctype: true},
              {removeComments: true}
            ]
          }
        }
      })
    }
  },
  modules: [
    '@nuxtjs/workbox',
    '@nuxtjs/pwa',
    '@nuxtjs/manifest',
    '@nuxtjs/icon',
    '@nuxtjs/sitemap'
  ],
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://www.melikatursic.com/.*',
        handler: 'cacheFirst',
        method: 'GET'
      }
    ]
  },
  manifest: {
    'name': 'Melika Tursic',
    'short_name': 'Melika',
    'theme_color': '#469fc1',
    'background_color': '#ffffff',
    'display': 'standalone',
    'Scope': '/',
    'start_url': '/',
    'splash_pages': null
  },
  icon: {},
  sitemap: {
    hostname: 'https://www.melikatursic.com',
    cacheTime: 1000 * 60 * 15,
    generate: true
  },
  vendor: [
    'axios',
    'vuex',
    'lodash',
    'moment'
  ],
  css: [
    'swiper/dist/css/swiper.css',
    '~/assets/styles/variables.scss',
    '~/assets/styles/mixins.scss',
    '~/assets/styles/main.scss'
  ],
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/localStorage.js', ssr: false }
  ]
}

