# Branding, logos y marcas

## Estado actual

El proyecto usa logos locales en `assets/teams/`. El juego carga archivos `.png` para todos los equipos desde `TEAM_LOGOS` en `game.js`.

En esta tanda se reemplazaron los equipos de F1 por logos oficiales descargados desde las paginas de equipos de Formula1.com y convertidos por el propio CDN a PNG local. Los equipos de F2/F3 mantienen badges PNG locales como fallback liviano.

Tambien incluye un aviso visible en la interfaz indicando que es un prototipo no oficial y que las marcas pertenecen a sus titulares.

## Logos oficiales

La estructura ya esta preparada: cada equipo resuelve su logo desde `TEAM_LOGOS` en `game.js`.

Logos F1 oficiales locales:

- Mercedes: Formula1.com teams, `2025mercedeslogowhite`.
- Ferrari: Formula1.com teams, `2025ferrarilogolight`.
- McLaren: Formula1.com teams, `2025mclarenlogowhite`.
- Red Bull Racing: Formula1.com teams, `2025redbullracinglogowhite`.
- Racing Bulls: Formula1.com teams, `2025racingbullslogowhite`.
- Alpine: Formula1.com teams, `2025alpinelogowhite`.
- Haas F1 Team: Formula1.com teams, `2025haaslogowhite`.
- Audi: Formula1.com teams, `2026audilogowhite`.
- Williams: Formula1.com teams, `2025williamslogowhite`.
- Aston Martin: Formula1.com teams, `2025astonmartinlogowhite`.
- Cadillac: Formula1.com teams, `2026cadillaclogowhite`.

El archivo `assets/teams/png-sources.json` registra la procedencia de cada PNG.

Antes de subirlo publico a GitHub conviene revisar permisos. Las guias de Formula 1 indican que sus logos requieren licencia expresa y que un sitio no oficial debe aclarar que no esta asociado ni respaldado por las companias de Formula 1.

Fuente: https://www.formula1.com/en/information/guidelines.4EOKE9RRqevL4niTK9kWyt

## Recomendacion

Para portfolio privado o demo local:

- Se puede trabajar con un modo mas cercano a logos oficiales.
- Mantener el aviso no oficial visible.
- Evitar usar el proyecto como producto comercial.

Para GitHub publico:

- Mantener badges propios o usar solo assets con licencia clara.
- No presentar el juego como producto oficial.
- No usar marcas registradas como identidad principal del proyecto.
