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
- Radio: interpretar una orden del ingeniero.
- Duelo: gestionar gap y grip contra un rival.
- Frenada: clavar referencia sin bloquear.
- Curvas enlazadas: mantener balance y grip.
- Box crew: cambiar cuatro ruedas cuando estan listas.

## Dificultad

La dificultad sube por temporada y categoria. F2 agrega presion; F1 exige ventanas mas chicas. La idea no es que todo sea perfecto, sino que acertar mejore la temporada y errar no arruine una carrera completa salvo decisiones muy riesgosas.

## Consecuencias

Cada minijuego suma o resta `minigameScore` de la temporada. Ese valor entra en el calculo final con peso parcial, para que ayude sin convertir al jugador en campeon automatico.
