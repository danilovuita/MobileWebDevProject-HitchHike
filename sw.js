self.addEventListener('install', async event => {
    console.log('install event')
});

self.addEventListener('fetch', async event =>{
    const req = event.request;

    if(/.*(json)$/.test(req.url)) {
        event.respondWith(networkFirst(req));
    } else {
    event.respondWith(cacheFirst(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || networkFirst(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try{
        const fresh = await fetch(req);
        cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cachedResponse = await cache.match(req);
        return cachedResponse;
     }
}

const cacheName = "HitchHike";
const staticAssets = [
    './index.html',
    './hikes.html',
    './emergency.html',
    './landing.html',
    '/index.js',
    './js/displayCity.js',
    './js/displayCountry.js',
    './js/toggledrop.js',
    './css/index.css',
    './css/hikes.css',
    './css/style.css'
];

self.addEventListener('install', async event =>{
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});