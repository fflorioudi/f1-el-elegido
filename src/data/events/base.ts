import type { Moment } from "../../types/game";
export const MOMENT_BANK: Moment[][] = [
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

