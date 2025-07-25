
const CACHE_NAME = 'jammer-cache';
const BASE_PATH = '/jammer_endurance_app/';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        BASE_PATH,
        BASE_PATH + 'index.html',
        BASE_PATH + 'manifest.json',
        BASE_PATH + 'service-worker.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
