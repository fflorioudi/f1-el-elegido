# Tecnico

## Archivos

- `index.html`: estructura de la interfaz.
- `styles.css`: estilos, layout, tarjetas, barras y minijuegos.
- `game.js`: datos, estado, eventos, minijuegos, progresion y guardado.

## Estado

El juego guarda en `localStorage`:

- Piloto.
- Estadisticas.
- Categoria y equipo.
- Rival.
- Temporada activa.
- Decisiones recientes.
- Trayectoria final.

## Motor

Cada temporada crea una lista de 3 momentos desde `MOMENT_BANK`: pretemporada, una fase competitiva intermedia y final. Al resolver cada momento se aplican impactos permanentes y modificadores temporales. Al final se calcula score, puntos, victorias, podios, poles, superlicencia y posible ascenso.

## Compatibilidad

No requiere dependencias ni servidor. Se abre directo desde `index.html`.
