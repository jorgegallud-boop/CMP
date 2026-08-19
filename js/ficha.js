// CMP 26-27 — envío de la ficha de residente al Apps Script (ver docs/apps-script-ficha-residente.gs)
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form-ficha");
  var estado = document.getElementById("estado-envio");
  var boton = document.getElementById("boton-enviar");
  var avisoConfig = document.getElementById("aviso-configuracion");
  var panelGracias = document.getElementById("panel-gracias");
  var iframeDestino = document.getElementById("ficha-iframe-destino");

  if (!form) return;

  var campoTipo = form.querySelector('input[name="tipo"]');
  var tipo = campoTipo ? campoTipo.value : "residente";
  var claveLocalStorage = "cmp2627_ficha_" + tipo + "_enviada";

  var sinConfigurar = form.action.indexOf("PEGA_AQUI_TU_URL_DE_APPS_SCRIPT") !== -1;
  if (sinConfigurar && avisoConfig) {
    avisoConfig.style.display = "block";
  }

  form.addEventListener("submit", function (evento) {
    if (sinConfigurar) {
      evento.preventDefault();
      alert("Este formulario todavía no está configurado (falta la URL del Apps Script). Avisa al administrador de la web.");
      return;
    }

    // El envío real va por el iframe oculto (evita problemas de CORS con Apps Script).
    boton.disabled = true;
    estado.textContent = "Enviando…";
    estado.className = "form-estado enviando";

    // Se añade el listener aquí (no al cargar la página) para que solo
    // reaccione a la carga que resulta de ESTE envío, no a la del iframe vacío.
    iframeDestino.addEventListener("load", function () {
      estado.textContent = "";
      form.style.display = "none";
      panelGracias.style.display = "block";
      panelGracias.scrollIntoView({ behavior: "smooth" });
      try {
        localStorage.setItem(claveLocalStorage, "1");
      } catch (e) {
        // localStorage no disponible (modo privado, etc.): no pasa nada, solo no se ocultará la tarjeta en portada
      }
    }, { once: true });
  });
});
