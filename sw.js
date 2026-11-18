/* Mirtillo — service worker.
   Tiene in cache il guscio dell'app così si apre anche senza rete.
   La pagina la chiedo prima alla rete (per prendere gli aggiornamenti) e
   ripiego sulla copia salvata quando sei offline; icone e font dalla cache. */
const CACHE = 'mirtillo-v1';
const GUSCIO = [
  './',
  './index.html',
  './manifest.json',
  './icona-192.png',
  './icona-512.png',
  './icona-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(GUSCIO.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // la pagina: prima la rete, poi la copia in cache
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(r => {
          const copia = r.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copia));
          return r;
        })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  // tutto il resto: prima la cache, e intanto aggiorno
  e.respondWith(
    caches.match(req).then(hit => {
      const rete = fetch(req).then(r => {
        if (r && r.status === 200 && (r.type === 'basic' || r.type === 'cors')) {
          const copia = r.clone();
          caches.open(CACHE).then(c => c.put(req, copia));
        }
        return r;
      }).catch(() => hit);
      return hit || rete;
    })
  );
});
