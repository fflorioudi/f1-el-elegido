# Tecnico

## Archivos

- `index.html`: entrada Vite de la version React.
- `legacy-index.html`: version vanilla preservada para comparar y consultar.
- `styles.css`: base visual heredada y compartida.
- `game.js`: motor/render vanilla preservado como referencia.
- `src/main.tsx`: montaje de React.
- `src/components/App.tsx`: orquestador principal de pantallas.
- `src/components/Minigames.tsx`: minijuegos React interactivos.
- `src/data/`: catalogos, assets, equipos, perfiles, modos, trofeos y banco de eventos.
- `src/data/assets.ts`: rutas locales de imagenes principales y trofeos.
- `src/data/teams.ts`: equipos, logos, tiers y conversion a objetos. Ya no depende de `legacyData.ts`.
- `src/data/events.ts`: acceso al banco de momentos.
- `src/data/driveModes.ts`: modos de manejo. Ya no depende de `legacyData.ts`.
- `src/data/profile.ts`: nacionalidades, estilos, personalidades y nombres de stats. Ya no depende de `legacyData.ts`.
- `src/data/trophies.ts`: guia e iconos de trofeos. Ya no depende de `legacyData.ts`.
- `src/engine/`: simulacion, mercado, progresion, trofeos y utilidades.
- `src/state/`: hook de estado y persistencia local.
- `src/state/saveMigration.ts`: versionado y migracion de partidas guardadas.
- `src/types/`: contratos TypeScript del juego.
- `src/styles/react.css`: ajustes especificos de la version React.
- `tests/`: pruebas de humo para assets y entrada principal.
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

Desde la sidebar tambien se puede exportar/importar una carrera en JSON.

## Motor

Cada temporada crea una lista de 3 momentos desde `MOMENT_BANK`: pretemporada, una fase competitiva intermedia y final. Al resolver cada momento se aplican impactos permanentes y modificadores temporales. Al final se calcula score, puntos, victorias, podios, poles, superlicencia, trofeos y posible ascenso.

El motor ya vive mayormente fuera del DOM en `src/engine/career.ts`. Esto facilita tests de balance y una futura migracion a Next.js si el proyecto pasa a tener backend, perfiles online o rankings.

## UI actual

El header tiene cuatro secciones funcionales:

- `Race Control`: flujo principal de mercado, decisiones y minijuegos.
- `Career Lab`: valor de mercado, interes F1, rival, categoria y ultima temporada.
- `Telemetry`: estadisticas, forma reciente, piloto vs auto y frecuencia de minijuegos.
- `Vitrina`: premios acumulados y explicacion de cada trofeo.

Durante un minijuego activo, la navegacion a paneles secundarios queda bloqueada para no perder el contexto de la prueba.

Los minijuegos React ya tienen interacciones propias: timing, lectura de linea, gestion de recursos, riesgo, radio, sectores, box crew y duelo. Todavia pueden pulirse contra el comportamiento exacto del vanilla, pero ya no son botones de resultado manual.

## Validacion

Comandos actuales:

```bash
npm run test
npm run build
```

`npm run test` valida assets principales, logos F1 locales, entrada React/legacy, tiers F1, mercado inicial, progresion F3/F2/F1 y migracion de guardado.

`npm run build` ejecuta TypeScript y el build de Vite.

## Deuda tecnica actual

1. Separar `Minigames.tsx` en un componente por minijuego cuando empiece el pulido fino.
2. Migrar el banco de eventos fuera de `legacyData.ts` por fase.
3. Ampliar tests de balance sobre `simulateSeason`, modo agresivo/conservador y rotacion de minijuegos.
4. Crear export/import JSON para partidas guardadas.
5. Revisar UX mobile de minijuegos de timing.

## Compatibilidad

Requiere Node para desarrollo local:

```bash
npm install
npm run dev
```

La version vieja se puede abrir directo desde `legacy-index.html`.
