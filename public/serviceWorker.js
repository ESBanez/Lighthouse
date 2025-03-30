const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/App.jsx',
  '/Main.jsx',

  '/Components/Btsolve2.jsx',
  '/Components/Divider.jsx',
  '/Components/FooterKen.jsx',
  '/Components/LighthousePart.jsx',
  '/Components/MissionVision.jsx',
  '/Components/Navbar.jsx',
  '/Components/Rapid2.jsx',
  '/Components/RapidCarousel.jsx',
  '/Components/Testimonials.jsx',

  '/Sass/Bts.css',
  '/Sass/footerken.css',
  '/Sass/Headline.css',
  '/Sass/Home.css',
  '/Sass/LigthousePart.css',
  '/Sass/maincarousel.css',
  '/Sass/missionvision.css',
  '/Sass/mydivider.css',
  '/Sass/Navbar.css',
  '/Sass/productcarousel.scss',
  '/Sass/Rapid1.css',
  '/Sass/rapidcarousel.scss',
  '/Sass/Services.scss',
  '/Sass/Rapid.css',
  '/Sass/testimonials.css',

  '/lighthousewebvid.mp4',
  '/backvid.mp4',
];


// Install event - Cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate event - Cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event - Serve cached assets
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
