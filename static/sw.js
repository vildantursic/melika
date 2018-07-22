importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "melika",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.69f7f158b15df5ccb529.js",
    "revision": "a8a4602143dfb99fb2c5eb9646f7e3f9"
  },
  {
    "url": "/_nuxt/layouts_default.21ef6ef36d91b2f18e76.js",
    "revision": "9753afbd7afb25a922080c237c17a561"
  },
  {
    "url": "/_nuxt/manifest.311cd7112e32c8b6e8f5.js",
    "revision": "a6e992c278f2a3a8dabe550919cf4638"
  },
  {
    "url": "/_nuxt/pages_about_index.35cfe92f4ff251a0d5d0.js",
    "revision": "fd8b261c0a8065e0ebdc292be9bfbe8e"
  },
  {
    "url": "/_nuxt/pages_blog__id.9d57009ba784d0a4f3e1.js",
    "revision": "e77f45849a75e5d1ae013c8b80b57e36"
  },
  {
    "url": "/_nuxt/pages_blog_index.7a9569c048e56e882442.js",
    "revision": "90a907be66f75ac9675f7fb3e56062e2"
  },
  {
    "url": "/_nuxt/pages_contact_index.16515acb7c8e347b5400.js",
    "revision": "e5fe63c0e81c4e814e1c0ecf10f478d8"
  },
  {
    "url": "/_nuxt/pages_index.f711a5add74ee6f4b20a.js",
    "revision": "0f1878a37e1a4313ec7107f2566705da"
  },
  {
    "url": "/_nuxt/pages_portfolio__id.8cf7c6dc4c6d710a8e69.js",
    "revision": "02483243845c9252c4900837755e5893"
  },
  {
    "url": "/_nuxt/pages_portfolio_index.77405ecd99064cef79de.js",
    "revision": "bc4e21bfc7a371430a88e02353043cc8"
  },
  {
    "url": "/_nuxt/vendor.ec8f893c672bdcde1ead.js",
    "revision": "3bcf8f388aa1d597eea079dadfd26eb1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://www.melikatursic.com/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

