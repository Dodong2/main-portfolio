self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-app-cache').then((cache) => {
        return cache.addAll([
          '/favicon.svg',
          '/favicon.ico',
          '/robots.txt',
          '/apple-touch-icon.png',
          '/icons/pwa-icon.svg',
          '/icons/pwa-192x192.png',
          '/icons/pwa-512x512.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  