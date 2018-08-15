importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "melika",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.86e214fc4a220918b76d.js",
    "revision": "0753db016febef7851a384580bdf6f2c"
  },
  {
    "url": "/_nuxt/layouts_default.175bd7404335743e7edc.js",
    "revision": "d23146598954aca0d12611d4f1903882"
  },
  {
    "url": "/_nuxt/manifest.976966840e7802821059.js",
    "revision": "0c5869dec91e746bdbf1460c083d86c8"
  },
  {
    "url": "/_nuxt/pages_about_index.941dc06468a8217100df.js",
    "revision": "52ca88bda109e87188eac5c7d1975784"
  },
  {
    "url": "/_nuxt/pages_blog__id.1a5616f481f3fbcaec53.js",
    "revision": "6ed2b6b4760e2f13fc9036af04a79e16"
  },
  {
    "url": "/_nuxt/pages_blog_index.2c506e9342256a7cffea.js",
    "revision": "ceed2ef175b365842d2a6959739effd0"
  },
  {
    "url": "/_nuxt/pages_contact_index.45a5402ddc436655a865.js",
    "revision": "5d0466ad67851550240c676a650c05ab"
  },
  {
    "url": "/_nuxt/pages_index.84c9a86cf9710e9db300.js",
    "revision": "7fb18dc832fbb223f7730637c99208b1"
  },
  {
    "url": "/_nuxt/pages_portfolio__id.90fbb62dababd4aba9ef.js",
    "revision": "10eb4ecc5bc86b20ea04b2feaf53a8a5"
  },
  {
    "url": "/_nuxt/pages_portfolio_index.95413a594eba29ba7610.js",
    "revision": "284cb8607b2ad64d6f24e3d061db9376"
  },
  {
    "url": "/_nuxt/vendor.21c750ab8e4813d540d8.js",
    "revision": "ba3bc8f17ac4b473f10a2009a59746bb"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://www.melikatursic.com/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

