self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('burtons-spotter-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/app.js',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});

