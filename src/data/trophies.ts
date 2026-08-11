import { ASSETS } from "./assets";

export const TROPHY_GUIDE = {
  title: ["Campeonatos", "Titulo de pilotos ganado en F3, F2 o F1."],
  constructor: ["Constructores", "Aporte decisivo al equipo por titulo o temporada de muchos puntos."],
  podium: ["Podios", "Temporadas donde llegaste al podio y sostuviste domingos fuertes."],
  pole: ["Poles", "Clasificaciones destacadas con ritmo de vuelta rapida."],
  sprint: ["Sprints", "Reconocimiento de ritmo corto: minijuegos fuertes, sprints o varias victorias."],
  honor: ["Hitos", "Primer podio, primera victoria, rookie destacado o remontada especial."],
};

export function trophyIcon(type: string) {
  if (type === "constructor") return ASSETS.trophies.constructor;
  if (type === "podium" || type === "firstPodium") return ASSETS.trophies.podium;
  if (type === "pole") return ASSETS.trophies.pole;
  if (type === "sprint") return ASSETS.trophies.sprint;
  if (type === "title" || type === "firstWin") return ASSETS.trophies.title;
  return ASSETS.trophies.honor;
}
