# Migracion a React/Vite

Objetivo: llevar **El elegido** desde prototipo vanilla (`legacy-index.html`, `styles.css`, `game.js`) a una base moderna sin perder el juego actual.

## Decision tecnica

La base elegida es **React + Vite + TypeScript**.

Motivos:

- El juego sigue siendo cliente puro.
- Vite es rapido para portfolio local, GitHub Pages o Vercel.
- React permite partir la UI en pantallas y componentes.
- TypeScript ayuda a proteger estado, equipos, eventos, trofeos, mercado y progresion.

Next.js queda como paso posterior si aparecen usuarios, rankings online, rutas compartibles, API, base de datos o autenticacion.

## Estado actual

Hecho:

- Proyecto Vite creado sobre el repo actual.
- `index.html` convertido en entrada React.
- Version vanilla preservada en `legacy-index.html`.
- `src/types/game.ts` creado con tipos principales.
- Catalogo dividido en `assets.ts`, `teams.ts`, `events.ts`, `driveModes.ts`, `profile.ts` y `trophies.ts`, con `catalog.ts` como agregador.
- `legacyData.ts` fue eliminado del runtime React.
- El banco de eventos completo vive ahora en `src/data/eventBank.ts`.
- Motor principal migrado a `src/engine/career.ts`.
- Utilidades puras en `src/engine/utils.ts`.
- Estado y persistencia en `src/state/useCareer.ts`.
- Guardado versionado en `src/state/saveMigration.ts`.
- La sidebar conserva solo acciones de jugador: guardar y nueva carrera. Import/export JSON queda fuera de la UI publica.
- Retiro/cierre de carrera migrado con carta de legado al llegar a edad 36, 15 temporadas F1 o 20 temporadas totales.
- Carta de legado ampliada con vitrina final, copas grandes, reconocimientos y trayectoria.
- Mercado con renovacion visible o explicacion de por que el equipo no renueva.
- UI principal en `src/components/App.tsx`.
- Componentes separados para layout, setup, sidebar, race control, dashboards, celebracion y minijuegos.
- `RaceControl.tsx` quedo como orquestador chico; mercado, modo de manejo, retiro, vitrina final y botones de decision viven en `src/components/race/Panels.tsx`.
- Minijuegos movidos a `src/components/minigames/Games.tsx` con wrapper en `src/components/Minigames.tsx` para conservar imports.
- Ajustes visuales React en `src/styles/react.css`.
- Test de humo en `tests/smoke.test.mjs`.
- Tests TypeScript de balance, contratos, guardado, jugabilidad, exploits, minijuegos e interfaz con `tsx`.
- `npm run test` y `npm run build` funcionando.

Parcial:

- Los minijuegos ya tienen interaccion React y conservan presion en pruebas criticas como `Sectores`. Todos los tipos migrados renderizan una interfaz propia en tests.
- El banco de decisiones/eventos ya no depende del legacy y `eventBank.ts` esta tipado como `Moment[][]`. Todavia esta concentrado en un archivo grande; queda partirlo por fase para mantenimiento.
- La UI esta componetizada, aunque todavia conviene separar mas por carpetas.
- Siguiente corte natural: partir `src/components/minigames/Games.tsx` por minijuego y `src/data/eventBank.ts` por fase.
- Falta una validacion visual automatizada con navegador cuando el entorno de browser automation este disponible; por ahora se cubre con render server-side, tests de motor y simulaciones masivas.

## Estructura actual

```txt
src/
  components/
    App.tsx
    Celebration.tsx
    Dashboards.tsx
    Layout.tsx
    Minigames.tsx
    RaceControl.tsx
    SetupPanel.tsx
    Sidebar.tsx
    ui.tsx
  data/
    catalog.ts
    assets.ts
    driveModes.ts
    events.ts
    eventBank.ts
    profile.ts
    teams.ts
    trophies.ts
  engine/
    career.ts
    utils.ts
  state/
    saveMigration.ts
    useCareer.ts
  styles/
    react.css
  types/
    game.ts
```

## Proximo corte recomendado

1. Partir `eventBank.ts` por fase:
   - `preseasonEvents.ts`,
   - `earlyEvents.ts`,
   - `sprintEvents.ts`,
   - `midSeasonEvents.ts`,
   - `finalEvents.ts`,
   - generadores de eventos en archivo separado.

2. Pulir minijuegos uno por uno:
   - comparar dificultad con vanilla,
   - ajustar ventanas de timing por F3/F2/F1,
   - revisar mobile,
   - agregar feedback visual antes de avanzar.

3. Ampliar tests de balance:
   - F3 no debe durar mas de 2-3 temporadas en perfiles razonables.
   - F2 no debe durar mas de 4-5 temporadas en perfiles razonables.
   - F1 debe diferenciar equipos bajos, medios y top.
   - Agresivo debe tener techo alto, pero riesgo real.
   - Conservador debe ser estable, pero con menos techo.
   - Equilibrado debe ser el baseline sano.

4. Completar persistencia:
   - compatibilidad con futuras versiones de save,
   - posible panel de herramientas separado para import/export si se necesita debug o compartir partidas.

## Comandos

```bash
npm install
npm run dev
npm run test
npm run build
```

## Criterio de exito

La migracion esta bien encaminada si el juego nuevo:

- se siente igual o mejor que el actual,
- no pierde decisiones, trofeos, mercado ni progresion,
- recupera los minijuegos interactivos completos,
- puede correr tests de balance,
- queda listo para portfolio y eventual deploy.
