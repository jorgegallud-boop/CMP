// CMP 26-27 — oculta automáticamente lo que ya ha pasado, tanto en el
// calendario como en Misas, para que solo se vea lo presente y lo que
// está por venir.
(function () {
  var MESES = {
    "enero": 1, "febrero": 2, "marzo": 3, "abril": 4, "mayo": 5, "junio": 6,
    "julio": 7, "agosto": 8, "septiembre": 9, "octubre": 10, "noviembre": 11, "diciembre": 12
  };

  function hoyISO() {
    var d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  // Calendario: cada .mes-bloque tiene una .cabecera-mes con el nombre del
  // mes (sin año) y dentro <li> con .evento-dia tipo "L 7" o "V 18–D 20".
  // El curso va de septiembre de un año a julio del siguiente: de
  // septiembre a diciembre es AÑO_INICIO, el resto AÑO_INICIO + 1.
  function ocultaCalendarioPasado() {
    var bloques = document.querySelectorAll(".mes-bloque");
    if (!bloques.length) return;
    var anioInicio = 2026; // curso 26-27
    var hoy = hoyISO();
    bloques.forEach(function (bloque) {
      var cabecera = bloque.querySelector(".cabecera-mes");
      if (!cabecera) return;
      var mes = MESES[cabecera.textContent.trim().toLowerCase()];
      if (!mes) return;
      var anio = mes >= 9 ? anioInicio : anioInicio + 1;
      var algunoVisible = false;
      bloque.querySelectorAll("li").forEach(function (li) {
        var span = li.querySelector(".evento-dia");
        if (!span) return;
        var numeros = span.textContent.match(/\d+/g);
        if (!numeros) return;
        // Para un rango ("V 18–D 20") toma el día final, para que el
        // evento siga visible mientras dure.
        var diaFin = parseInt(numeros[numeros.length - 1], 10);
        var fechaFin = anio * 10000 + mes * 100 + diaFin;
        if (fechaFin < hoy) {
          li.style.display = "none";
        } else {
          algunoVisible = true;
        }
      });
      bloque.style.display = algunoVisible ? "" : "none";
    });
  }

  // Misas: cada .seccion tiene un <h2> tipo "Peñafiel — agosto 2026" y
  // filas <tr> cuya primera celda es tipo "Sábado 8".
  function ocultaMisasPasadas() {
    var secciones = document.querySelectorAll("main .seccion");
    if (!secciones.length) return;
    var hoy = hoyISO();
    var patronMes = new RegExp("(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\\s+(\\d{4})", "i");
    secciones.forEach(function (seccion) {
      var h2 = seccion.querySelector("h2");
      if (!h2) return;
      var m = h2.textContent.match(patronMes);
      if (!m) return;
      var mes = MESES[m[1].toLowerCase()];
      var anio = parseInt(m[2], 10);
      var algunaVisible = false;
      seccion.querySelectorAll("tbody tr").forEach(function (fila) {
        var celda = fila.querySelector("td");
        if (!celda) return;
        var numero = celda.textContent.match(/\d+/);
        if (!numero) return;
        var dia = parseInt(numero[0], 10);
        var fecha = anio * 10000 + mes * 100 + dia;
        if (fecha < hoy) {
          fila.style.display = "none";
        } else {
          algunaVisible = true;
        }
      });
      seccion.style.display = algunaVisible ? "" : "none";
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    ocultaCalendarioPasado();
    ocultaMisasPasadas();
  });
})();
