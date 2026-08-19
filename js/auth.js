// CMP 26-27 — login por roles (residente / colegial / dirección)
//
// AVISO: esto NO es seguridad real. Es un filtro básico con clave
// compartida por rol, pensado para separar contenido por buena fe, no
// para proteger datos sensibles. Cualquiera con conocimientos técnicos
// puede saltárselo (la comprobación ocurre en el propio navegador). No
// pongas aquí nada que de verdad necesite estar protegido.
//
// Las claves no se guardan en texto plano: se compara el hash SHA-256 de
// lo que escribe el usuario contra el hash guardado abajo. Para cambiar
// una clave, genera el hash nuevo (por ejemplo con SubtleCrypto en la
// consola del navegador) y sustitúyelo aquí.

var CMP_AUTH = (function () {
  var HASHES = {
    direccion: "a4774b8b884430a86a8c0942f40d3e4b4583604ca994a8253bc55dbc722389bb",
    residente: "5edd6da0f348703b56e93ca9d05adcef2695c4df75bbf4e311138cc21de22856",
    colegial: "1ebbd962921246ab1e5b6f446da1f7f52b58eb79c294aefe0e10895385c9187a",
  };

  var CLAVE_ROL_REAL = "cmp2627_rol_real";
  var CLAVE_ROL_VISTA = "cmp2627_rol_vista";

  var NOMBRES = { direccion: "Dirección", residente: "Residente", colegial: "Colegial" };

  async function sha256Hex(texto) {
    var datos = new TextEncoder().encode(texto);
    var buffer = await crypto.subtle.digest("SHA-256", datos);
    var bytes = Array.from(new Uint8Array(buffer));
    return bytes.map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
  }

  async function comprobarClave(rol, clave) {
    if (!HASHES[rol]) return false;
    var hash = await sha256Hex(clave);
    return hash === HASHES[rol];
  }

  function iniciarSesion(rol) {
    localStorage.setItem(CLAVE_ROL_REAL, rol);
    localStorage.setItem(CLAVE_ROL_VISTA, rol);
  }

  function cerrarSesion() {
    localStorage.removeItem(CLAVE_ROL_REAL);
    localStorage.removeItem(CLAVE_ROL_VISTA);
  }

  function rolReal() {
    return localStorage.getItem(CLAVE_ROL_REAL);
  }

  function rolVista() {
    return localStorage.getItem(CLAVE_ROL_VISTA) || rolReal();
  }

  // Solo Dirección puede cambiar la vista (para previsualizar la web como
  // residente o colegial); el rol real autenticado no cambia.
  function verComo(rol) {
    if (rolReal() !== "direccion") return;
    localStorage.setItem(CLAVE_ROL_VISTA, rol);
  }

  // Redirige a login.html si el rol en vista no está en la lista de
  // roles permitidos para la página actual. Dirección tiene acceso a todo
  // automáticamente (no hace falta incluirla en la lista) salvo que esté
  // previsualizando la web como otro rol con el selector "Ver como".
  function requerirRol(rolesPermitidos) {
    if (rolReal() === "direccion" && rolVista() === "direccion") return;
    var rol = rolVista();
    if (!rol || rolesPermitidos.indexOf(rol) === -1) {
      var aqui = window.location.pathname.split("/").pop();
      window.location.href = "login.html?redirect=" + encodeURIComponent(aqui);
    }
  }

  // Para enlaces externos (App de comidas, Ficha de arreglos...): si el
  // rol no tiene acceso, cancela la navegación y manda a login.html con
  // la URL externa como destino final tras iniciar sesión.
  function permitirEnlace(evento, rolesPermitidos, destino) {
    if (rolReal() === "direccion" && rolVista() === "direccion") return true;
    var rol = rolVista();
    if (rol && rolesPermitidos.indexOf(rol) !== -1) return true;
    evento.preventDefault();
    window.location.href = "login.html?redirect=" + encodeURIComponent(destino);
    return false;
  }

  function nombreRol(rol) {
    return NOMBRES[rol] || rol;
  }

  return {
    comprobarClave: comprobarClave,
    iniciarSesion: iniciarSesion,
    cerrarSesion: cerrarSesion,
    rolReal: rolReal,
    rolVista: rolVista,
    verComo: verComo,
    requerirRol: requerirRol,
    permitirEnlace: permitirEnlace,
    nombreRol: nombreRol,
  };
})();

// Pinta el pequeño widget de cuenta en la cabecera (si existe #auth-widget)
document.addEventListener("DOMContentLoaded", function () {
  var widget = document.getElementById("auth-widget");
  if (!widget) return;

  var real = CMP_AUTH.rolReal();
  var vista = CMP_AUTH.rolVista();

  if (!real) {
    widget.innerHTML = '<a class="auth-entrar" href="login.html">Entrar</a>';
    return;
  }

  var html = '<span class="auth-rol">' + CMP_AUTH.nombreRol(vista) + "</span>";

  if (real === "direccion") {
    html += '<select class="auth-select" id="auth-ver-como" aria-label="Ver la web como">' +
      '<option value="direccion">Ver como Dirección</option>' +
      '<option value="residente">Ver como Residente</option>' +
      '<option value="colegial">Ver como Colegial</option>' +
      "</select>";
  }

  html += '<button class="auth-salir" id="auth-salir-boton" type="button">Salir</button>';
  widget.innerHTML = html;

  var selector = document.getElementById("auth-ver-como");
  if (selector) {
    selector.value = vista;
    selector.addEventListener("change", function () {
      CMP_AUTH.verComo(selector.value);
      window.location.reload();
    });
  }

  document.getElementById("auth-salir-boton").addEventListener("click", function () {
    CMP_AUTH.cerrarSesion();
    window.location.href = "index.html";
  });
});
