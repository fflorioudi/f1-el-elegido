import type { Moment } from "../../types/game";
export const EXTRA_MOMENTS: Moment[][] = [
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

