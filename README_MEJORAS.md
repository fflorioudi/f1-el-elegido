# Revision exhaustiva y plan de mejoras

Revision tipo QA del estado actual de **El elegido** despues de los cambios de vitrina, logos, mercado, progresion y balance de modos de manejo.

## Alcance de la revision

Se reviso el juego desde tres frentes:

- Auditoria estatica de `index.html`, `styles.css` y `game.js`.
- Pruebas automatizadas locales sobre sintaxis, assets, conteos de contenido y simulacion del motor.
- Revision funcional por lectura de flujo: inicio de carrera, plan de manejo, decisiones, minijuegos, mercado, progresion, trofeos, celebraciones y retiro.

No se pudo usar navegador controlable desde la herramienta: la conexion devolvio `No browser is available`. Por eso esta revision no declara un playtest visual automatizado con clicks reales. Las pruebas visuales quedan pendientes para una pasada manual en Chrome.

## Resumen ejecutivo

El juego esta en una base muy buena para portfolio local: tiene identidad, progresion entendible, minijuegos variados, logos locales, vitrina, celebraciones y una carrera que ya no se rompe con ascensos absurdos o estancamientos de 8 temporadas.

Lo mas importante a mejorar ahora no es agregar por agregar, sino pulir coherencia:

- Los chips del header parecen botones, pero no hacen nada.
- El modo `Agresivo` todavia es demasiado atractivo en F1, especialmente con equipos medios y top.
- La diferencia entre equipos bajos, medios y top existe, pero el modelo de puntos todavia da demasiados puntos a equipos bajos con pilotos fuertes.
- `Apex` queda con poca presencia en la rotacion.
- La vitrina ya se entiende mejor, pero podria explicar el significado de cada trofeo dentro del juego.
- `game.js` ya es demasiado grande para seguir escalando sin modularizar.

## Pruebas ejecutadas

### 1. Sintaxis JavaScript

Resultado: correcto.

```txt
node --check game.js
```

No se detectaron errores de sintaxis.

### 2. Assets referenciados

Resultado: correcto.

- Logos declarados: 22.
- Logos faltantes: 0.
- Rutas de trofeos faltantes: 0.
- Assets referenciados desde HTML/CSS/JS: correctos.

### 3. Trofeos PNG

Resultado: correcto, con una observacion de escala visual.

Todos los trofeos son `RGBA`, `512x512` y tienen transparencia.

Medida aproximada de contenido visible:

- `constructor.png`: 509x512, cobertura 0.994.
- `podium.png`: 512x405, cobertura 0.791.
- `honor.png`: 344x512, cobertura 0.672.
- `pole.png`: 344x512, cobertura 0.672.
- `title.png`: 298x512, cobertura 0.582.
- `sprint.png`: 211x512, cobertura 0.412.

Conclusion: `sprint` tiene una silueta naturalmente angosta. El CSS ya compensa su escala, pero si se busca perfeccion visual conviene regenerar una version mas ancha o con base mas dominante.

### 4. Encoding y textos

Resultado: correcto.

Leyendo los archivos como UTF-8 no aparecieron marcadores reales de mojibake (`Ã`, `Â`, `â`). Lo que se vio en consola es una limitacion de salida de PowerShell, no necesariamente del archivo.

Pendiente de calidad: todavia hay muchos textos sin acentos por decision de ASCII historica del proyecto. Para una version mas pulida conviene unificar idioma con acentos reales en UI y READMEs.

### 5. Banco de minijuegos

Resultado: bueno.

Minijuegos implementados: 14.

Tipos detectados:

- `apex`
- `boxcrew`
- `brake`
- `corner`
- `drs`
- `duel`
- `ers`
- `focus`
- `lights`
- `pit`
- `radio`
- `sector`
- `tyres`
- `walls`

Rotacion simulada en 60 temporadas F2:

- `radio`: 10
- `tyres`: 10
- `pit`: 10
- `duel`: 10
- `brake`: 9
- `boxcrew`: 9
- `focus`: 8
- `sector`: 7
- `ers`: 7
- `walls`: 7
- `lights`: 7
- `corner`: 7
- `drs`: 7
- `apex`: 5

Conclusion: la rotacion general esta mucho mejor. `Apex` aparece poco porque depende de menos eventos. Recomendacion: agregar 2 o 3 eventos que lo usen, especialmente en F2 y F1.

### 6. Progresion F3/F2/F1

Simulacion controlada con temporadas positivas: buenas decisiones, minijuegos buenos y equipo razonable.

Resultados promedio por perfil:

| Base piloto | Modo | Llega a F1 | F3 prom. | F2 prom. | Max F3 | Max F2 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| 62 | Conservador | 25/25 | 1.76 | 3.84 | 2 | 5 |
| 62 | Equilibrado | 25/25 | 1.68 | 2.92 | 2 | 5 |
| 62 | Agresivo | 25/25 | 1.92 | 3.96 | 2 | 6 |
| 68 | Conservador | 25/25 | 1.56 | 1.88 | 2 | 3 |
| 68 | Equilibrado | 25/25 | 1.28 | 1.72 | 2 | 3 |
| 68 | Agresivo | 25/25 | 1.40 | 1.92 | 2 | 3 |
| 76 | Conservador | 25/25 | 1.40 | 1.16 | 2 | 2 |
| 76 | Equilibrado | 25/25 | 1.24 | 1.08 | 2 | 2 |
| 76 | Agresivo | 25/25 | 1.16 | 1.16 | 2 | 2 |
| 84 | Todos | 25/25 | 1.00 | 1.00 | 1 | 1 |

Conclusion: la progresion esta mucho mas cerca de lo pedido. Un piloto bueno sube rapido. Un piloto bajo puede tardar, pero no se queda ocho años. El unico borde es `base 62 + agresivo`, que puede tocar 6 temporadas en F2 en una simulacion extrema.

### 7. F1, equipos y modos de manejo

Simulacion controlada con piloto fuerte base 86, minijuegos buenos y temporada positiva.

Hallazgos:

- Los equipos top ganan titulos con frecuencia alta, como corresponde.
- Los equipos bajos no ganan titulos, incluso con piloto fuerte. Esto esta bien.
- Los equipos medios pueden ganar demasiados titulos cuando el jugador usa `Agresivo` y encadena buenas decisiones/minijuegos.
- Los equipos bajos suman demasiados puntos promedio para el nivel de auto, aunque no ganen campeonatos.

Ejemplos de 40 temporadas simuladas por equipo/modo:

- Mercedes/Ferrari/McLaren/Red Bull con base 86: entre 20 y 33 titulos sobre 40 segun modo.
- Alpine con `Agresivo`: 15 titulos sobre 40, demasiado alto para equipo medio.
- Audi/Haas/Racing Bulls con `Agresivo`: entre 4 y 9 titulos sobre 40, todavia alto.
- Williams/Aston Martin/Cadillac: 0 titulos, pero puntos promedio de 236 a 266, demasiado generoso para equipos bajos.

Conclusion: el abismo top/medio/bajo existe en titulos, pero no tanto en puntos. `Agresivo` todavia tiene demasiado techo si el jugador juega bien.

## Hallazgos por severidad

### P1 - Chips del header sin funcion

Ubicacion: `index.html`, lineas 20-24.

Los chips `Race Control`, `Career Lab`, `Telemetry` y `Vitrina` estan marcados como `aria-hidden="true"` y son `span`, no botones. Funcionan como decoracion, pero visualmente parecen navegacion.

Problema: generan expectativa falsa. El usuario los toca mentalmente como tabs y no ocurre nada.

Opciones de solucion:

1. Convertirlos en navegacion real:
   - `Race Control`: vuelve al panel principal de decisiones.
   - `Career Lab`: muestra progreso, mercado, rival y modo de manejo.
   - `Telemetry`: muestra estadisticas, rendimiento por temporada y piloto vs auto.
   - `Vitrina`: hace scroll o abre panel de trofeos.

2. Reemplazarlos por chips informativos reales:
   - Categoria actual.
   - Equipo actual.
   - Modo de manejo fijo.
   - Valor de mercado.

3. Usar `Vitrina` como guia de trofeos:
   - Al tocar/hover en cada copa, explicar que significa.
   - Ejemplo: `Constructores`: premio por aporte alto de puntos o titulo.
   - Ejemplo: `Sprint`: ritmo destacado por minijuegos o victorias.

Recomendacion: para V5.3, convertirlos en tabs reales. Es el cambio con mas impacto percibido.

### P1 - Modo agresivo todavia domina emocional y matematicamente

El modo agresivo ya tiene costos, pero sigue dando demasiado techo cuando el jugador ejecuta bien.

Problema: si el jugador descubre que `Agresivo` + buenos minijuegos es el mejor camino, `Conservador` y `Equilibrado` pierden sentido.

Mejoras recomendadas:

- Agregar riesgo de abandono o carrera arruinada, no solo perdida de stats.
- Agregar desgaste acumulado de temporada: agresivo puede quemar neumaticos, foco o reputacion en ciclos largos.
- Limitar el techo de `Agresivo` si `tyre`, `focus` o `racecraft` estan por debajo de 85.
- Hacer que `Conservador` gane valor en F1 con equipos bajos: menos puntos explosivos, pero mas renovaciones y reputacion tecnica.
- Hacer que `Equilibrado` sea el mejor modo para progresion de contrato y desarrollo.

Objetivo de balance:

- `Agresivo`: mas victorias puntuales, mas abandonos, mas sanciones, mas desgaste.
- `Equilibrado`: mejor promedio, desarrollo estable, mercado confiable.
- `Conservador`: menos techo, mas podios seguros, menos riesgo y mejor renovacion.

### P1 - Equipos bajos suman demasiados puntos

Aunque los equipos bajos no ganan titulos, los puntos simulados son altos para Williams, Aston Martin y Cadillac.

Mejora recomendada:

- Aplicar compresion por tier en F1:
  - Top: puede convertir score alto en victorias/titulo.
  - Medio: puede hacer podios y victorias raras, titulo solo con temporada excepcional.
  - Bajo: objetivo puntos/podios raros, victoria muy excepcional.
- Separar mejor `score narrativo` de `puntos de campeonato`.
- Agregar texto explicativo: `sobre-rendiste el auto`, aunque no se traduzca a 250 puntos.

### P2 - Apex aparece poco

`Apex` aparece 5 veces en 60 temporadas simuladas. No es un bug, pero queda debajo del resto.

Mejora recomendada:

- Agregar eventos de curva lenta, curva rapida, circuito urbano y lluvia donde el minijuego sea `apex`.
- Usarlo mas en F3/F2 para aprendizaje tecnico.
- Subir dificultad en F1 con zonas de apex mas estrechas o doble apex.

### P2 - Vitrina necesita explicacion in-game

La vitrina cuenta premios, pero no explica del todo que significa cada copa.

Mejora recomendada:

- Agregar tooltip o panel de ayuda en cada tarjeta:
  - Campeonatos: titulos de pilotos ganados.
  - Constructores: aporte decisivo al equipo por titulo o puntos altos.
  - Podios: temporadas con podios.
  - Poles: temporadas con poles destacadas.
  - Sprints: ritmo destacado por minijuegos o victorias.
  - Hitos: primer podio, primera victoria, rookie, remontada.
- Si los chips del header se convierten en tabs, `Vitrina` puede abrir esta explicacion.

### P2 - Celebracion solo cubre premios mayores

La celebracion full-screen aparece para titulo de pilotos y constructores. Esta bien para no interrumpir demasiado, pero algunos hitos importantes pasan desapercibidos.

Mejora recomendada:

- Full-screen solo para titulo y constructores.
- Toast premium para primer podio, primera victoria, rookie destacado y remontada.
- Animacion corta de copa entrando a la vitrina.

### P2 - Generador de decisiones aun tiene notas genericas

El banco es grande, pero los eventos generados usan notas como `Opcion estable con premio moderado` o `Mas techo, mas ruido`.

Problema: aumenta cantidad, pero algunas decisiones pierden sabor.

Mejora recomendada:

- Dividir banco por arquetipo:
  - prensa
  - ingenieria
  - rival
  - estrategia
  - contrato
  - FIA/comisarios
  - salud/fisico
- Dar textos especificos por arquetipo.
- Crear consecuencias encadenadas por decision previa.

### P2 - Mercado podria mostrar renovacion con mas claridad

El sistema ya contempla renovacion, pero visualmente puede confundirse con una oferta mas.

Mejora recomendada:

- Tarjeta de renovacion con titulo propio: `Renovar con tu equipo`.
- Texto: `Tu rendimiento alcanzo para continuidad` o `El equipo no ofrece renovacion por bajo rendimiento`.
- Si no hay renovacion, explicar por que no aparece.

### P2 - Header/hero necesitan estado de carrera mas vivo

El hero es visualmente mejor que antes, pero todavia podria sentirse mas simulador.

Mejora recomendada:

- En carrera activa, reducir hero o convertirlo en dashboard compacto.
- Mostrar foto/garage por categoria/equipo.
- Agregar transicion `Inicio de temporada`, `Fin de temporada`, `Mercado abierto`.

### P3 - Accesibilidad y UX fina

Mejoras recomendadas:

- Los chips que sean clickeables deben ser `<button>` o `<a>`, no `span`.
- La celebracion deberia tener cierre con `Escape` y foco atrapado dentro del modal.
- Los minijuegos deberian tener instrucciones muy breves y feedback persistente despues de resolver.
- Revisar `aria-live` en feedback para que no anuncie mensajes viejos.

### P3 - Persistencia y migraciones

El guardado usa `localStorage`, correcto para portfolio local.

Riesgo: si cambia el shape de `state`, partidas viejas pueden cargar raro.

Mejora recomendada:

- Agregar `saveVersion`.
- Crear migrador por version.
- Boton `Exportar carrera` para guardar JSON.
- Boton `Importar carrera` para portfolio/demo.

### P3 - Arquitectura tecnica

`game.js` tiene mas de 120 KB y 92 funciones. Ya conviene modularizar antes de seguir sumando contenido.

Mejora recomendada:

- `data/teams.js`
- `data/events.js`
- `data/minigames.js`
- `data/trophies.js`
- `engine/simulation.js`
- `engine/progression.js`
- `engine/market.js`
- `ui/render.js`
- `ui/minigames/*.js`

Esto permitiria tests reales de balance sin depender de DOM.

## Que hacen los chips actuales

Actualmente no hacen nada funcional.

En `index.html` son:

```html
<div class="nav-pills" aria-hidden="true">
  <span>Race Control</span>
  <span>Career Lab</span>
  <span>Telemetry</span>
  <span>Vitrina</span>
</div>
```

Estan ocultos para lectores de pantalla y no tienen `onclick`, `href`, `data-tab` ni listener en `game.js`. Son solamente decoracion estetica.

Mi recomendacion es no dejarlos asi. Hay dos caminos buenos:

- Convertirlos en navegacion real por secciones.
- Sacarlos y reemplazarlos por chips de estado que si informen algo: categoria, equipo, modo fijo, valor de mercado.

La mejor version para el juego seria esta:

- `Race Control`: pantalla actual de decision/minijuego.
- `Career Lab`: progreso de piloto, rival, mercado, historial por categoria.
- `Telemetry`: stats, comparacion piloto vs auto, forma reciente.
- `Vitrina`: trofeos con explicacion de cada premio.

## Backlog recomendado

### V5.3 - Pulido inmediato

1. Convertir chips del header en tabs reales o reemplazarlos por estado util.
2. Agregar guia de trofeos en vitrina.
3. Rebalancear `Agresivo` con riesgo de abandono/desgaste acumulado.
4. Ajustar puntos F1 por tier para que equipos bajos no sumen tanto.
5. Agregar 2-3 eventos nuevos con minijuego `apex`.
6. Mejorar visual de renovacion: distinguir renovacion de traspaso.

### V5.4 - Profundidad

1. Crear eventos encadenados por decisiones previas.
2. Agregar toast premium para hitos menores.
3. Mejorar mercado con motivos de renovacion/no renovacion.
4. Agregar export/import de carrera.
5. Crear modo debug local para simular 100 carreras desde UI.

### V6 - Base tecnica seria

1. Migrar a Vite + TypeScript o modularizar vanilla JS.
2. Separar datos, motor y UI.
3. Agregar tests automatizados de balance.
4. Agregar snapshots de contenido: cantidad de eventos, minijuegos, logos y trofeos.
5. Preparar estructura lista para GitHub Pages o Vercel aunque siga siendo portfolio local.

## Veredicto actual

El juego ya tiene una identidad clara y un loop entretenido. Lo mejor ahora es dejar de crecer horizontalmente durante una version y pulir profundidad: que cada control tenga funcion, que cada modo tenga una razon real para existir, que cada equipo se sienta diferente y que la vitrina no solo muestre premios, sino que cuente la carrera.

## Implementado despues de esta revision

### Header funcional

Los chips dejaron de ser decoracion. Ahora son botones reales:

- `Race Control`: vuelve al flujo normal de decisiones, mercado o minijuego.
- `Career Lab`: muestra valor de mercado, interes F1, rival, trayectoria por categoria y ultima temporada.
- `Telemetry`: muestra modo de manejo, stats principales, forma reciente, piloto vs auto y minijuegos mas usados.
- `Vitrina`: muestra trofeos y una guia con el significado de cada premio.

Esto corrige el problema principal de UX: antes parecian tabs pero no hacian nada.

### Vitrina explicada

Se agrego una guia in-game de trofeos:

- Campeonatos: titulo de pilotos.
- Constructores: aporte decisivo al equipo.
- Podios: temporadas con podios.
- Poles: clasificaciones destacadas.
- Sprints: ritmo corto, minijuegos fuertes o varias victorias.
- Hitos: primer podio, primera victoria, rookie destacado o remontada.

### Balance de modo Agresivo

`Agresivo` fue recalibrado:

- Mas riesgo base.
- Mas volatilidad.
- Mas presion.
- Menos techo gratis.
- Mas castigo en F1 para equipos medios y bajos.

La idea es que siga siendo divertido, pero deje de ser la respuesta correcta para todo.

### F1 por tiers

Se ajusto el modelo de F1:

- Equipos top siguen pudiendo ganar campeonatos con pilotos fuertes.
- Equipos medios pueden pelear podios y victorias raras, pero no dominar con facilidad.
- Equipos bajos ya no convierten buenas temporadas en puntajes exagerados.

Prueba rapida con piloto base 86:

- Alpine/Audi medios bajaron a 0-1 titulos cada 40 simulaciones.
- Williams/Cadillac bajos quedaron en 0 titulos y puntos bastante mas razonables.
- Mercedes/Ferrari top siguen siendo candidatos reales.

### Rotacion de minijuegos

Se agrego `Apex` al generador de eventos en mas fases. En una simulacion de 60 temporadas paso de 5 a 7 apariciones, quedando mucho mas cerca del resto de minijuegos.

Nueva muestra de rotacion:

- `radio`: 10
- `pit`: 10
- `duel`: 10
- `boxcrew`: 10
- `brake`: 9
- `tyres`: 9
- `focus`: 8
- `ers`: 8
- `corner`: 8
- `sector`: 8
- `apex`: 7
- `drs`: 7
- `walls`: 7
- `lights`: 7
