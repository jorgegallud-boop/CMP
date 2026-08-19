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

  // Portada: la tarjeta de Bienvenida solo se muestra durante el 6-8 de septiembre de 2026
  var tarjetaBienvenida = document.getElementById("tarjeta-bienvenida");
  if (tarjetaBienvenida) {
    var hoy = new Date();
    var inicioBienvenida = new Date(2026, 8, 6); // 6 de septiembre de 2026
    var finBienvenida = new Date(2026, 8, 8, 23, 59, 59); // 8 de septiembre de 2026, fin del día
    if (hoy < inicioBienvenida || hoy > finBienvenida) {
      tarjetaBienvenida.style.display = "none";
    }
  }

  // Portada: la tarjeta de Ficha de residente se oculta en cuanto el usuario ya la ha enviado
  var tarjetaFicha = document.getElementById("tarjeta-ficha");
  if (tarjetaFicha) {
    try {
      if (localStorage.getItem("cmp2627_ficha_enviada") === "1") {
        tarjetaFicha.style.display = "none";
      }
    } catch (e) {
      // localStorage no disponible (modo privado, etc.): se deja la tarjeta visible
    }
  }
});
