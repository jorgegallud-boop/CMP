// CMP 26-27 — service worker mínimo
//
// Objetivo: que la web se pueda "instalar" como app (PWA) y siga
// funcionando, aunque sea de forma limitada, sin conexión.
//
// Estrategia deliberadamente sencilla: red primero (para no servir
// contenido desactualizado mientras la web sigue cambiando a menudo) y
// caché como último recurso si no hay conexión. No se precarga nada al
// instalar: la caché se va rellenando con lo que el usuario va visitando.
//
// Si algún día cambias mucho el sitio y quieres forzar que todo el mundo
// reciba lo nuevo de inmediato, sube el número de CACHE_VERSION.

var CACHE_VERSION = "cmp2627-v1";

self.addEventListener("install", function (evento) {
  self.skipWaiting();
});

self.addEventListener("activate", function (evento) {
  evento.waitUntil(
    caches.keys().then(function (nombres) {
      return Promise.all(
        nombres
          .filter(function (nombre) { return nombre !== CACHE_VERSION; })
          .map(function (nombre) { return caches.delete(nombre); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (evento) {
  // Solo GET del propio sitio (deja pasar sin tocar los POST de los
  // formularios y cualquier petición a otros dominios, como Apps Script).
  if (evento.request.method !== "GET" || new URL(evento.request.url).origin !== location.origin) {
    return;
  }

  evento.respondWith(
    fetch(evento.request)
      .then(function (respuesta) {
        var copia = respuesta.clone();
        caches.open(CACHE_VERSION).then(function (cache) {
          cache.put(evento.request, copia);
        });
        return respuesta;
      })
      .catch(function () {
        return caches.match(evento.request);
      })
  );
});
