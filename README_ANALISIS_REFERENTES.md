# Analisis de referentes

## Objetivo

Revisar juegos de carrera/simulacion similares y convertir buenas ideas en mejoras para `El elegido`, sin copiar literalmente contenido ni identidad visual protegida.

## F1 Glory

Ideas detectadas:

- Identidad inicial simple y rapida: apellido, dorsal, bandera y estilo.
- Estilos de pilotaje claros:
  - Agresivo: mas poles/victorias, mas abandonos.
  - Tecnico: lluvia, desarrollo y progresion.
  - Consistente: menos abandonos, suma puntos.
- Modos futuros visibles desde el inicio:
  - Reto semanal.
  - Team Principal.
  - Modo Retro por decadas.
- Mercado con huecos reales:
  - Los grandes fichan estrellas.
  - Los equipos bajos apuestan por jovenes.
  - El campeon gana poder interno.
- Dilemas de reglamento:
  - Apostar por cambio reglamentario antes de tiempo.
  - Aguantar cuando un reglamento hunde al equipo.

Implementado ahora:

- Modos de manejo por decision:
  - Conservador.
  - Equilibrado.
  - Agresivo.
- Las opciones muestran probabilidad de exito/riesgo.
- El modo elegido cambia:
  - Riesgo de fallo.
  - Rendimiento de temporada.
  - Dificultad del minijuego.
- La dificultad de minijuegos escala por categoria, etapa, equipo y modo.

Pendiente:

- Modo Retro.
- Reto semanal con seed fija.
- Modo Team Principal.
- Mercado con huecos reales de pilotos y retiro/regreso de leyendas.
- Cambios reglamentarios con impacto a dos temporadas.

## El Idolo

Ideas valiosas:

- Carrera con identidad fuerte y decisiones de vida.
- Dos perfiles de jugador:
  - Uno mas ligado al azar.
  - Otro mas ligado a habilidad/minijuegos.
- Minijuegos con practica libre.
- Las derrotas no cortan la carrera, pero dejan memoria.
- Ranking diario/global como modo competitivo.

Aplicable a `El elegido`:

- Crear `Zona de test` para practicar minijuegos sin afectar carrera.
- Agregar identidad de carrera:
  - Calculador.
  - Temerario.
  - Constructor.
  - Mediatico.
- Hacer que errores grandes queden en memoria:
  - Sanciones.
  - Choques con rival.
  - Mala fama de equipo.

## Copero

Ideas valiosas:

- Carrera rapida, directa y rejugable.
- Decisiones de mercado claras.
- Sensacion de "una temporada mas" sin friccion.
- Historial facil de leer.

Aplicable a `El elegido`:

- Mantener 2-3 decisiones por temporada.
- Hacer que cada decision tenga impacto visible.
- Cuidar que la carrera no se vuelva pesada.
- Usar resumen final por temporada como historia principal.

## Formuletry

Ideas valiosas observadas a nivel conceptual:

- Simulador/manager centrado en F1.
- Uso de equipos, estetica de parrilla y progreso de carrera.
- Sensacion de producto enfocado en Formula.

Aplicable a `El elegido`:

- Mejorar estetica de simulador premium.
- Separar pantalla de carrera, mercado, vitrina y legado.
- Reforzar logos, tiers de equipos y lectura de parrilla.

## Cambios de dificultad por etapa

Implementado:

- F3: dificultad base mas baja.
- F2: sube presion tecnica.
- F1: sube timing y precision.
- F1 top: mas presion.
- Final de temporada: mas dificultad.
- Sprint: dificultad media adicional.
- Modo agresivo: +1 dificultad.
- Modo conservador: -1 dificultad.

Minijuegos mas afectados:

- DRS.
- Apex.
- Largada.
- ERS.
- Sectores.
- Pit stop.
- Box crew.
- Frenada.
- Foco en F1.

## Proximas mejoras recomendadas

1. Crear `Zona de test` para practicar minijuegos.
2. Agregar eventos de reglamento a largo plazo.
3. Agregar mercado con asientos/huecos reales.
4. Agregar modo retro por decadas ficticias.
5. Crear objetivos por equipo y tier.
6. Agregar metricas nuevas:
   - Confianza del equipo.
   - Presion mediatica.
   - Fiabilidad.
   - Desarrollo del auto.
   - Poder interno.
7. Agregar decisiones por cadena:
   - Una decision abre un evento dos temporadas despues.
   - Una mala relacion con rival vuelve en pista.
   - Una apuesta tecnica puede hundir o levantar al equipo.
