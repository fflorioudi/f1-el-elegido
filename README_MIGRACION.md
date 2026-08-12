# Migracion a Next.js

Objetivo: cerrar la version React inicial y dejar **El elegido** listo para crecer como portfolio deployable, con estructura compatible con Next.js y Vercel.

## Decision tecnica

La base actual es **Next.js + React + TypeScript**.

Motivos:

- Mantiene el juego como cliente puro, pero con entrada moderna en `src/app`.
- Vercel detecta Next de forma nativa y no necesita `outputDirectory`.
- Permite sumar rutas futuras: pantalla de modos, ranking, perfiles, saves compartibles o API.
- El motor (`src/engine`) y los datos (`src/data`) quedan desacoplados de la UI.

La version vanilla sigue preservada en `legacy-index.html` y `game.js` solo como referencia historica.

## Estado actual

Hecho:

- App Router creado en `src/app/layout.tsx` y `src/app/page.tsx`.
- `App` corre como componente cliente para sostener `localStorage`, minijuegos y estado interactivo.
- `useCareer` es seguro para SSR/prerender y no rompe el build de Next.
- `npm run dev`, `npm run build`, `npm run start` usan Next.
- `vercel.json` conserva solo install/build command.
- Vite fue retirado de dependencias y configs activas.
- Banco de eventos separado en `src/data/events/`:
  - `base.ts`,
  - `deepSeeds.ts`,
  - `extra.ts`,
  - `generatedSeeds.ts`,
  - `twoOptionSeeds.ts`.
- `eventBank.ts` quedo como ensamblador de eventos generados.
- Banco total actual: 200 eventos y 550 opciones.
- `RaceControl.tsx` quedo como orquestador chico.
- Paneles de carrera viven en `src/components/race/Panels.tsx`.
- Minijuegos conservan jugabilidad React; Radio fue endurecido con timer, cinco opciones y trampas de lectura.
- Box crew fue ajustado con menos margen de reaccion y ruedas circulares.
- Pantalla previa mejorada con selector visual de modo, identidad, resumen y reparto de talento.
- CSS responsive reforzado para hero, topbar, setup, sidebar, vitrina y cards.
- Assets locales se sirven desde `public/assets`.
- Tests y build pasan en Next.

## Estructura actual

```txt
src/
  app/
    layout.tsx
    page.tsx
  components/
    App.tsx
    Celebration.tsx
    Dashboards.tsx
    Layout.tsx
    Minigames.tsx
    RaceControl.tsx
    SetupPanel.tsx
    Sidebar.tsx
    minigames/
      Games.tsx
      RadioGame.tsx
      shared.tsx
    race/
      Panels.tsx
  data/
    events/
      base.ts
      extra.ts
      generatedSeeds.ts
      twoOptionSeeds.ts
    eventBank.ts
    events.ts
    teams.ts
    trophies.ts
  engine/
  state/
  styles/
  types/
```

## Comandos

```bash
npm install
npm run dev
npm run test
npm run build
npm run start
```

## Proximo corte recomendado

1. Separar `Games.tsx` en un archivo por familia de minijuegos.
2. Convertir la pantalla de modos en rutas reales si aparecen nuevos modos.
3. Agregar QA visual mobile con navegador cuando el entorno lo permita.
4. Preparar metadata/Open Graph e iconos para portfolio publico.
5. Evaluar backend solo si hay usuarios reales, ranking, autenticacion o saves online.
