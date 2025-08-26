self.addEventListener('install',e=>{e.waitUntil(caches.open('hehku-v5').then(c=>c.addAll(['./','./index.html','./manifest.json','./service-worker.js','./icon-192.png','./icon-512.png'])))});
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
