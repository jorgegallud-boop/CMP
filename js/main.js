// CMP 26-27 — registro del service worker (permite instalar la web como app)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("service-worker.js").catch(function () {
      // Si falla (por ejemplo, abierto como archivo local sin servidor), no pasa nada.
    });
  });
}

// CMP 26-27 — comportamiento del menú de navegación en móvil
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var abierto = nav.classList.toggle("abierto");
      toggle.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
  }

  // Marca como activo el enlace del menú que corresponde a la página actual
  var aquí = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (enlace) {
    var href = enlace.getAttribute("href");
    if (href === aquí) {
      enlace.classList.add("activo");
    }
  });

  // Portada y menú: cada tarjeta/enlace solo se muestra si el rol tiene
  // acceso (según su atributo data-roles, lista separada por comas).
  // Dirección los ve todos, sin filtrar.
  if (typeof CMP_AUTH !== "undefined" && CMP_AUTH.rolReal() !== "direccion") {
    var rolActual = CMP_AUTH.rolReal();
    document.querySelectorAll(".tarjeta[data-roles], .main-nav li[data-roles]").forEach(function (elemento) {
      var roles = elemento.getAttribute("data-roles").split(",");
      if (roles.indexOf(rolActual) === -1) {
        elemento.style.display = "none";
      }
    });
  }

  // Portada: las tarjetas de fichas se ocultan en cuanto el usuario ya las ha enviado
  [
    { id: "tarjeta-ficha", clave: "cmp2627_ficha_residente_enviada" },
    { id: "tarjeta-ficha-colegial", clave: "cmp2627_ficha_colegial_enviada" },
  ].forEach(function (ficha) {
    var tarjeta = document.getElementById(ficha.id);
    if (!tarjeta) return;
    try {
      if (localStorage.getItem(ficha.clave) === "1") {
        tarjeta.style.display = "none";
      }
    } catch (e) {
      // localStorage no disponible (modo privado, etc.): se deja la tarjeta visible
    }
  });
});
