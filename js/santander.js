// CMP 26-27 — santander.html: pinta encima del formulario la lista de quién
// se ha apuntado ya a la convivencia de Santander (nombre y apellidos,
// nada más). Lee la lista con GET a la misma URL del Apps Script que usa
// el formulario (ver docs/apps-script-ficha-residente.gs, doGet).
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form-ficha");
  var contenedorLista = document.getElementById("lista-apuntados");
  var listaEstado = document.getElementById("lista-apuntados-estado");
  var listaNombres = document.getElementById("lista-apuntados-nombres");
  var iframeDestino = document.getElementById("ficha-iframe-destino");

  if (!form || !contenedorLista) return;

  var sinConfigurar = form.action.indexOf("PEGA_AQUI_TU_URL_DE_APPS_SCRIPT") !== -1;
  if (sinConfigurar) {
    contenedorLista.style.display = "none";
    return;
  }

  function pintarNombres(nombres) {
    listaNombres.innerHTML = "";
    if (!nombres || nombres.length === 0) {
      listaEstado.textContent = "Todavía no se ha apuntado nadie.";
      listaEstado.style.display = "block";
      return;
    }
    listaEstado.style.display = "none";
    nombres.forEach(function (nombre) {
      var li = document.createElement("li");
      li.textContent = nombre;
      listaNombres.appendChild(li);
    });
  }

  function cargarLista() {
    fetch(form.action + "?listado=santander")
      .then(function (respuesta) { return respuesta.json(); })
      .then(function (datos) { pintarNombres(datos.nombres); })
      .catch(function () {
        // El script todavía no tiene el doGet nuevo desplegado, o ha fallado
        // la petición: no pasa nada, simplemente no se muestra la lista.
        listaEstado.textContent = "La lista no está disponible ahora mismo.";
        listaEstado.style.display = "block";
      });
  }

  cargarLista();

  // Al enviar el formulario con éxito, añade el nombre a la lista al
  // momento (sin esperar a releer la hoja) para verlo reflejado ya.
  if (iframeDestino) {
    form.addEventListener("submit", function () {
      if (sinConfigurar) return;
      var nombre = (form.querySelector('[name="nombre"]').value || "").trim();
      var apellidos = (form.querySelector('[name="apellidos"]').value || "").trim();
      var completo = (nombre + " " + apellidos).trim();
      if (!completo) return;

      iframeDestino.addEventListener("load", function () {
        listaEstado.style.display = "none";
        var li = document.createElement("li");
        li.textContent = completo;
        listaNombres.appendChild(li);
      }, { once: true });
    });
  }
});
