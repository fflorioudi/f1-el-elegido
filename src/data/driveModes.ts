export const DRIVE_MODES = {
  safe: {
    name: "Conservador",
    text: "Menos riesgo, mejor gestion, menor techo de sabado y ataque.",
    risk: 0.76,
    season: { consistency: 3, volatility: -2, tyreCare: 2, race: -1, qualy: -1 },
    difficulty: -1,
    ceiling: 0,
    control: 1,
  },
  balanced: {
    name: "Equilibrado",
    text: "Riesgo sano, buen aprendizaje y pocos extremos.",
    risk: 1,
    season: {},
    difficulty: 0,
    ceiling: 0,
    control: 0,
  },
  attack: {
    name: "Agresivo",
    text: "Mas techo de vuelta, mas desgaste, presion y errores caros.",
    risk: 1.58,
    season: { race: 2, qualy: 1, volatility: 5, consistency: -3, tyreCare: -2, pressure: 2 },
    difficulty: 1,
    ceiling: 3,
    control: -3,
  },
};
