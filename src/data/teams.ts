import type { Category, Team, TeamTier } from "../types/game";

const TEAM_LOGOS: Record<string, string> = {
  "Campos Racing": "assets/teams/campos-racing.png",
  Trident: "assets/teams/trident.png",
  "MP Motorsport": "assets/teams/mp-motorsport.png",
  "ART Grand Prix": "assets/teams/art-grand-prix.png",
  "Van Amersfoort Racing": "assets/teams/van-amersfoort-racing.png",
  "Rodin Motorsport": "assets/teams/rodin-motorsport.png",
  "PREMA Racing": "assets/teams/prema-racing.png",
  Hitech: "assets/teams/hitech.png",
  "AIX Racing": "assets/teams/aix-racing.png",
  "DAMS Lucas Oil": "assets/teams/dams-lucas-oil.png",
  "Invicta Racing": "assets/teams/invicta-racing.png",
  Mercedes: "assets/teams/mercedes.png",
  Ferrari: "assets/teams/ferrari.png",
  McLaren: "assets/teams/mclaren.png",
  "Red Bull Racing": "assets/teams/red-bull-racing.png",
  "Racing Bulls": "assets/teams/racing-bulls.png",
  Alpine: "assets/teams/alpine.png",
  "Haas F1 Team": "assets/teams/haas-f1-team.png",
  Audi: "assets/teams/audi.png",
  Williams: "assets/teams/williams.png",
  "Aston Martin": "assets/teams/aston-martin.png",
  Cadillac: "assets/teams/cadillac.png",
};

const TEAMS: Record<Category, Array<[string, number, string, string, string, string?, TeamTier?]>> = {
  F3: [
    ["Campos Racing", 78, "ESP", "#f04444", "CAM"], ["Trident", 76, "ITA", "#2f6bff", "TRI"],
    ["MP Motorsport", 73, "NLD", "#ff8f2f", "MP"], ["ART Grand Prix", 74, "FRA", "#d7dde8", "ART"],
    ["Van Amersfoort Racing", 70, "NLD", "#ef2a32", "VAR"], ["Rodin Motorsport", 71, "NZL", "#111111", "ROD"],
    ["PREMA Racing", 72, "ITA", "#e7272d", "PRE"], ["Hitech", 69, "GBR", "#8ad8ff", "HIT"],
    ["AIX Racing", 64, "GER", "#ffb12b", "AIX"], ["DAMS Lucas Oil", 66, "FRA", "#1c45a8", "DAM"],
  ],
  F2: [
    ["Invicta Racing", 80, "GBR", "#2fd883", "INV"], ["Hitech", 77, "GBR", "#8ad8ff", "HIT"],
    ["Campos Racing", 82, "ESP", "#f04444", "CAM"], ["DAMS Lucas Oil", 74, "FRA", "#1c45a8", "DAM"],
    ["MP Motorsport", 79, "NLD", "#ff8f2f", "MP"], ["PREMA Racing", 76, "ITA", "#e7272d", "PRE"],
    ["Rodin Motorsport", 78, "NZL", "#111111", "ROD"], ["ART Grand Prix", 75, "FRA", "#d7dde8", "ART"],
    ["AIX Racing", 68, "GER", "#ffb12b", "AIX"], ["Van Amersfoort Racing", 69, "NLD", "#ef2a32", "VAR"],
    ["Trident", 67, "ITA", "#2f6bff", "TRI"],
  ],
  F1: [
    ["Mercedes", 94, "GBR", "#00d2be", "MER", undefined, "top"],
    ["Ferrari", 93, "ITA", "#dc0000", "FER", undefined, "top"],
    ["McLaren", 92, "GBR", "#ff8700", "MCL", undefined, "top"],
    ["Red Bull Racing", 91, "AUT", "#1e41ff", "RBR", undefined, "top"],
    ["Alpine", 82, "FRA", "#2293d1", "ALP", undefined, "mid"],
    ["Audi", 81, "GER", "#c7ccd1", "AUD", undefined, "mid"],
    ["Haas F1 Team", 80, "USA", "#b6babd", "HAA", undefined, "mid"],
    ["Racing Bulls", 79, "ITA", "#6c98ff", "VCB", undefined, "mid"],
    ["Williams", 72, "GBR", "#00a3e0", "WIL", undefined, "low"],
    ["Aston Martin", 71, "GBR", "#006f62", "AMR", undefined, "low"],
    ["Cadillac", 68, "USA", "#c4a35a", "CAD", undefined, "low"],
  ],
};

export function tierFromPower(category: Category, power: number): TeamTier {
  if (category !== "F1") return power >= 80 ? "top" : power >= 74 ? "mid" : "low";
  if (power >= 88) return "top";
  if (power >= 77) return "mid";
  return "low";
}

export function tierName(tier: TeamTier) {
  return tier === "top" ? "Top" : tier === "mid" ? "Medio" : "Bajo";
}

export function teamObjects(category: Category): Team[] {
  return TEAMS[category].map(([name, power, country, color, code, logo, tier]) => ({
    name,
    power,
    country,
    color,
    code,
    logo: TEAM_LOGOS[name] || logo,
    tier: tier || tierFromPower(category, power),
  }));
}
