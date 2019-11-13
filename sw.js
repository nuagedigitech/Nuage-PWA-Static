importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.cacheFirst({
    cacheName: 'js-cache',
  }),
);

workbox.routing.registerRoute(
  new RegExp('sw.js'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'swjs-cache',
  }),
);

workbox.routing.registerRoute(
  /\.(?:css|html|ttf)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);

workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|webp|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'image-cache',
  })
);
