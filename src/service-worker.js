// src/service-worker.js

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('castar-portfolio-cache').then((cache) => {
        return cache.addAll([
          '/favicon.svg',
          '/favicon.ico',
          '/robots.txt',
          '/apple-touch-icon.png',
          '/icons/pwa-icon.svg',
          '/icons/pwa-192x192.png',
          '/icons/pwa-512x512.png',
          '/appcon.png',
          '/bao.png',
          '/budget tracker.png',
          '/catfact.png',
          '/cert-AppCon.png',
          '/dong.png',
          '/php crud.png',
          '/port design.png',
          '/weather_app.png',
          '/img1.svg',
          '/img2.svg',
          '/img3.svg',
          '/img4.svg',
          '/img5.svg',
          '/img6.svg',
          '/img7.svg',
          '/img8.svg',
          '/img9.svg',
          '/img10.svg',
          '/img11.svg',
          '/img12.svg',
          '/img13.svg',
          '/img14.svg',
          // Add paths to all other important assets
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
  