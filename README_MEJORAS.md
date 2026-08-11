# Analisis y mejoras propuestas

Revision basada en inspeccion del codigo, conteo de contenido y simulacion simplificada del motor actual.

## Estado general

El juego ya tiene una base fuerte:

- 150 eventos y 400 opciones.
- 14 minijuegos distintos.
- 22 equipos unicos con logos locales.
- Progresion F3 -> F2 -> F1.
- Vitrina, celebraciones, rivalidad, mercado y carta de legado.

La decision reciente de bajar a 3 momentos por temporada fue correcta: mejora el ritmo, reduce repeticion y hace que una carrera larga sea menos pesada.

## Hallazgos principales

### 1. Balance deportivo

El mayor punto a mejorar es el analisis deportivo. Con pilotos de media alta, buenas decisiones y minijuegos bien ejecutados, la carrera deberia producir mas victorias/titulos o explicar mejor por que no ocurre.

En una simulacion simplificada:

- F3 queda bien: promedio cercano a 2 temporadas.
- F2 puede seguir demasiado larga: en pruebas buenas rondo mas de 7 temporadas promedio.
- Los pilotos llegan a F1, pero a veces tarde para la calidad que tienen.

Mejora recomendada:

- Hacer que F2 tenga salida mas agresiva por rendimiento acumulado.
- Agregar un indicador de "interes F1" visible.
- Separar resultado de piloto y resultado de auto: por ejemplo, "pilotaste para campeon, el auto daba para P5".
- Dar premios por sobre-rendimiento aunque no haya titulo.

### 2. Vitrina

La vitrina funciona, pero todavia puede contar mejor la historia.

Mejora recomendada:

- Separar trofeos grandes de reconocimientos menores.
- Agregar categorias:
  - Titulo de pilotos.
  - Titulo de constructores.
  - Rookie del ano.
  - Remontada del ano.
  - Pole position destacada.
  - Victoria debut.
  - Primer podio.
- Mostrar tarjetas especiales para hitos, no solo chips.

### 3. Minijuegos

Es uno de los puntos mas solidos. Son faciles de entender y variados.

Mejora recomendada:

- Balancear frecuencia: Apex aparece muy poco en el banco actual.
- Subir presencia de juegos poco usados:
  - Apex.
  - DRS.
  - Largada.
  - Pit stop.
- Agregar 3-5 minijuegos nuevos antes de volver a subir decisiones por temporada.

Ideas:

- Gestion de lluvia: elegir cambio de goma segun radar.
- Safety car: decidir delta sin pasarte.
- Track limits: completar curva sin salirte.
- Qualy push lap: tres inputs cortos por sector.
- Motor management: mantener temperatura y potencia.

### 4. Decisiones

El banco es grande y ya se siente bastante vivo. El problema no es cantidad, sino clasificacion e impacto.

Mejora recomendada:

- Etiquetar eventos por tipo:
  - tecnica.
  - prensa.
  - rival.
  - contrato.
  - carrera.
  - estrategia.
- Evitar que un mismo tipo aparezca muchas temporadas seguidas.
- Hacer que algunas decisiones abran cadenas de eventos.
- Agregar eventos raros de alto impacto:
  - lesion.
  - academia te suelta.
  - test F1 real.
  - cambio reglamentario.
  - equipo entra en crisis.

### 5. Mercado y progresion

La progresion ya esta mucho mas solida que antes, pero todavia falta feedback.

Mejora recomendada:

- Mostrar por que un equipo te ofrece contrato.
- Mostrar por que un equipo top no te llama.
- Agregar una barra de "valor de mercado".
- Agregar rumores antes del mercado.
- Que el rival tambien fiche y suba/baje de categoria.

### 6. Estetica

La estetica mejoro, pero todavia puede acercarse mas a un simulador premium.

Mejora recomendada:

- Redisenar el hero como pantalla real de inicio, con auto/garage dominante.
- Crear pantalla de dashboard principal con:
  - tarjeta de piloto.
  - calendario resumido.
  - vitrina.
  - mercado.
  - rival.
- Agregar transiciones de temporada:
  - inicio de ano.
  - carrera clave.
  - cierre de campeonato.
  - mercado.
- Mejorar logos con variantes:
  - logo compacto.
  - logo horizontal.
  - color de equipo para fondos.
- Agregar animaciones especificas:
  - copa al salir campeon.
  - tarjeta de contrato.
  - subida de categoria.
  - desbloqueo F1.

### 7. Tecnico

El archivo `game.js` ya esta muy grande. Conviene modularizar antes de seguir creciendo.

Mejora recomendada:

- Separar en archivos:
  - `data/teams.js`.
  - `data/events.js`.
  - `data/minigames.js`.
  - `engine/progression.js`.
  - `engine/simulation.js`.
  - `ui/render.js`.
- Agregar un modo debug para simular 100 carreras.
- Crear tests de balance:
  - piloto malo no deberia ganar facil.
  - piloto elite deberia conseguir titulos.
  - F3 no deberia pasar de 3 temporadas.
  - F2 no deberia pasar de 5 temporadas con buena media.

## Prioridades para V5.3

1. Ajustar F2 para que no se alargue con pilotos buenos.
2. Agregar indicador de valor/interes de mercado.
3. Balancear frecuencia de minijuegos.
4. Mejorar pantalla de inicio y transiciones de temporada.
5. Separar datos y motor en archivos distintos.

## Implementado despues del analisis

- Progresion F3/F2 recalibrada:
  - F3 tiende a durar 1-2 temporadas y tiene salida por rendimiento o permanencia.
  - F2 ahora tiene salida fuerte por rendimiento acumulado y techo practico de 5 temporadas para pilotos competitivos.
- Motor deportivo ajustado:
  - Menos peso del azar negativo.
  - Mas peso del piloto, las decisiones y el puntaje de minijuegos.
  - Resultados con lectura "piloto vs auto" para explicar sobre-rendimiento o falta de auto.
- Mercado mejorado:
  - Panel de valor de mercado.
  - Indicador de interes F1.
  - Explicacion de por que un equipo encaja o por que equipos mejores todavia dudan.
- Vitrina mejorada:
  - Separacion entre logros mayores e hitos.
  - Nuevos reconocimientos: rookie destacado, primer podio, primera victoria, poles destacadas y remontada de la temporada.
  - La trayectoria final muestra score, lectura del piloto y expectativa del auto.
- Minijuegos balanceados:
  - La seleccion de momentos evita repetir eventos recientes.
  - Los minijuegos menos frecuentes como Apex, DRS, largada, pit stop y box crew ganan prioridad.
  - Se evita repetir el mismo minijuego dentro de una temporada salvo que no haya alternativa fuerte.

## Resultado de simulacion tras ajustes

Prueba rapida con 30 carreras por perfil y decisiones/minijuegos positivos:

- Piloto base 68: F3 promedio 1.90 temporadas, F2 promedio 4.33, maximo F2 5.
- Piloto base 76: F3 promedio 1.90 temporadas, F2 promedio 2.87, maximo F2 5.
- Piloto base 84: F3 promedio 1.63 temporadas, F2 promedio 1.77, maximo F2 4.

Esto deja a F2 como filtro real, pero evita carreras absurdas de 7-8 temporadas cuando el piloto ya tiene nivel.

## Prioridades para V6

1. Migrar a React + Vite + TypeScript.
2. Componentizar minijuegos.
3. Crear motor de simulacion testeable.
4. Agregar modo debug/balance.
5. Mejorar portfolio visual con una presentacion mas profesional.
