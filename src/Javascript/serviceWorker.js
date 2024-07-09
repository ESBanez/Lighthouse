const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '../App.jsx',
  '../Main.jsx',
  '../Pages/Home.jsx',

  '../Components/Btsolve2.jsx',
  '../Components/Divider.jsx',
  '../Components/FooterKen.jsx',
  '../Components/LighthousePart.jsx',
  '../Components/MissionVision.jsx',
  '../Components/Navbar.jsx',
  '../Components/ProductCarousel.jsx',
  '../Components/Rapid2.jsx',
  '../Components/RapidCarousel.jsx',
  '../Components/Testimonials.jsx',

  '../Sass/Bts.css',
  '../Sass/footerken.css',
  '../Sass/Headline.css',
  '../Sass/Home.css',
  '../Sass/LigthousePart.css',
  '../Sass/maincarousel.css',
  '../Sass/missionvision.css',
  '../Sass/mydivider.css',
  '../Sass/Navbar.css',
  '../Sass/productcarousel.scss',
  '../Sass/Rapid1.css',
  '../Sass/rapidcarousel.scss',
  '../Sass/Services.scss',
  '../Sass/Rapid.css',
  '../Sass/testimonials.css',
  
  // Add other static assets to cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
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