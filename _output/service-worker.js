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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d2015d3870518e6ea70c8d299959a69e"
  },
  {
    "url": "blog/index.html",
    "revision": "ab67103296a5bcaa64b6cd54d0e1acce"
  },
  {
    "url": "blog/post-with-embeds-and-images/index.html",
    "revision": "2ec7d4aa2053dd570229392cde140748"
  },
  {
    "url": "blog/simple-blog-post/index.html",
    "revision": "b44f4295ba38a5f558891480d8d77d86"
  },
  {
    "url": "blog/tag/all/index.html",
    "revision": "4bbc5fcaed80721f93602af1e7fb3021"
  },
  {
    "url": "blog/tag/code/index.html",
    "revision": "f865b13cd6cf49184c2417a87fe749de"
  },
  {
    "url": "blog/tag/content/index.html",
    "revision": "2ad1f61cb8ffcd8a749c0a860fa98b84"
  },
  {
    "url": "blog/tag/embeds/index.html",
    "revision": "60904e4d32982d4e3c1a23ba9318b219"
  },
  {
    "url": "blog/tag/images/index.html",
    "revision": "5e25011e6e8cae14fed59694f0b9d3f5"
  },
  {
    "url": "blog/tag/native-elements/index.html",
    "revision": "707458e21cfa5edb16e1706aa893fa6e"
  },
  {
    "url": "blog/tag/posts/index.html",
    "revision": "4747f2322447f23c461027a6e538881a"
  },
  {
    "url": "blog/tag/sample-content/index.html",
    "revision": "0d257220e089e1b664558dabf411931f"
  },
  {
    "url": "index.html",
    "revision": "034900657553054deaef90cec60aca33"
  },
  {
    "url": "sample-page/index.html",
    "revision": "b04435c09a5405a186750fc822f8e1e8"
  },
  {
    "url": "static/cover.jpg",
    "revision": "7f551e3c3140de0bbc18a9f88fd80298"
  },
  {
    "url": "static/favicon.png",
    "revision": "af09a4edeaaa2ff1aa27654582f55b5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
