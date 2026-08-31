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

    // Menú (☰ arriba a la derecha): se filtra igual para todos los roles,
    // incluido Staff — ya no hace falta que vea todo lo de residentes y
    // colegiales ahí (sigue viendo lo suyo propio, más lo que tenga
    // explícitamente marcado como "...,staff", como Ficha de residente
    // o Ficha de colegial).
    document.querySelectorAll(".main-nav li[data-roles]").forEach(function (item) {
      var roles = item.getAttribute("data-roles").split(",");
      if (roles.indexOf(rolActual) === -1) {
        item.style.display = "none";
      }
    });

    // Contenido dentro de una página (por ejemplo, secciones de Bienvenida):
    // igual que la portada, se filtra para todos los roles según data-roles.
    document.querySelectorAll(".seccion[data-roles]").forEach(function (seccion) {
      var roles = seccion.getAttribute("data-roles").split(",");
      if (roles.indexOf(rolActual) === -1) {
        seccion.style.display = "none";
      }
    });

    // Filas de tabla (por ejemplo, las de "los de casa"/staff en
    // residentes.html): igual que arriba, pero fila a fila.
    document.querySelectorAll("tr[data-roles]").forEach(function (fila) {
      var roles = fila.getAttribute("data-roles").split(",");
      if (roles.indexOf(rolActual) === -1) {
        fila.style.display = "none";
      }
    });

    // Columnas de tabla (por ejemplo, "Habitación" en residentes.html,
    // visible solo para Staff): igual que las filas, pero celda a celda
    // (cabecera th y celdas td de esa columna, todas con el mismo data-roles).
    document.querySelectorAll("th[data-roles], td[data-roles]").forEach(function (celda) {
      var roles = celda.getAttribute("data-roles").split(",");
      if (roles.indexOf(rolActual) === -1) {
        celda.style.display = "none";
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
  // - "Hecho" lo oculta hasta el domingo siguiente.
  // - Solo sale la primera vez que se entra: al navegar por dentro de la
  //   web no vuelve a aparecer.
  // - "Recordarme más tarde" (o simplemente seguir navegando) hace que
  //   no vuelva a salir hasta pasada una hora, o hasta que se entre de
  //   nuevo más adelante en otra visita — lo que ocurra antes.
  (function () {
    if (typeof CMP_AUTH === "undefined") return;
    var rol = CMP_AUTH.rolReal();
    if (rol !== "residente" && rol !== "staff") return;

    var ahora = new Date();
    var esDomingoTarde = ahora.getDay() === 0 && ahora.getHours() >= 16;
    if (!esDomingoTarde) return;

    var CLAVE_SEMANA = "cmp2627_recordatorio_comidas_semana";
    var CLAVE_VISTO = "cmp2627_recordatorio_comidas_visto_en";
    var MINUTOS_ESPERA = 60;
    var pad = function (n) { return String(n).padStart(2, "0"); };
    var hoyISO = ahora.getFullYear() + "-" + pad(ahora.getMonth() + 1) + "-" + pad(ahora.getDate());

    var yaHechoEstaSemana = false;
    try {
      yaHechoEstaSemana = localStorage.getItem(CLAVE_SEMANA) === hoyISO;
    } catch (e) {
      // localStorage no disponible: se muestra igualmente
    }
    if (yaHechoEstaSemana) return;

    // sessionStorage se borra al cerrar la pestaña, así que en una visita
    // nueva vuelve a salir de todas formas; el margen de tiempo cubre el
    // caso de dejarte la misma pestaña abierta un buen rato.
    var vistoRecientemente = false;
    try {
      var visto = sessionStorage.getItem(CLAVE_VISTO);
      if (visto) {
        var minutosPasados = (Date.now() - parseInt(visto, 10)) / 60000;
        vistoRecientemente = minutosPasados < MINUTOS_ESPERA;
      }
    } catch (e) {
      // sessionStorage no disponible: se muestra igualmente
    }
    if (vistoRecientemente) return;

    try {
      sessionStorage.setItem(CLAVE_VISTO, String(Date.now()));
    } catch (e) {
      // sessionStorage no disponible: no pasa nada, solo puede volver a
      // salir antes de lo esperado al navegar
    }

    var overlay = document.createElement("div");
    overlay.className = "recordatorio-overlay";
    overlay.innerHTML =
      '<div class="recordatorio-caja" role="dialog" aria-modal="true" aria-labelledby="recordatorio-titulo">' +
        '<h2 id="recordatorio-titulo">Apúntate a las comidas</h2>' +
        '<p>Recuerda apuntarte a las comidas de la semana en la app de comidas antes de que se cierre el plazo.</p>' +
        '<div class="recordatorio-botones">' +
          '<a href="https://compositor.org/comidas/penafiel.php" target="_blank" rel="noopener" class="boton" id="recordatorio-hecho">Voy a ello</a>' +
          '<button type="button" class="recordatorio-boton-luego" id="recordatorio-luego">Recordarme más tarde</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    // "Voy a ello" lleva a la app de comidas y cuenta como hecho: no
    // vuelve a recordarlo hasta el domingo siguiente (igual que antes
    // hacía "Hecho").
    document.getElementById("recordatorio-hecho").addEventListener("click", function () {
      try {
        localStorage.setItem(CLAVE_SEMANA, hoyISO);
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
