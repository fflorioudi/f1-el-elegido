# El elegido

Juego web de carrera de monoplazas inspirado en la estructura de juegos rapidos como El Idolo, Copero, Formuletry y F1 Glory, pero llevado al camino F3 -> F2 -> F1 con decisiones, minijuegos, mercado, rivalidad, vitrina y progresion por temporadas.

La version actual esta cerrada como base **React + Vite + TypeScript**, lista para portfolio local o deploy estatico en Vercel. La version vanilla anterior quedo preservada en `legacy-index.html` solo como referencia historica.

## Estado actual

- Base jugable principal migrada a React/Vite.
- Motor separado de la UI en `src/engine`.
- Datos de equipos, perfiles, eventos, assets y trofeos en `src/data`.
- Estado y guardado local en `src/state`.
- UI modular en `src/components`, con flujo de carrera separado en `src/components/race`.
- Minijuegos aislados en `src/components/minigames` con wrapper de compatibilidad.
- 20 tests automatizados cubriendo assets, mercado, progresion, contratos, retiro, rotacion de minijuegos, render de UI y migracion de guardado.

## Lenguajes usados

- React + TypeScript: nueva base de interfaz, estado de carrera y componentes.
- Vite: servidor local y build de produccion.
- CSS: interfaz responsive, paneles, barras de estadisticas, logos, vitrina y minijuegos.
- JavaScript legacy: version anterior preservada para consulta y comparacion.

No usa backend en esta version. La version principal corre con Vite desde `src/main.tsx`. La version vanilla quedo preservada en `legacy-index.html`.

## Que hice

- Creacion de piloto con nombre, nacionalidad, estilo de conduccion y personalidad.
- Reparto inicial de puntos entre velocidad, racecraft, neumaticos, feedback y concentracion.
- Estadisticas generales adicionales: marketing, reputacion, superlicencia, puntos, victorias, podios, poles, titulos y dinero.
- Parrillas de equipos para F3, F2 y F1 con equipos 2026.
- Logos locales para equipos y fallback por sigla/color cuando corresponde.
- Temporadas divididas en 3 momentos fuertes: preparacion, evento clave y cierre.
- Banco ampliado a 150 eventos posibles y mas de 400 opciones totales para que carreras largas repitan mucho menos.
- Decisiones de carrera con recompensas, riesgos y consecuencias visibles.
- Impactos separados entre estadisticas del piloto y modificadores de temporada.
- Azar controlado por rendimiento del piloto, nivel del equipo, foco, riesgo y minijuegos.
- Ascenso desde F3 a F2 y desde F2 a F1 con requisitos mas coherentes: rendimiento fuerte, superlicencia y temporadas minimas.
- Mercado de fichajes segun valoracion general, reputacion, marketing, licencia, resultados y experiencia en categoria.
- Equipos top de F1 bloqueados hasta demostrar rendimiento real en F1.
- Rival recurrente con tension, declaraciones, duelos e impacto en eventos.
- Minijuego de largada por reaccion con dificultad escalable.
- Minijuego de apex por timing de curva.
- Minijuego de defensa DRS por lectura de linea y timing.
- Minijuego de pit stop por precision.
- Nuevos minijuegos: ERS, neumaticos, foco mental, sectores, muros, radio y duelo directo.
- Nuevos minijuegos extra: frenada al limite, curvas enlazadas y box crew.
- Minijuegos revisados para mezclar precision, gestion de recursos, lectura de situacion y azar.
- Feedback visible despues de cada decision y minijuego, con consecuencia numerica o estadistica antes de continuar.
- Balance endurecido: menos bonos directos al resultado, mas presion, umbrales mas altos para victorias/titulos y mayor castigo por elegir mal.
- Eventos de temporada: contratos, pretemporada, lluvia, sprint, desarrollo del auto, ingeniero, rivalidad y final de campeonato.
- Guardado local en el navegador con `localStorage`.
- Carta/veredicto final al retiro con trayectoria por temporada.
- Capa visual con imagen de ambiente de F1 y logos oficiales locales para equipos F1, con fallback por sigla/color.
- Vitrina con trofeos de titulos, podios, sprint/ritmo destacado, adelantada de temporada y aporte a constructores.
- Celebracion especial cuando el piloto sale campeon.
- Header funcional con secciones: Race Control, Career Lab, Telemetry y Vitrina.
- Isotipo local de casco en PNG para reemplazar el placeholder `EE`.
- Guia in-game de trofeos para entender que significa cada premio.
- Mercado con explicacion de renovacion disponible o ausencia de renovacion.
- Primer corte de migracion a React/Vite/TypeScript con motor separado en `src/engine`, datos en `src/data`, estado en `src/state` y UI en `src/components`.

## Logica del juego

La carrera empieza a los 16 años en F3. El jugador elige una identidad y reparte 18 puntos de talento. El estilo de conduccion y la personalidad modifican el perfil inicial.

Cada temporada tiene 3 decisiones o pruebas. Las decisiones pueden:

- Subir estadisticas permanentes del piloto.
- Modificar solo la temporada actual, por ejemplo qualy, carrera, consistencia, riesgo, cuidado de gomas o mejora del auto.
- Abrir riesgos que pueden salir bien o mal.
- Activar minijuegos que suman o restan al resultado final.

Al cerrar la temporada se calcula un resultado con esta idea:

- La media del piloto pesa mas que el resto.
- El potencial del equipo define el techo competitivo.
- La concentracion ayuda a estabilizar el rendimiento.
- El azar agrega variacion para que no haya dos carreras iguales.
- Las decisiones y minijuegos acumulan modificadores de temporada.
- El modo de manejo queda fijado para toda la carrera: Conservador estabiliza, Equilibrado ordena y Agresivo da techo con incidentes posibles.

Despues de cada temporada se actualizan puntos, victorias, podios, poles, reputacion, marketing, dinero y superlicencia. Si el piloto cumple objetivos, sube de categoria. En F1 ya no se suman puntos de superlicencia; se pelea por legado.

El registro lateral muestra decisiones importantes, resultados de temporada y ascensos. La carta final muestra la trayectoria completa temporada por temporada, incluyendo equipo, categoria, resultados y decisiones clave.

## Banco de decisiones

El juego arma cada temporada eligiendo 3 eventos: uno de pretemporada, uno de fase competitiva intermedia y uno de final de temporada.

- Pretemporada: preparacion, test, contratos, lluvia, ingenieros y entorno.
- Primeras fechas: qualy, trafico, callejeros, incidentes, setup y primeros podios.
- Sprint: DRS, ERS, ordenes de equipo, safety car, companero, motor y gomas.
- Mitad de año: desarrollo, ingenieros, rivalidad, manager, simulador F1 y fatiga.
- Final: contrato, superlicencia, lluvia, rumor de ascenso, reunion tecnica y asientos libres.

Cada evento tiene 2 o 3 opciones, aunque la mayoria usa 3. Las opciones impactan estadisticas permanentes, rendimiento de temporada, tension con el rival, riesgo o mercado.

## Balance de progresion

La llegada a F1 ya no depende solo de una buena media. Para subir:

- F3 busca durar 1-2 temporadas y tiene salida practica en 3 si el piloto ya demuestra nivel.
- F2 busca durar 2-3 temporadas y tiene salida practica en 4-5 con superlicencia y media competitiva.
- Al llegar a F1, los primeros contratos tienden a ser con equipos de fondo o media tabla.
- Ferrari, Mercedes, McLaren y Red Bull solo aparecen cuando el piloto ya tiene valoracion, reputacion y trayectoria en F1.
- Los equipos F1 tienen tiers claros: top, medio y bajo. Los top pelean campeonatos; los medios pueden crecer y dar golpes; los bajos apuntan a puntos, podios raros y progresion.

La valoracion de mercado mezcla media del piloto, reputacion, marketing, resultado reciente, victorias, titulos, licencia y penalizacion por falta de experiencia.

## Datos consultados

- Potrero Futbol / El Idolo: estructura de carrera, decisiones y minijuegos de habilidad o azar.
- Copero: flujo de crear jugador, carrera por temporadas, elecciones de contratos, eventos y carta final.
- Formula1.com: equipos F1 2026.
- FIA Formula 2: equipos F2 2026.
- FIA Formula 3: equipos F3 2026.
- Wikimedia Commons: imagenes de ambiente descargadas a `assets/`.

## Como ejecutar

Instala dependencias y levanta el servidor local:

```bash
npm install
npm run dev
```

Validacion:

```bash
npm run test
npm run build
```

## Deploy en Vercel

No hace falta Next.js para publicar esta version. Vercel soporta Vite directamente:

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

Next.js queda como proximo paso posible si el proyecto suma rutas avanzadas, usuarios, guardado online, rankings, API o base de datos.

## Arquitectura preparada para migrar a Next.js

Cuando se migre a Next, el movimiento recomendado es:

- `src/components` -> componentes reutilizables.
- `src/data` -> catalogos compartidos cliente/servidor.
- `src/engine` -> logica pura testeable.
- `src/state` -> hooks cliente o adaptador de persistencia.
- `assets/` -> `public/assets/`.

La prioridad antes de Next era cerrar esta base sin deuda gruesa: flujo de carrera, contratos, minijuegos, vitrina, retiro, tests y documentacion.

La version anterior se puede abrir desde `legacy-index.html` si queres comparar comportamientos.

## Documentacion por tema

- `README_MINIJUEGOS.md`: minijuegos, dificultad y consecuencias.
- `README_DECISIONES.md`: banco de eventos, opciones y efectos.
- `README_PROGRESION_BALANCE.md`: ascensos, fichajes, superlicencia y dificultad.
- `README_TECNICO.md`: estructura de archivos y logica interna.
- `README_VITRINA_ESTETICA.md`: trofeos, celebraciones, imagenes y logos.
- `README_BRANDING_LEGAL.md`: uso de marcas, logos, disclaimers y recomendacion para GitHub.
- `README_MEJORAS.md`: analisis del estado actual y roadmap de mejoras.
- `README_ANALISIS_EQUIPOS.md`: tiers de F1, mercado, simulaciones y balance de equipos.
- `README_ANALISIS_REFERENTES.md`: revision de F1 Glory, El Idolo, Copero y Formuletry.
- `README_MIGRACION.md`: estado de la migracion a React/Vite y proximos cortes.
- `README_QA_PLAYTEST.md`: validaciones, simulaciones y QA pendiente antes de Next.js.

## Ideas para proximas versiones

- Modo Carrera del Dia con semilla fija.
- Calendario real con circuitos y perfiles de pista.
- Mas eventos especificos por circuito y por categoria.
- Mas profundidad para el rival: personalidad, contratos propios y posibles cambios de equipo.
- Academia de jovenes y sponsors.
- Carta final descargable como imagen.
- Balance fino de superlicencia y contratos.
- Separar `src/components/minigames/Games.tsx` en un archivo por minijuego cuando empiece una v0.8 de mantenimiento fino.
- Evaluar Next.js si aparecen perfiles online, ranking, API o base de datos.
