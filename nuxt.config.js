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
      { itemprop: 'name', content: 'Melika Tursic, Photographer' },
      { itemprop: 'description', content: 'Melika Tursic, Photographer' },
      { itemprop: 'image', content: '/icon.png' },

      { name: 'twitter:card', content: '/icon.png' },
      { name: 'twitter:site', content: '@melikatursic' },
      { name: 'twitter:title', content: 'Melika Tursic, Photographer' },
      { name: 'twitter:description', content: 'Melika Tursic, Photographer' },
      { name: 'twitter:creator', content: '@melikatursic' },
      { name: 'twitter:image:src', content: '/icon.png' },

      { hid: 'og:title', property: 'og:title', content: 'Melika Tursic, Photographer' },
      { hid: 'og:url', property: 'og:url', content: 'https://melika.surge.sh/' },
      { hid: 'og:image', property: 'og:image', content: 'https://melika.surge.sh/' },
      { hid: 'og:description', property: 'og:description', content: 'Melika Tursic, Photographer' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Melika' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.1/css/solid.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.1/css/brands.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.1/css/fontawesome.css' }
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
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/lazyLoad.js', ssr: false }
  ]
}

