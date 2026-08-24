/**
 * CMP 26-27 — Ficha de residente, ficha de colegial y elección de tutor
 *
 * Este script recibe los envíos de ficha.html (residentes), de
 * ficha-colegial.html (colegiales) y de tutores.html (elección de tutor),
 * y añade una fila a la hoja que corresponda dentro del Excel "26-27" del
 * usuario — "Fichas de residente", "Fichas de colegial" o "Tutores" —
 * según el campo oculto <input type="hidden" name="tipo"> de cada
 * formulario. El script no está atado a la hoja donde vive físicamente:
 * escribe en otra hoja de cálculo distinta, identificada por su ID
 * (SPREADSHEET_ID).
 *
 * CÓMO INSTALARLO (una sola vez):
 * 1. En cualquier hoja de cálculo de Google Drive (da igual cuál, el script
 *    escribe en otra hoja por ID): Extensiones → Apps Script.
 * 2. Borra el contenido de Code.gs que aparezca por defecto y pega TODO
 *    este archivo.
 * 3. Sustituye SPREADSHEET_ID por el ID real de la hoja de destino (está en
 *    la URL: https://docs.google.com/spreadsheets/d/ESTE_ID/edit). Las
 *    pestañas SHEET_RESIDENTE, SHEET_COLEGIAL y SHEET_TUTOR deben existir
 *    de antemano, cada una con su fila de cabeceras ya puesta (la de
 *    Tutores: Fecha de envío, Nombre, 1ª opción, 2ª opción, Fecha de
 *    llegada, Llega a tiempo de, Comentarios).
 * 4. Guarda (icono de disquete).
 * 5. Implementar → Nueva implementación → tipo "Aplicación web".
 *      - Ejecutar como: Yo (tu cuenta)
 *      - Quién tiene acceso: Cualquier usuario
 * 6. Autoriza los permisos que pida Google (es tu propio script).
 * 7. Copia la URL que termina en /exec.
 * 8. Pégala en ficha.html, ficha-colegial.html y tutores.html, en el
 *    atributo action del formulario (búscala con "EDITAR AQUÍ") — es la
 *    misma URL para los tres formularios, el reparto lo hace el propio
 *    script.
 *
 * IMPORTANTE si ya tenías este script instalado de antes (por ficha.html /
 * ficha-colegial.html): sustituye TODO el contenido de tu Code.gs por este
 * archivo actualizado y crea la pestaña "Tutores" (con sus cabeceras)
 * antes de volver a implementar — si no, los envíos de tutores.html
 * acabarían mezclados en la hoja de residentes con las columnas
 * descuadradas.
 *
 * Solo quien tenga acceso a esa hoja de cálculo puede ver las respuestas:
 * los formularios únicamente pueden añadir filas nuevas, nunca leer las
 * que ya hay.
 *
 * Nota: como el script vive dentro de una hoja de cálculo "contenedora",
 * si esa hoja contenedora se borra o se manda a la papelera, el script
 * (y por tanto el formulario) deja de funcionar hasta que se restaure.
 * No la borres.
 */

var SPREADSHEET_ID = "1uqe79CoVcQP1_38VDEWgKXH1OxMIDDR9zCqTa1CvqDk"; // Excel "26-27"
var SHEET_RESIDENTE = "Fichas de residente";
var SHEET_COLEGIAL = "Fichas de colegial";
var SHEET_TUTOR = "Tutores";

function doPost(e) {
  var p = e.parameter;

  var si = function (valor) {
    return valor === "on" || valor === "true" || valor === "si" ? "Sí" : "No";
  };

  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  if (p.tipo === "tutor") {
    var hojaTutor = ss.getSheetByName(SHEET_TUTOR);
    hojaTutor.appendRow([
      new Date(),
      p.nombre || "",
      p.primera_opcion || "",
      p.segunda_opcion || "",
      p.fecha_llegada || "",
      p.llegada_a || "",
      p.comentarios || "",
    ]);
  } else if (p.tipo === "colegial") {
    var hojaColegial = ss.getSheetByName(SHEET_COLEGIAL);
    hojaColegial.appendRow([
      new Date(),
      p.nombre || "",
      p.apellidos || "",
      p.dni || "",
      p.fecha_nacimiento || "",
      p.lugar_nacimiento || "",
      p.email || "",
      p.telefono || "",
      p.carrera || "",
      p.curso || "",
      p.nombre_padre || "",
      p.nombre_madre || "",
      p.direccion || "",
      p.lugar_firma || "",
      p.fecha_firma || "",
      si(p.acepta_imagen),
      si(p.acepta_urgencia),
      si(p.acepta_lopd),
      p.titular_cuenta || "",
      p.iban || "",
    ]);
  } else {
    var hojaResidente = ss.getSheetByName(SHEET_RESIDENTE);
    hojaResidente.appendRow([
      new Date(),
      p.nombre || "",
      p.apellidos || "",
      p.dni || "",
      p.fecha_nacimiento || "",
      p.lugar_nacimiento || "",
      p.email || "",
      p.telefono || "",
      p.carrera || "",
      p.curso || "",
      p.nombre_padre || "",
      p.nombre_madre || "",
      p.direccion || "",
      p.lugar_firma || "",
      p.fecha_firma || "",
      si(p.acepta_imagen),
      si(p.acepta_reglamento),
      si(p.acepta_urgencia),
      si(p.acepta_lopd),
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput("CMP 26-27 — endpoint de fichas activo.")
    .setMimeType(ContentService.MimeType.TEXT);
}
