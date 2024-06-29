// Define cache names for different types of assets
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/dong.png',
  '/index.html', // Add other HTML files as needed
  '/app.js',     // Add your main JS bundle
  '/app.jsx',     // Add your main JS bundle
  '/App.css', // Add your main CSS file
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/masked-icon.svg',
  '/appcon.png',
  '/dong.png',
  '/bao.png',
  '/budget tracker.png',
  '/catfact.png',
  '/cert-AppCon.png',
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
  // Add other assets you want to cache
];

// Install event listener: cache all necessary assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event listener: clean up old caches if necessary
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event listener: serve assets from cache if available, otherwise fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Fetch from network
        return fetch(event.request);
      })
  );
});
