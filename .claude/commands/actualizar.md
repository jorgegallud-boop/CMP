---
description: Sincroniza la web CMP 26-27 con el Excel "26-27" (residentes, colegiales, staff, calendarios, encargos, comisiones, tutores, habitaciones, círculos)
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
     evento-destacado (círculo verde claro relleno) — revisa esto en TODAS las
     columnas de rol que toques, no solo en la que estés construyendo
   - En calendario-staff.html, los eventos que vienen solo de la columna "sm"
     (no de rs/c) llevan además la clase evento-staff (franja ámbar, definida
     en css/style.css), para que se distingan de un plan de residentes/colegiales
     que staff ve en el mismo calendario
   - No dupliques un plan si coincide igual en varias columnas de rol
   - Las siglas sueltas en la columna "sm" (tipo MVG, JVE, PMA, HPG, APH, MCC,
     AMS) son recordatorios de cumpleaños de staff — no las metas como texto de
     evento; usa el cumpleaños real si lo tienes por la pestaña "gente", u
     omite la entrada si no lo tienes
   - "Retiro mensual" en la columna "sm" es el retiro de staff (cae en domingo,
     se sobreentiende por el día); no le añadas "(staff)" ni ningún sufijo — el
     de residentes/colegiales (columna rs/c, jueves) también se llama igual, se
     distinguen por el día y por la franja evento-staff
   - "Lista sJ" = Lista de San José
   - "Xmas" (columna "sm", mediados de diciembre) = Formar Christmas, no "Fiesta de
     Navidad"
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

6. **Círculos** (pestaña "csr" — columnas A/B/C mes/día/letra del curso
   actual; columna "mf" con "csr" en los martes que tienen círculo (además
   de "rtm" [= retiro mensual] y "the mark" [sin número, el nombre de la
   sesión va en "tema"] — la pestaña ya no tiene filas "Vela", se borraron);
   columna "tema" con el tema de ese círculo (o de esa sesión "the mark" o
   ese retiro), y entre paréntesis el número de guión cuando lo haya;
   columna "ponente" (F) solo se usa para las filas "rtm", con el nombre de
   quien da ese retiro ese mes):
   - circulos.html (botón "Círculos" dentro del hub "Cosas prácticas" y en
     su submenú del menú principal — solo para staff): NO es una tabla,
     usa el mismo patrón visual que los calendarios (`.grid-calendario` >
     `.mes-bloque` con `.cabecera-mes` + `<ul><li>`), un bloque por mes con
     un `<li>` por fila de la pestaña, en el mismo orden. La fecha va como
     `<span class="evento-dia">` con el formato "letra + número de día"
     (p. ej. "M 17", "X 9" — la letra sale directamente de la columna C,
     no la recalcules), y el tema como `<span class="evento-texto">`.
     Incluye `<script src="js/oculta-pasado.js"></script>` al final (igual
     que los calendarios) para que oculte automáticamente lo que ya pasó
     — funciona solo con reconocer `.mes-bloque`/`.cabecera-mes`/
     `.evento-dia`, no hace falta tocar el script.
   - Compara fecha a fecha contra la web; si hay temas nuevos, reasignados o
     quitados en la pestaña, actualízalos en circulos.html
   - Si faltan temas para algún martes, dilo como "pendiente de asignar"
     (no lo dejes en blanco sin más)
   - Las filas "rtm" llevan la clase `evento-destacado` en el `<li>` (para
     que resalten en verde, distinto del resto) y el texto va como "Retiro
     mensual (tema, ponente)" — tema y ponente entre paréntesis.
   - Las filas "the mark" se incluyen también, con la clase `evento-mark`
     en el `<li>` (franja lila, distinta del verde de evento-destacado) y
     el texto prefijado "The Mark: " + el tema de esa sesión.
   - **Comprobación cruzada con la pestaña "calendar" (obligatoria en cada
     `/actualizar`):**
     - Cada fecha con "the mark" en "csr"!mf debe tener también "the mark N"
       en "calendar"!rs (columna F) ese mismo día, y viceversa (toda "the
       mark N" de "calendar"!rs debe tener su fila "the mark" en "csr"!mf ese
       día). Si una fecha no cuadra en ambos sitios, pon en rojo (color de
       relleno) la celda de "mf" de esa fila en "csr" y avisa al usuario.
     - Cada fecha con "rtm" en "csr"!mf debe tener también "Retiro mensual"
       en "calendar"!c (columna G) ese mismo día, y viceversa. Si una fecha
       no cuadra en ambos sitios, pon en rojo (color de relleno) la celda de
       "mf" de esa fila en "csr" y avisa al usuario.
     - Si todo cuadra, no marques nada en rojo (y si alguna celda estaba en
       rojo de una comprobación anterior y ahora ya cuadra, quítale el color).
   - **Colores de fila por tipo (formato condicional, no relleno manual):**
     la pestaña "csr" tiene 3 reglas de formato condicional (Formato >
     Formato condicional) sobre el intervalo A2:F1063 (ampliar el intervalo
     si la hoja crece por encima de la fila 1063 — usa "Añade N filas más al
     final" para ampliar la hoja antes de poder ampliar el intervalo), cada
     una con fórmula personalizada sobre la columna D y un color pastel
     distinto: `=$D2="the mark"` → amarillo pastel, `=$D2="rtm"` → verde
     pastel, `=$D2="Vela"` → azul pastel. Las filas "csr" (círculo normal)
     quedan sin colorear. No las sustituyas por relleno manual de celda: si
     hace falta añadir un tipo de fila nuevo, añade otra regla de formato
     condicional con un color pastel distinto a los ya usados.

## Reglas generales

- Antes de escribir nada, compara Excel vs. web. Si hay discrepancias, pregunta
  al usuario cuál es la correcta — no sobrescribas datos de personas sin confirmar.
- Verifica los cambios en local antes de hacer commit y push.
- Un commit por archivo/sección tocada, con mensaje descriptivo, seguido de push.

