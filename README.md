# CMP 26-27

Web de residentes del Colegio Mayor — curso 2026-2027. Sitio estático (HTML + CSS + JS, sin dependencias ni build) con:

- Enlace a la app de comidas (apuntarse/desapuntarse): https://compositor.org/comidas/penafiel.php
- Programa de bienvenida para residentes nuevos ("Mis primeras 48h")
- Listado de habitaciones
- Listado de encargos
- Listado de comisiones
- Horario de comidas, limpieza y acceso
- Reglamento y normas de convivencia
- Listado de tutores
- Ficha de residente (formulario con checkboxes en lugar de firma)

## Estructura

```
index.html             Portada con accesos rápidos
bienvenida.html         Mis primeras 48h en el CMP (programa de llegada)
habitaciones.html       Listado de habitaciones
encargos.html            Listado de encargos
comisiones.html          Listado de comisiones
horarios.html            Horario de comidas, limpieza y acceso (contenido real)
reglamento.html          Reglamento y normas de convivencia (contenido real)
tutores.html              Listado de tutores
ficha.html                 Ficha de residente (formulario — ver más abajo)
css/style.css               Estilos del sitio
js/main.js                   Menú móvil y resaltado del enlace activo
js/ficha.js                   Envío del formulario de la ficha de residente
img/                           Logos oficiales (favicon, icono, horizontal) en blanco y negro
docs/apps-script-ficha-residente.gs   Código a pegar en Apps Script para recoger la ficha
```

## Cómo editar el contenido

Todo el contenido está en HTML plano dentro de tablas o listas. Cada página tiene un aviso amarillo indicando que el contenido es de ejemplo, y un comentario `<!-- EDITAR AQUÍ -->` justo encima de las filas a sustituir.

- **Habitaciones / Encargos / Comisiones / Tutores**: abre el `.html` correspondiente y edita/añade/elimina filas `<tr>...</tr>` dentro de `<tbody>`.
- **Horarios**: contenido real (tomado del reglamento curso 25-26). Las fechas de fin de trimestre del curso 26-27 están marcadas como "por confirmar" — edita el aviso amarillo y la tabla de "Periodos de apertura del curso" en cuanto se sepan.
- **Reglamento**: contenido real transcrito del documento del Colegio Mayor, adaptado al curso 26-27.
- **Bienvenida**: el domingo 6 y el martes 8 de septiembre están cerrados; el **lunes 7 es un horario borrador** (aviso amarillo en la página) — ajústalo en `bienvenida.html` en cuanto se decida el timing definitivo.

No hace falta ningún programa especial: basta con abrir los archivos con un editor de texto (VS Code, Notepad++, etc.).

## Logos e imagen de marca

Los logos oficiales del Colegio Mayor Peñafiel están en `img/` (extraídos de los archivos vectoriales originales):

- `logo-icon-white.png` / `logo-icon-black.png` — icono suelto, usado en la cabecera y el pie de página.
- `logo-horizontal-white.png` / `logo-horizontal-black.png` — logo con el nombre completo, por si se necesita en algún documento o página nueva.
- `favicon.png` — icono blanco sobre fondo azul marino, usado como favicon del sitio.

## Ficha de residente (`ficha.html`)

Es un formulario que sustituye a la ficha en papel: recoge los datos del residente, familiares y dirección, y las autorizaciones (imagen, reglamento, urgencia médica, LOPD) mediante checkboxes en lugar de firma manuscrita.

Las respuestas se guardan en una hoja de cálculo de Google Sheets **privada** (solo accesible por el propietario de la cuenta de Drive donde se creó):

**CMP 26-27 · Fichas de residente (respuestas)**
https://docs.google.com/spreadsheets/d/1clTaN3GSAhiEZ-JjQPLWHFiBpQl1FofqCIxk40jwuNM/edit

Como el sitio es estático (GitHub Pages, sin servidor propio), el envío se hace a través de un pequeño script de Google Apps Script que añade una fila a esa hoja. Hay que activarlo **una sola vez**:

1. Abre la hoja de cálculo de arriba.
2. Menú **Extensiones → Apps Script**.
3. Pega el contenido de [`docs/apps-script-ficha-residente.gs`](docs/apps-script-ficha-residente.gs) (sustituye lo que haya por defecto).
4. Guarda, y luego **Implementar → Nueva implementación → Aplicación web**, con "Ejecutar como: yo" y "Quién tiene acceso: cualquier usuario".
5. Copia la URL que termina en `/exec`.
6. Pégala en `ficha.html`, en el atributo `action` del `<form>` (busca el comentario `EDITAR AQUÍ`), sustituyendo `PEGA_AQUI_TU_URL_DE_APPS_SCRIPT`.

El script solo puede **añadir** filas nuevas: no expone ni permite leer las respuestas ya guardadas, así que la hoja sigue siendo privada aunque el formulario sea público. Mientras no se complete este paso, la página muestra un aviso de "formulario sin configurar".

## Cómo verlo en local

Al ser un sitio estático, puedes abrir `index.html` directamente en el navegador, o levantar un servidor simple:

```bash
python3 -m http.server 8000
```

y visitar `http://localhost:8000`.

## Publicar con GitHub Pages

1. Ve a **Settings → Pages** en el repositorio de GitHub.
2. En "Build and deployment", elige **Deploy from a branch**.
3. Selecciona la rama principal y la carpeta `/ (root)`.
4. Guarda; GitHub Pages publicará el sitio en `https://<usuario>.github.io/<repositorio>/`.

No requiere ningún paso de compilación adicional.
