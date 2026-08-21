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
  // (si está dentro de un grupo como Gente o Cosas prácticas, ese grupo
  // se abre solo para que se vea el enlace activo).
  var aquí = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (enlace) {
    var href = enlace.getAttribute("href");
    if (href === aquí) {
      enlace.classList.add("activo");
      var grupo = enlace.closest("li.submenu");
      if (grupo) grupo.classList.add("abierto");
    }
  });

  // Grupos del menú (Gente, Cosas prácticas): se expanden/colapsan al
  // pulsarlos, sin navegar ni cerrar el resto del menú.
  document.querySelectorAll(".submenu-toggle").forEach(function (boton) {
    boton.addEventListener("click", function () {
      var li = boton.closest("li.submenu");
      if (li) li.classList.toggle("abierto");
    });
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

  // Recordatorio semanal: los domingos a partir de las 16:00, aviso para
  // residente y staff de que se apunten a las comidas de la semana.
  // "Hecho" lo oculta hasta el domingo siguiente; "Recordarme más tarde"
  // no guarda nada, así que vuelve a salir la próxima vez que entren,
  // hasta que lo marquen como hecho.
  (function () {
    if (typeof CMP_AUTH === "undefined") return;
    var rol = CMP_AUTH.rolReal();
    if (rol !== "residente" && rol !== "staff") return;

    var ahora = new Date();
    var esDomingoTarde = ahora.getDay() === 0 && ahora.getHours() >= 16;
    if (!esDomingoTarde) return;

    var CLAVE = "cmp2627_recordatorio_comidas_semana";
    var pad = function (n) { return String(n).padStart(2, "0"); };
    var hoyISO = ahora.getFullYear() + "-" + pad(ahora.getMonth() + 1) + "-" + pad(ahora.getDate());

    var yaHecho = false;
    try {
      yaHecho = localStorage.getItem(CLAVE) === hoyISO;
    } catch (e) {
      // localStorage no disponible: se muestra igualmente
    }
    if (yaHecho) return;

    var overlay = document.createElement("div");
    overlay.className = "recordatorio-overlay";
    overlay.innerHTML =
      '<div class="recordatorio-caja" role="dialog" aria-modal="true" aria-labelledby="recordatorio-titulo">' +
        '<h2 id="recordatorio-titulo">Apúntate a las comidas</h2>' +
        '<p>Recuerda apuntarte a las comidas de la semana en la app de comidas antes de que se cierre el plazo.</p>' +
        '<div class="recordatorio-botones">' +
          '<button type="button" class="boton" id="recordatorio-hecho">Hecho</button>' +
          '<button type="button" class="recordatorio-boton-luego" id="recordatorio-luego">Recordarme más tarde</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    document.getElementById("recordatorio-hecho").addEventListener("click", function () {
      try {
        localStorage.setItem(CLAVE, hoyISO);
      } catch (e) {
        // localStorage no disponible: no se puede recordar, volverá a salir
      }
      overlay.remove();
    });

    document.getElementById("recordatorio-luego").addEventListener("click", function () {
      overlay.remove();
    });
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
