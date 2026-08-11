# El elegido

Primera version ampliada de un juego de carrera de monoplazas inspirado en la estructura de juegos de carrera rapida como El Idolo y Copero, pero llevado al camino F3 -> F2 -> F1.

## Lenguajes usados

- HTML: estructura de la aplicacion.
- CSS: interfaz responsive, paneles, barras de estadisticas y minijuegos.
- JavaScript: motor de carrera, azar, decisiones, progresion, guardado local y eventos.

No usa frameworks ni backend en esta V1. Se abre directo desde `index.html` en cualquier navegador moderno.

## Que hice

- Creacion de piloto con nombre, nacionalidad, estilo de conduccion y personalidad.
- Reparto inicial de puntos entre velocidad, racecraft, neumaticos, feedback y concentracion.
- Estadisticas generales adicionales: marketing, reputacion, superlicencia, puntos, victorias, podios, poles, titulos y dinero.
- Parrillas de equipos para F3, F2 y F1 con equipos 2026.
- Logos simples de equipos generados con codigo, color y sigla.
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

La valoracion de mercado mezcla media del piloto, reputacion, marketing, resultado reciente, victorias, titulos, licencia y penalizacion por falta de experiencia.

## Datos consultados

- Potrero Futbol / El Idolo: estructura de carrera, decisiones y minijuegos de habilidad o azar.
- Copero: flujo de crear jugador, carrera por temporadas, elecciones de contratos, eventos y carta final.
- Formula1.com: equipos F1 2026.
- FIA Formula 2: equipos F2 2026.
- FIA Formula 3: equipos F3 2026.
- Wikimedia Commons: imagenes de ambiente descargadas a `assets/`.

## Como ejecutar

Abri `index.html` en el navegador. No hace falta instalar dependencias.

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

## Ideas para proximas versiones

- Modo Carrera del Dia con semilla fija.
- Calendario real con circuitos y perfiles de pista.
- Mas eventos especificos por circuito y por categoria.
- Mas profundidad para el rival: personalidad, contratos propios y posibles cambios de equipo.
- Academia de jovenes y sponsors.
- Carta final descargable como imagen.
- Balance fino de superlicencia y contratos.
- Logos oficiales como imagenes locales si se agregan permisos/licencias.
