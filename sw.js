// Bathu Spa 3.0 — Service Worker (simple cache-first)
const CACHE = 'bathu-spa-v3-' + (self.crypto ? Date.now() : Math.random());
const ASSETS = [
  '/',
  '/index.html','/pricing.html','/services.html','/deep-clean.html','/premium-clean.html','/bag-waterproofing.html','/custom-lab.html',
  '/styles.css','/script.js','/data/pricing.json','/gallery.html','/book.html','/404.html'
];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>!k.startsWith('bathu-spa-v3-')).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e=>{
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(res=>res||fetch(e.request).then(r=>{
      const copy = r.clone(); caches.open(CACHE).then(c=>c.put(e.request, copy)); return r;
    }).catch(()=>caches.match('/404.html'))));
  }
});
