/**
 * CMP 26-27 — Ficha de residente
 *
 * Este script recibe los envíos del formulario ficha.html y añade una fila
 * a la hoja de cálculo "CMP 26-27 · Fichas de residente (respuestas)".
 *
 * CÓMO INSTALARLO (una sola vez):
 * 1. Abre la hoja de cálculo en Google Drive:
 *    "CMP 26-27 · Fichas de residente (respuestas)"
 * 2. Menú Extensiones → Apps Script.
 * 3. Borra el contenido de Code.gs que aparezca por defecto y pega TODO
 *    este archivo.
 * 4. Guarda (icono de disquete).
 * 5. Implementar → Nueva implementación → tipo "Aplicación web".
 *      - Ejecutar como: Yo (tu cuenta)
 *      - Quién tiene acceso: Cualquier usuario
 * 6. Autoriza los permisos que pida Google (es tu propio script).
 * 7. Copia la URL que termina en /exec.
 * 8. Pégala en ficha.html, en la constante APPS_SCRIPT_URL (búscala con
 *    "EDITAR AQUÍ").
 *
 * Solo tú (el propietario de la hoja) puedes ver las respuestas: el
 * formulario únicamente puede añadir filas nuevas, nunca leer las que ya
 * hay.
 */

function doPost(e) {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
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
