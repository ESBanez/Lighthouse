const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/App.jsx',                // Adjust path if needed
  '/Main.jsx',
  '/Pages/Home.jsx',

  '/Components/Btsolve2.jsx',
  '/Components/Divider.jsx',
  '/Components/FooterKen.jsx',
  '/Components/LighthousePart.jsx',
  '/Components/MissionVision.jsx',
  '/Components/Navbar.jsx',
  '/Components/ProductCarousel.jsx',
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

  '/public/assets/lighthousewebvid.webm',
  '/public/assets/backvid.mp4',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request because it's a one-time use object
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response because it's a one-time use object
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
  );
});
