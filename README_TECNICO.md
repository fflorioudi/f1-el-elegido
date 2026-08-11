# Tecnico

## Archivos

- `index.html`: entrada Vite de la version React.
- `legacy-index.html`: version vanilla preservada para comparar y consultar.
- `styles.css`: base visual heredada y compartida.
- `game.js`: motor/render vanilla preservado como referencia.
- `src/main.tsx`: montaje de React.
- `src/components/App.tsx`: orquestador principal de pantallas.
- `src/components/Minigames.tsx`: wrapper de compatibilidad para minijuegos.
- `src/components/minigames/Games.tsx`: minijuegos React interactivos.
- `src/components/race/Panels.tsx`: mercado, renovaciones, modo de manejo, retiro y vitrina final.
- `src/data/`: catalogos, assets, equipos, perfiles, modos, trofeos y banco de eventos.
- `src/data/assets.ts`: rutas locales de imagenes principales y trofeos.
- `src/data/teams.ts`: equipos, logos, tiers y conversion a objetos.
- `src/data/events.ts`: acceso al banco de momentos.
- `src/data/eventBank.ts`: banco completo de decisiones/eventos tipado como `Moment[][]`.
- `src/data/driveModes.ts`: modos de manejo.
- `src/data/profile.ts`: nacionalidades, estilos, personalidades y nombres de stats.
- `src/data/trophies.ts`: guia e iconos de trofeos.
- `src/engine/`: simulacion, mercado, progresion, trofeos y utilidades.
- `src/state/`: hook de estado y persistencia local.
- `src/state/saveMigration.ts`: versionado y migracion de partidas guardadas.
- `src/types/`: contratos TypeScript del juego.
- `src/styles/react.css`: ajustes especificos de la version React.
- `tests/`: pruebas de humo, balance, contratos, jugabilidad, interfaz, minijuegos y migracion.
- `assets/`: imagenes locales de ambiente, logos de equipos y trofeos.
- `README_*.md`: documentacion por modulo de juego y decisiones de diseno.

## Estado

La version React guarda en `localStorage` bajo `el-elegido-react-save` con `saveVersion: 1`:

- Piloto.
- Estadisticas.
- Categoria y equipo.
- Rival.
- Temporada activa.
- Decisiones recientes.
- Trayectoria final.
- Vitrina y trofeos.
- Modo de manejo fijo.
- Conteo de minijuegos para mejorar rotacion.

La version vanilla conserva su propio guardado anterior. No se migran partidas automaticamente todavia.
La sidebar de React expone solo acciones de jugador: guardar y nueva carrera. Import/export JSON queda fuera de la UI principal para no ensuciar la experiencia.

## Motor

Cada temporada crea una lista de 3 momentos desde `MOMENT_BANK`: pretemporada, una fase competitiva intermedia y final. Al resolver cada momento se aplican impactos permanentes y modificadores temporales. Al final se calcula score, puntos, victorias, podios, poles, superlicencia, trofeos y posible ascenso.

La carrera se cierra con carta de legado al llegar a edad 36, 15 temporadas de F1 o 20 temporadas totales. Esta barrera evita saves infinitos o loops de mercado/temporada.

El motor ya vive mayormente fuera del DOM en `src/engine/career.ts`. Esto facilita tests de balance y una futura migracion a Next.js si el proyecto pasa a tener backend, perfiles online o rankings.

## UI actual

El header tiene cuatro secciones funcionales:

- `Race Control`: flujo principal de mercado, decisiones y minijuegos.
- `Career Lab`: valor de mercado, interes F1, rival, categoria y ultima temporada.
- `Telemetry`: estadisticas, forma reciente, piloto vs auto y frecuencia de minijuegos.
- `Vitrina`: premios acumulados y explicacion de cada trofeo.

Durante un minijuego activo, la navegacion a paneles secundarios queda bloqueada para no perder el contexto de la prueba.

Los minijuegos React ya tienen interacciones propias: timing, lectura de linea, gestion de recursos, riesgo, radio, sectores con timer, box crew y duelo.

El mercado muestra renovaciones como primera opcion cuando el rendimiento lo justifica. Si no hay renovacion, informa el motivo: valor por debajo del asiento, rendimiento menor al auto, exigencia de equipo top o decision de directiva.

La carta de legado muestra vitrina final, copas por categoria, ultimas copas grandes, reconocimientos y trayectoria completa.

## Validacion

Comandos actuales:

```bash
npm run test
npm run build
```

`npm run test` valida assets principales, logos F1 locales, entrada React/legacy, tiers F1, mercado inicial, renovaciones, progresion F3/F2/F1, volumen/variedad del banco de eventos, retiro, anti-loop de decisiones, rotacion de minijuegos, render de todos los minijuegos, interfaz basica y migracion de guardado.

Auditoria manual automatizada reciente: 200 carreras simuladas, sin fallas, maximo 20 temporadas, renovaciones aprobadas/rechazadas presentes y rotacion de 14 minijuegos activa.

`npm run build` ejecuta TypeScript y el build de Vite.

## Deuda tecnica actual

1. Separar `Minigames.tsx` en un componente por minijuego cuando empiece el pulido fino.
2. Partir `eventBank.ts` por fase para mantenimiento.
3. Ampliar tests visuales con navegador cuando el entorno tenga browser automation disponible.
4. Evaluar un panel de debug separado para import/export JSON si hace falta compartir partidas.
5. Revisar UX mobile de minijuegos de timing.
6. Si se migra a Next.js, mantener `engine` y `data` como modulos puros para no mezclar reglas de juego con rutas o componentes server/client.

## Compatibilidad

Requiere Node para desarrollo local:

```bash
npm install
npm run dev
```

La version vieja se puede abrir directo desde `legacy-index.html`.
