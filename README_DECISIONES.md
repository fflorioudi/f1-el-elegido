# Decisiones y opciones

Banco completo generado desde `game.js`.

- Eventos totales: 150.
- Opciones totales: 400.
- Cada temporada toma 3 eventos: pretemporada, una fase intermedia aleatoria y final de temporada.
- Hay eventos de 2 y 3 opciones.

## Tipos de impacto

- Estadisticas permanentes: velocidad, racecraft, neumaticos, feedback, concentracion, marketing y reputacion.
- Modificadores de temporada: setup, qualy, carrera, consistencia, volatilidad, cuidado de gomas, mejora de auto y presion.
- Riesgo: algunas opciones pueden salir mal y sumar castigos.
- Rivalidad: algunas opciones suben o bajan tension con el rival.
- Mercado: reputacion y marketing influyen en ofertas.

## Pretemporada

### 1. Programa de invierno

El equipo te da una ventana de trabajo antes de que empiece el ruido. Elegir foco ahora cambia toda la temporada.

- Opcion 1: Simulador intensivo. Mejora feedback y puesta a punto. Impacto: stats {"technical":4,"focus":1}; temporada {"setup":4}.
- Opcion 2: Plan fisico extremo. Menos errores cuando el auto se mueve. Impacto: stats {"focus":3,"tyre":2}; temporada {"consistency":3}.
- Opcion 3: Sponsor y prensa. Mas valor de mercado, mas presion. Impacto: stats {"market":5,"reputation":-1}; temporada {"pressure":2}.

### 2. Test con gomas nuevas

Pirelli trae compuestos que nadie entiende del todo. Tu equipo necesita una direccion clara.

Minijuego: tyres.

- Opcion 1: Tandas largas. Menos caida de ritmo en carrera. Impacto: stats {"tyre":3}; temporada {"tyreCare":5,"consistency":2}.
- Opcion 2: Vueltas de qualy. Una vuelta fuerte, mas riesgo. Impacto: stats {"pace":3,"focus":-1}; temporada {"qualy":4,"volatility":1}.
- Opcion 3: Comparar configuraciones. El auto evoluciona mejor contigo. Impacto: stats {"technical":4}; temporada {"setup":5}.

### 3. Entrenador mental

El entorno detecta ansiedad antes de correr. Puedes invertir tiempo en calma, agresividad o imagen.

Minijuego: focus.

- Opcion 1: Rutina de presion. Menos errores en cierre de carrera. Impacto: stats {"focus":4}; temporada {"consistency":4}.
- Opcion 2: Mentalidad de ataque. Ganas respeto, tambien incidentes. Impacto: stats {"racecraft":2,"reputation":1}; temporada {"race":3,"volatility":2}.
- Opcion 3: Construir marca. Mas ojos encima desde el viernes. Impacto: stats {"market":4}; temporada {"pressure":2}.

### 4. Academia o sponsor personal

Tu entorno puede aceptar apoyo de una academia grande o mantener independencia con un sponsor regional.

- Opcion 1: Entrar a academia. Mas puertas, menos libertad. Impacto: stats {"reputation":2,"market":1}; temporada {"pressure":3}.
- Opcion 2: Sponsor regional. Financia pruebas, pero no trae ingenieros. Impacto: stats {"market":3,"focus":1}; temporada {"setup":-1}.
- Opcion 3: Mantener independencia. Camino lento y propio. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":2}.

### 5. Dia de filming

Pocos kilometros, muchos sensores. El equipo quiere decidir si probar piezas o trabajar salidas.

Minijuego: focus.

- Opcion 1: Probar piso nuevo. Desarrollo temprano. Impacto: stats {"technical":3}; temporada {"carBoost":2,"setup":2}.
- Opcion 2: Practicar largadas. Mejor primer giro. Impacto: stats {"focus":2,"pace":1}; temporada {"qualy":1,"race":2}.
- Opcion 3: Cuidar kilometraje. Nada espectacular, todo util. Impacto: stats {"tyre":2}; temporada {"consistency":3}.

### 6. Contrato de imagen

Una marca ofrece dinero por exposicion. Tu manager avisa que consume tiempo de preparacion.

- Opcion 1: Firmar fuerte. Mucho valor comercial. Impacto: stats {"market":6,"focus":-2}; temporada {"pressure":3}.
- Opcion 2: Firmar limitado. Equilibrio razonable. Impacto: stats {"market":3}; temporada {"pressure":1}.
- Opcion 3: Rechazar. El volante primero. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":2}.

### 7. Test privado en lluvia

La pista se moja y el equipo pregunta si seguir. El kilometraje puede valer oro.

Minijuego: walls.

- Opcion 1: Seguir con slicks. Sensibilidad extrema. Impacto: stats {"pace":2}; temporada {"qualy":3,"volatility":4}; riesgo 50%.
- Opcion 2: Montar lluvia. Aprendizaje transferible. Impacto: stats {"racecraft":2,"focus":1}; temporada {"race":3}.
- Opcion 3: Cancelar tanda. Seguro, aunque conservador. Impacto: stats {"reputation":-1,"focus":2}; temporada {"consistency":2}.

### 8. Ingeniero de datos joven

Un analista nuevo encuentra patrones raros. Puedes darle peso o seguir al jefe historico.

Minijuego: radio.

- Opcion 1: Escuchar al analista. Innovacion con riesgo. Impacto: stats {"technical":3}; temporada {"setup":4,"volatility":1}.
- Opcion 2: Seguir al jefe. Metodo probado. Impacto: stats {"reputation":1,"focus":1}; temporada {"consistency":3}.
- Opcion 3: Combinar ambos. Mas trabajo, menos extremos. Impacto: stats {"technical":2,"focus":1}; temporada {"setup":2,"consistency":1}.

### 9. Mapa de motor conservador

El jefe de ingenieria teme fiabilidad antes del debut.

Minijuego: focus.
Incluye rivalidad.

- Opcion 1: Cuidar unidad. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}; rival -1.
- Opcion 2: Mapa mixto. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Liberar potencia. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%; rival +1.

### 10. Sesion con sponsor tecnico

Un socio trae sensores nuevos para entender frenadas.

Minijuego: tyres.

- Opcion 1: Probar sensores. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Hacer tanda normal. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Priorizar sensaciones. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%.

### 11. Cambio de preparador fisico

Tu entorno discute si necesitas fuerza o resistencia.

Minijuego: radio.

- Opcion 1: Mas cuello. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Mas cardio. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Rutina mixta. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%.

### 12. Simulador de circuito nuevo

El calendario suma una pista que nadie domina.

Minijuego: brake.

- Opcion 1: Aprender referencias. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Buscar vuelta rapida. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Trabajar tandas. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%.

### 13. Briefing con academia

La academia pide que representes su metodo ante prensa.

- Opcion 1: Aceptar rol. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Perfil bajo. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Negociar libertad. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%.

### 14. Nuevo chasis

El equipo sortea quien usa primero un chasis mas liviano.

Minijuego: focus.
Incluye rivalidad.

- Opcion 1: Pedir prioridad. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}; rival -1.
- Opcion 2: Cederlo al lider. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Compartir pruebas. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%; rival +1.

### 15. Prueba de frenos

El proveedor trae material agresivo para clasificacion.

Minijuego: tyres.

- Opcion 1: Freno agresivo. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Freno estable. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Comparativa larga. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%.

### 16. Semana sin descanso

El calendario aprieta antes de viajar.

Minijuego: radio.

- Opcion 1: Descansar. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Entrenar. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Simulador corto. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%.

### 17. Datos del rival

Un analista consigue telemetria publica de tu rival.

Minijuego: brake.

- Opcion 1: Estudiarlo. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Ignorarlo. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Imitar trazada. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%.

### 18. Sesion de prensa hostil

Un periodista cuestiona tu madurez.

- Opcion 1: Responder seco. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Ser diplomatico. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Usar humor. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%.

### 19. Contrato de bonus

Te ofrecen prima por podio pero penaliza abandonos.

Minijuego: focus.
Incluye rivalidad.

- Opcion 1: Aceptar bonus. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}; rival -1.
- Opcion 2: Pedir fijo. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Rechazar presion. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%; rival +1.

### 20. Plan de nutricion

Tu peso puede bajar, pero arriesga energia.

Minijuego: tyres.

- Opcion 1: Bajar peso. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Mantener. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.
- Opcion 3: Subir fuerza. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":-1}; temporada {"pressure":2,"qualy":1}; riesgo 22%.

### 21. Ultimatum de academia

La academia pide exclusividad para seguir apoyandote.

Minijuego: focus.
Incluye rivalidad.

- Opcion 1: Aceptar exclusividad. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}; rival -1.
- Opcion 2: Mantener libertad. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

### 22. Dia de descanso obligatorio

Tu preparador detecta sobrecarga fisica.

Minijuego: tyres.

- Opcion 1: Descansar. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Forzar entrenamiento. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

### 23. Prueba con aleron viejo

El equipo duda entre comparar o avanzar sin mirar atras.

Minijuego: radio.

- Opcion 1: Comparar aleron viejo. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Seguir desarrollo nuevo. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

### 24. Charla con jefe de equipo

Te preguntan si estas listo para ser lider tecnico.

Minijuego: brake.

- Opcion 1: Aceptar liderazgo. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Pedir mas tiempo. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

### 25. Sponsor polemico

Un sponsor trae dinero pero puede danar imagen.

- Opcion 1: Aceptar sponsor. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Rechazar dinero. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

### 26. Karting benefico

Un evento publico cae antes de viajar.

Minijuego: focus.
Incluye rivalidad.

- Opcion 1: Ir al evento. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}; rival -1.
- Opcion 2: Priorizar descanso. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

### 27. Cambio de casco

Tu entorno quiere relanzar marca personal.

Minijuego: tyres.

- Opcion 1: Cambiar imagen. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Mantener identidad. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

### 28. Entrenar con rival

Tu rival propone una sesion compartida.

Minijuego: radio.

- Opcion 1: Aceptar sesion. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Cuidar secretos. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

### 29. Nuevo asiento moldeado

El asiento viejo molesta, pero cambiarlo lleva tiempo.

Minijuego: brake.

- Opcion 1: Cambiar asiento. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Aguantar. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

### 30. Prueba de reflejos

El entrenador ofrece un programa extremo.

- Opcion 1: Hacer programa. Opcion estable con premio moderado. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 2: Rutina normal. Camino tecnico y consistente. Impacto: stats {"technical":2}; temporada {"setup":3}.

## Primeras fechas

### 1. Qualy bajo amenaza de lluvia

El radar cambia cada minuto. Salir temprano da pista limpia; esperar puede darte la goma perfecta.

Minijuego: lights.

- Opcion 1: Salir primero. Vuelta segura, poco trafico. Impacto: stats {"focus":1}; temporada {"qualy":2}.
- Opcion 2: Esperar al final. Techo alto y margen minimo. Impacto: stats {"pace":2}; temporada {"volatility":3}; riesgo 36%.
- Opcion 3: Copiar al lider. No brilla, pero protege puntos. Impacto: stats {"racecraft":1,"reputation":1}; temporada {"qualy":1}.

### 2. Tu rival te tapa la vuelta

El trafico no parece casual. El mismo piloto aparece justo delante en el tercer sector.

Minijuego: sector.
Incluye rivalidad.

- Opcion 1: Quejarse por radio. El muro toma nota, tu rival tambien. Impacto: stats {"reputation":-1,"focus":1}; temporada {"pressure":1}; rival +2.
- Opcion 2: Preparar revancha limpia. Respuesta en pista, sin ruido. Impacto: stats {"focus":2,"racecraft":1}; temporada {"race":2}; rival -1.
- Opcion 3: Bloquearlo despues. La guerra empieza temprano. Impacto: stats {"racecraft":2,"reputation":-2}; temporada {"volatility":3}; riesgo 42%; rival +4.

### 3. Debut en circuito callejero

Muros cerca, poca practica y comisarios atentos. Aqui el ego cobra caro.

Minijuego: walls.

- Opcion 1: Ir al limite. Puede cambiar el campeonato. Impacto: stats {"pace":2}; temporada {"qualy":4,"volatility":4}; riesgo 48%.
- Opcion 2: Construir confianza. Carrera inteligente. Impacto: stats {"focus":2}; temporada {"consistency":4}.
- Opcion 3: Priorizar salida de curvas. Auto amable y traccion. Impacto: stats {"technical":2,"tyre":1}; temporada {"setup":2,"race":2}.

### 4. Salida desde mitad de grilla

Estas rodeado de autos mas lentos. El primer giro puede darte media carrera o destruirla.

Minijuego: pit.

- Opcion 1: Atacar por fuera. Mucho premio. Impacto: stats {"racecraft":2}; temporada {"race":4,"volatility":3}; riesgo 38%.
- Opcion 2: Buscar huecos internos. Menos espacio, mas control. Impacto: stats {"focus":1,"racecraft":1}; temporada {"race":2}.
- Opcion 3: Sobrevivir. Pensar en el domingo. Impacto: stats {"tyre":1,"focus":2}; temporada {"consistency":3}.

### 5. Comisarios mirando

Hubo incidentes en la carrera anterior. Cualquier maniobra tuya va directo a investigacion.

- Opcion 1: Bajar agresividad. Ganas confianza. Impacto: stats {"reputation":2,"focus":1}; temporada {"consistency":3,"race":-1}.
- Opcion 2: Correr igual. No cambias tu identidad. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":2}; riesgo 34%.
- Opcion 3: Usar presion mediatica. El foco se mueve a prensa. Impacto: stats {"market":3,"reputation":-1}; temporada {"pressure":2}.

### 6. Setup equivocado

El auto rebota en frenada. Cambiar todo antes de qualy puede salvarte o dejarte sin base.

Minijuego: radio.

- Opcion 1: Cambio radical. Solucion grande. Impacto: stats {"technical":2}; temporada {"setup":4,"volatility":3}; riesgo 36%.
- Opcion 2: Microajustes. Menos techo, mas control. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Copiar al companero. Pragmatico. Impacto: stats {"reputation":-1}; temporada {"setup":2,"qualy":1}.

### 7. Rueda pinchada ajena

Un rival deja restos en pista. Puedes levantar o mantener velocidad con bandera amarilla preparada.

Minijuego: sector.

- Opcion 1: Levantar mucho. Impecable para comisarios. Impacto: stats {"reputation":2}; temporada {"consistency":2,"qualy":-1}.
- Opcion 2: Levantar justo. Precision reglamentaria. Impacto: stats {"focus":2}; temporada {"qualy":2}.
- Opcion 3: Mantener ritmo. Puede venir sancion. Impacto: stats {"pace":2,"reputation":-2}; temporada {"qualy":4,"volatility":3}; riesgo 46%.

### 8. Primer podio posible

Estas cuarto con mejor ritmo que el tercero. Tambien tienes al quinto cerca.

Minijuego: ers.

- Opcion 1: Ir por podio. Carrera que cambia cartel. Impacto: stats {"racecraft":2,"market":1}; temporada {"race":4,"volatility":2}; riesgo 32%.
- Opcion 2: Asegurar cuarto. Resultado maduro. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 3: Presion sin ataque. Esperar error. Impacto: stats {"tyre":1,"racecraft":1}; temporada {"race":2,"tyreCare":1}.

### 9. Curva uno trabada

El circuito castiga largar por el lado sucio.

Minijuego: sector.
Incluye rivalidad.

- Opcion 1: Atacar interior. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}; rival -1.
- Opcion 2: Abrirse. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Esperar recta. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%; rival +1.

### 10. Qualy con trafico

Autos lentos arruinan vueltas rapidas.

Minijuego: walls.

- Opcion 1: Salir temprano. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Esperar hueco. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Hacer dos intentos. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%.

### 11. Bandera amarilla

Una vuelta buena queda en duda por amarillas.

Minijuego: lights.

- Opcion 1: Levantar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Mantener parcial. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Abortar vuelta. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%.

### 12. Rival en outlap

Tu rival calienta gomas delante tuyo.

Minijuego: ers.

- Opcion 1: Presionarlo. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Tomar distancia. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Adelantarlo. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%.

### 13. Pista verde

El asfalto no tiene goma y todos patinan.

Minijuego: brake.

- Opcion 1: Cuidar neumaticos. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Buscar grip. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Atacar pianos. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%.

### 14. Frenada bloqueada

Bloqueaste en practica y el equipo duda del balance.

Minijuego: corner.
Incluye rivalidad.

- Opcion 1: Cambiar bias. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}; rival -1.
- Opcion 2: Mantener. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Cambiar aleron. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%; rival +1.

### 15. Primera lluvia

La carrera arranca seca pero amenaza agua.

Minijuego: sector.

- Opcion 1: Set seco. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Set lluvia. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Set mixto. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%.

### 16. Comisario estricto

Un director avisa que no perdonaran limites de pista.

Minijuego: walls.

- Opcion 1: Margen amplio. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Usar todo. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Pedir referencias. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%.

### 17. Salida abortada

El procedimiento se reinicia y sube temperatura.

Minijuego: lights.

- Opcion 1: Enfriar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Mantener foco. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Presionar embrague. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%.

### 18. Auto de seguridad temprano

La estrategia se abre en vuelta dos.

Minijuego: ers.

- Opcion 1: Parar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Seguir. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Hacer lo contrario. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%.

### 19. Problema de radio

El muro llega cortado en recta.

Minijuego: brake.
Incluye rivalidad.

- Opcion 1: Decidir solo. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}; rival -1.
- Opcion 2: Pedir repeticion. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Copiar companero. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%; rival +1.

### 20. Piano traicionero

Un piano rompe pisos pero da decimas.

Minijuego: corner.

- Opcion 1: Usarlo. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Evitarlo. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Usarlo solo en qualy. Mas techo, mas ruido. Impacto: stats {"pace":2,"reputation":-1}; temporada {"qualy":3,"volatility":2}; riesgo 26%.

### 21. Largada desde boxes

Una sancion tecnica te obliga a decidir estrategia.

Minijuego: brake.
Incluye rivalidad.

- Opcion 1: Auto agresivo. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}; rival -1.
- Opcion 2: Auto de remontada. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

### 22. Pista con aceite

La direccion de carrera no neutraliza todavia.

Minijuego: corner.

- Opcion 1: Levantar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Seguir ritmo. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

### 23. Rival lento delante

Tu rival frena el tren para perjudicarte.

Minijuego: sector.

- Opcion 1: Atacar ya. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Esperar DRS. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

### 24. Error del companero

Tu companero se sale y vuelve delante.

Minijuego: walls.

- Opcion 1: Presionarlo. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Proteger doble punto. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

### 25. Vuelta borrada

Te borran la vuelta por limites.

Minijuego: lights.

- Opcion 1: Arriesgar otra. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Asegurar tiempo. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

### 26. Problema de embrague

La mordida cambia antes de la salida.

Minijuego: ers.
Incluye rivalidad.

- Opcion 1: Recalibrar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}; rival -1.
- Opcion 2: Salir igual. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

### 27. Curva ciega

Hay bandera amarilla dudosa en sector rapido.

Minijuego: brake.

- Opcion 1: Levantar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Confiar en verde. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

### 28. Piano mojado

El piano interior parece seco, pero no hay certeza.

Minijuego: corner.

- Opcion 1: Usarlo. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Evitarlo. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

### 29. Rueda fria

Sales de boxes con goma fuera de ventana.

Minijuego: sector.

- Opcion 1: Calentar fuerte. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Progresivo. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

### 30. Ataque temprano

El lider esta vulnerable solo en la primera vuelta.

Minijuego: walls.

- Opcion 1: Atacar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2}; temporada {"race":3,"volatility":1}.
- Opcion 2: Guardar carrera. Camino tecnico y consistente. Impacto: stats {"focus":2}; temporada {"consistency":3}.

## Sprint

### 1. Defensa con DRS

Un rival con mejor punta viene cargado de bateria. Si lo sostienes, el equipo empieza a creer.

Minijuego: drs.

- Opcion 1: Defender por dentro. Duro, legal y peligroso. Impacto: stats {"racecraft":3}; temporada {"race":2}; riesgo 28%.
- Opcion 2: Cuidar la salida. Pierdes menos goma. Impacto: stats {"tyre":2,"focus":1}; temporada {"consistency":2}.
- Opcion 3: Dejar pasar y contraatacar. Estrategia larga. Impacto: stats {"technical":1,"racecraft":1}; temporada {"race":1,"tyreCare":2}.

### 2. Bateria en la ultima vuelta

Tu ingeniero te ofrece descargar ERS ahora o guardarlo para el final de recta.

Minijuego: ers.

- Opcion 1: Descargar temprano. Ataque directo, defensa mas dificil. Impacto: stats {"pace":1}; temporada {"race":3}.
- Opcion 2: Guardar para el final. Paciencia y precision. Impacto: stats {"focus":1}; temporada {"race":2,"consistency":2}.
- Opcion 3: Modo neutral. Menos heroico, mas puntos. Impacto: stats {"tyre":1}; temporada {"consistency":3}.

### 3. Orden de equipo

Tu companero viene con estrategia distinta. El equipo pide no pelear, pero el asiento se gana contra el de al lado.

- Opcion 1: Obedecer. Confianza interna. Impacto: stats {"reputation":2,"focus":1}; temporada {"consistency":2}.
- Opcion 2: Pelear limpio. Mensaje fuerte. Impacto: stats {"racecraft":3}; temporada {"race":3,"volatility":1}; riesgo 25%.
- Opcion 3: Ignorar la orden. Portadas y reuniones tensas. Impacto: stats {"market":3,"reputation":-3}; temporada {"volatility":4}; riesgo 50%.

### 4. Safety car tardio

Quedan pocas vueltas. Parar te da goma, seguir te da posicion.

Minijuego: tyres.

- Opcion 1: Parar por blandas. Ataque total. Impacto: stats {"pace":2}; temporada {"race":4,"volatility":3}; riesgo 34%.
- Opcion 2: Quedarse afuera. Defensa con goma usada. Impacto: stats {"focus":2}; temporada {"consistency":4}.
- Opcion 3: Copiar al rival. Duelo directo. Impacto: stats {"racecraft":1}; temporada {"race":2,"pressure":1}; rival +1.

### 5. Companero con mejor ritmo

El equipo pregunta si dejas pasar. La tele enfoca tu volante.

- Opcion 1: Dejar pasar rapido. Equipo feliz. Impacto: stats {"reputation":3}; temporada {"consistency":2}.
- Opcion 2: Pedir una vuelta. Te ganas el derecho. Impacto: stats {"racecraft":2,"focus":1}; temporada {"race":3}.
- Opcion 3: Cerrar la puerta. El box hierve. Impacto: stats {"market":2,"reputation":-3}; temporada {"volatility":4}; riesgo 42%.

### 6. Motor en modo seguro

La unidad de potencia sube temperatura. Puedes cuidar o pedir mapa agresivo.

Minijuego: focus.

- Opcion 1: Mapa agresivo. Ritmo contra fiabilidad. Impacto: stats {"pace":2}; temporada {"race":4,"volatility":4}; riesgo 50%.
- Opcion 2: Modo seguro. Llegar suma. Impacto: stats {"technical":1,"focus":2}; temporada {"consistency":4}.
- Opcion 3: Aire limpio. Gestion desde pista. Impacto: stats {"tyre":1,"racecraft":1}; temporada {"tyreCare":2,"race":1}.

### 7. Ataque a dos autos

Dos rivales pelean delante. Si lees bien, pasas a ambos.

Minijuego: duel.

- Opcion 1: Meterte al hueco. Maniobra de highlight. Impacto: stats {"racecraft":3}; temporada {"race":4,"volatility":3}; riesgo 40%.
- Opcion 2: Esperar que se toquen. Ajedrez. Impacto: stats {"focus":2}; temporada {"consistency":3}.
- Opcion 3: Forzar error. Presion limpia. Impacto: stats {"market":1,"racecraft":1}; temporada {"pressure":2,"race":2}.

### 8. Neumatico delantero muerto

El delantero izquierdo esta al limite. El ingeniero no sabe si aguanta.

Minijuego: tyres.

- Opcion 1: Administrar. Leccion de domingo. Impacto: stats {"tyre":3}; temporada {"tyreCare":4}.
- Opcion 2: Cambiar balance. Resolver desde volante. Impacto: stats {"technical":2}; temporada {"setup":2,"consistency":1}.
- Opcion 3: Ignorar desgaste. Riesgo de pinchazo. Impacto: stats {"pace":2}; temporada {"race":3,"volatility":3}; riesgo 45%.

### 9. Ataque con rebufo

Llegas a recta pegado a dos autos.

Minijuego: drs.
Incluye rivalidad.

- Opcion 1: Doble rebufo. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}; rival -1.
- Opcion 2: Uno por vez. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Ahorrar bateria. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%; rival +1.

### 10. Defensa sin bateria

No queda ERS para la recta final.

Minijuego: ers.

- Opcion 1: Cerrar interior. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Romper aspiracion. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Guardar goma. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%.

### 11. Companero agresivo

Tu companero no levanta aunque el equipo pide calma.

Minijuego: duel.

- Opcion 1: Pelear. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Ceder. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Tender trampa. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%.

### 12. Sprint con blandas

La goma blanda da salida pero muere rapido.

Minijuego: tyres.

- Opcion 1: Empujar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Administrar. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Parar temprano. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%.

### 13. Pista sucia

Saliste de trazada y traes suciedad en gomas.

Minijuego: corner.

- Opcion 1: Limpiar vuelta. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Seguir atacando. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Cambiar linea. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%.

### 14. Rival con sancion

Tu rival tiene 5 segundos y va delante.

Minijuego: brake.
Incluye rivalidad.

- Opcion 1: Presionarlo. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}; rival -1.
- Opcion 2: Pasarlo. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Cuidar distancia. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%; rival +1.

### 15. Pelea por radio

Tu ingeniero y estratega discrepan.

Minijuego: drs.

- Opcion 1: Ingeniero. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Estratega. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Decidir tu. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%.

### 16. Curvas rapidas

El auto se mueve en alta velocidad.

Minijuego: ers.

- Opcion 1: Confiar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Levantar. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Cambiar reparto. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%.

### 17. Ataque tardio

Quedan dos vueltas y tienes mejor goma.

Minijuego: duel.

- Opcion 1: Todo o nada. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Preparar ultima. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: No arriesgar. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%.

### 18. Defensa legal

Tu rival se queja de tus movimientos.

Minijuego: tyres.

- Opcion 1: Una defensa. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Dejar espacio. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Ser mas duro. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%.

### 19. Vibracion

El volante vibra en recta.

Minijuego: corner.
Incluye rivalidad.

- Opcion 1: Seguir. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}; rival -1.
- Opcion 2: Bajar ritmo. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Pedir box. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%; rival +1.

### 20. DRS roto

El aleron abre tarde.

Minijuego: brake.

- Opcion 1: Compensar frenada. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: No usar. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.
- Opcion 3: Usarlo igual. Mas techo, mas ruido. Impacto: stats {"technical":2}; temporada {"setup":2,"race":1}; riesgo 30%.

### 21. Box doble

El equipo quiere meter dos autos en la misma vuelta.

Minijuego: corner.
Incluye rivalidad.

- Opcion 1: Aceptar doble box. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}; rival -1.
- Opcion 2: Pedir vuelta extra. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

### 22. Mapa motor rival

Detectas que el rival baja potencia.

Minijuego: brake.

- Opcion 1: Atacar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Guardar bateria. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

### 23. Bloqueo en frenada

El pedal se alarga con tanque lleno.

Minijuego: drs.

- Opcion 1: Cambiar reparto. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Adaptar manejo. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

### 24. Orden para ceder

El equipo necesita invertir posiciones.

Minijuego: ers.

- Opcion 1: Ceder. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Pedir una vuelta. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

### 25. Rebufo perfecto

Estas a distancia ideal al final de recta.

Minijuego: duel.

- Opcion 1: Lanzar ataque. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Amagar. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

### 26. Curva de alta

El auto subvira en curva rapida.

Minijuego: tyres.
Incluye rivalidad.

- Opcion 1: Levantar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}; rival -1.
- Opcion 2: Confiar en carga. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

### 27. Goma usada

El rival tiene goma mas vieja.

Minijuego: corner.

- Opcion 1: Presionar. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Esperar caida. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

### 28. Salida de safety

El relanzamiento sera corto.

Minijuego: brake.

- Opcion 1: Atacar relanzamiento. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Cuidar gomas. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

### 29. Radio cortada

Solo escuchas media orden.

Minijuego: drs.

- Opcion 1: Decidir solo. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Pedir confirmacion. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

### 30. Defensa final

Quedan dos curvas y viene con DRS.

Minijuego: ers.

- Opcion 1: Cerrar interior. Opcion estable con premio moderado. Impacto: stats {"racecraft":2,"pace":1}; temporada {"race":3,"volatility":2}.
- Opcion 2: Abrir salida. Camino tecnico y consistente. Impacto: stats {"tyre":2,"focus":1}; temporada {"tyreCare":3,"consistency":1}.

## Mitad de año

### 1. Mejora del auto

Hay una sola tanda seria de desarrollo. Tu feedback decide que pieza llega primero.

Minijuego: apex.

- Opcion 1: Paquete aerodinamico. Mas techo para qualy. Impacto: stats {"pace":2,"technical":2}; temporada {"carBoost":4}.
- Opcion 2: Suspension y gomas. Domingos mas fuertes. Impacto: stats {"tyre":3}; temporada {"tyreCare":4}.
- Opcion 3: Frenos y confianza. Mejores batallas. Impacto: stats {"focus":2,"racecraft":2}; temporada {"race":3}.

### 2. Cambio de ingeniero

Tu ingeniero recibe una oferta de otro equipo. Puedes retenerlo, adaptarte o traer alguien de tu entorno.

Minijuego: radio.

- Opcion 1: Pedir continuidad. Relacion estable. Impacto: stats {"technical":2,"reputation":1}; temporada {"setup":3}.
- Opcion 2: Aceptar cambio. Madurez para resetear. Impacto: stats {"focus":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Traer tu gente. Mas control, mas politica. Impacto: stats {"market":2,"reputation":-1}; temporada {"setup":2,"pressure":2}.

### 3. Rivalidad al limite

Tu rival declara que eres rapido, pero inconsistente. El paddock espera tu respuesta.

Incluye rivalidad.

- Opcion 1: Responder en pista. Silencio elegante. Impacto: stats {"focus":2,"racecraft":2}; temporada {"race":3}; rival -2.
- Opcion 2: Responder en prensa. El duelo vende. Impacto: stats {"market":4,"focus":-1}; temporada {"pressure":2}; rival +3.
- Opcion 3: Buscarlo rueda a rueda. Puede ser clasico o sancion. Impacto: stats {"racecraft":3,"reputation":1}; temporada {"volatility":3}; riesgo 45%; rival +4.

### 4. Oferta de otro manager

Un representante con contactos en F1 te busca. Tu manager actual estuvo desde karting.

- Opcion 1: Cambiar manager. Mas puertas, menos lealtad. Impacto: stats {"market":4,"reputation":-2}; temporada {"pressure":2}.
- Opcion 2: Seguir igual. Entorno estable. Impacto: stats {"reputation":2,"focus":1}; temporada {"consistency":2}.
- Opcion 3: Negociar equipo mixto. Politica fina. Impacto: stats {"market":2,"technical":1}; temporada {"setup":1,"pressure":1}.

### 5. Test de F1 en simulador

Un equipo de F1 te presta una sesion virtual. No es contrato, pero queda registro.

Minijuego: sector.

- Opcion 1: Buscar tiempo. Numero grande en pantalla. Impacto: stats {"pace":3}; temporada {"qualy":3,"volatility":2}; riesgo 30%.
- Opcion 2: Dar feedback. Perfil profesional. Impacto: stats {"technical":4,"reputation":1}; temporada {"setup":3}.
- Opcion 3: No sobreactuar. No quemar etapas. Impacto: stats {"focus":2}; temporada {"consistency":2}.

### 6. Rival al mismo equipo

Tu rival tambien suena para tu asiento. El duelo ahora es deportivo y politico.

Minijuego: duel.
Incluye rivalidad.

- Opcion 1: Atacarlo en datos. Comparativa fria. Impacto: stats {"technical":2,"reputation":-1}; temporada {"setup":2}; rival +3.
- Opcion 2: Ganarle en pista. Sin escritorio. Impacto: stats {"racecraft":2,"focus":1}; temporada {"race":3}; rival -2.
- Opcion 3: Evitar guerra. Madurez visible. Impacto: stats {"reputation":2}; temporada {"consistency":2}; rival -1.

### 7. Actualizacion fallida

La pieza nueva no funciona. El equipo necesita decidir si volver atras.

Minijuego: radio.

- Opcion 1: Volver al paquete viejo. Aceptar la realidad. Impacto: stats {"focus":1}; temporada {"consistency":4,"carBoost":-1}.
- Opcion 2: Insistir una carrera. Puede desbloquear rendimiento. Impacto: stats {"technical":2}; temporada {"carBoost":3,"volatility":3}; riesgo 36%.
- Opcion 3: Mezclar piezas. Trabajo fino. Impacto: stats {"technical":3}; temporada {"setup":3,"volatility":1}.

### 8. Fatiga de calendario

Tres fines de semana seguidos dejan al equipo destruido. Tu preparador pide bajar intensidad.

- Opcion 1: Descansar. Menos chispa, mas claridad. Impacto: stats {"focus":3}; temporada {"consistency":3,"qualy":-1}.
- Opcion 2: Entrenar igual. Ambicion fisica. Impacto: stats {"pace":2}; temporada {"qualy":2,"pressure":2}; riesgo 32%.
- Opcion 3: Simulador liviano. Ritmo sin romperte. Impacto: stats {"technical":2,"focus":1}; temporada {"setup":2}.

### 9. Paquete de aleron

La mejora da carga pero quita punta.

Minijuego: radio.
Incluye rivalidad.

- Opcion 1: Montarlo. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}; rival -1.
- Opcion 2: Esperar. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Solo qualy. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%; rival +1.

### 10. Motor usado

Toca decidir si penalizar con unidad nueva.

Minijuego: sector.

- Opcion 1: Penalizar. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Aguantar. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Cambiar parcial. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%.

### 11. Rival ficha manager

Tu rival suma representantes fuertes.

Minijuego: focus.

- Opcion 1: Responder. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Calma. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Buscar sponsor. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%.

### 12. Ingeniero enfermo

El suplente no conoce tus manias.

Minijuego: corner.

- Opcion 1: Guiarlo. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Simplificar. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Exigir detalle. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%.

### 13. Datos contradictorios

Simulador y pista no coinciden.

Minijuego: boxcrew.

- Opcion 1: Creer pista. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Creer sim. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Promediar. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%.

### 14. Reunion con jefe

El jefe pregunta por compromiso a largo plazo.

Incluye rivalidad.

- Opcion 1: Lealtad. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}; rival -1.
- Opcion 2: Ambicion. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Condiciones. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%; rival +1.

### 15. Companero favorecido

La pieza nueva va al otro auto.

Minijuego: radio.

- Opcion 1: Protestar. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Aceptar. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Ganarle igual. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%.

### 16. Rumor de salida

Dicen que tu asiento no esta seguro.

Minijuego: sector.

- Opcion 1: Prensa. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Pista. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Despacho. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%.

### 17. Entrenamiento lluvia

Puedes gastar un dia en mojado.

Minijuego: focus.

- Opcion 1: Mojado. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Seco. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Mixto. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%.

### 18. Error del equipo

Una tuerca mal puesta te costo puntos.

Minijuego: corner.

- Opcion 1: Criticar. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Protegerlos. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Pedir cambios. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%.

### 19. Sponsor exige video

Un compromiso comercial cae antes de qualy.

Minijuego: boxcrew.
Incluye rivalidad.

- Opcion 1: Hacerlo. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}; rival -1.
- Opcion 2: Reducirlo. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Cancelarlo. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%; rival +1.

### 20. Analisis de rival

Tu rival gana donde vos sufres.

- Opcion 1: Copiar. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Diferenciarte. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.
- Opcion 3: Presionarlo. Mas techo, mas ruido. Impacto: stats {"market":2,"focus":1}; temporada {"pressure":2,"race":1}; riesgo 34%.

### 21. Oferta de test

Un equipo rival ofrece test privado no anunciado.

Minijuego: boxcrew.
Incluye rivalidad.

- Opcion 1: Aceptar test. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}; rival -1.
- Opcion 2: Ser leal. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

### 22. Ingeniero discute

Tu ingeniero pelea con estrategia.

- Opcion 1: Apoyar ingeniero. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Apoyar estrategia. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

### 23. Pieza unica

Solo hay una mejora disponible para un auto.

Minijuego: radio.

- Opcion 1: Pedir pieza. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Ceder pieza. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

### 24. Reunion FIA

Te invitan a hablar sobre conduccion peligrosa.

Minijuego: sector.

- Opcion 1: Ir personal. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Enviar manager. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

### 25. Simulador falla

El simulador entrega datos raros.

Minijuego: focus.

- Opcion 1: Creer piloto. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Creer datos. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

### 26. Sponsor exige resultados

El sponsor condiciona apoyo a podios.

Minijuego: corner.
Incluye rivalidad.

- Opcion 1: Aceptar presion. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}; rival -1.
- Opcion 2: Renegociar. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

### 27. Rival cambia tono

Tu rival baja agresividad en prensa.

Minijuego: boxcrew.

- Opcion 1: Bajar tension. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Aprovechar debilidad. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

### 28. Equipo dividido

Mecanicos prefieren al companero.

- Opcion 1: Ganarlos. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Ignorarlos. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

### 29. Prensa internacional

Un medio grande pide entrevista larga.

Minijuego: radio.

- Opcion 1: Aceptar. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Postergar. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

### 30. Entrenamiento nocturno

Puedes sumar horas, pero llegas cansado.

Minijuego: sector.

- Opcion 1: Entrenar. Opcion estable con premio moderado. Impacto: stats {"technical":3}; temporada {"setup":3}.
- Opcion 2: Dormir. Camino tecnico y consistente. Impacto: stats {"reputation":2}; temporada {"consistency":2,"pressure":-1}.

## Final de temporada

### 1. La carrera que define el contrato

Llegas al cierre con miradas de arriba. Un resultado grande puede cambiar tu categoria.

Minijuego: pit.

- Opcion 1: Atacar desde la largada. Portada o abandono. Impacto: stats {"pace":2,"reputation":2}; temporada {"race":4,"volatility":2}; riesgo 42%.
- Opcion 2: Correr por puntos. La carrera se cocina lento. Impacto: stats {"tyre":2,"focus":2}; temporada {"consistency":4}.
- Opcion 3: Estrategia alternativa. Ganar desde el muro. Impacto: stats {"technical":3}; temporada {"setup":2,"race":2}; riesgo 25%.

### 2. Audicion para un equipo grande

Un director deportivo mira tus datos. No necesita show: necesita pruebas de que no rompes procesos.

Minijuego: pit.

- Opcion 1: Priorizar resultado. Senal de madurez. Impacto: stats {"reputation":2}; temporada {"consistency":4}.
- Opcion 2: Buscar vuelta imposible. Techo alto, alarma alta. Impacto: stats {"pace":3,"focus":-1}; temporada {"qualy":4,"volatility":3}; riesgo 46%.
- Opcion 3: Ayudar al equipo. Perfil de piloto completo. Impacto: stats {"technical":2,"reputation":2}; temporada {"setup":2,"race":1}.

### 3. Final contra tu rival

Llegan separados por pocos puntos. La carrera puede definir quien sube primero.

Minijuego: duel.
Incluye rivalidad.

- Opcion 1: Atacar temprano. Golpe psicologico. Impacto: stats {"racecraft":2}; temporada {"race":4,"volatility":3}; riesgo 40%; rival +3.
- Opcion 2: Presionarlo vuelta a vuelta. Lo obligas a equivocarse. Impacto: stats {"focus":3}; temporada {"consistency":4}; rival -2.
- Opcion 3: No entrar en su juego. Campeonato antes que orgullo. Impacto: stats {"tyre":2,"reputation":1}; temporada {"tyreCare":3}; rival -1.

### 4. Puntos de superlicencia en juego

No necesitas ganar, necesitas sumar justo. Tu manager te pide cabeza fria.

- Opcion 1: Carrera conservadora. Pensar en licencia. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":5}.
- Opcion 2: Buscar podio. Acelerar el proceso. Impacto: stats {"racecraft":2}; temporada {"race":4,"volatility":2}; riesgo 34%.
- Opcion 3: Ayudar al equipo. Valor integral. Impacto: stats {"technical":2,"reputation":2}; temporada {"setup":2,"tyreCare":1}.

### 5. Rumor de ascenso

La prensa dice que ya estas arriba. Tu equipo actual siente que te fuiste antes de irte.

- Opcion 1: Desmentir fuerte. Cerrar filas. Impacto: stats {"reputation":2,"focus":1}; temporada {"consistency":2}.
- Opcion 2: Dejar correr rumor. Aumenta valor. Impacto: stats {"market":4}; temporada {"pressure":3}.
- Opcion 3: Hablar con el equipo. Transparencia adulta. Impacto: stats {"reputation":1,"technical":1}; temporada {"setup":2}.

### 6. Carrera con lluvia final

El campeonato termina con pista cambiante. Nadie sabe que goma usar.

Minijuego: tyres.

- Opcion 1: Intermedias temprano. Decision prudente. Impacto: stats {"focus":1}; temporada {"consistency":4}.
- Opcion 2: Slicks hasta el limite. Magia o desastre. Impacto: stats {"pace":2}; temporada {"qualy":2,"race":3,"volatility":3}; riesgo 44%.
- Opcion 3: Copiar al rival. Final mano a mano. Impacto: stats {"racecraft":1}; temporada {"race":2}; rival +2.

### 7. Ultima reunion tecnica

Antes del mercado, el jefe pide una devolucion honesta sobre el auto.

- Opcion 1: Ser brutalmente honesto. Verdad incomoda. Impacto: stats {"technical":3,"reputation":-1}; temporada {"setup":3}.
- Opcion 2: Cuidar formas. Puentes intactos. Impacto: stats {"reputation":2,"focus":1}; temporada {"consistency":2}.
- Opcion 3: Pedir inversion. Ambicion de proyecto. Impacto: stats {"market":1,"technical":2}; temporada {"carBoost":2,"pressure":1}.

### 8. Asiento libre inesperado

Un piloto se lesiona y aparece una oportunidad para una fecha final en otra estructura.

Minijuego: radio.

- Opcion 1: Aceptar de inmediato. Audicion real. Impacto: stats {"market":3,"focus":-1}; temporada {"race":3,"volatility":3}; riesgo 38%.
- Opcion 2: Negociar test previo. Preparar el salto. Impacto: stats {"technical":2,"reputation":1}; temporada {"setup":2}.
- Opcion 3: No romper contrato. Lealtad visible. Impacto: stats {"reputation":3}; temporada {"consistency":2}.

### 9. Ultima parada

Una parada mas puede cambiar todo.

Minijuego: pit.
Incluye rivalidad.

- Opcion 1: Parar. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}; rival -1.
- Opcion 2: Seguir. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Finta. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%; rival +1.

### 10. Titulo matematico

Puedes asegurar campeonato sin ganar.

Minijuego: duel.

- Opcion 1: Asegurar. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Buscar victoria. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Cubrir rival. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%.

### 11. Contrato firmado en secreto

Ya tienes oferta, pero no puede filtrarse.

Minijuego: tyres.

- Opcion 1: Callar. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Filtrar. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Avisar equipo. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%.

### 12. Carrera de despedida

El equipo sabe que puedes irte.

Minijuego: radio.

- Opcion 1: Agradecer. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Aislarte. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Prometer entrega. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%.

### 13. Rival desesperado

Tu rival necesita ganarte si o si.

Minijuego: boxcrew.

- Opcion 1: Dejarlo venir. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Golpear primero. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Evitar duelo. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%.

### 14. Lluvia final

La ultima carrera cambia vuelta a vuelta.

Minijuego: brake.
Incluye rivalidad.

- Opcion 1: Riesgo. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}; rival -1.
- Opcion 2: Control. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Copiar lider. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%; rival +1.

### 15. Fallo hidraulico

El pedal cambia sensacion.

Minijuego: pit.

- Opcion 1: Adaptarte. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Abandonar riesgo. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Pedir modo seguro. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%.

### 16. Director de F1 presente

Un jefe de F1 esta en el box.

Minijuego: duel.

- Opcion 1: Mostrar ritmo. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Mostrar cabeza. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Mostrar feedback. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%.

### 17. Penalizacion posible

Una maniobra tuya esta investigada.

Minijuego: tyres.

- Opcion 1: Defenderte. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Aceptar. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Culpar rival. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%.

### 18. Estrategia dividida

Los autos del equipo van a estrategias opuestas.

Minijuego: radio.

- Opcion 1: Cubrir lider. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Ir alternativo. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Ayudar companero. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%.

### 19. Neumaticos al limite

La goma llega al final sin margen.

Minijuego: boxcrew.
Incluye rivalidad.

- Opcion 1: Cuidar. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}; rival -1.
- Opcion 2: Empujar. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Parar tarde. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%; rival +1.

### 20. Podio historico

El equipo puede lograr su mejor resultado.

Minijuego: brake.

- Opcion 1: Asegurar. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Atacar. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
- Opcion 3: Jugar estrategia. Mas techo, mas ruido. Impacto: stats {"tyre":2,"technical":1}; temporada {"setup":2,"tyreCare":2}; riesgo 38%.

### 21. Precontrato F1

Hay un precontrato si terminas top tres.

Minijuego: boxcrew.
Incluye rivalidad.

- Opcion 1: Correr seguro. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}; rival -1.
- Opcion 2: Buscar victoria. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.

### 22. Rival eliminado

Tu rival larga atras por sancion.

Minijuego: brake.

- Opcion 1: Controlar. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Rematar. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.

### 23. Equipo pide puntos

El equipo necesita constructores mas que tu resultado.

Minijuego: pit.

- Opcion 1: Ayudar equipo. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Correr para ti. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.

### 24. Lluvia en cierre

La nube llega a diez vueltas del final.

Minijuego: duel.

- Opcion 1: Parar antes. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Esperar. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.

### 25. Ultima vuelta

Puedes intentar maniobra final o aceptar posicion.

Minijuego: tyres.

- Opcion 1: Intentar. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Aceptar. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.

### 26. Motor al limite

La temperatura sube en las ultimas vueltas.

Minijuego: radio.
Incluye rivalidad.

- Opcion 1: Bajar ritmo. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}; rival -1.
- Opcion 2: Arriesgar. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.

### 27. Contrato publico

Quieren anunciar tu futuro antes de terminar.

Minijuego: boxcrew.

- Opcion 1: Anunciar. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Esperar final. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.

### 28. Podio del equipo

Tu companero necesita que bloquees rivales.

Minijuego: brake.

- Opcion 1: Bloquear. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Buscar tu carrera. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.

### 29. Sancion pendiente

Hay cinco segundos en investigacion.

Minijuego: pit.

- Opcion 1: Abrir hueco. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Defender pista. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.

### 30. Despedida rival

Tu rival puede subir contigo o quedarse atras.

Minijuego: duel.

- Opcion 1: Respetar duelo. Opcion estable con premio moderado. Impacto: stats {"focus":2,"reputation":1}; temporada {"consistency":4}.
- Opcion 2: Hundilo en pista. Camino tecnico y consistente. Impacto: stats {"pace":2,"racecraft":1}; temporada {"race":4,"volatility":2}.
