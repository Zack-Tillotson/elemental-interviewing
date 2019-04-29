importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

import routes from './routes';

const appRoutes = routes.map(route => route.path);
const appImages = [
  '/assets/comic_200.webp',
  '/assets/resume-180.webp',
  '/assets/phone-180.webp',
  '/assets/interview-180.webp',
  '/assets/follow-180.webp',
];

// Serving assets /////////////

workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'fonts-stylesheets',
  })
);

workbox.routing.registerRoute(
  /^https:\/\/www\.googletagmanager\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'analytics',
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'app-images',
  })
);

workbox.routing.registerRoute(
  /\/$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'app-pages',
  })
);

workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'app-js',
  })
);

// Preloading assets ///////////////


function preloadApp() {
  const appPromise = caches.open('app-pages')
    .then(cache => cache.addAll(appRoutes));
  const imagePromise = caches.open('app-images')
    .then(cache => cache.addAll(appImages));

  return Promise.all([appPromise, imagePromise]);
}

self.addEventListener('install', function(event) {
  event.waitUntil(preloadApp());
});