// @ts-nocheck
// Banco de eventos migrado desde legacyData.ts. Proximo paso: partir por fase y tipar cada evento.

export const MOMENT_BANK = [
  [
  {
    phase: "Pretemporada",
    title: "Programa de invierno",
    text: "El equipo te da una ventana de trabajo antes de que empiece el ruido. Elegir foco ahora cambia toda la temporada.",
    choices: [
      { label: "Simulador intensivo", effect: { technical: 4, focus: 1 }, season: { setup: 4 }, note: "Mejora feedback y puesta a punto." },
      { label: "Plan fisico extremo", effect: { focus: 3, tyre: 2 }, season: { consistency: 3 }, note: "Menos errores cuando el auto se mueve." },
      { label: "Sponsor y prensa", effect: { market: 5, reputation: -1 }, season: { pressure: 2 }, note: "Mas valor de mercado, mas presion." }
    ]
  },
  {
    phase: "Pretemporada",
    title: "Test con gomas nuevas",
    text: "Pirelli trae compuestos que nadie entiende del todo. Tu equipo necesita una direccion clara.",
    minigame: "tyres",
    choices: [
      { label: "Tandas largas", effect: { tyre: 3 }, season: { tyreCare: 5, consistency: 2 }, note: "Menos caida de ritmo en carrera." },
      { label: "Vueltas de qualy", effect: { pace: 3, focus: -1 }, season: { qualy: 4, volatility: 1 }, note: "Una vuelta fuerte, mas riesgo." },
      { label: "Comparar configuraciones", effect: { technical: 4 }, season: { setup: 5 }, note: "El auto evoluciona mejor contigo." }
    ]
  },
  {
    phase: "Pretemporada",
    title: "Entrenador mental",
    text: "El entorno detecta ansiedad antes de correr. Puedes invertir tiempo en calma, agresividad o imagen.",
    minigame: "focus",
    choices: [
      { label: "Rutina de presion", effect: { focus: 4 }, season: { consistency: 4 }, note: "Menos errores en cierre de carrera." },
      { label: "Mentalidad de ataque", effect: { racecraft: 2, reputation: 1 }, season: { race: 3, volatility: 2 }, note: "Ganas respeto, tambien incidentes." },
      { label: "Construir marca", effect: { market: 4 }, season: { pressure: 2 }, note: "Mas ojos encima desde el viernes." }
    ]
  }
  ],
  [
  {
    phase: "Primeras fechas",
    title: "Qualy bajo amenaza de lluvia",
    text: "El radar cambia cada minuto. Salir temprano da pista limpia; esperar puede darte la goma perfecta.",
    minigame: "lights",
    choices: [
      { label: "Salir primero", effect: { focus: 1 }, season: { qualy: 2 }, note: "Vuelta segura, poco trafico." },
      { label: "Esperar al final", effect: { pace: 2 }, season: { volatility: 3 }, risk: 0.36, note: "Techo alto y margen minimo." },
      { label: "Copiar al lider", effect: { racecraft: 1, reputation: 1 }, season: { qualy: 1 }, note: "No brilla, pero protege puntos." }
    ]
  },
  {
    phase: "Primeras fechas",
    title: "Tu rival te tapa la vuelta",
    text: "El trafico no parece casual. El mismo piloto aparece justo delante en el tercer sector.",
    minigame: "sector",
    rival: true,
    choices: [
      { label: "Quejarse por radio", effect: { reputation: -1, focus: 1 }, season: { pressure: 1 }, rival: 2, note: "El muro toma nota, tu rival tambien." },
      { label: "Preparar revancha limpia", effect: { focus: 2, racecraft: 1 }, season: { race: 2 }, rival: -1, note: "Respuesta en pista, sin ruido." },
      { label: "Bloquearlo despues", effect: { racecraft: 2, reputation: -2 }, season: { volatility: 3 }, rival: 4, risk: 0.42, note: "La guerra empieza temprano." }
    ]
  },
  {
    phase: "Primeras fechas",
    title: "Debut en circuito callejero",
    text: "Muros cerca, poca practica y comisarios atentos. Aqui el ego cobra caro.",
    minigame: "walls",
    choices: [
      { label: "Ir al limite", effect: { pace: 2 }, season: { qualy: 4, volatility: 4 }, risk: 0.48, note: "Puede cambiar el campeonato." },
      { label: "Construir confianza", effect: { focus: 2 }, season: { consistency: 4 }, note: "Carrera inteligente." },
      { label: "Priorizar salida de curvas", effect: { technical: 2, tyre: 1 }, season: { setup: 2, race: 2 }, note: "Auto amable y traccion." }
    ]
  }
  ],
  [
  {
    phase: "Sprint",
    title: "Defensa con DRS",
    text: "Un rival con mejor punta viene cargado de bateria. Si lo sostienes, el equipo empieza a creer.",
    minigame: "drs",
    choices: [
      { label: "Defender por dentro", effect: { racecraft: 3 }, season: { race: 2 }, risk: 0.28, note: "Duro, legal y peligroso." },
      { label: "Cuidar la salida", effect: { tyre: 2, focus: 1 }, season: { consistency: 2 }, note: "Pierdes menos goma." },
      { label: "Dejar pasar y contraatacar", effect: { technical: 1, racecraft: 1 }, season: { race: 1, tyreCare: 2 }, note: "Estrategia larga." }
    ]
  },
  {
    phase: "Sprint",
    title: "Bateria en la ultima vuelta",
    text: "Tu ingeniero te ofrece descargar ERS ahora o guardarlo para el final de recta.",
    minigame: "ers",
    choices: [
      { label: "Descargar temprano", effect: { pace: 1 }, season: { race: 3 }, note: "Ataque directo, defensa mas dificil." },
      { label: "Guardar para el final", effect: { focus: 1 }, season: { race: 2, consistency: 2 }, note: "Paciencia y precision." },
      { label: "Modo neutral", effect: { tyre: 1 }, season: { consistency: 3 }, note: "Menos heroico, mas puntos." }
    ]
  },
  {
    phase: "Sprint",
    title: "Orden de equipo",
    text: "Tu companero viene con estrategia distinta. El equipo pide no pelear, pero el asiento se gana contra el de al lado.",
    choices: [
      { label: "Obedecer", effect: { reputation: 2, focus: 1 }, season: { consistency: 2 }, note: "Confianza interna." },
      { label: "Pelear limpio", effect: { racecraft: 3 }, season: { race: 3, volatility: 1 }, risk: 0.25, note: "Mensaje fuerte." },
      { label: "Ignorar la orden", effect: { market: 3, reputation: -3 }, season: { volatility: 4 }, risk: 0.5, note: "Portadas y reuniones tensas." }
    ]
  }
  ],
  [
  {
    phase: "Mitad de año",
    title: "Mejora del auto",
    text: "Hay una sola tanda seria de desarrollo. Tu feedback decide que pieza llega primero.",
    minigame: "apex",
    choices: [
      { label: "Paquete aerodinamico", effect: { pace: 2, technical: 2 }, season: { carBoost: 4 }, note: "Mas techo para qualy." },
      { label: "Suspension y gomas", effect: { tyre: 3 }, season: { tyreCare: 4 }, note: "Domingos mas fuertes." },
      { label: "Frenos y confianza", effect: { focus: 2, racecraft: 2 }, season: { race: 3 }, note: "Mejores batallas." }
    ]
  },
  {
    phase: "Mitad de año",
    title: "Cambio de ingeniero",
    text: "Tu ingeniero recibe una oferta de otro equipo. Puedes retenerlo, adaptarte o traer alguien de tu entorno.",
    minigame: "radio",
    choices: [
      { label: "Pedir continuidad", effect: { technical: 2, reputation: 1 }, season: { setup: 3 }, note: "Relacion estable." },
      { label: "Aceptar cambio", effect: { focus: 2 }, season: { consistency: 2, pressure: -1 }, note: "Madurez para resetear." },
      { label: "Traer tu gente", effect: { market: 2, reputation: -1 }, season: { setup: 2, pressure: 2 }, note: "Mas control, mas politica." }
    ]
  },
  {
    phase: "Mitad de año",
    title: "Rivalidad al limite",
    text: "Tu rival declara que eres rapido, pero inconsistente. El paddock espera tu respuesta.",
    rival: true,
    choices: [
      { label: "Responder en pista", effect: { focus: 2, racecraft: 2 }, season: { race: 3 }, rival: -2, note: "Silencio elegante." },
      { label: "Responder en prensa", effect: { market: 4, focus: -1 }, season: { pressure: 2 }, rival: 3, note: "El duelo vende." },
      { label: "Buscarlo rueda a rueda", effect: { racecraft: 3, reputation: 1 }, season: { volatility: 3 }, rival: 4, risk: 0.45, note: "Puede ser clasico o sancion." }
    ]
  }
  ],
  [
  {
    phase: "Final de temporada",
    title: "La carrera que define el contrato",
    text: "Llegas al cierre con miradas de arriba. Un resultado grande puede cambiar tu categoria.",
    minigame: "pit",
    choices: [
      { label: "Atacar desde la largada", effect: { pace: 2, reputation: 2 }, season: { race: 4, volatility: 2 }, risk: 0.42, note: "Portada o abandono." },
      { label: "Correr por puntos", effect: { tyre: 2, focus: 2 }, season: { consistency: 4 }, note: "La carrera se cocina lento." },
      { label: "Estrategia alternativa", effect: { technical: 3 }, season: { setup: 2, race: 2 }, risk: 0.25, note: "Ganar desde el muro." }
    ]
  },
  {
    phase: "Final de temporada",
    title: "Audicion para un equipo grande",
    text: "Un director deportivo mira tus datos. No necesita show: necesita pruebas de que no rompes procesos.",
    minigame: "pit",
    choices: [
      { label: "Priorizar resultado", effect: { reputation: 2 }, season: { consistency: 4 }, note: "Senal de madurez." },
      { label: "Buscar vuelta imposible", effect: { pace: 3, focus: -1 }, season: { qualy: 4, volatility: 3 }, risk: 0.46, note: "Techo alto, alarma alta." },
      { label: "Ayudar al equipo", effect: { technical: 2, reputation: 2 }, season: { setup: 2, race: 1 }, note: "Perfil de piloto completo." }
    ]
  },
  {
    phase: "Final de temporada",
    title: "Final contra tu rival",
    text: "Llegan separados por pocos puntos. La carrera puede definir quien sube primero.",
    minigame: "duel",
    rival: true,
    choices: [
      { label: "Atacar temprano", effect: { racecraft: 2 }, season: { race: 4, volatility: 3 }, rival: 3, risk: 0.4, note: "Golpe psicologico." },
      { label: "Presionarlo vuelta a vuelta", effect: { focus: 3 }, season: { consistency: 4 }, rival: -2, note: "Lo obligas a equivocarse." },
      { label: "No entrar en su juego", effect: { tyre: 2, reputation: 1 }, season: { tyreCare: 3 }, rival: -1, note: "Campeonato antes que orgullo." }
    ]
  }
  ]
];

export const EXTRA_MOMENTS = [
  [
    {
      phase: "Pretemporada",
      title: "Academia o sponsor personal",
      text: "Tu entorno puede aceptar apoyo de una academia grande o mantener independencia con un sponsor regional.",
      choices: [
        { label: "Entrar a academia", effect: { reputation: 2, market: 1 }, season: { pressure: 3 }, note: "Mas puertas, menos libertad." },
        { label: "Sponsor regional", effect: { market: 3, focus: 1 }, season: { setup: -1 }, note: "Financia pruebas, pero no trae ingenieros." },
        { label: "Mantener independencia", effect: { focus: 2, reputation: 1 }, season: { consistency: 2 }, note: "Camino lento y propio." }
      ]
    },
    {
      phase: "Pretemporada",
      title: "Dia de filming",
      text: "Pocos kilometros, muchos sensores. El equipo quiere decidir si probar piezas o trabajar salidas.",
      minigame: "focus",
      choices: [
        { label: "Probar piso nuevo", effect: { technical: 3 }, season: { carBoost: 2, setup: 2 }, note: "Desarrollo temprano." },
        { label: "Practicar largadas", effect: { focus: 2, pace: 1 }, season: { qualy: 1, race: 2 }, note: "Mejor primer giro." },
        { label: "Cuidar kilometraje", effect: { tyre: 2 }, season: { consistency: 3 }, note: "Nada espectacular, todo util." }
      ]
    },
    {
      phase: "Pretemporada",
      title: "Contrato de imagen",
      text: "Una marca ofrece dinero por exposicion. Tu manager avisa que consume tiempo de preparacion.",
      choices: [
        { label: "Firmar fuerte", effect: { market: 6, focus: -2 }, season: { pressure: 3 }, note: "Mucho valor comercial." },
        { label: "Firmar limitado", effect: { market: 3 }, season: { pressure: 1 }, note: "Equilibrio razonable." },
        { label: "Rechazar", effect: { focus: 2, reputation: 1 }, season: { consistency: 2 }, note: "El volante primero." }
      ]
    },
    {
      phase: "Pretemporada",
      title: "Test privado en lluvia",
      text: "La pista se moja y el equipo pregunta si seguir. El kilometraje puede valer oro.",
      minigame: "walls",
      choices: [
        { label: "Seguir con slicks", effect: { pace: 2 }, season: { qualy: 3, volatility: 4 }, risk: 0.5, note: "Sensibilidad extrema." },
        { label: "Montar lluvia", effect: { racecraft: 2, focus: 1 }, season: { race: 3 }, note: "Aprendizaje transferible." },
        { label: "Cancelar tanda", effect: { reputation: -1, focus: 2 }, season: { consistency: 2 }, note: "Seguro, aunque conservador." }
      ]
    },
    {
      phase: "Pretemporada",
      title: "Ingeniero de datos joven",
      text: "Un analista nuevo encuentra patrones raros. Puedes darle peso o seguir al jefe historico.",
      minigame: "radio",
      choices: [
        { label: "Escuchar al analista", effect: { technical: 3 }, season: { setup: 4, volatility: 1 }, note: "Innovacion con riesgo." },
        { label: "Seguir al jefe", effect: { reputation: 1, focus: 1 }, season: { consistency: 3 }, note: "Metodo probado." },
        { label: "Combinar ambos", effect: { technical: 2, focus: 1 }, season: { setup: 2, consistency: 1 }, note: "Mas trabajo, menos extremos." }
      ]
    }
  ],
  [
    {
      phase: "Primeras fechas",
      title: "Salida desde mitad de grilla",
      text: "Estas rodeado de autos mas lentos. El primer giro puede darte media carrera o destruirla.",
      minigame: "pit",
      choices: [
        { label: "Atacar por fuera", effect: { racecraft: 2 }, season: { race: 4, volatility: 3 }, risk: 0.38, note: "Mucho premio." },
        { label: "Buscar huecos internos", effect: { focus: 1, racecraft: 1 }, season: { race: 2 }, note: "Menos espacio, mas control." },
        { label: "Sobrevivir", effect: { tyre: 1, focus: 2 }, season: { consistency: 3 }, note: "Pensar en el domingo." }
      ]
    },
    {
      phase: "Primeras fechas",
      title: "Comisarios mirando",
      text: "Hubo incidentes en la carrera anterior. Cualquier maniobra tuya va directo a investigacion.",
      choices: [
        { label: "Bajar agresividad", effect: { reputation: 2, focus: 1 }, season: { consistency: 3, race: -1 }, note: "Ganas confianza." },
        { label: "Correr igual", effect: { racecraft: 2 }, season: { race: 3, volatility: 2 }, risk: 0.34, note: "No cambias tu identidad." },
        { label: "Usar presion mediatica", effect: { market: 3, reputation: -1 }, season: { pressure: 2 }, note: "El foco se mueve a prensa." }
      ]
    },
    {
      phase: "Primeras fechas",
      title: "Setup equivocado",
      text: "El auto rebota en frenada. Cambiar todo antes de qualy puede salvarte o dejarte sin base.",
      minigame: "radio",
      choices: [
        { label: "Cambio radical", effect: { technical: 2 }, season: { setup: 4, volatility: 3 }, risk: 0.36, note: "Solucion grande." },
        { label: "Microajustes", effect: { focus: 2 }, season: { consistency: 3 }, note: "Menos techo, mas control." },
        { label: "Copiar al companero", effect: { reputation: -1 }, season: { setup: 2, qualy: 1 }, note: "Pragmatico." }
      ]
    },
    {
      phase: "Primeras fechas",
      title: "Rueda pinchada ajena",
      text: "Un rival deja restos en pista. Puedes levantar o mantener velocidad con bandera amarilla preparada.",
      minigame: "sector",
      choices: [
        { label: "Levantar mucho", effect: { reputation: 2 }, season: { consistency: 2, qualy: -1 }, note: "Impecable para comisarios." },
        { label: "Levantar justo", effect: { focus: 2 }, season: { qualy: 2 }, note: "Precision reglamentaria." },
        { label: "Mantener ritmo", effect: { pace: 2, reputation: -2 }, season: { qualy: 4, volatility: 3 }, risk: 0.46, note: "Puede venir sancion." }
      ]
    },
    {
      phase: "Primeras fechas",
      title: "Primer podio posible",
      text: "Estas cuarto con mejor ritmo que el tercero. Tambien tienes al quinto cerca.",
      minigame: "ers",
      choices: [
        { label: "Ir por podio", effect: { racecraft: 2, market: 1 }, season: { race: 4, volatility: 2 }, risk: 0.32, note: "Carrera que cambia cartel." },
        { label: "Asegurar cuarto", effect: { focus: 2, reputation: 1 }, season: { consistency: 4 }, note: "Resultado maduro." },
        { label: "Presion sin ataque", effect: { tyre: 1, racecraft: 1 }, season: { race: 2, tyreCare: 1 }, note: "Esperar error." }
      ]
    }
  ],
  [
    {
      phase: "Sprint",
      title: "Safety car tardio",
      text: "Quedan pocas vueltas. Parar te da goma, seguir te da posicion.",
      minigame: "tyres",
      choices: [
        { label: "Parar por blandas", effect: { pace: 2 }, season: { race: 4, volatility: 3 }, risk: 0.34, note: "Ataque total." },
        { label: "Quedarse afuera", effect: { focus: 2 }, season: { consistency: 4 }, note: "Defensa con goma usada." },
        { label: "Copiar al rival", effect: { racecraft: 1 }, season: { race: 2, pressure: 1 }, rival: 1, note: "Duelo directo." }
      ]
    },
    {
      phase: "Sprint",
      title: "Companero con mejor ritmo",
      text: "El equipo pregunta si dejas pasar. La tele enfoca tu volante.",
      choices: [
        { label: "Dejar pasar rapido", effect: { reputation: 3 }, season: { consistency: 2 }, note: "Equipo feliz." },
        { label: "Pedir una vuelta", effect: { racecraft: 2, focus: 1 }, season: { race: 3 }, note: "Te ganas el derecho." },
        { label: "Cerrar la puerta", effect: { market: 2, reputation: -3 }, season: { volatility: 4 }, risk: 0.42, note: "El box hierve." }
      ]
    },
    {
      phase: "Sprint",
      title: "Motor en modo seguro",
      text: "La unidad de potencia sube temperatura. Puedes cuidar o pedir mapa agresivo.",
      minigame: "focus",
      choices: [
        { label: "Mapa agresivo", effect: { pace: 2 }, season: { race: 4, volatility: 4 }, risk: 0.5, note: "Ritmo contra fiabilidad." },
        { label: "Modo seguro", effect: { technical: 1, focus: 2 }, season: { consistency: 4 }, note: "Llegar suma." },
        { label: "Aire limpio", effect: { tyre: 1, racecraft: 1 }, season: { tyreCare: 2, race: 1 }, note: "Gestion desde pista." }
      ]
    },
    {
      phase: "Sprint",
      title: "Ataque a dos autos",
      text: "Dos rivales pelean delante. Si lees bien, pasas a ambos.",
      minigame: "duel",
      choices: [
        { label: "Meterte al hueco", effect: { racecraft: 3 }, season: { race: 4, volatility: 3 }, risk: 0.4, note: "Maniobra de highlight." },
        { label: "Esperar que se toquen", effect: { focus: 2 }, season: { consistency: 3 }, note: "Ajedrez." },
        { label: "Forzar error", effect: { market: 1, racecraft: 1 }, season: { pressure: 2, race: 2 }, note: "Presion limpia." }
      ]
    },
    {
      phase: "Sprint",
      title: "Neumatico delantero muerto",
      text: "El delantero izquierdo esta al limite. El ingeniero no sabe si aguanta.",
      minigame: "tyres",
      choices: [
        { label: "Administrar", effect: { tyre: 3 }, season: { tyreCare: 4 }, note: "Leccion de domingo." },
        { label: "Cambiar balance", effect: { technical: 2 }, season: { setup: 2, consistency: 1 }, note: "Resolver desde volante." },
        { label: "Ignorar desgaste", effect: { pace: 2 }, season: { race: 3, volatility: 3 }, risk: 0.45, note: "Riesgo de pinchazo." }
      ]
    }
  ],
  [
    {
      phase: "Mitad de año",
      title: "Oferta de otro manager",
      text: "Un representante con contactos en F1 te busca. Tu manager actual estuvo desde karting.",
      choices: [
        { label: "Cambiar manager", effect: { market: 4, reputation: -2 }, season: { pressure: 2 }, note: "Mas puertas, menos lealtad." },
        { label: "Seguir igual", effect: { reputation: 2, focus: 1 }, season: { consistency: 2 }, note: "Entorno estable." },
        { label: "Negociar equipo mixto", effect: { market: 2, technical: 1 }, season: { setup: 1, pressure: 1 }, note: "Politica fina." }
      ]
    },
    {
      phase: "Mitad de año",
      title: "Test de F1 en simulador",
      text: "Un equipo de F1 te presta una sesion virtual. No es contrato, pero queda registro.",
      minigame: "sector",
      choices: [
        { label: "Buscar tiempo", effect: { pace: 3 }, season: { qualy: 3, volatility: 2 }, risk: 0.3, note: "Numero grande en pantalla." },
        { label: "Dar feedback", effect: { technical: 4, reputation: 1 }, season: { setup: 3 }, note: "Perfil profesional." },
        { label: "No sobreactuar", effect: { focus: 2 }, season: { consistency: 2 }, note: "No quemar etapas." }
      ]
    },
    {
      phase: "Mitad de año",
      title: "Rival al mismo equipo",
      text: "Tu rival tambien suena para tu asiento. El duelo ahora es deportivo y politico.",
      rival: true,
      minigame: "duel",
      choices: [
        { label: "Atacarlo en datos", effect: { technical: 2, reputation: -1 }, season: { setup: 2 }, rival: 3, note: "Comparativa fria." },
        { label: "Ganarle en pista", effect: { racecraft: 2, focus: 1 }, season: { race: 3 }, rival: -2, note: "Sin escritorio." },
        { label: "Evitar guerra", effect: { reputation: 2 }, season: { consistency: 2 }, rival: -1, note: "Madurez visible." }
      ]
    },
    {
      phase: "Mitad de año",
      title: "Actualizacion fallida",
      text: "La pieza nueva no funciona. El equipo necesita decidir si volver atras.",
      minigame: "radio",
      choices: [
        { label: "Volver al paquete viejo", effect: { focus: 1 }, season: { consistency: 4, carBoost: -1 }, note: "Aceptar la realidad." },
        { label: "Insistir una carrera", effect: { technical: 2 }, season: { carBoost: 3, volatility: 3 }, risk: 0.36, note: "Puede desbloquear rendimiento." },
        { label: "Mezclar piezas", effect: { technical: 3 }, season: { setup: 3, volatility: 1 }, note: "Trabajo fino." }
      ]
    },
    {
      phase: "Mitad de año",
      title: "Fatiga de calendario",
      text: "Tres fines de semana seguidos dejan al equipo destruido. Tu preparador pide bajar intensidad.",
      choices: [
        { label: "Descansar", effect: { focus: 3 }, season: { consistency: 3, qualy: -1 }, note: "Menos chispa, mas claridad." },
        { label: "Entrenar igual", effect: { pace: 2 }, season: { qualy: 2, pressure: 2 }, risk: 0.32, note: "Ambicion fisica." },
        { label: "Simulador liviano", effect: { technical: 2, focus: 1 }, season: { setup: 2 }, note: "Ritmo sin romperte." }
      ]
    }
  ],
  [
    {
      phase: "Final de temporada",
      title: "Puntos de superlicencia en juego",
      text: "No necesitas ganar, necesitas sumar justo. Tu manager te pide cabeza fria.",
      choices: [
        { label: "Carrera conservadora", effect: { focus: 2, reputation: 1 }, season: { consistency: 5 }, note: "Pensar en licencia." },
        { label: "Buscar podio", effect: { racecraft: 2 }, season: { race: 4, volatility: 2 }, risk: 0.34, note: "Acelerar el proceso." },
        { label: "Ayudar al equipo", effect: { technical: 2, reputation: 2 }, season: { setup: 2, tyreCare: 1 }, note: "Valor integral." }
      ]
    },
    {
      phase: "Final de temporada",
      title: "Rumor de ascenso",
      text: "La prensa dice que ya estas arriba. Tu equipo actual siente que te fuiste antes de irte.",
      choices: [
        { label: "Desmentir fuerte", effect: { reputation: 2, focus: 1 }, season: { consistency: 2 }, note: "Cerrar filas." },
        { label: "Dejar correr rumor", effect: { market: 4 }, season: { pressure: 3 }, note: "Aumenta valor." },
        { label: "Hablar con el equipo", effect: { reputation: 1, technical: 1 }, season: { setup: 2 }, note: "Transparencia adulta." }
      ]
    },
    {
      phase: "Final de temporada",
      title: "Carrera con lluvia final",
      text: "El campeonato termina con pista cambiante. Nadie sabe que goma usar.",
      minigame: "tyres",
      choices: [
        { label: "Intermedias temprano", effect: { focus: 1 }, season: { consistency: 4 }, note: "Decision prudente." },
        { label: "Slicks hasta el limite", effect: { pace: 2 }, season: { qualy: 2, race: 3, volatility: 3 }, risk: 0.44, note: "Magia o desastre." },
        { label: "Copiar al rival", effect: { racecraft: 1 }, season: { race: 2 }, rival: 2, note: "Final mano a mano." }
      ]
    },
    {
      phase: "Final de temporada",
      title: "Ultima reunion tecnica",
      text: "Antes del mercado, el jefe pide una devolucion honesta sobre el auto.",
      choices: [
        { label: "Ser brutalmente honesto", effect: { technical: 3, reputation: -1 }, season: { setup: 3 }, note: "Verdad incomoda." },
        { label: "Cuidar formas", effect: { reputation: 2, focus: 1 }, season: { consistency: 2 }, note: "Puentes intactos." },
        { label: "Pedir inversion", effect: { market: 1, technical: 2 }, season: { carBoost: 2, pressure: 1 }, note: "Ambicion de proyecto." }
      ]
    },
    {
      phase: "Final de temporada",
      title: "Asiento libre inesperado",
      text: "Un piloto se lesiona y aparece una oportunidad para una fecha final en otra estructura.",
      minigame: "radio",
      choices: [
        { label: "Aceptar de inmediato", effect: { market: 3, focus: -1 }, season: { race: 3, volatility: 3 }, risk: 0.38, note: "Audicion real." },
        { label: "Negociar test previo", effect: { technical: 2, reputation: 1 }, season: { setup: 2 }, note: "Preparar el salto." },
        { label: "No romper contrato", effect: { reputation: 3 }, season: { consistency: 2 }, note: "Lealtad visible." }
      ]
    }
  ]
];

EXTRA_MOMENTS.forEach((events, index) => {
  MOMENT_BANK[index].push(...events);
});

export const GENERATED_EVENT_SEEDS = [
  [
    ["Mapa de motor conservador", "El jefe de ingenieria teme fiabilidad antes del debut.", "Cuidar unidad", "Mapa mixto", "Liberar potencia"],
    ["Sesion con sponsor tecnico", "Un socio trae sensores nuevos para entender frenadas.", "Probar sensores", "Hacer tanda normal", "Priorizar sensaciones"],
    ["Cambio de preparador fisico", "Tu entorno discute si necesitas fuerza o resistencia.", "Mas cuello", "Mas cardio", "Rutina mixta"],
    ["Simulador de circuito nuevo", "El calendario suma una pista que nadie domina.", "Aprender referencias", "Buscar vuelta rapida", "Trabajar tandas"],
    ["Briefing con academia", "La academia pide que representes su metodo ante prensa.", "Aceptar rol", "Perfil bajo", "Negociar libertad"],
    ["Nuevo chasis", "El equipo sortea quien usa primero un chasis mas liviano.", "Pedir prioridad", "Cederlo al lider", "Compartir pruebas"],
    ["Prueba de frenos", "El proveedor trae material agresivo para clasificacion.", "Freno agresivo", "Freno estable", "Comparativa larga"],
    ["Semana sin descanso", "El calendario aprieta antes de viajar.", "Descansar", "Entrenar", "Simulador corto"],
    ["Datos del rival", "Un analista consigue telemetria publica de tu rival.", "Estudiarlo", "Ignorarlo", "Imitar trazada"],
    ["Sesion de prensa hostil", "Un periodista cuestiona tu madurez.", "Responder seco", "Ser diplomatico", "Usar humor"],
    ["Contrato de bonus", "Te ofrecen prima por podio pero penaliza abandonos.", "Aceptar bonus", "Pedir fijo", "Rechazar presion"],
    ["Plan de nutricion", "Tu peso puede bajar, pero arriesga energia.", "Bajar peso", "Mantener", "Subir fuerza"]
  ],
  [
    ["Curva uno trabada", "El circuito castiga largar por el lado sucio.", "Atacar interior", "Abrirse", "Esperar recta"],
    ["Qualy con trafico", "Autos lentos arruinan vueltas rapidas.", "Salir temprano", "Esperar hueco", "Hacer dos intentos"],
    ["Bandera amarilla", "Una vuelta buena queda en duda por amarillas.", "Levantar", "Mantener parcial", "Abortar vuelta"],
    ["Rival en outlap", "Tu rival calienta gomas delante tuyo.", "Presionarlo", "Tomar distancia", "Adelantarlo"],
    ["Pista verde", "El asfalto no tiene goma y todos patinan.", "Cuidar neumaticos", "Buscar grip", "Atacar pianos"],
    ["Frenada bloqueada", "Bloqueaste en practica y el equipo duda del balance.", "Cambiar bias", "Mantener", "Cambiar aleron"],
    ["Primera lluvia", "La carrera arranca seca pero amenaza agua.", "Set seco", "Set lluvia", "Set mixto"],
    ["Comisario estricto", "Un director avisa que no perdonaran limites de pista.", "Margen amplio", "Usar todo", "Pedir referencias"],
    ["Salida abortada", "El procedimiento se reinicia y sube temperatura.", "Enfriar", "Mantener foco", "Presionar embrague"],
    ["Auto de seguridad temprano", "La estrategia se abre en vuelta dos.", "Parar", "Seguir", "Hacer lo contrario"],
    ["Problema de radio", "El muro llega cortado en recta.", "Decidir solo", "Pedir repeticion", "Copiar companero"],
    ["Piano traicionero", "Un piano rompe pisos pero da decimas.", "Usarlo", "Evitarlo", "Usarlo solo en qualy"]
  ],
  [
    ["Ataque con rebufo", "Llegas a recta pegado a dos autos.", "Doble rebufo", "Uno por vez", "Ahorrar bateria"],
    ["Defensa sin bateria", "No queda ERS para la recta final.", "Cerrar interior", "Romper aspiracion", "Guardar goma"],
    ["Companero agresivo", "Tu companero no levanta aunque el equipo pide calma.", "Pelear", "Ceder", "Tender trampa"],
    ["Sprint con blandas", "La goma blanda da salida pero muere rapido.", "Empujar", "Administrar", "Parar temprano"],
    ["Pista sucia", "Saliste de trazada y traes suciedad en gomas.", "Limpiar vuelta", "Seguir atacando", "Cambiar linea"],
    ["Rival con sancion", "Tu rival tiene 5 segundos y va delante.", "Presionarlo", "Pasarlo", "Cuidar distancia"],
    ["Pelea por radio", "Tu ingeniero y estratega discrepan.", "Ingeniero", "Estratega", "Decidir tu"],
    ["Curvas rapidas", "El auto se mueve en alta velocidad.", "Confiar", "Levantar", "Cambiar reparto"],
    ["Ataque tardio", "Quedan dos vueltas y tienes mejor goma.", "Todo o nada", "Preparar ultima", "No arriesgar"],
    ["Defensa legal", "Tu rival se queja de tus movimientos.", "Una defensa", "Dejar espacio", "Ser mas duro"],
    ["Vibracion", "El volante vibra en recta.", "Seguir", "Bajar ritmo", "Pedir box"],
    ["DRS roto", "El aleron abre tarde.", "Compensar frenada", "No usar", "Usarlo igual"]
  ],
  [
    ["Paquete de aleron", "La mejora da carga pero quita punta.", "Montarlo", "Esperar", "Solo qualy"],
    ["Motor usado", "Toca decidir si penalizar con unidad nueva.", "Penalizar", "Aguantar", "Cambiar parcial"],
    ["Rival ficha manager", "Tu rival suma representantes fuertes.", "Responder", "Calma", "Buscar sponsor"],
    ["Ingeniero enfermo", "El suplente no conoce tus manias.", "Guiarlo", "Simplificar", "Exigir detalle"],
    ["Datos contradictorios", "Simulador y pista no coinciden.", "Creer pista", "Creer sim", "Promediar"],
    ["Reunion con jefe", "El jefe pregunta por compromiso a largo plazo.", "Lealtad", "Ambicion", "Condiciones"],
    ["Companero favorecido", "La pieza nueva va al otro auto.", "Protestar", "Aceptar", "Ganarle igual"],
    ["Rumor de salida", "Dicen que tu asiento no esta seguro.", "Prensa", "Pista", "Despacho"],
    ["Entrenamiento lluvia", "Puedes gastar un dia en mojado.", "Mojado", "Seco", "Mixto"],
    ["Error del equipo", "Una tuerca mal puesta te costo puntos.", "Criticar", "Protegerlos", "Pedir cambios"],
    ["Sponsor exige video", "Un compromiso comercial cae antes de qualy.", "Hacerlo", "Reducirlo", "Cancelarlo"],
    ["Analisis de rival", "Tu rival gana donde vos sufres.", "Copiar", "Diferenciarte", "Presionarlo"]
  ],
  [
    ["Ultima parada", "Una parada mas puede cambiar todo.", "Parar", "Seguir", "Finta"],
    ["Titulo matematico", "Puedes asegurar campeonato sin ganar.", "Asegurar", "Buscar victoria", "Cubrir rival"],
    ["Contrato firmado en secreto", "Ya tienes oferta, pero no puede filtrarse.", "Callar", "Filtrar", "Avisar equipo"],
    ["Carrera de despedida", "El equipo sabe que puedes irte.", "Agradecer", "Aislarte", "Prometer entrega"],
    ["Rival desesperado", "Tu rival necesita ganarte si o si.", "Dejarlo venir", "Golpear primero", "Evitar duelo"],
    ["Lluvia final", "La ultima carrera cambia vuelta a vuelta.", "Riesgo", "Control", "Copiar lider"],
    ["Fallo hidraulico", "El pedal cambia sensacion.", "Adaptarte", "Abandonar riesgo", "Pedir modo seguro"],
    ["Director de F1 presente", "Un jefe de F1 esta en el box.", "Mostrar ritmo", "Mostrar cabeza", "Mostrar feedback"],
    ["Penalizacion posible", "Una maniobra tuya esta investigada.", "Defenderte", "Aceptar", "Culpar rival"],
    ["Estrategia dividida", "Los autos del equipo van a estrategias opuestas.", "Cubrir lider", "Ir alternativo", "Ayudar companero"],
    ["Neumaticos al limite", "La goma llega al final sin margen.", "Cuidar", "Empujar", "Parar tarde"],
    ["Podio historico", "El equipo puede lograr su mejor resultado.", "Asegurar", "Atacar", "Jugar estrategia"]
  ]
];

export function makeGeneratedEvent(phaseIndex, seed, seedIndex) {
  const phase = ["Pretemporada", "Primeras fechas", "Sprint", "Mitad de año", "Final de temporada"][phaseIndex];
  const minigames = [
    ["focus", "tyres", "radio", "brake", null],
    ["sector", "walls", "lights", "ers", "brake", "corner", "apex"],
    ["drs", "ers", "duel", "tyres", "corner", "brake", "apex"],
    ["radio", "sector", "focus", "corner", "boxcrew", "apex", null],
    ["pit", "duel", "tyres", "radio", "boxcrew", "brake"]
  ];
  const game = minigames[phaseIndex][seedIndex % minigames[phaseIndex].length];
  const [title, text, ...labels] = seed;
  const statSets = [
    [{ focus: 2 }, { technical: 2 }, { market: 2, focus: -1 }],
    [{ racecraft: 2 }, { focus: 2 }, { pace: 2, reputation: -1 }],
    [{ racecraft: 2, pace: 1 }, { tyre: 2, focus: 1 }, { technical: 2 }],
    [{ technical: 3 }, { reputation: 2 }, { market: 2, focus: 1 }],
    [{ focus: 2, reputation: 1 }, { pace: 2, racecraft: 1 }, { tyre: 2, technical: 1 }]
  ];
  const seasonSets = [
    [{ consistency: 3 }, { setup: 3 }, { pressure: 2, qualy: 1 }],
    [{ race: 3, volatility: 1 }, { consistency: 3 }, { qualy: 3, volatility: 2 }],
    [{ race: 3, volatility: 2 }, { tyreCare: 3, consistency: 1 }, { setup: 2, race: 1 }],
    [{ setup: 3 }, { consistency: 2, pressure: -1 }, { pressure: 2, race: 1 }],
    [{ consistency: 4 }, { race: 4, volatility: 2 }, { setup: 2, tyreCare: 2 }]
  ];
  const event = {
    phase,
    title,
    text,
    rival: seedIndex % 5 === 0,
    choices: labels.map((label, choiceIndex) => ({
      label,
      effect: statSets[phaseIndex][choiceIndex],
      season: seasonSets[phaseIndex][choiceIndex],
      note: choiceIndex === 0 ? "Opcion estable con premio moderado." : choiceIndex === 1 ? "Camino tecnico y consistente." : "Mas techo, mas ruido."
    }))
  };
  if (game) event.minigame = game;
  event.choices.forEach((choice, choiceIndex) => {
    if (choiceIndex === 2) choice.risk = 0.22 + phaseIndex * 0.04;
    if (seedIndex % 5 === 0) choice.rival = choiceIndex - 1;
  });
  return event;
}

GENERATED_EVENT_SEEDS.forEach((seeds, phaseIndex) => {
  seeds.forEach((seed, seedIndex) => {
    MOMENT_BANK[phaseIndex].push(makeGeneratedEvent(phaseIndex, seed, seedIndex));
  });
});

export const TWO_OPTION_EVENT_SEEDS = [
  [
    ["Ultimatum de academia", "La academia pide exclusividad para seguir apoyandote.", "Aceptar exclusividad", "Mantener libertad"],
    ["Dia de descanso obligatorio", "Tu preparador detecta sobrecarga fisica.", "Descansar", "Forzar entrenamiento"],
    ["Prueba con aleron viejo", "El equipo duda entre comparar o avanzar sin mirar atras.", "Comparar aleron viejo", "Seguir desarrollo nuevo"],
    ["Charla con jefe de equipo", "Te preguntan si estas listo para ser lider tecnico.", "Aceptar liderazgo", "Pedir mas tiempo"],
    ["Sponsor polemico", "Un sponsor trae dinero pero puede danar imagen.", "Aceptar sponsor", "Rechazar dinero"],
    ["Karting benefico", "Un evento publico cae antes de viajar.", "Ir al evento", "Priorizar descanso"],
    ["Cambio de casco", "Tu entorno quiere relanzar marca personal.", "Cambiar imagen", "Mantener identidad"],
    ["Entrenar con rival", "Tu rival propone una sesion compartida.", "Aceptar sesion", "Cuidar secretos"],
    ["Nuevo asiento moldeado", "El asiento viejo molesta, pero cambiarlo lleva tiempo.", "Cambiar asiento", "Aguantar"],
    ["Prueba de reflejos", "El entrenador ofrece un programa extremo.", "Hacer programa", "Rutina normal"]
  ],
  [
    ["Largada desde boxes", "Una sancion tecnica te obliga a decidir estrategia.", "Auto agresivo", "Auto de remontada"],
    ["Pista con aceite", "La direccion de carrera no neutraliza todavia.", "Levantar", "Seguir ritmo"],
    ["Rival lento delante", "Tu rival frena el tren para perjudicarte.", "Atacar ya", "Esperar DRS"],
    ["Error del companero", "Tu companero se sale y vuelve delante.", "Presionarlo", "Proteger doble punto"],
    ["Vuelta borrada", "Te borran la vuelta por limites.", "Arriesgar otra", "Asegurar tiempo"],
    ["Problema de embrague", "La mordida cambia antes de la salida.", "Recalibrar", "Salir igual"],
    ["Curva ciega", "Hay bandera amarilla dudosa en sector rapido.", "Levantar", "Confiar en verde"],
    ["Piano mojado", "El piano interior parece seco, pero no hay certeza.", "Usarlo", "Evitarlo"],
    ["Rueda fria", "Sales de boxes con goma fuera de ventana.", "Calentar fuerte", "Progresivo"],
    ["Ataque temprano", "El lider esta vulnerable solo en la primera vuelta.", "Atacar", "Guardar carrera"]
  ],
  [
    ["Box doble", "El equipo quiere meter dos autos en la misma vuelta.", "Aceptar doble box", "Pedir vuelta extra"],
    ["Mapa motor rival", "Detectas que el rival baja potencia.", "Atacar", "Guardar bateria"],
    ["Bloqueo en frenada", "El pedal se alarga con tanque lleno.", "Cambiar reparto", "Adaptar manejo"],
    ["Orden para ceder", "El equipo necesita invertir posiciones.", "Ceder", "Pedir una vuelta"],
    ["Rebufo perfecto", "Estas a distancia ideal al final de recta.", "Lanzar ataque", "Amagar"],
    ["Curva de alta", "El auto subvira en curva rapida.", "Levantar", "Confiar en carga"],
    ["Goma usada", "El rival tiene goma mas vieja.", "Presionar", "Esperar caida"],
    ["Salida de safety", "El relanzamiento sera corto.", "Atacar relanzamiento", "Cuidar gomas"],
    ["Radio cortada", "Solo escuchas media orden.", "Decidir solo", "Pedir confirmacion"],
    ["Defensa final", "Quedan dos curvas y viene con DRS.", "Cerrar interior", "Abrir salida"]
  ],
  [
    ["Oferta de test", "Un equipo rival ofrece test privado no anunciado.", "Aceptar test", "Ser leal"],
    ["Ingeniero discute", "Tu ingeniero pelea con estrategia.", "Apoyar ingeniero", "Apoyar estrategia"],
    ["Pieza unica", "Solo hay una mejora disponible para un auto.", "Pedir pieza", "Ceder pieza"],
    ["Reunion FIA", "Te invitan a hablar sobre conduccion peligrosa.", "Ir personal", "Enviar manager"],
    ["Simulador falla", "El simulador entrega datos raros.", "Creer piloto", "Creer datos"],
    ["Sponsor exige resultados", "El sponsor condiciona apoyo a podios.", "Aceptar presion", "Renegociar"],
    ["Rival cambia tono", "Tu rival baja agresividad en prensa.", "Bajar tension", "Aprovechar debilidad"],
    ["Equipo dividido", "Mecanicos prefieren al companero.", "Ganarlos", "Ignorarlos"],
    ["Prensa internacional", "Un medio grande pide entrevista larga.", "Aceptar", "Postergar"],
    ["Entrenamiento nocturno", "Puedes sumar horas, pero llegas cansado.", "Entrenar", "Dormir"]
  ],
  [
    ["Precontrato F1", "Hay un precontrato si terminas top tres.", "Correr seguro", "Buscar victoria"],
    ["Rival eliminado", "Tu rival larga atras por sancion.", "Controlar", "Rematar"],
    ["Equipo pide puntos", "El equipo necesita constructores mas que tu resultado.", "Ayudar equipo", "Correr para ti"],
    ["Lluvia en cierre", "La nube llega a diez vueltas del final.", "Parar antes", "Esperar"],
    ["Ultima vuelta", "Puedes intentar maniobra final o aceptar posicion.", "Intentar", "Aceptar"],
    ["Motor al limite", "La temperatura sube en las ultimas vueltas.", "Bajar ritmo", "Arriesgar"],
    ["Contrato publico", "Quieren anunciar tu futuro antes de terminar.", "Anunciar", "Esperar final"],
    ["Podio del equipo", "Tu companero necesita que bloquees rivales.", "Bloquear", "Buscar tu carrera"],
    ["Sancion pendiente", "Hay cinco segundos en investigacion.", "Abrir hueco", "Defender pista"],
    ["Despedida rival", "Tu rival puede subir contigo o quedarse atras.", "Respetar duelo", "Hundilo en pista"]
  ]
];

TWO_OPTION_EVENT_SEEDS.forEach((seeds, phaseIndex) => {
  seeds.forEach((seed, seedIndex) => {
    MOMENT_BANK[phaseIndex].push(makeGeneratedEvent(phaseIndex, seed, seedIndex + 40));
  });
});
