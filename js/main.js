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
