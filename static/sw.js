importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "melika",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.f5e83da8cf33fdc013a4.js",
    "revision": "1c66ef1315bfe761054edf50c82d75b3"
  },
  {
    "url": "/_nuxt/layouts_default.f9d55da467e0896a2542.js",
    "revision": "a6390b25d042ad8663d3f99efdd72e6a"
  },
  {
    "url": "/_nuxt/manifest.24d808a78c2458d0df97.js",
    "revision": "0ca63962287dce35940a77922a340c73"
  },
  {
    "url": "/_nuxt/pages_about_index.e02210bd300b51cffac9.js",
    "revision": "0af3ba596c9d2a5b1c99253964cb8a55"
  },
  {
    "url": "/_nuxt/pages_blog__id.a5e1e4fdca5abe20f567.js",
    "revision": "bf4b992b206af77f90b22ec2bbfb1a42"
  },
  {
    "url": "/_nuxt/pages_blog_index.a57fa801c5ebbb116a53.js",
    "revision": "b1ae06573c46e04e98f8aaf332907e30"
  },
  {
    "url": "/_nuxt/pages_contact_index.829df437c609d3226a00.js",
    "revision": "abe3e009c9ce97d6c723256159af45cf"
  },
  {
    "url": "/_nuxt/pages_index.63dc74fbe41a7f98ff74.js",
    "revision": "aada9477ffdc1f187c79f86321093ee9"
  },
  {
    "url": "/_nuxt/pages_portfolio__id.c7cd4389f4d3e48a8c6f.js",
    "revision": "52d965ba050a69da3c60f8fbfc6dea72"
  },
  {
    "url": "/_nuxt/pages_portfolio_index.726c4ecfc08606a16fe5.js",
    "revision": "abb5b2baf748416fe43eca3c56f35823"
  },
  {
    "url": "/_nuxt/vendor.21c750ab8e4813d540d8.js",
    "revision": "ba3bc8f17ac4b473f10a2009a59746bb"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('https://www.melikatursic.com/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

