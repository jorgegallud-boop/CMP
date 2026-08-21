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

  // Portada: cada tarjeta solo se muestra si el rol tiene acceso (según su
  // atributo data-roles, lista separada por comas) — incluido Staff,
  // que en portada ve solo lo suyo, igual que los demás roles.
  if (typeof CMP_AUTH !== "undefined") {
    var rolActual = CMP_AUTH.rolReal();
    document.querySelectorAll(".tarjeta[data-roles]").forEach(function (tarjeta) {
      var roles = tarjeta.getAttribute("data-roles").split(",");
      if (roles.indexOf(rolActual) === -1) {
        tarjeta.style.display = "none";
      }
    });

    // Menú (☰ arriba a la derecha): igual, salvo Staff, que ahí sí ve
    // todas las opciones sin filtrar.
    if (rolActual !== "staff") {
      document.querySelectorAll(".main-nav li[data-roles]").forEach(function (item) {
        var roles = item.getAttribute("data-roles").split(",");
        if (roles.indexOf(rolActual) === -1) {
          item.style.display = "none";
        }
      });
    }

    // Contenido dentro de una página (por ejemplo, secciones de Bienvenida):
    // igual que la portada, se filtra para todos los roles según data-roles.
    document.querySelectorAll(".seccion[data-roles]").forEach(function (seccion) {
      var roles = seccion.getAttribute("data-roles").split(",");
      if (roles.indexOf(rolActual) === -1) {
        seccion.style.display = "none";
      }
    });
  }

  // Portada: el botón de Bienvenida solo tiene sentido antes de empezar el
  // curso — se muestra en agosto y hasta el 8 de septiembre; el día 9 de
  // septiembre se oculta automáticamente y no vuelve a aparecer hasta el
  // siguiente mes de agosto.
  (function () {
    var tarjeta = document.getElementById("tarjeta-bienvenida");
    if (!tarjeta) return;
    var hoy = new Date();
    var mes = hoy.getMonth() + 1;
    var dia = hoy.getDate();
    var visible = mes === 8 || (mes === 9 && dia <= 8);
    if (!visible) {
      tarjeta.style.display = "none";
    }
  })();

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
