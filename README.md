# CMP 26-27

Web de residentes del Colegio Mayor — curso 2026-2027. Sitio estático (HTML + CSS + JS, sin dependencias ni build) con:

- Enlace a la app de comidas (apuntarse/desapuntarse): https://compositor.org/comidas/penafiel.php
- Listado de habitaciones
- Listado de encargos
- Listado de comisiones
- Horario de comidas y horario de administración/limpieza
- Reglamento del Colegio Mayor
- Listado de tutores

## Estructura

```
index.html          Portada con accesos rápidos
habitaciones.html    Listado de habitaciones
encargos.html         Listado de encargos
comisiones.html       Listado de comisiones
horarios.html         Horario de comidas y de administración/limpieza
reglamento.html       Enlace/hueco para el reglamento en PDF
tutores.html           Listado de tutores
css/style.css          Estilos del sitio
js/main.js              Menú móvil y resaltado del enlace activo
docs/                    Carpeta para colgar el PDF del reglamento u otros documentos
```

## Cómo editar el contenido

Todo el contenido está en HTML plano dentro de tablas o listas. Cada página tiene un aviso amarillo indicando que el contenido es de ejemplo, y un comentario `<!-- EDITAR AQUÍ -->` justo encima de las filas a sustituir.

- **Habitaciones / Encargos / Comisiones / Tutores**: abre el `.html` correspondiente y edita/añade/elimina filas `<tr>...</tr>` dentro de `<tbody>`.
- **Horarios**: edita los elementos `<li>` de `horarios.html` con los horarios reales.
- **Reglamento**: cuando tengas el documento (PDF/Word), guárdalo en la carpeta `docs/` (por ejemplo `docs/reglamento-2026-27.pdf`) y sustituye el aviso de `reglamento.html` por un enlace de descarga, tal como se indica en el comentario del propio archivo.

No hace falta ningún programa especial: basta con abrir los archivos con un editor de texto (VS Code, Notepad++, etc.).

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
