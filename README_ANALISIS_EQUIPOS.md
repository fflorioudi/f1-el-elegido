# Analisis de equipos y balance F1

## Problema detectado

La parrilla de F1 tenia un salto demasiado brusco:

- Top: 89 a 94.
- Resto: 65 a 74.

Eso hacia que casi todos los equipos no top se sintieran iguales y que el mercado pasara de "auto bajo" a "auto campeon" sin una etapa real de media tabla.

## Nueva filosofía

F1 queda dividida en tres grupos:

- Equipos bajos: asiento de entrada, sumar puntos y algun podio aislado ya debe sentirse importante.
- Equipos medios: crecimiento real, pelea por puntos fuertes, podios y victorias puntuales con piloto bueno.
- Equipos top: autos preparados para campeonato, mucha presion y exigencia de resultados.

## Parrilla F1 actual

### Top

- Mercedes: 94.
- Ferrari: 93.
- McLaren: 92.
- Red Bull Racing: 91.

Estos equipos no deberian aparecer al primer mercado de F1 salvo una F2 excepcional. La carrera natural es llegar a F1 con bajo/medio, demostrar y recien despues subir.

### Medios

- Alpine: 82.
- Audi: 81.
- Haas F1 Team: 80.
- Racing Bulls: 79.

Estos equipos son el puente que faltaba. No son autos campeones por defecto, pero sirven para construir reputacion en F1 sin quedar atrapado en el fondo.

### Bajos

- Williams: 72.
- Aston Martin: 71.
- Cadillac: 68.

Estos equipos son asientos de entrada. Con un piloto muy bueno pueden rascar podios, pero no deberian ganar titulos.

## Cambios tecnicos aplicados

- Se agrego tier interno a los equipos: `top`, `mid`, `low`.
- Las tarjetas de mercado ahora muestran el nivel del equipo.
- El mercado de F1 bloquea equipos top hasta que haya pruebas fuertes:
  - F2 excepcional, o
  - temporadas buenas en F1, o
  - victorias/podios/titulo previo.
- La elegibilidad de equipos ya no depende solo del numero de valor de mercado.
- El calculo de F1 ahora tiene penalizacion especifica para autos medios y bajos en lucha por titulo.
- Los autos medios siguen pudiendo conseguir puntos, podios y victorias puntuales.
- Los autos bajos quedan lejos del campeonato, pero no son inutiles.

## Resultados de simulacion

Prueba con piloto F1 base 82, decisiones buenas y minijuegos buenos, 80 temporadas por equipo:

- Top: entre 216 y 225 puntos promedio, con titulos ocasionales.
- Medios: entre 201 y 218 puntos promedio, sin titulos.
- Bajos: entre 177 y 188 puntos promedio, sin victorias y sin titulos.

Prueba con piloto F1 base 90, decisiones buenas y minijuegos buenos, 80 temporadas por equipo:

- Top: entre 275 y 280 puntos promedio, campeonatos frecuentes.
- Medios: entre 257 y 271 puntos promedio, podios frecuentes, victorias puntuales y titulos raros.
- Bajos: entre 234 y 252 puntos promedio, podios posibles, victorias muy raras, sin titulos.

## Lectura de gameplay

La progresion ideal ahora es:

1. Llegar a F1 con Cadillac, Aston Martin, Williams o algun medio si el rendimiento de F2 fue bueno.
2. Usar un equipo medio para construir cartel real.
3. Recibir oferta top despues de demostrar en F1.
4. Pelear campeonato con Mercedes, Ferrari, McLaren o Red Bull Racing.

## Pendientes futuros

- Agregar objetivos por tier:
  - Bajo: sumar puntos, vencer companero, primer podio.
  - Medio: podios, top 6, victoria aislada.
  - Top: victorias, campeonato, constructores.
- Hacer que cada equipo tenga personalidad:
  - Alpine: tecnico e irregular.
  - Audi: proyecto en crecimiento.
  - Haas: presion economica y oportunidades raras.
  - Racing Bulls: academia y salto a Red Bull.
  - Cadillac: proyecto nuevo, paciencia y marketing.
- Agregar contratos de duracion y clausulas.
- Simular evolucion anual de autos para que un medio pueda subir o caer.
