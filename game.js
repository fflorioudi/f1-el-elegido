const NATIONALITIES = [
  "Argentina", "Brasil", "Chile", "Colombia", "Mexico", "Estados Unidos",
  "Espana", "Reino Unido", "Italia", "Francia", "Alemania", "Paises Bajos",
  "Belgica", "Australia", "Japon", "China", "India", "Sudafrica", "Canada",
  "Finlandia", "Suecia", "Dinamarca", "Portugal", "Uruguay"
];

const STYLES = [
  { id: "qualy", name: "Especialista de qualy", mods: { pace: 7, focus: 4, tyre: -2 } },
  { id: "race", name: "Ritmo de carrera", mods: { tyre: 7, racecraft: 4, pace: -1 } },
  { id: "rain", name: "Maestro de lluvia", mods: { racecraft: 5, focus: 3, technical: -1 } },
  { id: "fighter", name: "Rueda a rueda", mods: { racecraft: 7, focus: -1, technical: 2 } },
  { id: "engineer", name: "Piloto ingeniero", mods: { technical: 7, tyre: 2, pace: -2 } }
];

const PERSONALITIES = [
  { id: "calm", name: "Frio", mods: { focus: 4, market: -1 } },
  { id: "media", name: "Mediatico", mods: { market: 5, focus: -2 } },
  { id: "loyal", name: "Leal", mods: { reputation: 4, market: -2 } },
  { id: "risk", name: "Ambicioso", mods: { market: 3, reputation: -1 } }
];

const DRIVE_MODES = {
  safe: {
    name: "Conservador",
    text: "Menos riesgo, mas consistencia, menor techo.",
    risk: 0.72,
    season: { consistency: 2, volatility: -1, race: -1 },
    difficulty: -1
  },
  balanced: {
    name: "Equilibrado",
    text: "Riesgo y premio normales.",
    risk: 1,
    season: {},
    difficulty: 0
  },
  attack: {
    name: "Agresivo",
    text: "Mas techo, mas errores posibles.",
    risk: 1.35,
    season: { race: 2, qualy: 1, volatility: 2 },
    difficulty: 1
  }
};

const STAT_NAMES = {
  pace: "Velocidad",
  racecraft: "Racecraft",
  tyre: "Neumaticos",
  technical: "Feedback",
  focus: "Concentracion",
  market: "Marketing",
  reputation: "Reputacion"
};

const BASE_STATS = ["pace", "racecraft", "tyre", "technical", "focus"];

const TEAM_LOGOS = {
  "Campos Racing": "assets/teams/campos-racing.svg",
  "Trident": "assets/teams/trident.svg",
  "MP Motorsport": "assets/teams/mp-motorsport.svg",
  "ART Grand Prix": "assets/teams/art-grand-prix.svg",
  "Van Amersfoort Racing": "assets/teams/van-amersfoort-racing.svg",
  "Rodin Motorsport": "assets/teams/rodin-motorsport.svg",
  "PREMA Racing": "assets/teams/prema-racing.svg",
  "Hitech": "assets/teams/hitech.svg",
  "AIX Racing": "assets/teams/aix-racing.svg",
  "DAMS Lucas Oil": "assets/teams/dams-lucas-oil.svg",
  "Invicta Racing": "assets/teams/invicta-racing.svg",
  "Mercedes": "assets/teams/mercedes.svg",
  "Ferrari": "assets/teams/ferrari.svg",
  "McLaren": "assets/teams/mclaren.svg",
  "Red Bull Racing": "assets/teams/red-bull-racing.svg",
  "Racing Bulls": "assets/teams/racing-bulls.svg",
  "Alpine": "assets/teams/alpine.svg",
  "Haas F1 Team": "assets/teams/haas-f1-team.svg",
  "Audi": "assets/teams/audi.svg",
  "Williams": "assets/teams/williams.svg",
  "Aston Martin": "assets/teams/aston-martin.svg",
  "Cadillac": "assets/teams/cadillac.svg"
};

const TEAMS = {
  F3: [
    ["Campos Racing", 78, "ESP", "#f04444", "CAM"], ["Trident", 76, "ITA", "#2f6bff", "TRI"],
    ["MP Motorsport", 73, "NLD", "#ff8f2f", "MP"], ["ART Grand Prix", 74, "FRA", "#d7dde8", "ART"],
    ["Van Amersfoort Racing", 70, "NLD", "#ef2a32", "VAR"], ["Rodin Motorsport", 71, "NZL", "#111111", "ROD"],
    ["PREMA Racing", 72, "ITA", "#e7272d", "PRE"], ["Hitech", 69, "GBR", "#8ad8ff", "HIT"],
    ["AIX Racing", 64, "GER", "#ffb12b", "AIX"], ["DAMS Lucas Oil", 66, "FRA", "#1c45a8", "DAM"]
  ],
  F2: [
    ["Invicta Racing", 80, "GBR", "#2fd883", "INV"], ["Hitech", 77, "GBR", "#8ad8ff", "HIT"],
    ["Campos Racing", 82, "ESP", "#f04444", "CAM"], ["DAMS Lucas Oil", 74, "FRA", "#1c45a8", "DAM"],
    ["MP Motorsport", 79, "NLD", "#ff8f2f", "MP"], ["PREMA Racing", 76, "ITA", "#e7272d", "PRE"],
    ["Rodin Motorsport", 78, "NZL", "#111111", "ROD"], ["ART Grand Prix", 75, "FRA", "#d7dde8", "ART"],
    ["AIX Racing", 68, "GER", "#ffb12b", "AIX"], ["Van Amersfoort Racing", 69, "NLD", "#ef2a32", "VAR"],
    ["Trident", 67, "ITA", "#2f6bff", "TRI"]
  ],
  F1: [
    ["Mercedes", 94, "GBR", "#00d2be", "MER", null, "top"],
    ["Ferrari", 93, "ITA", "#dc0000", "FER", null, "top"],
    ["McLaren", 92, "GBR", "#ff8700", "MCL", null, "top"],
    ["Red Bull Racing", 91, "AUT", "#1e41ff", "RBR", null, "top"],
    ["Alpine", 82, "FRA", "#2293d1", "ALP", null, "mid"],
    ["Audi", 81, "GER", "#c7ccd1", "AUD", null, "mid"],
    ["Haas F1 Team", 80, "USA", "#b6babd", "HAA", null, "mid"],
    ["Racing Bulls", 79, "ITA", "#6c98ff", "VCB", null, "mid"],
    ["Williams", 72, "GBR", "#00a3e0", "WIL", null, "low"],
    ["Aston Martin", 71, "GBR", "#006f62", "AMR", null, "low"],
    ["Cadillac", 68, "USA", "#c4a35a", "CAD", null, "low"]
  ]
};

const RIVAL_NAMES = [
  "Bruno Valente", "Luca Moretti", "Theo Marchand", "Noah Keller", "Mateo Aranda",
  "Kaito Mori", "Oliver Reed", "Santi Ferreyra", "Nico Varga", "Elias Novak"
];

const MOMENT_BANK = [
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
    phase: "Mitad de ano",
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
    phase: "Mitad de ano",
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
    phase: "Mitad de ano",
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

const EXTRA_MOMENTS = [
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
      phase: "Mitad de ano",
      title: "Oferta de otro manager",
      text: "Un representante con contactos en F1 te busca. Tu manager actual estuvo desde karting.",
      choices: [
        { label: "Cambiar manager", effect: { market: 4, reputation: -2 }, season: { pressure: 2 }, note: "Mas puertas, menos lealtad." },
        { label: "Seguir igual", effect: { reputation: 2, focus: 1 }, season: { consistency: 2 }, note: "Entorno estable." },
        { label: "Negociar equipo mixto", effect: { market: 2, technical: 1 }, season: { setup: 1, pressure: 1 }, note: "Politica fina." }
      ]
    },
    {
      phase: "Mitad de ano",
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
      phase: "Mitad de ano",
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
      phase: "Mitad de ano",
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
      phase: "Mitad de ano",
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

const GENERATED_EVENT_SEEDS = [
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

function makeGeneratedEvent(phaseIndex, seed, seedIndex) {
  const phase = ["Pretemporada", "Primeras fechas", "Sprint", "Mitad de ano", "Final de temporada"][phaseIndex];
  const minigames = [
    ["focus", "tyres", "radio", "brake", null],
    ["sector", "walls", "lights", "ers", "brake", "corner"],
    ["drs", "ers", "duel", "tyres", "corner", "brake"],
    ["radio", "sector", "focus", "corner", "boxcrew", null],
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

const TWO_OPTION_EVENT_SEEDS = [
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

let setupPoints = { pace: 3, racecraft: 3, tyre: 3, technical: 3, focus: 3 };
let state = null;

const $ = (id) => document.getElementById(id);
const clamp = (num, min, max) => Math.max(min, Math.min(max, num));
const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const avg = (stats) => Math.round((stats.pace + stats.racecraft + stats.tyre + stats.technical + stats.focus) / 5);

function optionList(select, items, label = (x) => x) {
  select.innerHTML = items.map((item) => `<option value="${item.id ?? item}">${label(item)}</option>`).join("");
}

function initSetup() {
  optionList($("nationalityInput"), NATIONALITIES);
  optionList($("styleInput"), STYLES, (style) => style.name);
  optionList($("personalityInput"), PERSONALITIES, (p) => p.name);
  renderStatInputs();
  $("randomBtn").addEventListener("click", randomPilot);
  $("startBtn").addEventListener("click", startCareer);
  $("saveBtn").addEventListener("click", saveCareer);
  $("resetBtn").addEventListener("click", resetCareer);
  const saved = localStorage.getItem("el-elegido-save");
  if (saved) {
    state = JSON.parse(saved);
    migrateSave();
    showGame();
    render();
  }
}

function migrateSave() {
  state.trajectory = state.trajectory || state.history || [];
  state.decisions = state.decisions || [];
  state.season = state.season || null;
  state.categorySeasons = state.categorySeasons || { F3: state.category === "F3" ? state.seasons : 0, F2: 0, F1: 0 };
  state.rival = state.rival || createRival(state.stats);
  state.trophies = state.trophies || [];
  state.milestones = state.milestones || {};
  state.seenEventTitles = state.seenEventTitles || state.decisions.map((item) => item.title).filter(Boolean).slice(0, 35);
  state.minigameHistory = state.minigameHistory || [];
  if (state.season && !state.season.moments) state.season = null;
  state.decisions.forEach((item) => {
    item.impact = item.impact || "Sin impacto registrado";
  });
  migrateOverstayedCategory();
}

function migrateOverstayedCategory() {
  if (state.category === "F3" && (state.categorySeasons.F3 || 0) >= 3 && state.license >= 12 && avg(state.stats) >= 62) {
    state.category = "F2";
    state.team = null;
    state.season = null;
    state.categorySeasons.F2 = state.categorySeasons.F2 || 0;
    state.decisions.unshift({
      season: state.seasons,
      phase: "Ascenso",
      title: "Regularizacion de carrera",
      text: "Tu trayectoria ya excedia el ciclo normal de F3.",
      impact: "F2 desbloqueada por permanencia y rendimiento"
    });
  }
  if (state.category === "F2" && (state.categorySeasons.F2 || 0) >= 5 && state.license >= 30 && avg(state.stats) >= 68) {
    state.category = "F1";
    state.team = null;
    state.season = null;
    state.categorySeasons.F1 = state.categorySeasons.F1 || 0;
    state.decisions.unshift({
      season: state.seasons,
      phase: "Superlicencia",
      title: "Regularizacion de carrera",
      text: "Tu trayectoria ya excedia el ciclo normal de F2.",
      impact: "F1 desbloqueada por permanencia y rendimiento"
    });
  }
}

function createRival(stats) {
  return {
    name: RIVAL_NAMES[rnd(0, RIVAL_NAMES.length - 1)],
    nationality: NATIONALITIES[rnd(0, NATIONALITIES.length - 1)],
    style: STYLES[rnd(0, STYLES.length - 1)].name,
    rating: clamp(avg(stats) + rnd(-4, 5), 52, 82),
    heat: rnd(18, 38),
    category: "F3",
    team: null
  };
}

function renderStatInputs() {
  const used = Object.values(setupPoints).reduce((sum, value) => sum + value, 0);
  $("pointsLeft").textContent = `Puntos disponibles: ${18 - used}`;
  $("startBtn").disabled = used !== 18;
  $("statInputs").innerHTML = BASE_STATS.map((key) => `
    <label class="stat-row">
      <span>${STAT_NAMES[key]}</span>
      <input type="range" min="1" max="8" value="${setupPoints[key]}" data-stat="${key}" />
      <output>${setupPoints[key]}</output>
    </label>
  `).join("");
  document.querySelectorAll("[data-stat]").forEach((input) => {
    input.addEventListener("input", (event) => {
      const key = event.target.dataset.stat;
      const next = Number(event.target.value);
      const currentTotal = Object.entries(setupPoints).reduce(
        (sum, [stat, value]) => sum + (stat === key ? next : value),
        0
      );
      if (currentTotal <= 18) setupPoints[key] = next;
      renderStatInputs();
    });
  });
}

function randomPilot() {
  $("nameInput").value = ["Fenix", "Rayo", "Pampa", "Apex", "Poleman"][rnd(0, 4)];
  $("nationalityInput").selectedIndex = rnd(0, NATIONALITIES.length - 1);
  $("styleInput").selectedIndex = rnd(0, STYLES.length - 1);
  $("personalityInput").selectedIndex = rnd(0, PERSONALITIES.length - 1);
  setupPoints = { pace: 1, racecraft: 1, tyre: 1, technical: 1, focus: 1 };
  while (Object.values(setupPoints).reduce((sum, value) => sum + value, 0) < 18) {
    const key = BASE_STATS[rnd(0, BASE_STATS.length - 1)];
    if (setupPoints[key] < 8) setupPoints[key] += 1;
  }
  renderStatInputs();
}

function startCareer() {
  const style = STYLES.find((item) => item.id === $("styleInput").value);
  const personality = PERSONALITIES.find((item) => item.id === $("personalityInput").value);
  const stats = Object.fromEntries(
    Object.entries(setupPoints).map(([key, value]) => [key, 42 + value * 5])
  );
  stats.market = 48;
  stats.reputation = 45;
  applyEffect(stats, style.mods);
  applyEffect(stats, personality.mods);
  state = {
    name: $("nameInput").value.trim() || "El elegido",
    nationality: $("nationalityInput").value,
    style: style.name,
    personality: personality.name,
    age: 16,
    category: "F3",
    team: null,
    stats,
    license: 0,
    seasons: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    titles: 0,
    points: 0,
    money: 0,
    categorySeasons: { F3: 0, F2: 0, F1: 0 },
    rival: createRival(stats),
    trophies: [],
    milestones: {},
    trajectory: [],
    decisions: [],
    seenEventTitles: [],
    minigameHistory: [],
    season: null
  };
  showGame();
  render();
}

function applyEffect(stats, effect) {
  Object.entries(effect || {}).forEach(([key, value]) => {
    stats[key] = clamp((stats[key] ?? 50) + value, 20, 99);
  });
}

function applySeasonEffect(effect) {
  Object.entries(effect || {}).forEach(([key, value]) => {
    const impact = Math.round(value * 1.35);
    state.season.modifiers[key] = (state.season.modifiers[key] || 0) + impact;
  });
}

function describeEffect(effect = {}, prefix = "") {
  const entries = Object.entries(effect);
  if (!entries.length) return "";
  return entries.map(([key, value]) => `${prefix}${STAT_NAMES[key] || key} ${value > 0 ? "+" : ""}${value}`).join(", ");
}

function showGame() {
  $("setup").classList.add("hidden");
  $("game").classList.remove("hidden");
}

function resetCareer() {
  localStorage.removeItem("el-elegido-save");
  state = null;
  $("setup").classList.remove("hidden");
  $("game").classList.add("hidden");
  $("timeline").innerHTML = "";
  $("pilotName").textContent = "Nuevo piloto";
  $("pilotSummary").textContent = "Define tu identidad para empezar.";
  $("seasonTag").textContent = "Academia";
}

function saveCareer() {
  localStorage.setItem("el-elegido-save", JSON.stringify(state));
  renderTimeline();
}

function teamObjects(category) {
  return TEAMS[category].map(([name, power, country, color, code, logo, tier]) => ({
    name,
    power,
    country,
    color,
    code,
    logo: TEAM_LOGOS[name] || logo,
    tier: tier || tierFromPower(category, power)
  }));
}

function tierFromPower(category, power) {
  if (category !== "F1") return power >= 80 ? "top" : power >= 74 ? "mid" : "low";
  if (power >= 88) return "top";
  if (power >= 77) return "mid";
  return "low";
}

function tierName(tier) {
  return tier === "top" ? "Top" : tier === "mid" ? "Medio" : "Bajo";
}

function render() {
  renderTimeline();
  if (state.age >= 36 || (state.category === "F1" && state.seasons >= 15)) {
    renderRetirement();
    return;
  }

  $("seasonTag").textContent = `${state.category} - Edad ${state.age}`;
  $("pilotName").textContent = state.name;
  $("pilotSummary").textContent = `${state.nationality} - ${state.style} - ${state.personality}`;
  $("licensePoints").textContent = state.license;
  renderStats();
  renderTrophyCase();

  if (!state.team) {
    renderOffers(state.seasons === 0);
    return;
  }

  if (!state.season) startSeason();
  renderMoment();
}

function latestTitleTrophy() {
  return (state.trophies || []).slice().reverse().find((trophy) => trophy.type === "title" && trophy.season === state.seasons);
}

function startSeason() {
  const selectedMoments = chooseSeasonMoments();
  state.season = {
    number: state.seasons + 1,
    category: state.category,
    age: state.age,
    team: state.team,
    moment: 0,
    moments: selectedMoments,
    modifiers: { setup: 0, qualy: 0, race: 0, consistency: 0, volatility: 0, tyreCare: 0, carBoost: 0 },
    minigameScore: 0,
    driveMode: "balanced",
    decisions: []
  };
}

function chooseSeasonMoments() {
  const middlePhase = rnd(1, 3);
  const seasonGames = [];
  return [0, middlePhase, 4].map((phaseIndex) => pickMomentForPhase(phaseIndex, seasonGames));
}

function pickMomentForPhase(phaseIndex, seasonGames) {
  const phaseEvents = MOMENT_BANK[phaseIndex];
  const recentTitles = new Set((state.seenEventTitles || []).slice(0, 28));
  const recentGames = new Set((state.minigameHistory || []).slice(0, 8));
  const underused = new Set(["apex", "drs", "lights", "pit", "boxcrew"]);
  const scored = phaseEvents.map((event) => {
    let score = rnd(0, 6);
    if (event.minigame && underused.has(event.minigame)) score += 12;
    if (event.minigame && recentGames.has(event.minigame)) score -= 7;
    if (event.minigame && seasonGames.includes(event.minigame)) score -= 15;
    if (recentTitles.has(event.title)) score -= 18;
    if (!event.minigame && seasonGames.length > 0) score += 2;
    return { event, score };
  });
  const selected = scored.sort((a, b) => b.score - a.score)[0].event;
  if (selected.minigame) seasonGames.push(selected.minigame);
  return selected;
}

function renderMoment() {
  const moment = state.season.moments[state.season.moment];
  clearFeedback();
  state.season.driveMode = state.season.driveMode || "balanced";
  const progress = `${state.season.moment + 1}/${state.season.moments.length}`;
  $("careerStage").textContent = `${state.category} - Temporada ${state.season.number} - Momento ${progress}`;
  $("careerTitle").textContent = moment.title;
  $("mainCard").innerHTML = `
    <div class="driver-card">
      <div>
        ${teamBadge(state.team)}
        <p class="phase">${moment.phase}</p>
        <p>${moment.text}</p>
        ${moment.rival ? `<p class="rival-line">Rival: ${state.rival.name} - tension ${state.rival.heat}/100 - valoracion ${state.rival.rating}</p>` : ""}
        <div class="impact-strip">
          <span>Auto ${state.team.power + state.season.modifiers.carBoost}</span>
          <span>Qualy ${state.season.modifiers.qualy}</span>
          <span>Carrera ${state.season.modifiers.race}</span>
          <span>Minijuegos ${state.season.minigameScore}</span>
        </div>
      </div>
      <div class="big-number">${avg(state.stats)}</div>
    </div>
    ${renderDriveModes()}
  `;
  $("choiceGrid").innerHTML = moment.choices.map((choice, index) => choiceButton(choice, index)).join("");
  bindDriveModes();
  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => chooseMoment(moment, Number(button.dataset.index)));
  });
  $("minigame").classList.add("hidden");
}

function choiceButton(choice, index) {
  const statText = describeEffect(choice.effect);
  const seasonText = describeEffect(choice.season, "Temporada ");
  const risk = decisionRisk(choice);
  const chanceText = risk > 0
    ? `Exito ${100 - risk}% / riesgo ${risk}%`
    : "Ejecucion segura";
  return `
    <button class="choice" type="button" data-index="${index}">
      <strong>${choice.label}</strong>
      <small>${choice.note}</small>
      <span class="chance ${risk >= 45 ? "hot" : risk >= 25 ? "mid" : "safe"}">${chanceText}</span>
      <span class="choice-impact">${statText || "Sin cambio directo"}${seasonText ? `<br>${seasonText}` : ""}</span>
    </button>
  `;
}

function renderDriveModes() {
  return `
    <div class="drive-panel">
      <span>Modo de manejo</span>
      <div>
        ${Object.entries(DRIVE_MODES).map(([key, mode]) => `
          <button type="button" class="${state.season.driveMode === key ? "active" : ""}" data-drive="${key}">
            <strong>${mode.name}</strong>
            <small>${mode.text}</small>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function bindDriveModes() {
  document.querySelectorAll("[data-drive]").forEach((button) => {
    button.addEventListener("click", () => {
      state.season.driveMode = button.dataset.drive;
      renderMoment();
    });
  });
}

function renderStats() {
  $("statsPanel").innerHTML = Object.entries(STAT_NAMES).map(([key, label]) => `
    <div class="meter">
      <div><span>${label}</span><strong>${state.stats[key] ?? 0}</strong></div>
      <span class="bar"><span style="width:${state.stats[key] ?? 0}%"></span></span>
    </div>
  `).join("");
}

function renderTrophyCase() {
  if (!$("trophyCase") || !state) return;
  const counts = trophyCounts();
  const major = counts.title + counts.constructor;
  const honors = (state.trophies || []).length - major;
  $("trophyCase").innerHTML = `
    <div class="trophy-head">
      <span>Vitrina</span>
      <strong>${(state.trophies || []).length}</strong>
    </div>
    <div class="trophy-split">
      <span><b>Mayores</b><strong>${major}</strong></span>
      <span><b>Hitos</b><strong>${honors}</strong></span>
    </div>
    <div class="trophy-grid">
      ${trophyPill("Copa", counts.title)}
      ${trophyPill("Const.", counts.constructor)}
      ${trophyPill("Podio", counts.podium)}
      ${trophyPill("Sprint", counts.sprint)}
      ${trophyPill("Pole", counts.pole)}
      ${trophyPill("Hitos", counts.firstWin + counts.firstPodium + counts.rookie)}
    </div>
  `;
}

function trophyCounts() {
  return (state.trophies || []).reduce((acc, trophy) => {
    acc[trophy.type] = (acc[trophy.type] || 0) + 1;
    return acc;
  }, { title: 0, podium: 0, sprint: 0, overtake: 0, constructor: 0, rookie: 0, pole: 0, firstWin: 0, firstPodium: 0 });
}

function trophyPill(label, count) {
  return `<span class="${count ? "earned" : ""}"><b>${label}</b><strong>${count || 0}</strong></span>`;
}

function renderOffers(first = false) {
  const value = driverValue();
  const f1Interest = f1InterestScore();
  let pool = teamObjects(state.category)
    .filter((team) => teamEligible(team, value, first))
  if (pool.length < 3) {
    pool = teamObjects(state.category)
      .sort((a, b) => a.power - b.power)
      .slice(0, state.category === "F1" ? 5 : 7);
  }
  const teams = pool
    .sort((a, b) => Math.abs(a.power - value) - Math.abs(b.power - value) + rnd(-4, 4))
    .slice(0, 3)
    .map((team) => ({ ...team, pressure: rnd(45, 90) }));
  $("careerStage").textContent = first ? "Contrato inicial" : "Mercado";
  $("careerTitle").textContent = first ? "Elige tu primer equipo" : "Elige tu proximo asiento";
  $("mainCard").innerHTML = `
    ${!first && latestTitleTrophy() ? championshipBanner(latestTitleTrophy()) : ""}
    <p>${first ? "Tres estructuras miran tu talento. Cada asiento cambia aprendizaje, presion y exposicion." : "El mercado abre despues de tu temporada. El auto mas fuerte no siempre es el camino mas inteligente."}</p>
    ${marketIntel(value, f1Interest, teams)}
  `;
  $("choiceGrid").innerHTML = teams.map((team, index) => `
    <button class="choice team-choice" type="button" data-index="${index}">
      ${teamBadge(team)}
      <small>${state.category} - ${tierName(team.tier)} - Potencial ${team.power} - Presion ${team.pressure} - Licencia ${team.country}</small>
      <span class="choice-impact">${teamFitReason(team, value)}</span>
    </button>
  `).join("");
  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => {
      state.team = teams[Number(button.dataset.index)];
      if (state.rival && !state.rival.team) state.rival.team = teamObjects(state.category).find((team) => team.name !== state.team.name);
      state.decisions.unshift({
        season: state.seasons + 1,
        phase: "Mercado",
        title: first ? "Primer contrato" : "Fichaje",
        text: `${state.name} firma con ${state.team.name} en ${state.category}.`,
        impact: `Valor de mercado ${value} - Potencial equipo ${state.team.power}`
      });
      render();
    });
  });
}

function f1InterestScore() {
  if (state.category === "F1") return 100;
  const recent = state.trajectory?.[0];
  const recentF2 = (state.trajectory || []).filter((item) => item.category === "F2").slice(0, 3);
  const f2Avg = recentF2.length ? recentF2.reduce((sum, item) => sum + item.score, 0) / recentF2.length : 0;
  const base = avg(state.stats) * 0.42 + state.license * 0.72 + state.stats.reputation * 0.18 + state.stats.market * 0.12;
  const recentBoost = recent && recent.category === "F2" ? recent.score * 0.18 + recent.wins * 4 + recent.podiums * 1.3 + recent.title * 18 : 0;
  const bodyBoost = f2Avg * 0.22 + Math.min(18, recentF2.reduce((sum, item) => sum + item.points, 0) / 22);
  return clamp(Math.round(base + recentBoost + bodyBoost - 28), 0, 100);
}

function marketIntel(value, interest, offeredTeams) {
  const recent = state.trajectory?.[0];
  const trend = recent ? `${recent.category}: score ${recent.score}, ${recent.points} pts, ${recent.wins} victorias` : "Sin temporadas oficiales";
  const lockedTop = bestLockedTeams(value).slice(0, 2);
  const interestLabel = state.category === "F1" ? "Consolidado en F1" : interest >= 82 ? "F1 muy atenta" : interest >= 62 ? "Radares de F1 activos" : interest >= 42 ? "Interes inicial" : "Necesitas cartel";
  return `
    <div class="market-panel">
      <div>
        <span>Valor mercado</span>
        <strong>${value}</strong>
      </div>
      <div>
        <span>Interes F1</span>
        <strong>${interest}</strong>
      </div>
      <div class="market-wide">
        <span>${interestLabel}</span>
        <p>${trend}. ${promotionHint()}</p>
      </div>
      ${lockedTop.length ? `
        <div class="market-wide muted-card">
          <span>Equipos que aun dudan</span>
          <p>${lockedTop.map((team) => `${team.name}: ${teamFitReason(team, value, true)}`).join(" | ")}</p>
        </div>
      ` : ""}
    </div>
  `;
}

function bestLockedTeams(value) {
  return teamObjects(state.category)
    .filter((team) => !teamEligible(team, value, false))
    .sort((a, b) => b.power - a.power);
}

function teamFitReason(team, value, locked = false) {
  const gap = team.power - value;
  if (locked) {
    if (team.tier === "top" && state.category === "F1") return "los top piden victorias, podios y cartel en F1";
    if (gap > 12) return "piden mas valor y temporadas fuertes";
    if (state.category === "F2" && state.categorySeasons.F2 < 1) return "quieren verte una temporada completa";
    return "falta confianza de mercado";
  }
  if (state.category === "F1" && team.tier === "mid") return "media tabla real para crecer sin quedar atrapado";
  if (state.category === "F1" && team.tier === "low") return "asiento de entrada, puntos como gran objetivo";
  if (state.category === "F1" && team.tier === "top") return "auto para ganar, presion maxima";
  if (gap <= -8) return "asiento seguro, bajo riesgo";
  if (gap <= 3) return "encaje natural por rendimiento";
  if (gap <= 9) return "apuesta ambiciosa con presion";
  return "salto grande, contrato de riesgo";
}

function promotionHint() {
  if (state.category === "F3") {
    const years = state.categorySeasons.F3 || 0;
    if (years >= 2) return "F2 deberia abrirse con una temporada correcta.";
    return "Un ano fuerte o dos anos solidos abren F2.";
  }
  if (state.category === "F2") {
    const years = state.categorySeasons.F2 || 0;
    if (state.license >= 40 && years >= 2) return "La superlicencia ya alcanza: una buena campana activa F1.";
    if (years >= 4) return "El mercado no deberia retenerte mucho mas.";
    return "F1 mira puntaje, licencia y consistencia de F2.";
  }
  return "Ahora el objetivo es escalar de equipo y sostener titulos.";
}

function championshipBanner(trophy) {
  return `
    <div class="champion-banner">
      <div class="cup">CUP</div>
      <div>
        <p class="eyebrow">Campeonato conseguido</p>
        <h3>${trophy.label}</h3>
        <p>${state.name} celebra con ${trophy.team}. La vitrina suma una copa nueva.</p>
      </div>
    </div>
  `;
}

function driverValue() {
  const recent = state.trajectory?.[0];
  const resultBoost = recent ? recent.score * 0.18 + recent.wins * 3 + recent.podiums * 0.8 + recent.title * 10 + Math.max(0, recent.overperformance || 0) * 0.6 : 0;
  const licenseBoost = state.category === "F1" ? 0 : Math.min(10, state.license / 5);
  const f1Penalty = state.category === "F1" ? Math.max(0, 8 - state.categorySeasons.F1 * 3) : 0;
  return Math.round(avg(state.stats) * 0.66 + state.stats.reputation * 0.12 + state.stats.market * 0.08 + resultBoost + licenseBoost - f1Penalty);
}

function teamEligible(team, value, first) {
  if (first && state.category === "F3") return team.power <= 78;
  if (state.category === "F3") return team.power <= value + 16;
  if (state.category === "F2") return team.power <= value + 12 && (state.categorySeasons.F2 > 0 || team.power < 80);
  const f1Years = state.categorySeasons.F1 || 0;
  if (state.category === "F1" && team.tier === "top") return f1TopEligible(team, value, f1Years);
  if (state.category === "F1" && f1Years === 0) return team.tier !== "top" && team.power <= Math.max(82, value + 8);
  if (state.category === "F1" && f1Years < 2) return team.tier !== "top" && team.power <= value + 10;
  return team.power <= value + 8;
}

function f1TopEligible(team, value, f1Years) {
  const recent = state.trajectory?.[0];
  const f1Recent = (state.trajectory || []).filter((item) => item.category === "F1").slice(0, 2);
  const hasF1Proof = f1Recent.some((item) => item.title || item.wins >= 2 || item.podiums >= 5 || item.score >= 94);
  const exceptionalF2 = recent?.category === "F2" && recent.title && recent.score >= 94 && state.license >= 55;
  if (f1Years === 0) return exceptionalF2 && value >= team.power - 2;
  if (f1Years < 2) return hasF1Proof && value >= team.power - 4;
  return value >= team.power - 6 && (hasF1Proof || state.titles > 0 || state.wins >= 4);
}

function teamBadge(team) {
  return `
    <div class="team-badge">
      <span class="logo" style="--team:${team.color}">
        ${team.logo ? `<img src="${team.logo}" alt="" onload="this.nextElementSibling.style.display='none'" onerror="this.remove()" />` : ""}
        <b>${team.code}</b>
      </span>
      <strong>${team.name}</strong>
      ${team.tier ? `<em class="team-tier ${team.tier}">${tierName(team.tier)}</em>` : ""}
    </div>
  `;
}

function chooseMoment(moment, index) {
  const choice = moment.choices[index];
  const mode = DRIVE_MODES[state.season.driveMode || "balanced"];
  const before = { ...state.stats };
  applyEffect(state.stats, choice.effect);
  applySeasonEffect(choice.season);
  applySeasonEffect(mode.season);
  const risk = decisionRisk(choice);
  const failedRisk = risk > 0 && rnd(1, 100) <= risk;
  if (failedRisk) {
    const extraPenalty = state.season.driveMode === "attack" ? { reputation: -4, focus: -3 } : { reputation: -3, focus: -2 };
    applyEffect(state.stats, extraPenalty);
    applySeasonEffect({ volatility: state.season.driveMode === "attack" ? 3 : 2, consistency: -2 });
  }
  if (choice.rival) {
    state.rival.heat = clamp(state.rival.heat + choice.rival + (failedRisk ? 3 : 0), 0, 100);
    state.rival.rating = clamp(state.rival.rating + (choice.rival > 0 ? 1 : 0), 45, 98);
  }
  const impact = diffStats(before, state.stats);
  const record = {
    season: state.season.number,
    phase: moment.phase,
    title: choice.label,
    text: `${choice.note} Modo ${mode.name.toLowerCase()}, riesgo ${risk}%.${failedRisk ? " La apuesta salio mal." : ""}`,
    impact: impact || "Impacto de temporada acumulado"
  };
  state.season.decisions.push(record);
  state.decisions.unshift(record);
  state.decisions = state.decisions.slice(0, 18);
  state.seenEventTitles = [moment.title, ...(state.seenEventTitles || []).filter((title) => title !== moment.title)].slice(0, 45);
  if (moment.minigame) {
    state.minigameHistory = [moment.minigame, ...(state.minigameHistory || [])].slice(0, 20);
    showFeedback("Decision tomada", `${record.text}. Impacto: ${record.impact}. Ahora resuelve el minijuego.`, failedRisk ? "bad" : "ok");
    startMinigame(moment.minigame);
  } else {
    showContinueFeedback(
      failedRisk ? "La decision salio cara" : "Decision aplicada",
      `${record.text}. Impacto: ${record.impact}.`,
      failedRisk ? "bad" : "ok",
      advanceMoment
    );
  }
  renderStats();
  renderTimeline();
}

function decisionRisk(choice) {
  const base = Math.round((choice.risk || 0) * 100);
  if (!base) return 0;
  const mode = DRIVE_MODES[state?.season?.driveMode || "balanced"] || DRIVE_MODES.balanced;
  const focusRelief = Math.max(0, (state.stats.focus || 50) - 72) * 0.18;
  const categoryHeat = state.category === "F1" ? 4 : state.category === "F2" ? 2 : 0;
  const phaseHeat = state.season?.moments?.[state.season.moment]?.phase === "Final de temporada" ? 4 : 0;
  return clamp(Math.round(base * mode.risk + categoryHeat + phaseHeat - focusRelief), 4, 72);
}

function showFeedback(title, text, tone = "ok") {
  $("feedback").className = `feedback ${tone}`;
  $("feedback").innerHTML = `<strong>${title}</strong><span>${text}</span>`;
}

function showContinueFeedback(title, text, tone, next) {
  $("choiceGrid").innerHTML = "";
  $("minigame").classList.add("hidden");
  showFeedback(title, text, tone);
  $("choiceGrid").innerHTML = `<button id="continueBtn" type="button" class="primary">Continuar</button>`;
  $("continueBtn").addEventListener("click", next, { once: true });
}

function clearFeedback() {
  $("feedback").className = "feedback hidden";
  $("feedback").innerHTML = "";
}

function diffStats(before, after) {
  return Object.keys(STAT_NAMES)
    .map((key) => [key, (after[key] || 0) - (before[key] || 0)])
    .filter(([, value]) => value !== 0)
    .map(([key, value]) => `${STAT_NAMES[key]} ${value > 0 ? "+" : ""}${value}`)
    .join(", ");
}

function startMinigame(type) {
  $("choiceGrid").innerHTML = "";
  $("minigame").classList.remove("hidden");
  state.activeMinigame = type;
  if (type === "lights") startLightsGame();
  if (type === "apex") startApexGame();
  if (type === "pit") startPitGame();
  if (type === "drs") startDrsGame();
  if (type === "ers") startErsGame();
  if (type === "tyres") startTyresGame();
  if (type === "focus") startFocusGame();
  if (type === "sector") startSectorGame();
  if (type === "walls") startWallsGame();
  if (type === "radio") startRadioGame();
  if (type === "duel") startDuelGame();
  if (type === "brake") startBrakeGame();
  if (type === "corner") startCornerGame();
  if (type === "boxcrew") startBoxCrewGame();
}

function minigameDifficulty() {
  const type = state.activeMinigame || "";
  const mode = DRIVE_MODES[state.season?.driveMode || "balanced"] || DRIVE_MODES.balanced;
  const category = state.category === "F1" ? 3 : state.category === "F2" ? 2 : 0;
  const tier = state.category === "F1" && state.team?.tier === "top" ? 2 : state.category === "F1" && state.team?.tier === "mid" ? 1 : 0;
  const phase = state.season?.moments?.[state.season.moment]?.phase || "";
  const phasePressure = phase === "Final de temporada" ? 2 : phase === "Sprint" ? 1 : 0;
  const careerPressure = Math.floor(state.season.number / 4);
  const typePressure = {
    lights: 1,
    apex: 1,
    drs: 2,
    ers: 1,
    sector: 1,
    pit: 1,
    boxcrew: 1,
    brake: 1,
    focus: state.category === "F1" ? 1 : 0
  }[type] || 0;
  return clamp(3 + category + tier + phasePressure + careerPressure + typePressure + mode.difficulty, 3, 12);
}

function finishMinigame(title, bonus, text) {
  if (!state.season) return;
  state.season.minigameScore += bonus;
  state.season.decisions.push({
    season: state.season.number,
    phase: "Minijuego",
    title,
    text,
    impact: `Resultado temporada ${bonus > 0 ? "+" : ""}${bonus}`
  });
  showContinueFeedback(
    bonus > 0 ? `${title}: bien ejecutado` : bonus === 0 ? `${title}: neutro` : `${title}: error`,
    `${text}. Consecuencia: rendimiento de temporada ${bonus > 0 ? "+" : ""}${bonus}.`,
    bonus > 0 ? "ok" : bonus === 0 ? "warn" : "bad",
    advanceMoment
  );
}

function startLightsGame() {
  const difficulty = minigameDifficulty();
  $("minigame").innerHTML = `
    <h3>Largada: suelta cuando se apaguen las luces</h3>
    <p>Dificultad ${difficulty}. Si saltas antes, penaliza. Si reaccionas tarde, pierdes posiciones.</p>
    <div class="lights">${Array.from({ length: 5 }, () => `<span class="light on"></span>`).join("")}</div>
    <button id="reactionBtn" type="button" class="primary">Soltar embrague</button>
  `;
  let readyAt = 0;
  const delay = rnd(1100, 2700);
  const perfect = Math.max(90, 280 - difficulty * 18);
  const good = Math.max(210, 520 - difficulty * 28);
  setTimeout(() => {
    document.querySelectorAll(".light").forEach((light) => light.classList.remove("on"));
    readyAt = performance.now();
  }, delay);
  $("reactionBtn").addEventListener("click", () => {
    const diff = readyAt ? performance.now() - readyAt : -1;
    const bonus = diff < 0 ? -6 : diff < perfect ? 7 : diff < good ? 4 : diff < 1050 ? 1 : -3;
    finishMinigame("Largada", bonus, bonus > 0 ? `Reaccion competitiva: ${Math.round(diff)} ms.` : "La largada costo posiciones.");
  }, { once: true });
}

function startApexGame() {
  const difficulty = minigameDifficulty();
  const target = rnd(42, 62);
  const windowSize = Math.max(10, 24 - difficulty);
  let locked = false;
  $("minigame").innerHTML = `
    <h3>Apex: traza la curva</h3>
    <p>Toca cuando el auto entra en la zona de apex. Temprano subvira, tarde pierdes salida.</p>
    <div class="corner-track">
      <i style="left:${target - windowSize / 2}%; width:${windowSize}%"></i>
      <span id="apexCar"></span>
    </div>
    <div class="mini-status"><span id="apexReadout">Entrada 0%</span></div>
    <button id="apexBtn" type="button" class="primary">Tocar apex</button>
  `;
  const start = performance.now();
  const duration = Math.max(2300, 3900 - difficulty * 130);
  let position = 0;
  function tick(now) {
    if (locked) return;
    position = clamp((now - start) / duration, 0, 1) * 100;
    $("apexCar").style.left = `${position}%`;
    $("apexReadout").textContent = `Entrada ${Math.round(position)}%`;
    if (position >= 100) {
      locked = true;
      finishMinigame("Apex", -4, "Tocaste tarde y perdiste salida.");
      return;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  $("apexBtn").addEventListener("click", () => {
    if (locked) return;
    locked = true;
    const distance = Math.abs(position - target);
    const bonus = distance <= windowSize / 2 ? 7 : distance <= windowSize ? 3 : -4;
    finishMinigame("Apex", bonus, bonus > 0 ? `Apex tocado en ${Math.round(position)}%.` : `Apex fuera de zona: ${Math.round(position)}%.`);
  }, { once: true });
}

function startPitGame() {
  const difficulty = minigameDifficulty();
  let stopped = false;
  $("minigame").innerHTML = `
    <h3>Pit stop: para en la ventana verde</h3>
    <p>Dificultad ${difficulty}. La barra corre mas rapido cuanto mas cerca estas de F1.</p>
    <div class="pit-track"><span id="pitNeedle"></span><b></b></div>
    <button id="pitBtn" type="button" class="primary">Parar ahora</button>
  `;
  const start = performance.now();
  const speed = 0.0007 + difficulty * 0.00026;
  function tick(now) {
    if (stopped) return;
    const pos = (Math.sin((now - start) * speed) + 1) / 2;
    $("pitNeedle").style.left = `${pos * 100}%`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  $("pitBtn").addEventListener("click", () => {
    stopped = true;
    const left = parseFloat($("pitNeedle").style.left || "0");
    const distance = Math.abs(left - 50);
    const bonus = distance < 6 ? 8 : distance < 14 ? 4 : distance < 25 ? 1 : -4;
    finishMinigame("Pit stop", bonus, bonus > 0 ? "Parada limpia y vuelta de salida fuerte." : "Parada lenta, trafico al volver.");
  }, { once: true });
}

function startDrsGame() {
  const difficulty = minigameDifficulty();
  let locked = false;
  const attackLane = ["inside", "outside"][rnd(0, 1)];
  const attackAt = rnd(42, 72);
  const windowSize = Math.max(12, 28 - difficulty);
  $("minigame").innerHTML = `
    <h3>Defensa DRS: lee la maniobra</h3>
    <p>El rival amaga y aparece una zona de ataque. Cubre interior o exterior cuando el auto llegue a la ventana.</p>
    <p id="drsSignal" class="mini-hint">El rival todavia no muestra la linea.</p>
    <div class="drs-track">
      <i class="drs-window" style="left:${attackAt - windowSize / 2}%; width:${windowSize}%"></i>
      <span id="drsCar"></span>
    </div>
    <div class="duel-buttons">
      <button type="button" data-line="inside">Interior</button>
      <button type="button" data-line="outside">Exterior</button>
    </div>
  `;
  const start = performance.now();
  const duration = Math.max(3600, 6200 - difficulty * 220);
  let signalShown = false;
  function tick(now) {
    if (locked) return;
    const pos = clamp((now - start) / duration, 0, 1) * 100;
    $("drsCar").style.left = `${pos}%`;
    if (!signalShown && pos > Math.max(16, attackAt - 22)) {
      signalShown = true;
      $("drsSignal").textContent = `El rival carga por ${attackLane === "inside" ? "interior" : "exterior"}.`;
    }
    if (pos >= 100) {
      locked = true;
      finishMinigame("Defensa DRS", -4, "Reaccion tarde: el rival abrio DRS y paso.");
      return;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  document.querySelectorAll("[data-line]").forEach((button) => {
    button.addEventListener("click", () => {
      if (locked) return;
      locked = true;
      const pos = parseFloat($("drsCar").style.left || "0");
      const timing = Math.abs(pos - attackAt);
      const rightLine = button.dataset.line === attackLane;
      const bonus = rightLine && timing <= windowSize / 2 ? 7 : rightLine && timing <= windowSize ? 3 : timing <= windowSize / 2 ? 0 : -4;
      const lineText = attackLane === "inside" ? "interior" : "exterior";
      finishMinigame("Defensa DRS", bonus, bonus > 0 ? `Cubriste ${lineText} a tiempo.` : `El ataque real era por ${lineText}.`);
    });
  });
}

function startErsGame() {
  const difficulty = minigameDifficulty();
  const target = rnd(35, 75);
  const windowSize = Math.max(12, 24 - difficulty);
  let locked = false;
  $("minigame").innerHTML = `
    <h3>ERS: clava la descarga</h3>
    <p>Descarga cuando el marcador entra en la zona dorada. La barra ya no depende de carga visual inicial: siempre arranca estable.</p>
    <div class="ers-bar">
      <i class="target-zone" style="left:${target - windowSize / 2}%; width:${windowSize}%"></i>
      <span id="ersFill"></span>
      <b id="ersNeedle" style="left:50%"></b>
    </div>
    <div class="mini-status"><span id="ersReadout">Carga 50%</span><span>Zona ${Math.round(target - windowSize / 2)}-${Math.round(target + windowSize / 2)}%</span></div>
    <button id="ersBtn" type="button" class="primary">Descargar</button>
  `;
  const start = performance.now();
  const period = Math.max(1900, 3600 - difficulty * 130);
  let currentCharge = 50;
  function tick(now) {
    if (locked) return;
    currentCharge = (Math.sin(((now - start) / period) * Math.PI * 2 - Math.PI / 2) + 1) * 50;
    $("ersFill").style.width = `${currentCharge}%`;
    $("ersNeedle").style.left = `${currentCharge}%`;
    $("ersReadout").textContent = `Carga ${Math.round(currentCharge)}%`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  $("ersBtn").addEventListener("click", () => {
    locked = true;
    const distance = Math.abs(currentCharge - target);
    const bonus = distance <= windowSize / 2 ? 8 : distance <= windowSize ? 4 : distance <= windowSize * 1.7 ? 1 : -5;
    finishMinigame("ERS", bonus, bonus > 0 ? `Descarga en ${Math.round(currentCharge)}%, zona ideal.` : `Descargaste en ${Math.round(currentCharge)}%, lejos de la zona.`);
  }, { once: true });
}

function startTyresGame() {
  const difficulty = minigameDifficulty();
  let temp = rnd(72, 96);
  let turns = 5;
  $("minigame").innerHTML = `
    <h3>Neumaticos: ventana de temperatura</h3>
    <p>Manten la goma entre 82 y 98 grados durante 5 vueltas de preparacion.</p>
    <div class="temp-gauge"><span id="tempFill"></span><strong id="tempText">${temp}C</strong></div>
    <div class="duel-buttons">
      <button type="button" data-tyre="push">Empujar</button>
      <button type="button" data-tyre="hold">Mantener</button>
      <button type="button" data-tyre="cool">Enfriar</button>
    </div>
  `;
  const renderTemp = () => {
    $("tempFill").style.width = `${clamp(temp, 40, 120) - 30}%`;
    $("tempText").textContent = `${temp}C`;
  };
  renderTemp();
  document.querySelectorAll("[data-tyre]").forEach((button) => {
    button.addEventListener("click", () => {
      const move = button.dataset.tyre;
      temp += (move === "push" ? rnd(8, 13) : move === "cool" ? -rnd(7, 12) : rnd(-4, 5)) + Math.floor(difficulty / 3);
      turns -= 1;
      renderTemp();
      if (turns <= 0) {
        const distance = temp < 82 ? 82 - temp : temp > 98 ? temp - 98 : 0;
        finishMinigame("Neumaticos", distance === 0 ? 8 : distance <= 8 ? 3 : -5, distance === 0 ? "Gomas en ventana perfecta." : "La goma no llego en temperatura ideal.");
      }
    });
  });
}

function startFocusGame() {
  const difficulty = minigameDifficulty();
  let hits = 0;
  let attempts = 0;
  let locked = false;
  $("minigame").innerHTML = `
    <h3>Foco: ritmo cardiaco</h3>
    <p>Toca cuando el pulso entra en la franja verde. Necesitas 3 aciertos en 5 intentos.</p>
    <div class="focus-ring"><span id="pulseDot"></span><b></b></div>
    <div class="mini-status"><span id="focusHits">Aciertos 0/3</span><span id="focusAttempts">Intentos 0/5</span></div>
    <button id="focusBtn" type="button" class="primary">Respirar</button>
  `;
  const start = performance.now();
  const speed = 0.0021 + difficulty * 0.00018;
  function tick(now) {
    if (locked) return;
    const pos = (Math.sin((now - start) * speed) + 1) / 2;
    $("pulseDot").style.left = `${pos * 100}%`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  $("focusBtn").addEventListener("click", () => {
    if (locked) return;
    attempts += 1;
    const pos = parseFloat($("pulseDot").style.left || "0");
    const hit = pos >= 39 && pos <= 61;
    if (hit) hits += 1;
    $("focusHits").textContent = `Aciertos ${hits}/3`;
    $("focusAttempts").textContent = `Intentos ${attempts}/5`;
    showFeedback(hit ? "Respiracion correcta" : "Fuera de ritmo", hit ? "El pulso entro en ventana verde." : "Tocaste fuera de la ventana verde.", hit ? "ok" : "warn");
    if (hits >= 3 || attempts >= 5) {
      locked = true;
      finishMinigame("Foco", hits >= 3 ? 7 : -4, hits >= 3 ? "Pulso bajo control." : "La ansiedad se filtro al volante.");
    }
  });
}

function startRadioGame() {
  const calls = [
    { text: "Plan B, box opposite, lluvia en 6 minutos", right: "BOX" },
    { text: "Target plus zero punto dos, no pelees en recta", right: "LIFT" },
    { text: "Gap libre, modo ataque hasta curva cuatro", right: "PUSH" },
    { text: "Safety car posible, entra si el lider sigue", right: "BOX" }
  ];
  const call = calls[rnd(0, calls.length - 1)];
  $("minigame").innerHTML = `
    <h3>Radio: interpreta la orden</h3>
    <p class="radio-call">${call.text}</p>
    <div class="duel-buttons">
      <button type="button" data-radio="BOX">Box</button>
      <button type="button" data-radio="PUSH">Push</button>
      <button type="button" data-radio="LIFT">Lift</button>
    </div>
  `;
  document.querySelectorAll("[data-radio]").forEach((button) => {
    button.addEventListener("click", () => {
      const ok = button.dataset.radio === call.right;
      finishMinigame("Radio", ok ? 7 : -5, ok ? "Orden entendida bajo ruido." : "Interpretaste mal la radio.");
    }, { once: true });
  });
}

function startSectorGame() {
  const difficulty = minigameDifficulty();
  let current = 1;
  const total = clamp(3 + Math.floor((difficulty - 3) / 3), 3, 5);
  $("minigame").innerHTML = `
    <h3>Vuelta lanzada: sectores</h3>
    <p>Toca los sectores en orden antes de que se cierre la ventana.</p>
    <div class="sector-grid">${Array.from({ length: total }, (_, i) => `<button type="button" data-sector="${i + 1}">S${i + 1}</button>`).sort(() => Math.random() - 0.5).join("")}</div>
    <div class="timer"><span id="timerFill"></span></div>
  `;
  const limit = Math.max(4200, 7000 - difficulty * 260);
  const start = performance.now();
  let done = false;
  function tick(now) {
    if (done) return;
    const left = clamp(1 - (now - start) / limit, 0, 1);
    $("timerFill").style.width = `${left * 100}%`;
    if (left <= 0) {
      done = true;
      finishMinigame("Sectores", -5, "La vuelta se desarmo por trafico y tiempo.");
      return;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  document.querySelectorAll("[data-sector]").forEach((button) => {
    button.addEventListener("click", () => {
      if (done) return;
      if (Number(button.dataset.sector) !== current) {
        done = true;
        finishMinigame("Sectores", -4, "Referencia incorrecta en vuelta rapida.");
        return;
      }
      button.disabled = true;
      current += 1;
      if (current > total) {
        done = true;
        finishMinigame("Sectores", 8, "Vuelta limpia, todos los sectores conectados.");
      }
    });
  });
}

function startWallsGame() {
  const difficulty = minigameDifficulty();
  const risks = [
    { id: "inside", label: "Interior", risk: clamp(18 + difficulty * 3, 20, 48), bonus: 6 },
    { id: "kerb", label: "Piano", risk: clamp(28 + difficulty * 4, 30, 62), bonus: 8 },
    { id: "outside", label: "Exterior", risk: clamp(10 + difficulty * 2, 12, 36), bonus: 4 }
  ].sort(() => Math.random() - 0.5);
  $("minigame").innerHTML = `
    <h3>Circuito callejero: evita el muro</h3>
    <p>No hay cuadro marcado: cada linea tiene riesgo real. Mas premio tambien significa mas muro.</p>
    <div class="risk-grid">${risks.map((risk) => `
      <button type="button" data-wall="${risk.id}">
        <strong>${risk.label}</strong>
        <small>Riesgo ${risk.risk}% - premio +${risk.bonus}</small>
      </button>
    `).join("")}</div>
  `;
  document.querySelectorAll("[data-wall]").forEach((button) => {
    button.addEventListener("click", () => {
      const pick = risks.find((risk) => risk.id === button.dataset.wall);
      const crash = rnd(1, 100) <= pick.risk;
      finishMinigame("Muros", crash ? -7 : pick.bonus, crash ? `La linea ${pick.label.toLowerCase()} termino en muro.` : `La linea ${pick.label.toLowerCase()} salio limpia.`);
    }, { once: true });
  });
}

function startDuelGame() {
  let grip = 55;
  let gap = rnd(-8, 8);
  let turns = 4;
  $("minigame").innerHTML = `
    <h3>Duelo: gestiona ataque y goma</h3>
    <p>Busca quedar con gap positivo sin destruir el grip.</p>
    <div class="duel-state"><span id="gapText"></span><span id="gripText"></span></div>
    <div class="duel-buttons">
      <button type="button" data-duel="attack">Atacar</button>
      <button type="button" data-duel="defend">Defender</button>
      <button type="button" data-duel="save">Guardar goma</button>
    </div>
  `;
  const renderDuel = () => {
    $("gapText").textContent = `Gap ${gap}`;
    $("gripText").textContent = `Grip ${grip}`;
  };
  renderDuel();
  document.querySelectorAll("[data-duel]").forEach((button) => {
    button.addEventListener("click", () => {
      const move = button.dataset.duel;
      if (move === "attack") { gap += rnd(5, 11); grip -= rnd(10, 16); }
      if (move === "defend") { gap += rnd(1, 5); grip -= rnd(4, 9); }
      if (move === "save") { gap -= rnd(2, 7); grip += rnd(5, 10); }
      grip = clamp(grip, 0, 100);
      turns -= 1;
      renderDuel();
      if (turns <= 0) {
        finishMinigame("Duelo", gap > 0 && grip >= 18 ? 9 : gap > 0 ? 3 : -6, gap > 0 ? "Ganaste el duelo rueda a rueda." : "Tu rival te sostuvo la posicion.");
      }
    });
  });
}

function startBrakeGame() {
  const difficulty = minigameDifficulty();
  const target = rnd(58, 78);
  const windowSize = Math.max(10, 22 - difficulty);
  let speed = 100;
  let locked = false;
  $("minigame").innerHTML = `
    <h3>Frenada limite: no bloquees</h3>
    <p>Frena cuando la velocidad caiga dentro de la zona verde. Muy temprano pierdes tiempo, muy tarde bloqueas.</p>
    <div class="brake-zone">
      <i style="left:${target - windowSize / 2}%; width:${windowSize}%"></i>
      <span id="brakeMarker" style="left:100%"></span>
    </div>
    <div class="mini-status"><span id="brakeReadout">Velocidad 100%</span></div>
    <button id="brakeBtn" type="button" class="primary">Frenar</button>
  `;
  const start = performance.now();
  const duration = Math.max(2200, 3900 - difficulty * 120);
  function tick(now) {
    if (locked) return;
    speed = clamp(100 - ((now - start) / duration) * 100, 0, 100);
    $("brakeMarker").style.left = `${speed}%`;
    $("brakeReadout").textContent = `Velocidad ${Math.round(speed)}%`;
    if (speed <= 0) {
      locked = true;
      finishMinigame("Frenada", -5, "Te pasaste de referencia y bloqueaste.");
      return;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  $("brakeBtn").addEventListener("click", () => {
    locked = true;
    const distance = Math.abs(speed - target);
    const bonus = distance <= windowSize / 2 ? 8 : distance <= windowSize ? 4 : distance <= windowSize * 1.6 ? 1 : -5;
    finishMinigame("Frenada", bonus, bonus > 0 ? `Frenaste en ${Math.round(speed)}%, referencia limpia.` : `Frenaste en ${Math.round(speed)}%, fuera de ventana.`);
  }, { once: true });
}

function startCornerGame() {
  let balance = rnd(44, 62);
  let grip = 70;
  let corners = 4;
  $("minigame").innerHTML = `
    <h3>Curvas enlazadas: balancea el auto</h3>
    <p>Manten balance entre 45 y 65 y grip sobre 25 durante cuatro curvas.</p>
    <div class="duel-state"><span id="cornerBalance"></span><span id="cornerGrip"></span><span id="cornerLeft"></span></div>
    <div class="duel-buttons">
      <button type="button" data-corner="rotate">Rotar</button>
      <button type="button" data-corner="flow">Fluir</button>
      <button type="button" data-corner="stabilize">Estabilizar</button>
    </div>
  `;
  const renderCorner = () => {
    $("cornerBalance").textContent = `Balance ${balance}`;
    $("cornerGrip").textContent = `Grip ${grip}`;
    $("cornerLeft").textContent = `Curvas ${corners}`;
  };
  renderCorner();
  document.querySelectorAll("[data-corner]").forEach((button) => {
    button.addEventListener("click", () => {
      const move = button.dataset.corner;
      if (move === "rotate") { balance += rnd(7, 12); grip -= rnd(10, 16); }
      if (move === "flow") { balance += rnd(-4, 6); grip -= rnd(5, 10); }
      if (move === "stabilize") { balance -= rnd(6, 11); grip -= rnd(3, 7); }
      balance = clamp(balance, 20, 90);
      grip = clamp(grip, 0, 100);
      corners -= 1;
      renderCorner();
      if (corners <= 0) {
        const inWindow = balance >= 45 && balance <= 65 && grip >= 25;
        const close = balance >= 38 && balance <= 72 && grip >= 15;
        finishMinigame("Curvas", inWindow ? 8 : close ? 2 : -5, inWindow ? "El auto fluyo perfecto en enlazadas." : close ? "Sobreviviste sin perder demasiado." : "El auto quedo fuera de balance.");
      }
    });
  });
}

function startBoxCrewGame() {
  const difficulty = minigameDifficulty();
  const wheels = ["FL", "FR", "RL", "RR"].map((name) => ({ name, readyAt: rnd(700, 1900), done: false, early: false }));
  let locked = false;
  $("minigame").innerHTML = `
    <h3>Box crew: cuatro ruedas</h3>
    <p>Cambia cada rueda cuando se ilumine. Si apretas antes, la pistola se traba.</p>
    <div class="wheel-grid">${wheels.map((wheel) => `<button type="button" data-wheel="${wheel.name}">${wheel.name}</button>`).join("")}</div>
    <div class="mini-status"><span id="wheelStatus">Ruedas 0/4</span></div>
  `;
  const start = performance.now();
  const lateLimit = Math.max(3600, 5200 - difficulty * 160);
  function tick(now) {
    if (locked) return;
    const elapsed = now - start;
    wheels.forEach((wheel) => {
      const el = document.querySelector(`[data-wheel="${wheel.name}"]`);
      if (!wheel.done && elapsed >= wheel.readyAt) el?.classList.add("ready");
    });
    if (elapsed > lateLimit) {
      locked = true;
      const done = wheels.filter((wheel) => wheel.done).length;
      finishMinigame("Box crew", done === 4 ? 6 : -5, done === 4 ? "Parada completa, aunque lenta." : "La parada quedo incompleta.");
      return;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
  document.querySelectorAll("[data-wheel]").forEach((button) => {
    button.addEventListener("click", () => {
      if (locked) return;
      const wheel = wheels.find((item) => item.name === button.dataset.wheel);
      const elapsed = performance.now() - start;
      if (elapsed < wheel.readyAt) {
        wheel.early = true;
        button.classList.add("early");
      } else {
        wheel.done = true;
        button.disabled = true;
        button.classList.add("done");
      }
      const done = wheels.filter((item) => item.done).length;
      $("wheelStatus").textContent = `Ruedas ${done}/4`;
      if (done === 4) {
        locked = true;
        const early = wheels.some((item) => item.early);
        finishMinigame("Box crew", early ? 2 : 8, early ? "Cambiaste las cuatro, pero una pistola se trabo temprano." : "Parada limpia de cuatro ruedas.");
      }
    });
  });
}

function runSequenceGame(title, sequence, help, goodBonus, badBonus) {
  let index = 0;
  let locked = false;
  $("minigame").innerHTML = `
    <h3>${title}: secuencia de presion</h3>
    <p>${help}</p>
    <div class="sequence">${sequence.map((item) => `<span>${item}</span>`).join("")}</div>
    <div class="duel-buttons">${[...new Set(sequence)].map((item) => `<button type="button" data-seq="${item}">${item}</button>`).join("")}</div>
  `;
  document.querySelectorAll("[data-seq]").forEach((button) => {
    button.addEventListener("click", () => {
      if (locked) return;
      if (button.dataset.seq !== sequence[index]) {
        locked = true;
        finishMinigame(title, badBonus, `Error en paso ${index + 1}.`);
        return;
      }
      index += 1;
      if (index === sequence.length) {
        locked = true;
        finishMinigame(title, goodBonus, "Secuencia completa bajo presion.");
      }
    });
  });
}

function advanceMoment() {
  state.season.moment += 1;
  if (state.season.moment >= state.season.moments.length) {
    simulateSeason();
  } else {
    saveCareer();
    render();
  }
}

function simulateSeason() {
  $("minigame").classList.add("hidden");
  const season = state.season;
  const mods = season.modifiers;
  const car = state.team.power + mods.carBoost;
  const driver = avg(state.stats);
  const pressureDrag = Math.max(0, mods.pressure || 0) * 0.85 + (state.rival.heat > 65 ? 1.5 : 0);
  const luck = rnd(-12, 10) + mods.volatility * 0.45 - Math.max(0, mods.consistency) * 0.85;
  const form = mods.setup * 0.72 + mods.qualy * 0.72 + mods.race * 0.86 + mods.tyreCare * 0.58 + season.minigameScore * 0.74;
  const eliteDriverBonus = Math.max(0, driver - 84) * 1.05 + Math.max(0, state.stats.racecraft - 88) * 0.26 + Math.max(0, state.stats.technical - 88) * 0.16;
  const carDrag = Math.max(0, 78 - car) * (state.category === "F1" ? 0.22 : 0.1);
  const driverScore = driver * 0.72 + form + eliteDriverBonus - pressureDrag;
  const carExpectation = car + (state.category === "F1" ? 3 : 0);
  const score = driver * 0.58 + car * 0.24 + state.stats.focus * 0.08 + form + eliteDriverBonus + luck - pressureDrag - carDrag;
  const f1CarDeficit = state.category === "F1" ? Math.max(0, 90 - car) : 0;
  const f1RaceTax = state.category === "F1" && state.team.tier !== "top" ? (state.team.tier === "mid" ? 2 : 5) : 0;
  const f1TitleTax = state.category === "F1" && state.team.tier !== "top" ? (state.team.tier === "mid" ? 4.5 : 8) : 0;
  const winLine = state.category === "F1" ? 90 + f1CarDeficit * 0.28 + f1RaceTax * 0.35 : state.category === "F2" ? 83 : 80;
  const podiumLine = state.category === "F1" ? 76 + f1CarDeficit * 0.2 + f1RaceTax * 0.2 : state.category === "F2" ? 70 : 66;
  const wins = Math.max(0, Math.floor((score - winLine) / 7) + (score > winLine + 2 && rnd(0, 100) > 48 ? 1 : 0));
  const podiums = Math.max(wins, Math.floor((score - podiumLine) / 6) + (score > podiumLine + 2 && rnd(0, 100) > 58 ? 1 : 0));
  const points = Math.max(0, Math.round((score - 49) * (state.category === "F1" ? 5.35 : 3.35)));
  const titleLine = state.category === "F1" ? 104 + f1CarDeficit * 0.58 + f1TitleTax : state.category === "F2" ? 92 : 89;
  const title = score + wins * 1.55 + podiums * 0.55 + rnd(-6, 6) > titleLine ? 1 : 0;
  const poles = Math.max(0, Math.floor((state.stats.pace + mods.qualy * 0.8 + season.minigameScore * 0.4 - 66) / 15));
  const licenseGain = state.category === "F3"
    ? Math.floor(points / 22) + title * 16 + (podiums >= 4 ? 2 : 0)
    : state.category === "F2"
      ? Math.floor(points / 18) + title * 22 + (podiums >= 5 ? 4 : 0)
      : 0;
  const overperformance = Math.round(score - carExpectation);

  state.wins += wins;
  state.podiums += podiums;
  state.points += points;
  state.poles += poles;
  state.titles += title;
  state.license += licenseGain;
  state.money += Math.round((points + podiums * 8 + wins * 18) * (state.category === "F1" ? 12000 : 1800));
  state.seasons += 1;
  state.categorySeasons[state.category] = (state.categorySeasons[state.category] || 0) + 1;
  state.age += 1;
  state.rival.rating = clamp(state.rival.rating + rnd(0, 2) + (state.rival.heat > 60 ? 1 : 0), 48, 96);
  state.rival.category = state.category;
  applyEffect(state.stats, {
    pace: state.age < 28 ? 1 : -1,
    racecraft: 1,
    tyre: state.age < 32 ? 1 : 0,
    focus: rnd(-1, 2),
    reputation: title ? 5 : podiums > 3 ? 2 : 0,
    market: wins > 0 ? 2 : 0
  });
  developDriverFromSeason({ wins, podiums, poles, title, score, overperformance, minigameScore: season.minigameScore });

  state.trajectory.unshift({
    season: season.number,
    age: state.age,
    category: season.category,
    team: season.team.name,
    teamCode: season.team.code,
    teamColor: season.team.color,
    score: Math.round(score),
    driverScore: Math.round(driverScore),
    carExpectation: Math.round(carExpectation),
    overperformance,
    points,
    wins,
    podiums,
    poles,
    title,
    licenseGain,
    decisions: season.decisions.map((item) => `${item.phase}: ${item.title}`)
  });

  const earnedTrophies = awardSeasonTrophies({
    season: season.number,
    category: season.category,
    team: season.team.name,
    points,
    wins,
    podiums,
    poles,
    title,
    score,
    driverScore,
    carExpectation,
    overperformance,
    categoryYear: state.categorySeasons[season.category],
    minigameScore: season.minigameScore
  });

  state.decisions.unshift({
    season: season.number,
    phase: "Resultado",
    title: `${season.team.name} - ${points} pts`,
    text: `${wins} victorias, ${podiums} podios, ${poles} poles${title ? ", campeon" : ""}.`,
    impact: `Piloto ${Math.round(driverScore)} vs auto ${Math.round(carExpectation)} (${overperformance >= 0 ? "+" : ""}${overperformance}) - Superlicencia +${licenseGain}${earnedTrophies.length ? ` - Trofeos +${earnedTrophies.length}` : ""}`
  });

  if (title) {
    state.decisions.unshift({
      season: season.number,
      phase: "Celebracion",
      title: `${season.category}: Campeon`,
      text: `${state.name} levanta la copa con ${season.team.name}.`,
      impact: "Titulo agregado a la vitrina"
    });
  }

  state.season = null;
  maybePromote();
  saveCareer();
  render();
}

function developDriverFromSeason(result) {
  const gains = {};
  if (result.score >= 82) gains.focus = 1;
  if (result.score >= 86) gains.technical = 1;
  if (result.podiums >= 2) gains.racecraft = 1;
  if (result.wins >= 2) gains.pace = 1;
  if (result.minigameScore >= 12) gains.technical = (gains.technical || 0) + 1;
  if (result.overperformance >= 8) gains.reputation = (gains.reputation || 0) + 2;
  if (result.overperformance >= 12) gains.market = (gains.market || 0) + 1;
  if (result.title) {
    gains.reputation = (gains.reputation || 0) + 3;
    gains.market = (gains.market || 0) + 2;
    gains.focus = (gains.focus || 0) + 1;
  }
  Object.entries(gains).forEach(([key, value]) => {
    if ((state.stats[key] || 0) >= 96 && key !== "market" && key !== "reputation") gains[key] = Math.min(value, 0);
  });
  applyEffect(state.stats, gains);
}

function awardSeasonTrophies(result) {
  const trophies = [];
  state.milestones = state.milestones || {};
  if (result.title) {
    trophies.push({
      type: "title",
      label: `Campeon ${result.category}`,
      season: result.season,
      team: result.team
    });
  }
  if (result.categoryYear === 1 && result.score >= (result.category === "F1" ? 82 : 78)) {
    trophies.push({
      type: "rookie",
      label: `Rookie destacado ${result.category}`,
      season: result.season,
      team: result.team
    });
  }
  if (result.podiums > 0 && !state.milestones.firstPodium) {
    state.milestones.firstPodium = result.season;
    trophies.push({
      type: "firstPodium",
      label: "Primer podio",
      season: result.season,
      team: result.team
    });
  }
  if (result.wins > 0 && !state.milestones.firstWin) {
    state.milestones.firstWin = result.season;
    trophies.push({
      type: "firstWin",
      label: "Primera victoria",
      season: result.season,
      team: result.team
    });
  }
  if (result.poles > 0 && result.score >= 88) {
    trophies.push({
      type: "pole",
      label: `${result.poles} poles destacadas`,
      season: result.season,
      team: result.team
    });
  }
  if (result.podiums > 0) {
    trophies.push({
      type: "podium",
      label: `${result.podiums} podios`,
      season: result.season,
      team: result.team
    });
  }
  if (result.minigameScore >= 28 || result.wins >= 3) {
    trophies.push({
      type: "sprint",
      label: "Sprint/ritmo destacado",
      season: result.season,
      team: result.team
    });
  }
  if (result.score >= 94 && (result.overperformance >= 9 || (result.wins === 0 && result.podiums > 1))) {
    trophies.push({
      type: "overtake",
      label: result.overperformance >= 9 ? "Remontada de la temporada" : "Adelantada de la temporada",
      season: result.season,
      team: result.team
    });
  }
  if (result.points >= (result.category === "F1" ? 260 : 155) || result.title) {
    trophies.push({
      type: "constructor",
      label: "Aporte a constructores",
      season: result.season,
      team: result.team
    });
  }
  state.trophies.push(...trophies);
  return trophies;
}

function maybePromote() {
  const recent = state.trajectory?.[0];
  const recentCategory = (state.trajectory || []).filter((item) => item.category === state.category).slice(0, 3);
  const categoryScoreAvg = recentCategory.length
    ? Math.round(recentCategory.reduce((sum, item) => sum + item.score, 0) / recentCategory.length)
    : 0;
  const categoryPoints = recentCategory.reduce((sum, item) => sum + item.points, 0);
  const recentOver = recent?.overperformance || 0;
  const strongF3 = recent && (recent.title || recent.score >= 84 || recent.points >= 132 || recentOver >= 10);
  const strongF2 = recent && (recent.title || recent.score >= 86 || recent.points >= 138 || (recent.podiums >= 4 && recentOver >= 4));
  const f3ReadyByTime =
    state.category === "F3" &&
    (
      (state.categorySeasons.F3 >= 2 && (state.license >= 16 || avg(state.stats) >= 68 || categoryScoreAvg >= 70)) ||
      (state.categorySeasons.F3 >= 3 && (state.license >= 10 || avg(state.stats) >= 62))
    );
  const f2ReadyByBodyOfWork =
    state.category === "F2" &&
    state.categorySeasons.F2 >= 2 &&
    state.license >= 34 &&
    avg(state.stats) >= 76 &&
    (categoryScoreAvg >= 76 || categoryPoints >= 225 || recentCategory.reduce((sum, item) => sum + item.wins, 0) >= 3 || recentCategory.reduce((sum, item) => sum + item.podiums, 0) >= 9);
  const f2ReadyByTime =
    state.category === "F2" &&
    (
      (state.categorySeasons.F2 >= 3 && state.license >= 38 && avg(state.stats) >= 72) ||
      (state.categorySeasons.F2 >= 4 && state.license >= 30 && avg(state.stats) >= 68) ||
      (state.categorySeasons.F2 >= 5 && avg(state.stats) >= 64)
    );
  if (state.category === "F3" && ((state.categorySeasons.F3 >= 1 && state.license >= 18 && strongF3) || f3ReadyByTime)) {
    state.category = "F2";
    state.categorySeasons.F2 = state.categorySeasons.F2 || 0;
    state.team = null;
    state.rival.category = "F2";
    state.rival.team = null;
    state.decisions.unshift({
      season: state.seasons,
      phase: "Ascenso",
      title: "Llamado de F2",
      text: "Los equipos de F2 preguntan por tu entorno.",
      impact: "Nueva categoria desbloqueada"
    });
  } else if (
    state.category === "F2" &&
    state.categorySeasons.F2 >= 1 &&
    (state.license >= 34 || state.categorySeasons.F2 >= 5) &&
    (strongF2 || f2ReadyByBodyOfWork || f2ReadyByTime) &&
    avg(state.stats) >= 68 &&
    (state.categorySeasons.F2 >= 2 || (recent?.title && recent?.score >= 89))
  ) {
    state.category = "F1";
    state.categorySeasons.F1 = state.categorySeasons.F1 || 0;
    state.team = null;
    state.rival.category = "F1";
    state.rival.team = null;
    state.decisions.unshift({
      season: state.seasons,
      phase: "Superlicencia",
      title: "Asiento de F1 disponible",
      text: "La FIA aprueba los puntos y el mercado se abre.",
      impact: "Formula 1 desbloqueada"
    });
  } else if (state.seasons % 2 === 0 && Math.random() < 0.55) {
    state.team = null;
  }
}

function renderTimeline() {
  if (!state) return;
  const items = (state.decisions || []).slice(0, 10);
  $("timeline").innerHTML = items.map((item) => `
    <div class="log">
      <strong>T${item.season} - ${item.phase}: ${item.title}</strong><br />
      ${item.text}<br />
      <span>${item.impact || "Sin impacto registrado"}</span>
    </div>
  `).join("");
}

function renderRetirement() {
  const legacyScore = Math.round(state.points + state.wins * 28 + state.podiums * 9 + state.titles * 160 + state.license * 3);
  const verdict = legacyScore > 1700 ? "Leyenda mundial" : legacyScore > 1050 ? "Ganador de epoca" : legacyScore > 620 ? "Piloto de elite" : legacyScore > 260 ? "Profesional respetado" : "Talento que dejo historias";
  $("careerStage").textContent = "Retiro";
  $("careerTitle").textContent = "Carta de legado";
  $("mainCard").innerHTML = `
    <div class="driver-card">
      <div>
        <p class="eyebrow">${verdict}</p>
        <h2>${state.name}</h2>
        <p>${state.nationality} - ${state.style} - ${state.personality}</p>
        <div class="pill-row">
          <span class="pill">${state.points} puntos</span>
          <span class="pill">${state.wins} victorias</span>
          <span class="pill">${state.podiums} podios</span>
          <span class="pill">${state.poles} poles</span>
          <span class="pill">${state.titles} titulos</span>
          <span class="pill">$${state.money.toLocaleString("es-AR")}</span>
        </div>
        ${renderCareerAnalysis(legacyScore)}
        ${renderTrophyWall()}
      </div>
      <div class="big-number">${legacyScore}</div>
    </div>
  `;
  $("choiceGrid").innerHTML = `
    <div class="trajectory">
      ${(state.trajectory || []).slice().reverse().map((item) => `
        <article class="season-row">
          <span class="logo" style="--team:${item.teamColor}">${item.teamCode}</span>
          <div>
            <strong>T${item.season} - ${item.category} - ${item.team}</strong>
            <p>${item.points} pts, ${item.wins} victorias, ${item.podiums} podios, ${item.poles} poles${item.title ? ", campeon" : ""}. Score ${item.score}.</p>
            <p class="season-analysis">Piloto ${item.driverScore || item.score} vs auto ${item.carExpectation || "-"} (${(item.overperformance || 0) >= 0 ? "+" : ""}${item.overperformance || 0})</p>
            <small>${item.decisions.join(" | ")}</small>
          </div>
        </article>
      `).join("")}
    </div>
    <button class="primary" type="button" id="againBtn">Jugar otra carrera</button>
  `;
  $("againBtn").addEventListener("click", resetCareer);
  localStorage.removeItem("el-elegido-save");
}

function renderCareerAnalysis(legacyScore) {
  const driverPeak = Math.max(avg(state.stats), ...((state.trajectory || []).map((item) => item.score)));
  const expectedTitles = driverPeak >= 96 ? 4 : driverPeak >= 92 ? 2 : driverPeak >= 88 ? 1 : 0;
  const titleGap = expectedTitles - state.titles;
  const verdict = titleGap > 2
    ? "Tu talento supero por bastante a la vitrina. Faltaron autos, oportunidades o decisiones clave en anos grandes."
    : titleGap > 0
      ? "La carrera dejo la sensacion de que habia una copa mas posible."
      : "La vitrina acompano bien al nivel mostrado.";
  return `
    <div class="legacy-analysis">
      <strong>Analisis deportivo</strong>
      <p>${verdict}</p>
      <div>
        <span>Pico competitivo ${driverPeak}</span>
        <span>Titulos esperados ${expectedTitles}</span>
        <span>Legado ${legacyScore}</span>
      </div>
    </div>
  `;
}

function renderTrophyWall() {
  const trophies = (state.trophies || []).slice().reverse();
  if (!trophies.length) return "";
  const majorTypes = new Set(["title", "constructor"]);
  const major = trophies.filter((trophy) => majorTypes.has(trophy.type)).slice(0, 10);
  const honors = trophies.filter((trophy) => !majorTypes.has(trophy.type)).slice(0, 18);
  return `
    <div class="trophy-wall">
      <h3>Vitrina</h3>
      <div class="trophy-wall-section">
        <strong>Grandes logros</strong>
        <div>
          ${major.length ? major.map((trophy) => trophyWallPill(trophy)).join("") : "<em>Todavia sin copas mayores.</em>"}
        </div>
      </div>
      <div class="trophy-wall-section">
        <strong>Reconocimientos e hitos</strong>
        <div>
          ${honors.length ? honors.map((trophy) => trophyWallPill(trophy)).join("") : "<em>Los hitos apareceran con podios, poles y remontadas.</em>"}
        </div>
      </div>
    </div>
  `;
}

function trophyWallPill(trophy) {
  return `
    <span>
      <b>${trophy.type.toUpperCase()}</b>
      ${trophy.label} - T${trophy.season}
    </span>
  `;
}

initSetup();
