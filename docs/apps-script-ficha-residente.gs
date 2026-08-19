/**
 * CMP 26-27 — Ficha de residente
 *
 * Este script recibe los envíos del formulario ficha.html y añade una fila
 * a la hoja "Fichas de residente" del Excel "26-27" del usuario (no está
 * atado a la hoja donde vive el propio script — escribe en otra hoja de
 * cálculo distinta, identificada por su ID).
 *
 * CÓMO INSTALARLO (una sola vez):
 * 1. En cualquier hoja de cálculo de Google Drive (da igual cuál, el script
 *    escribe en otra hoja por ID): Extensiones → Apps Script.
 * 2. Borra el contenido de Code.gs que aparezca por defecto y pega TODO
 *    este archivo.
 * 3. Sustituye SPREADSHEET_ID por el ID real de la hoja de destino (está en
 *    la URL: https://docs.google.com/spreadsheets/d/ESTE_ID/edit) y
 *    SHEET_NAME por el nombre de la pestaña donde se deben guardar las
 *    respuestas (debe existir de antemano, con la fila de cabeceras ya
 *    puesta).
 * 4. Guarda (icono de disquete).
 * 5. Implementar → Nueva implementación → tipo "Aplicación web".
 *      - Ejecutar como: Yo (tu cuenta)
 *      - Quién tiene acceso: Cualquier usuario
 * 6. Autoriza los permisos que pida Google (es tu propio script).
 * 7. Copia la URL que termina en /exec.
 * 8. Pégala en ficha.html, en el atributo action del formulario (búscala
 *    con "EDITAR AQUÍ").
 *
 * Solo quien tenga acceso a esa hoja de cálculo puede ver las respuestas:
 * el formulario únicamente puede añadir filas nuevas, nunca leer las que
 * ya hay.
 */

var SPREADSHEET_ID = "1uqe79CoVcQP1_38VDEWgKXH1OxMIDDR9zCqTa1CvqDk"; // Excel "26-27"
var SHEET_NAME = "Fichas de residente";

function doPost(e) {
  var hoja = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  var p = e.parameter;

  var si = function (valor) {
    return valor === "on" || valor === "true" || valor === "si" ? "Sí" : "No";
  };

  hoja.appendRow([
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

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput("CMP 26-27 — endpoint de la ficha de residente activo.")
    .setMimeType(ContentService.MimeType.TEXT);
}
