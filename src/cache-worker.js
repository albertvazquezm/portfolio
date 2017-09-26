var CACHE_NAME = 'albertvazquez.es-v1';
var urlsToCache = [
  '/index.html',
  '/main-bundle.js',
  '/main-bundle.css',
  '/images'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});