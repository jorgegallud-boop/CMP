// Fecha del retiro mensual de staff: muestra automáticamente la fecha del
// próximo retiro (o la de hoy, si es hoy) según la lista de abajo, en vez
// de una fecha fija. Esta página es solo para staff (enlace visible solo
// en su submenú), así que usa las fechas "rtm sm" de la columna "sm" de
// la pestaña "calendar" del Excel (domingos) — no las "rtm" de la columna
// rs/c (jueves, retiro de residentes/colegiales, ese es circulos.html).
// EDITAR AQUÍ cada curso.
(function () {
  var FECHAS = [
    "2026-09-13",
    "2026-10-18",
    "2026-11-15",
    "2026-12-13",
    "2027-01-17",
    "2027-02-14",
    "2027-03-14",
    "2027-04-18",
    "2027-05-16",
    "2027-06-13"
  ];

  var NOMBRES_MES = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

  function formatear(fecha) {
    return fecha.getDate() + " de " + NOMBRES_MES[fecha.getMonth()] + " de " + fecha.getFullYear();
  }

  function renderizar() {
    var elFecha = document.getElementById("retiro-fecha");
    if (!elFecha) return;

    var hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    var proxima = null;
    for (var i = 0; i < FECHAS.length; i++) {
      var partes = FECHAS[i].split("-");
      var fecha = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
      if (fecha >= hoy) {
        proxima = fecha;
        break;
      }
    }

    window.CMP_RETIRO_PROXIMO = proxima;

    if (proxima) {
      elFecha.textContent = formatear(proxima);
    } else {
      elFecha.textContent = "Próxima fecha por anunciar";
    }
  }

  document.addEventListener("DOMContentLoaded", renderizar);
})();
