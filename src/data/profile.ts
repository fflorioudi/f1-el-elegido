export const NATIONALITIES = [
  "Argentina", "Brasil", "Chile", "Colombia", "Mexico", "Estados Unidos",
  "Espana", "Reino Unido", "Italia", "Francia", "Alemania", "Paises Bajos",
  "Belgica", "Australia", "Japon", "China", "India", "Sudafrica", "Canada",
  "Finlandia", "Suecia", "Dinamarca", "Portugal", "Uruguay",
];

export const STYLES = [
  { id: "qualy", name: "Especialista de qualy", mods: { pace: 7, focus: 4, tyre: -2 } },
  { id: "race", name: "Ritmo de carrera", mods: { tyre: 7, racecraft: 4, pace: -1 } },
  { id: "rain", name: "Maestro de lluvia", mods: { racecraft: 5, focus: 3, technical: -1 } },
  { id: "fighter", name: "Rueda a rueda", mods: { racecraft: 7, focus: -1, technical: 2 } },
  { id: "engineer", name: "Piloto ingeniero", mods: { technical: 7, tyre: 2, pace: -2 } },
];

export const PERSONALITIES = [
  { id: "calm", name: "Frio", mods: { focus: 4, market: -1 } },
  { id: "media", name: "Mediatico", mods: { market: 5, focus: -2 } },
  { id: "loyal", name: "Leal", mods: { reputation: 4, market: -2 } },
  { id: "risk", name: "Ambicioso", mods: { market: 3, reputation: -1 } },
];

export const STAT_NAMES = {
  pace: "Velocidad",
  racecraft: "Racecraft",
  tyre: "Neumaticos",
  technical: "Feedback",
  focus: "Concentracion",
  market: "Marketing",
  reputation: "Reputacion",
};
