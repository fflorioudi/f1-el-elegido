# QA y playtest pre-Next

Estado de cierre de la base React/Vite antes de pensar en migrar a Next.js.

## Alcance probado

- Flujo de creacion de piloto.
- Primer contrato.
- Seleccion de modo de manejo.
- Decisiones con y sin minijuego.
- Todos los minijuegos migrados.
- Mercado, fichajes y renovaciones.
- Ascensos F3 -> F2 -> F1.
- Retiro y carta de legado.
- Vitrina final.
- Sidebar sin herramientas de debug visibles.
- Guardado local versionado.

## Validacion automatizada

Comandos:

```bash
npm run test
npm run build
```

Cobertura actual:

- Assets principales y logos F1 locales.
- Entrada React/Vite y version legacy preservada.
- Tiers F1 pedidos: bajos, medios y top.
- Mercado inicial y bloqueo de equipos top en debut F1.
- Renovacion positiva y explicacion de rechazo.
- Progresion razonable F3/F2/F1.
- Banco de eventos con 5 fases, volumen alto y opciones de 2/3 decisiones.
- Anti-loop de decisiones sin minijuego.
- Retiro maximo por edad/F1/20 temporadas.
- Rotacion de 14 minijuegos.
- Render de todos los minijuegos.
- Sidebar sin import/export JSON.
- Carta de legado con vitrina final.

## Simulacion de carreras

Auditoria masiva:

- 200 carreras simuladas.
- 0 fallas.
- Maximo 20 temporadas.
- 0 temporadas colgadas.
- Renovaciones aprobadas y rechazadas presentes.
- 14 minijuegos activos en rotacion.

Playtest simulado por modo:

| Modo | Temporadas | Categoria final | Titulos | Victorias | Podios | Puntos | Retiro |
| --- | ---: | --- | ---: | ---: | ---: | ---: | --- |
| Conservador | 20 | F1 | 1 | 3 | 20 | 2733 | Si |
| Equilibrado | 19 | F1 | 7 | 28 | 61 | 4332 | Si |
| Agresivo | 20 | F1 | 0 | 0 | 1 | 591 | Si |

Lectura: equilibrado queda como baseline fuerte, conservador sostiene carrera larga con menor techo, agresivo puede salir caro si no se acompaña con ejecucion y control. Conviene seguir observando agresivo en playtests humanos para que tenga momentos de gloria sin volver a estar roto.

## QA pendiente manual

La herramienta de browser automation no estuvo disponible en este entorno. Queda pendiente una pasada manual en Chrome:

- Jugar una carrera corta por modo.
- Revisar mobile con DevTools.
- Probar minijuegos de timing con mouse real.
- Revisar legibilidad de logos/equipos en mercado.
- Confirmar que la carta final se siente suficientemente celebratoria.

## Veredicto

La base React/Vite queda lista para portfolio local y deploy estatico en Vercel. La siguiente migracion a Next.js ya puede hacerse desde modulos separados, sin depender del prototipo vanilla.
