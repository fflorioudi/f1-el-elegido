# Minijuegos

Los minijuegos aparecen como pruebas dentro de los 3 momentos de cada temporada. Todos entregan feedback antes de continuar: resultado, consecuencia y modificador de temporada.

## Minijuegos actuales

- Largada: reaccion al apagarse las luces.
- Apex: timing de curva para tocar la zona ideal.
- Pit stop: precision en ventana verde.
- Defensa DRS: lectura de linea interior/exterior, senal tardia y timing.
- ERS: descarga cuando el marcador entra en zona dorada.
- Neumaticos: gestion de temperatura durante varias vueltas.
- Foco: ritmo cardiaco con aciertos e intentos visibles.
- Sectores: ordenar sectores con tiempo ajustado.
- Muros: elegir linea con riesgo probabilistico.
- Radio: interpretar una orden del ingeniero con timer, cinco respuestas y palabras trampa.
- Duelo: gestionar gap y grip contra un rival.
- Frenada: clavar referencia sin bloquear.
- Curvas enlazadas: mantener balance y grip.
- Box crew: cambiar cuatro ruedas cuando estan listas, ahora con botones circulares tipo rueda y menos margen de reaccion.

## Dificultad

La dificultad sube por temporada y categoria. F2 agrega presion; F1 exige ventanas mas chicas. La idea no es que todo sea perfecto, sino que acertar mejore la temporada y errar no arruine una carrera completa salvo decisiones muy riesgosas.

Radio ahora escala por dificultad reduciendo el tiempo disponible. Tambien mezcla orden real con una palabra trampa: por ejemplo, puede nombrar `BOX` pero pedir sostener pista si el lider no entra.

Box crew tambien subio apenas su presion: las ruedas se habilitan antes, el limite total es menor y apretar temprano sigue trabando una pistola.

La dificultad tambien se ve afectada por el modo de manejo. `Agresivo` aumenta dificultad y puede provocar incidentes de temporada si se combina con mucha volatilidad o poco control.

## Consecuencias

Cada minijuego suma o resta `minigameScore` de la temporada. Ese valor entra en el calculo final con peso parcial, para que ayude sin convertir al jugador en campeon automatico.

## Rotacion actual

El juego usa `minigameCounts` y `minigameHistory` para evitar repetir siempre los mismos. Los juegos menos usados ganan prioridad dentro de su fase.

Ultima simulacion de 60 temporadas:

- radio: 10
- pit: 10
- duelo: 10
- box crew: 10
- frenada: 9
- neumaticos: 9
- foco: 8
- ERS: 8
- curvas: 8
- sectores: 8
- apex: 7
- DRS: 7
- muros: 7
- largada: 7
