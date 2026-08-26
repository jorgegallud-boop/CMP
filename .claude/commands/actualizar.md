---
description: Sincroniza la web CMP 26-27 con el Excel "26-27" (residentes, colegiales, staff, calendarios, encargos, comisiones, tutores, habitaciones)
---

# /actualizar — sincronizar la web con el Excel "26-27"

Cuando el usuario invoque `/actualizar` (o pida "revisar"/"actualizar" la web contra el
Excel), sigue estos pasos. El Excel es la hoja de Google Sheets "26-27"
(ID `1uqe79CoVcQP1_38VDEWgKXH1OxMIDDR9zCqTa1CvqDk`,
https://docs.google.com/spreadsheets/d/1uqe79CoVcQP1_38VDEWgKXH1OxMIDDR9zCqTa1CvqDk/edit),
al que se accede con el navegador (Chrome vía mcp__claude-in-chrome__*) — es un Excel
personal del usuario, no hay API keys guardadas.

**Importante**: la estructura de pestañas y columnas del Excel puede cambiar de una
sesión a otra. No des por hecho el layout de una sesión anterior — vuelve a
inspeccionar cabeceras y pestañas antes de leer nada.

## Qué sincronizar

1. **Personas** (pestaña "gente" — nombre, ciudad, carrera, curso, cumpleaños en
   columnas separadas año/mes/día, y un marcador de rol en la primera columna):
   - residentes.html (residentes + filas de "los de casa"/staff al final, con la
     clase fila-staff para que salgan en verde)
   - colegiales.html
   - Cualquier otra página de personas que dependa de estos datos (gente.html,
     directores.html, etc.)

2. **Calendarios** (pestaña "calendar" — columna "facultad" se ignora; columnas de
   planes por rol: "sm" = staff, "rs" = residentes, "c" = colegiales):
   - Tres páginas, una por rol: calendario.html (residentes, solo columna rs),
     calendario-colegial.html (colegiales, solo columna c) y calendario-staff.html
     (staff, columnas sm + rs + c — staff ve también los planes de residentes y
     colegiales, además de los suyos propios) — créalas si hiciera falta, con su
     enlace en menú e inicio (data-roles del rol correspondiente)
   - Cumpleaños en el mes/día correspondiente (desde la pestaña "gente"), en el
     calendario del rol de cada persona; los de staff van en los tres calendarios,
     y el calendario de staff lleva además los cumpleaños de residentes y colegiales
   - Un evento en negrita en el Excel se marca en la web con la clase
     evento-destacado (círculo verde claro relleno)
   - No dupliques un plan si coincide igual en varias columnas de rol
   - Nota: la estructura de esta pestaña ha cambiado ya varias veces entre
     sesiones (antes tenía además una columna "mf" que se eliminó) — confirma
     las columnas actuales antes de asumir que siguen siendo estas tres.

3. **Encargos y comisiones** (pestaña "encargos rs"): encargos.html y
   comisiones.html

4. **Tutores** (pestaña "Tutores"): revisa si hay columnas con la lista real de
   tutores a continuación de las respuestas del formulario, y actualiza
   tutores.html si existen

5. **Habitaciones**: actualiza habitaciones.html con los datos de la pestaña
   correspondiente

## Reglas generales

- Antes de escribir nada, compara Excel vs. web. Si hay discrepancias, pregunta
  al usuario cuál es la correcta — no sobrescribas datos de personas sin confirmar.
- Verifica los cambios en local antes de hacer commit y push.
- Un commit por archivo/sección tocada, con mensaje descriptivo, seguido de push.

