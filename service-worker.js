/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "34512f451f34905d5387f7c57a0b13e5"
  },
  {
    "url": "about.html",
    "revision": "3a6a42e573f27abf354e837cb214c484"
  },
  {
    "url": "article.html",
    "revision": "e3e59585a31a8eba45ba756b1728e60c"
  },
  {
    "url": "assets/css/0.styles.7337000e.css",
    "revision": "0897120a913520c94da76e560352706f"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/ThinkingFace.png",
    "revision": "9c0eaf159df1101d06e7d99398a1692b"
  },
  {
    "url": "assets/js/10.44c7fa60.js",
    "revision": "d3d38bc0238bb236980d4becc8e18309"
  },
  {
    "url": "assets/js/11.6338df1a.js",
    "revision": "2969aec97c42cc18a1ffdc1f54e92636"
  },
  {
    "url": "assets/js/12.63393cb6.js",
    "revision": "c74870cfd13214611ac61db8a0fefb05"
  },
  {
    "url": "assets/js/13.a783f504.js",
    "revision": "d3e74fb11523235163c02f525727797a"
  },
  {
    "url": "assets/js/14.828ae6ca.js",
    "revision": "5c6c0ee1768778508ecce94b37163ff3"
  },
  {
    "url": "assets/js/15.75ad2d9e.js",
    "revision": "28249e098e6871a8a6546af1e95e6878"
  },
  {
    "url": "assets/js/16.09cdf7ee.js",
    "revision": "b95ab736470cfff0faa0a2efd2e4fcdb"
  },
  {
    "url": "assets/js/17.63bf99ad.js",
    "revision": "25cde9abc37f1f6143abaacdd5cde5b9"
  },
  {
    "url": "assets/js/18.7990ec40.js",
    "revision": "5c64a2ef8858239fdf3d73db7e6e1c67"
  },
  {
    "url": "assets/js/19.cfd6e7f0.js",
    "revision": "f193a377dd50a1bcb6834bd852319d44"
  },
  {
    "url": "assets/js/2.e27ea19b.js",
    "revision": "9690d8b66b7833463e8cf29d85de0fe0"
  },
  {
    "url": "assets/js/20.ab9ef39e.js",
    "revision": "1661eb9f64c6f2e8349ae2bf1274dbf7"
  },
  {
    "url": "assets/js/21.d1935723.js",
    "revision": "59a2c46b8fc8b87958a20aef1ff1710e"
  },
  {
    "url": "assets/js/22.6dee95a6.js",
    "revision": "7d63d33ef1f24644d5ed1a6aafe87692"
  },
  {
    "url": "assets/js/23.bbb79109.js",
    "revision": "39147b6121341d17910ed41baaedfa1d"
  },
  {
    "url": "assets/js/24.4d1093ba.js",
    "revision": "3de222741a67bf4c146c8b87bdeed135"
  },
  {
    "url": "assets/js/25.a6b854e2.js",
    "revision": "1fa9fee0f0440ccd0370cc15cf2412f8"
  },
  {
    "url": "assets/js/26.9af5a955.js",
    "revision": "59421d8a0bb5a2b2457e32e0695a26a3"
  },
  {
    "url": "assets/js/27.7940d097.js",
    "revision": "13562cccd2eb1363ee538dcefbae943d"
  },
  {
    "url": "assets/js/28.dd6caede.js",
    "revision": "ce72834f73057354c394f702424c8885"
  },
  {
    "url": "assets/js/29.473c7663.js",
    "revision": "da51c01cb37a24c999f27b6ccf4b71db"
  },
  {
    "url": "assets/js/3.ca5001d0.js",
    "revision": "ec86968fedb075c628ca2896cf482d04"
  },
  {
    "url": "assets/js/30.5637b320.js",
    "revision": "5d210b5089ac0fd6b60518e5a974576a"
  },
  {
    "url": "assets/js/4.445e1003.js",
    "revision": "25a58b25ed7ed5193b64a003aad3b5b7"
  },
  {
    "url": "assets/js/5.bc7a62b6.js",
    "revision": "d9c57d2542ca33ab5f7f9df91640d33d"
  },
  {
    "url": "assets/js/6.a3138eb1.js",
    "revision": "305179d799c78ad10ecf498e4115c0e0"
  },
  {
    "url": "assets/js/7.baea742e.js",
    "revision": "b371c8051fe21a0698777e73dbbcd1eb"
  },
  {
    "url": "assets/js/8.fa266e0e.js",
    "revision": "2b8e6b3d9ff50741fe90b44efed86837"
  },
  {
    "url": "assets/js/9.2dc299f0.js",
    "revision": "4f9d1af306e639e32f7c061abec0726d"
  },
  {
    "url": "assets/js/app.d9d2096b.js",
    "revision": "95d12f2ce6a13a9e24a3b15c4fbb4710"
  },
  {
    "url": "countup.html",
    "revision": "d20b23b32d9cf5f6a250c79bd1eb41e2"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "d67a6412341f2f6f045de093f41d92ac"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "42f69807be8fafa883d5b26b10536ec1"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "dbdfa612dd65afeb49458fc435b98e25"
  },
  {
    "url": "css/index.html",
    "revision": "7eeaa250d2c88069fee0b461a8464aae"
  },
  {
    "url": "html/h-aaa.html",
    "revision": "dc91d59a9bc8e3ccb20f63fdc3cb4efa"
  },
  {
    "url": "html/h-bbb.html",
    "revision": "4900da86604cde71e450e3ed43bfe413"
  },
  {
    "url": "html/h-ccc.html",
    "revision": "15cbff17770a245b39d8a0eaab372091"
  },
  {
    "url": "html/index.html",
    "revision": "fb9f9f3b9b56075d8e6bf76c9d69d047"
  },
  {
    "url": "index.html",
    "revision": "fc9850643c0ba856ec23a90e7887c0d5"
  },
  {
    "url": "javascript/index.html",
    "revision": "5d6010fe0d3eecdda00b5272fec90cd4"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "6b8392a9ae76f57c0e4e11014065ed7d"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "33894eb555dba7f132dda3da057cb1fe"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "d0284553eb06006781922b9129e6908e"
  },
  {
    "url": "Java基础知识.html",
    "revision": "258082356c9c56afe5dafadbc4e6b3d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
