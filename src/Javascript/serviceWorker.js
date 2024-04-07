const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '../App.jsx',
  '../Main.jsx',
  '../Components/Services.jsx',
  '../Components/Rapid.jsx',
  '../Components/WaveDivider.jsx',
  '../Components/Footer.jsx',
  '../Sass/WaveDivider.css',
  '../Sass/Footer.css',
  '../Sass/Services.css',
  '../Sass/Rapid.css',
  '../Sass/App.css',
  '../Sass/Main.css',
  '../Sass/Home.css',
  '../Sass/Headline.css',
  '../Sass/Btsolve.css',
  '../Sass/Rapid1.css',
  '../Sass/Grid.css',
  '../Sass/Box.css',
  '../Sass/AOS.css',
  '../Sass/Home.css',
  
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