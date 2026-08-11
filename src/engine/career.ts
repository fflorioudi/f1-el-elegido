import { DRIVE_MODES, PERSONALITIES, STAT_NAMES, STYLES, momentBank, teamObjects } from "../data/catalog";
import type { CareerState, Choice, DecisionLog, DriveModeKey, Moment, SetupInput, Stats, Team, Trophy, TrophyType } from "../types/game";
import { applyEffect, avg, clamp, describeEffect, rnd } from "./utils";

const RIVAL_NAMES = [
  "Bruno Valente",
  "Luca Moretti",
  "Theo Marchand",
  "Noah Keller",
  "Mateo Aranda",
  "Kaito Mori",
  "Oliver Reed",
  "Santi Ferreyra",
  "Nico Varga",
  "Elias Novak",
];

const BASE_SEASON_MODIFIERS = {
  setup: 0,
  qualy: 0,
  race: 0,
  consistency: 0,
  volatility: 0,
  tyreCare: 0,
  carBoost: 0,
  pressure: 0,
};

export function createCareer(input: SetupInput): CareerState {
  const style = STYLES.find((item: any) => item.id === input.styleId) || STYLES[0];
  const personality = PERSONALITIES.find((item: any) => item.id === input.personalityId) || PERSONALITIES[0];
  let stats = Object.fromEntries(Object.entries(input.points).map(([key, value]) => [key, 42 + value * 5])) as Stats;
  stats.market = 48;
  stats.reputation = 45;
  stats = applyEffect(applyEffect(stats, style.mods), personality.mods) as Stats;
  return {
    saveVersion: 1,
    name: input.name.trim() || "El elegido",
    nationality: input.nationality,
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
    minigameCounts: {},
    pendingCelebrations: [],
    marketContext: null,
    careerDriveMode: null,
    retired: false,
    season: null,
  };
}

function createRival(stats: Stats) {
  return {
    name: RIVAL_NAMES[rnd(0, RIVAL_NAMES.length - 1)],
    heat: rnd(22, 44),
    rating: clamp(avg(stats) + rnd(-7, 7), 48, 86),
    category: "F3" as const,
    team: null,
  };
}

export function startSeason(state: CareerState): CareerState {
  if (shouldRetire(state)) return retireCareer(state);
  if (!state.team) return state;
  const selectedMoments = chooseSeasonMoments(state);
  const lockedMode = Boolean(state.careerDriveMode);
  const next: CareerState = {
    ...state,
    season: {
      number: state.seasons + 1,
      category: state.category,
      age: state.age,
      team: state.team,
      moment: 0,
      moments: selectedMoments,
      modifiers: { ...BASE_SEASON_MODIFIERS },
      minigameScore: 0,
      driveMode: state.careerDriveMode || "balanced",
      driveModeLocked: lockedMode,
      decisions: [],
      pendingMinigame: null,
    },
  };
  if (lockedMode) return applySeasonEffect(next, (DRIVE_MODES[next.careerDriveMode || "balanced"] as any).season);
  return next;
}

export function lockDriveMode(state: CareerState, key: DriveModeKey): CareerState {
  if (!state.season) return state;
  const mode = (DRIVE_MODES as any)[key] || DRIVE_MODES.balanced;
  const record: DecisionLog = {
    season: state.season.number,
    phase: "Identidad de manejo",
    title: `Modo ${mode.name}`,
    text: `${mode.text} Queda fijado para toda la carrera.`,
    impact: describeEffect(mode.season, STAT_NAMES, "Temporada ") || "Modo equilibrado",
  };
  const next = applySeasonEffect(
    {
      ...state,
      careerDriveMode: key,
      season: { ...state.season, driveMode: key, driveModeLocked: true, decisions: [...state.season.decisions, record] },
      decisions: [record, ...state.decisions].slice(0, 18),
    },
    mode.season,
  );
  return next;
}

function chooseSeasonMoments(state: CareerState): Moment[] {
  const middlePhase = rnd(1, 3);
  const seasonGames: string[] = [];
  return [0, middlePhase, 4].map((phaseIndex) => pickMomentForPhase(state, phaseIndex, seasonGames));
}

function pickMomentForPhase(state: CareerState, phaseIndex: number, seasonGames: string[]) {
  const phaseEvents = momentBank()[phaseIndex];
  const recentTitles = new Set((state.seenEventTitles || []).slice(0, 28));
  const recentGames = new Set((state.minigameHistory || []).slice(0, 10));
  const counts = state.minigameCounts || {};
  const allGames = phaseEvents.map((event) => event.minigame).filter(Boolean) as string[];
  const lowestUse = allGames.length ? Math.min(...allGames.map((game) => counts[game] || 0)) : 0;
  const selected = phaseEvents
    .map((event) => {
      let score = rnd(0, 6);
      if (event.minigame && (counts[event.minigame] || 0) === lowestUse) score += 14;
      if (event.minigame) score -= Math.min(18, (counts[event.minigame] || 0) * 2);
      if (event.minigame && recentGames.has(event.minigame)) score -= 14;
      if (event.minigame && seasonGames.includes(event.minigame)) score -= 15;
      if (recentTitles.has(event.title)) score -= 18;
      if (!event.minigame && seasonGames.length > 0) score += 3;
      return { event, score };
    })
    .sort((a, b) => b.score - a.score)[0].event;
  if (selected.minigame) seasonGames.push(selected.minigame);
  return selected;
}

export function chooseMoment(state: CareerState, choiceIndex: number): CareerState {
  if (!state.season) return state;
  const moment = state.season.moments[state.season.moment];
  const choice = moment.choices[choiceIndex];
  const mode = (DRIVE_MODES as any)[state.season.driveMode || "balanced"];
  let stats = applyEffect(state.stats, choice.effect) as Stats;
  let next = applySeasonEffect({ ...state, stats }, choice.season);
  const risk = decisionRisk(next, choice);
  const failedRisk = risk > 0 && rnd(1, 100) <= risk;
  if (failedRisk) {
    stats = applyEffect(next.stats, next.season?.driveMode === "attack" ? { reputation: -4, focus: -3 } : { reputation: -3, focus: -2 }) as Stats;
    next = applySeasonEffect({ ...next, stats }, { volatility: next.season?.driveMode === "attack" ? 3 : 2, consistency: -2 });
  }
  if (choice.rival) {
    next = {
      ...next,
      rival: {
        ...next.rival,
        heat: clamp(next.rival.heat + choice.rival + (failedRisk ? 3 : 0), 0, 100),
        rating: clamp(next.rival.rating + (choice.rival > 0 ? 1 : 0), 45, 98),
      },
    };
  }
  const record: DecisionLog = {
    season: next.season!.number,
    phase: moment.phase,
    title: choice.label,
    text: `${choice.note || "Decision aplicada."} Modo ${mode.name.toLowerCase()}, riesgo ${risk}%.${failedRisk ? " La apuesta salio mal." : ""}`,
    impact: describeEffect(choice.effect as Record<string, number>, STAT_NAMES) || "Impacto de temporada acumulado",
  };
  const season = {
    ...next.season!,
    decisions: [...next.season!.decisions, record],
    pendingMinigame: moment.minigame || null,
  };
  const nextState = {
    ...next,
    season,
    decisions: [record, ...next.decisions].slice(0, 18),
    seenEventTitles: [moment.title, ...(next.seenEventTitles || []).filter((title) => title !== moment.title)].slice(0, 45),
    minigameHistory: moment.minigame ? [moment.minigame, ...(next.minigameHistory || [])].slice(0, 20) : next.minigameHistory,
  };
  return moment.minigame ? nextState : advanceMoment(nextState);
}

export function resolveMinigame(state: CareerState, bonus: number, detail?: string): CareerState {
  if (!state.season?.pendingMinigame) return state;
  const type = state.season.pendingMinigame;
  const record: DecisionLog = {
    season: state.season.number,
    phase: "Minijuego",
    title: minigameLabel(type),
    text: detail || (bonus > 0 ? "Prueba bien ejecutada." : bonus === 0 ? "Prueba neutra." : "La prueba salio mal."),
    impact: `Resultado temporada ${bonus > 0 ? "+" : ""}${bonus}`,
  };
  return advanceMoment({
    ...state,
    minigameCounts: { ...state.minigameCounts, [type]: (state.minigameCounts[type] || 0) + 1 },
    season: {
      ...state.season,
      minigameScore: state.season.minigameScore + bonus,
      pendingMinigame: null,
      decisions: [...state.season.decisions, record],
    },
    decisions: [record, ...state.decisions].slice(0, 18),
  });
}

export function advanceMoment(state: CareerState): CareerState {
  if (!state.season) return state;
  const nextMoment = state.season.moment + 1;
  if (nextMoment >= state.season.moments.length) return simulateSeason(state);
  return { ...state, season: { ...state.season, moment: nextMoment } };
}

function applySeasonEffect(state: CareerState, effect?: Record<string, number>): CareerState {
  if (!state.season) return state;
  const modifiers = { ...state.season.modifiers };
  Object.entries(effect || {}).forEach(([key, value]) => {
    modifiers[key] = (modifiers[key] || 0) + Math.round(value * 1.35);
  });
  return { ...state, season: { ...state.season, modifiers } };
}

function decisionRisk(state: CareerState, choice: Choice) {
  const base = Math.round((choice.risk || 0) * 100);
  if (!base) return 0;
  const mode = (DRIVE_MODES as any)[state.season?.driveMode || "balanced"] || DRIVE_MODES.balanced;
  const focusRelief = Math.max(0, (state.stats.focus || 50) - 72) * 0.18;
  const categoryHeat = state.category === "F1" ? 4 : state.category === "F2" ? 2 : 0;
  const phaseHeat = state.season?.moments?.[state.season.moment]?.phase === "Final de temporada" ? 4 : 0;
  return clamp(Math.round(base * mode.risk + categoryHeat + phaseHeat - focusRelief), 4, 72);
}

function simulateSeason(state: CareerState): CareerState {
  if (!state.season) return state;
  const season = state.season;
  const mods = season.modifiers;
  const driveMode = (DRIVE_MODES as any)[season.driveMode || "balanced"] || DRIVE_MODES.balanced;
  const car = season.team.power + (mods.carBoost || 0);
  const driver = avg(state.stats);
  const pressureDrag = Math.max(0, mods.pressure || 0) * 0.85 + (state.rival.heat > 65 ? 1.5 : 0);
  const volatility = Math.max(0, mods.volatility || 0);
  const controlRating = ((state.stats.focus || 50) + (state.stats.racecraft || 50) + (state.stats.tyre || 50)) / 3;
  const volatilitySwing = rnd(Math.round(-volatility * 1.35), Math.round(volatility * 0.72));
  const modeControlDrag = Math.max(0, 84 - controlRating) * Math.max(0, -driveMode.control) * 0.1;
  const f1AttackTierDrag = state.category === "F1" && season.driveMode === "attack" ? season.team.tier === "top" ? 0.8 : season.team.tier === "mid" ? 2.6 : 4.2 : 0;
  const attackReliabilityDrag = season.driveMode === "attack" ? 1.45 + volatility * 0.34 + Math.max(0, 90 - controlRating) * 0.08 + f1AttackTierDrag : 0;
  const safeCeilingDrag = season.driveMode === "safe" ? 1.5 + Math.max(0, car - 88) * 0.08 : 0;
  const baseLuck = rnd(-12, 10);
  const consistencyRelief = baseLuck < 0 ? Math.min(Math.abs(baseLuck), Math.max(0, mods.consistency || 0) * 0.7) : 0;
  const luck = baseLuck + consistencyRelief + volatilitySwing;
  const form = (mods.setup || 0) * 0.72 + (mods.qualy || 0) * 0.72 + (mods.race || 0) * 0.78 + (mods.tyreCare || 0) * 0.62 + season.minigameScore * 0.68 + (driveMode.ceiling || 0);
  const eliteDriverBonus = Math.max(0, driver - 84) * 1.05 + Math.max(0, state.stats.racecraft - 88) * 0.26 + Math.max(0, state.stats.technical - 88) * 0.16;
  const carDrag = Math.max(0, 78 - car) * (state.category === "F1" ? 0.22 : 0.1);
  const driverScore = driver * 0.72 + form + eliteDriverBonus - pressureDrag - attackReliabilityDrag - modeControlDrag - safeCeilingDrag;
  const carExpectation = car + (state.category === "F1" ? 3 : 0);
  const score = driver * 0.58 + car * 0.24 + state.stats.focus * 0.08 + form + eliteDriverBonus + luck - pressureDrag - carDrag - attackReliabilityDrag - modeControlDrag - safeCeilingDrag;
  const overperformance = Math.round(score - carExpectation);
  const f1CarDeficit = state.category === "F1" ? Math.max(0, 90 - car) : 0;
  const f1RaceTax = state.category === "F1" && season.team.tier !== "top" ? season.team.tier === "mid" ? 4 : 8 : 0;
  const f1TitleTax = state.category === "F1" && season.team.tier !== "top" ? season.team.tier === "mid" ? 8 : 15 : 0;
  const winLine = state.category === "F1" ? 91 + f1CarDeficit * 0.38 + f1RaceTax * 0.42 : state.category === "F2" ? 83 : 80;
  const podiumLine = state.category === "F1" ? 78 + f1CarDeficit * 0.26 + f1RaceTax * 0.25 : state.category === "F2" ? 70 : 66;
  const attackIncidentChance = season.driveMode === "attack" ? clamp(Math.round(5 + volatility * 1.6 + f1AttackTierDrag * 1.8 - Math.max(0, controlRating - 82) * 0.32), 3, 32) : 0;
  const attackIncident = attackIncidentChance > 0 && rnd(1, 100) <= attackIncidentChance;
  let wins = Math.max(0, Math.floor((score - winLine) / 7) + (score > winLine + 2 && rnd(0, 100) > 48 ? 1 : 0));
  let podiums = Math.max(wins, Math.floor((score - podiumLine) / 6) + (score > podiumLine + 2 && rnd(0, 100) > 58 ? 1 : 0));
  let points = Math.max(0, Math.round((score - 49) * (state.category === "F1" ? 5.35 : 3.35)));
  if (attackIncident) {
    wins = Math.max(0, wins - 1);
    podiums = Math.max(wins, podiums - rnd(1, 2));
    points = Math.max(0, Math.round(points * (state.category === "F1" ? 0.64 : 0.72)));
  }
  if (state.category === "F1" && season.team.tier !== "top") {
    const tierFactor = season.team.tier === "mid" ? 0.78 : 0.58;
    const overBonus = Math.max(0, overperformance) * (season.team.tier === "mid" ? 2.2 : 1.4);
    points = Math.max(0, Math.round(points * tierFactor + overBonus));
  }
  const titleLine = state.category === "F1" ? 106 + f1CarDeficit * 0.72 + f1TitleTax : state.category === "F2" ? 92 : 89;
  const title = !attackIncident && score + wins * 1.55 + podiums * 0.55 + rnd(-6, 6) > titleLine ? 1 : 0;
  const poles = Math.max(0, Math.floor((state.stats.pace + (mods.qualy || 0) * 0.8 + season.minigameScore * 0.4 - 66) / 15));
  const licenseGain = state.category === "F3" ? Math.floor(points / 22) + title * 16 + (podiums >= 4 ? 2 : 0) : state.category === "F2" ? Math.floor(points / 18) + title * 22 + (podiums >= 5 ? 4 : 0) : 0;
  const trophies = awardSeasonTrophies(state, { season: season.number, category: season.category, team: season.team.name, points, wins, podiums, poles, title, score, overperformance, categoryYear: (state.categorySeasons[season.category] || 0) + 1, minigameScore: season.minigameScore });
  const resultLog: DecisionLog = {
    season: season.number,
    phase: "Resultado",
    title: `${season.team.name} - ${points} pts`,
    text: `${wins} victorias, ${podiums} podios, ${poles} poles${title ? ", campeon" : ""}${attackIncident ? ". Incidente por exceso de ataque" : ""}.`,
    impact: `Piloto ${Math.round(driverScore)} vs auto ${Math.round(carExpectation)} (${overperformance >= 0 ? "+" : ""}${overperformance}) - Superlicencia +${licenseGain}${attackIncident ? " - Agresivo penalizado" : ""}${trophies.length ? ` - Trofeos +${trophies.length}` : ""}`,
  };
  let next: CareerState = {
    ...state,
    wins: state.wins + wins,
    podiums: state.podiums + podiums,
    points: state.points + points,
    poles: state.poles + poles,
    titles: state.titles + title,
    license: state.license + licenseGain,
    money: state.money + Math.round((points + podiums * 8 + wins * 18) * (state.category === "F1" ? 12000 : 1800)),
    seasons: state.seasons + 1,
    age: state.age + 1,
    categorySeasons: { ...state.categorySeasons, [state.category]: (state.categorySeasons[state.category] || 0) + 1 },
    rival: { ...state.rival, rating: clamp(state.rival.rating + rnd(0, 2) + (state.rival.heat > 60 ? 1 : 0), 48, 96), category: state.category },
    stats: developDriver(state.stats, { wins, podiums, poles, title, score, overperformance, minigameScore: season.minigameScore }, season.driveMode),
    trajectory: [{
      season: season.number,
      age: state.age + 1,
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
      decisions: [...season.decisions.map((item) => `${item.phase}: ${item.title}`), ...(attackIncident ? ["Incidente: modo agresivo paso factura"] : [])],
    }, ...state.trajectory],
    trophies: [...state.trophies, ...trophies],
    pendingCelebrations: [...state.pendingCelebrations, ...trophies.filter((trophy) => trophy.type === "title" || trophy.type === "constructor")],
    decisions: [resultLog, ...state.decisions].slice(0, 18),
    season: null,
  };
  next = maybePromote(next);
  return shouldRetire(next) ? retireCareer(next) : next;
}

export function shouldRetire(state: CareerState): boolean {
  return Boolean(state.retired || state.age >= 36 || state.categorySeasons.F1 >= 15 || state.seasons >= 20);
}

export function retireCareer(state: CareerState): CareerState {
  if (state.retired && !state.season) return state;
  const record: DecisionLog = {
    season: state.seasons,
    phase: "Retiro",
    title: "Carta de legado",
    text: `La carrera de ${state.name} queda cerrada con ${state.points} puntos, ${state.wins} victorias y ${state.titles} titulos.`,
    impact: `Legado ${legacyScore(state)} - ${legacyVerdict(state)}`,
  };
  return {
    ...state,
    retired: true,
    season: null,
    team: state.team,
    marketContext: null,
    decisions: [record, ...state.decisions.filter((item) => item.phase !== "Retiro")].slice(0, 18),
  };
}

export function legacyScore(state: CareerState) {
  return Math.round(state.points + state.wins * 28 + state.podiums * 9 + state.titles * 160 + state.license * 3);
}

export function legacyVerdict(state: CareerState) {
  const score = legacyScore(state);
  if (score > 1700) return "Leyenda mundial";
  if (score > 1050) return "Ganador de epoca";
  if (score > 620) return "Piloto de elite";
  if (score > 260) return "Profesional respetado";
  return "Talento que dejo historias";
}

function developDriver(stats: Stats, result: { wins: number; podiums: number; poles: number; title: number; score: number; overperformance: number; minigameScore: number }, mode: DriveModeKey): Stats {
  let gains: Partial<Stats> = {};
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
  if (mode === "attack") gains = { ...gains, tyre: result.title ? 0 : -1, focus: result.overperformance >= 8 ? 0 : -1, reputation: result.wins ? 1 : -1 };
  if (mode === "safe") gains = { ...gains, tyre: 1, focus: 1, pace: result.wins ? 0 : -1, market: result.title ? 1 : -1 };
  if (mode === "balanced") gains = { ...gains, technical: (gains.technical || 0) + 1, focus: result.overperformance >= 0 ? (gains.focus || 0) + 1 : gains.focus };
  return applyEffect(stats, gains) as Stats;
}

function awardSeasonTrophies(state: CareerState, result: any): Trophy[] {
  const trophies: Trophy[] = [];
  if (result.title) trophies.push({ type: "title", label: `Campeon ${result.category}`, season: result.season, team: result.team });
  if (result.categoryYear === 1 && result.score >= (result.category === "F1" ? 82 : 78)) trophies.push({ type: "rookie", label: `Rookie destacado ${result.category}`, season: result.season, team: result.team });
  if (result.podiums > 0 && !state.milestones.firstPodium) trophies.push({ type: "firstPodium", label: "Primer podio", season: result.season, team: result.team });
  if (result.wins > 0 && !state.milestones.firstWin) trophies.push({ type: "firstWin", label: "Primera victoria", season: result.season, team: result.team });
  if (result.poles > 0 && result.score >= 88) trophies.push({ type: "pole", label: `${result.poles} poles destacadas`, season: result.season, team: result.team });
  if (result.podiums > 0) trophies.push({ type: "podium", label: `${result.podiums} podios`, season: result.season, team: result.team });
  if (result.minigameScore >= 28 || result.wins >= 3) trophies.push({ type: "sprint", label: "Sprint/ritmo destacado", season: result.season, team: result.team });
  if (result.score >= 94 && (result.overperformance >= 9 || (result.wins === 0 && result.podiums > 1))) trophies.push({ type: "overtake", label: result.overperformance >= 9 ? "Remontada de la temporada" : "Adelantada de la temporada", season: result.season, team: result.team });
  if (result.points >= (result.category === "F1" ? 260 : 155) || result.title) trophies.push({ type: "constructor", label: "Aporte a constructores", season: result.season, team: result.team });
  return trophies;
}

function maybePromote(state: CareerState): CareerState {
  const recent = state.trajectory?.[0];
  const recentCategory = (state.trajectory || []).filter((item) => item.category === state.category).slice(0, 3);
  const categoryScoreAvg = recentCategory.length ? Math.round(recentCategory.reduce((sum, item) => sum + item.score, 0) / recentCategory.length) : 0;
  const categoryPoints = recentCategory.reduce((sum, item) => sum + item.points, 0);
  const recentOver = recent?.overperformance || 0;
  const strongF3 = recent && (recent.title || recent.score >= 84 || recent.points >= 132 || recentOver >= 10);
  const strongF2 = recent && (recent.title || recent.score >= 86 || recent.points >= 138 || (recent.podiums >= 4 && recentOver >= 4));
  const f3ReadyByTime = state.category === "F3" && ((state.categorySeasons.F3 >= 2 && (state.license >= 16 || avg(state.stats) >= 68 || categoryScoreAvg >= 70)) || (state.categorySeasons.F3 >= 3 && (state.license >= 10 || avg(state.stats) >= 62)));
  const f2ReadyByBodyOfWork = state.category === "F2" && state.categorySeasons.F2 >= 2 && state.license >= 34 && avg(state.stats) >= 76 && (categoryScoreAvg >= 76 || categoryPoints >= 225 || recentCategory.reduce((sum, item) => sum + item.wins, 0) >= 3 || recentCategory.reduce((sum, item) => sum + item.podiums, 0) >= 9);
  const f2ReadyByTime = state.category === "F2" && ((state.categorySeasons.F2 >= 3 && state.license >= 38 && avg(state.stats) >= 72) || (state.categorySeasons.F2 >= 4 && state.license >= 30 && avg(state.stats) >= 68) || (state.categorySeasons.F2 >= 5 && avg(state.stats) >= 64));
  const f2LongStayExit = state.category === "F2" && state.categorySeasons.F2 >= 5 && avg(state.stats) >= 62;
  if (state.category === "F3" && ((state.categorySeasons.F3 >= 1 && state.license >= 18 && strongF3) || f3ReadyByTime)) {
    return promoteTo(state, "F2", "Ascenso", "Llamado de F2", "Los equipos de F2 preguntan por tu entorno.", "Nueva categoria desbloqueada");
  }
  if (state.category === "F2" && state.categorySeasons.F2 >= 1 && (state.license >= 34 || state.categorySeasons.F2 >= 5) && (strongF2 || f2ReadyByBodyOfWork || f2ReadyByTime || f2LongStayExit) && (avg(state.stats) >= 68 || f2LongStayExit) && (state.categorySeasons.F2 >= 2 || (recent?.title && recent?.score >= 89))) {
    return promoteTo(state, "F1", "Superlicencia", "Asiento de F1 disponible", "La FIA aprueba los puntos y el mercado se abre.", "Formula 1 desbloqueada");
  }
  if (state.team && state.seasons % 2 === 0 && Math.random() < 0.55) return { ...state, marketContext: { category: state.category, currentTeam: state.team, season: state.seasons }, team: null };
  return state;
}

function promoteTo(state: CareerState, category: "F2" | "F1", phase: string, title: string, text: string, impact: string): CareerState {
  const record = { season: state.seasons, phase, title, text, impact };
  return {
    ...state,
    category,
    team: null,
    marketContext: null,
    rival: { ...state.rival, category, team: null },
    categorySeasons: { ...state.categorySeasons, [category]: state.categorySeasons[category] || 0 },
    decisions: [record, ...state.decisions].slice(0, 18),
  };
}

export function getOffers(state: CareerState, first = false): Team[] {
  const value = driverValue(state);
  const renewalInfo = renewalEvaluation(state, value, first);
  const renewal = renewalInfo.team;
  let pool = teamObjects(state.category).filter((team) => teamEligible(state, team, value, first)).filter((team) => !renewal || team.name !== renewal.name);
  if (pool.length < 3) pool = teamObjects(state.category).sort((a, b) => a.power - b.power).slice(0, state.category === "F1" ? 5 : 7).filter((team) => !renewal || team.name !== renewal.name);
  const transferSlots = renewal ? 2 : 3;
  const transferTeams = pool.sort((a, b) => Math.abs(a.power - value) - Math.abs(b.power - value) + rnd(-4, 4)).slice(0, transferSlots).map((team) => ({ ...team, pressure: rnd(45, 90) }) as Team);
  return renewal ? [renewal, ...transferTeams] : transferTeams;
}

export function renewalEvaluation(state: CareerState, value = driverValue(state), first = false) {
  if (first) return { team: null as Team | null, status: "none", message: "Primer contrato: todavia no existe una renovacion posible." };
  const recent = state.trajectory?.[0];
  const contextTeam = state.marketContext?.category === state.category ? state.marketContext.currentTeam : null;
  const inferredTeam = recent?.category === state.category ? teamObjects(state.category).find((team) => team.name === recent.team) || null : null;
  const current = contextTeam || inferredTeam;
  if (!current || !recent || recent.team !== current.name) {
    return { team: null as Team | null, status: "none", message: "No hay equipo actual claro para negociar renovacion." };
  }
  const form = recent.score + Math.max(0, recent.overperformance || 0) * 1.4 + recent.title * 10 + recent.wins * 2.5 + recent.podiums * 0.9;
  const patience = current.tier === "top" ? 82 : current.tier === "mid" ? 74 : 66;
  const loyalty = state.personality === "Leal" ? 5 : 0;
  const renewalScore = Math.round(form + loyalty + Math.max(0, value - current.power) * 0.45 - Math.max(0, current.power - value) * 0.35);
  const gap = renewalScore - patience;
  if (gap < 0) {
    const reason = recent.overperformance < 0
      ? "el auto esperaba mas rendimiento"
      : current.tier === "top" && !recent.title && recent.wins < 2
        ? "en un equipo top pedian victorias o pelea real por titulo"
        : value < current.power - 4
          ? "tu valor de mercado quedo por debajo del asiento"
          : "la directiva quiere abrir el mercado";
    return {
      team: null as Team | null,
      status: "rejected",
      message: `${current.name} no renueva: ${reason}. Evaluacion ${renewalScore}/${patience}.`,
    };
  }
  return {
    team: current,
    status: "approved",
    message: `${current.name} ofrece renovacion: cumpliste el piso deportivo. Evaluacion ${renewalScore}/${patience}.`,
  };
}

export function signTeam(state: CareerState, team: Team): CareerState {
  const record: DecisionLog = {
    season: state.seasons + 1,
    phase: "Mercado",
    title: state.team?.name === team.name ? "Renovacion" : state.seasons === 0 ? "Primer contrato" : "Fichaje",
    text: `${state.name} firma con ${team.name} en ${state.category}.`,
    impact: `Valor de mercado ${driverValue(state)} - Potencial equipo ${team.power}`,
  };
  return { ...state, team, marketContext: null, decisions: [record, ...state.decisions].slice(0, 18) };
}

function renewalOffer(state: CareerState, value: number, first: boolean): Team | null {
  return renewalEvaluation(state, value, first).team;
}

function teamEligible(state: CareerState, team: Team, value: number, first: boolean) {
  if (first && state.category === "F3") return team.power <= 78;
  if (state.category === "F3") return team.power <= value + 16;
  if (state.category === "F2") return team.power <= value + 12 && (state.categorySeasons.F2 > 0 || team.power < 80);
  const f1Years = state.categorySeasons.F1 || 0;
  if (state.category === "F1" && team.tier === "top") return f1TopEligible(state, team, value, f1Years);
  if (state.category === "F1" && f1Years === 0) return team.tier !== "top" && team.power <= Math.max(82, value + 8);
  if (state.category === "F1" && f1Years < 2) return team.tier !== "top" && team.power <= value + 10;
  return team.power <= value + 8;
}

function f1TopEligible(state: CareerState, team: Team, value: number, f1Years: number) {
  const recent = state.trajectory?.[0];
  const f1Recent = (state.trajectory || []).filter((item) => item.category === "F1").slice(0, 2);
  const hasF1Proof = f1Recent.some((item) => item.title || item.wins >= 2 || item.podiums >= 5 || item.score >= 94);
  const exceptionalF2 = recent?.category === "F2" && recent.title && recent.score >= 94 && state.license >= 55;
  if (f1Years === 0) return exceptionalF2 && value >= team.power - 2;
  if (f1Years < 2) return hasF1Proof && value >= team.power - 4;
  return value >= team.power - 6 && (hasF1Proof || state.titles > 0 || state.wins >= 4);
}

export function driverValue(state: CareerState) {
  const recent = state.trajectory?.[0];
  const resultBoost = recent ? recent.score * 0.18 + recent.wins * 3 + recent.podiums * 0.8 + recent.title * 10 + Math.max(0, recent.overperformance || 0) * 0.6 : 0;
  const licenseBoost = state.category === "F1" ? 0 : Math.min(10, state.license / 5);
  const f1Penalty = state.category === "F1" ? Math.max(0, 8 - state.categorySeasons.F1 * 3) : 0;
  return Math.round(avg(state.stats) * 0.66 + state.stats.reputation * 0.12 + state.stats.market * 0.08 + resultBoost + licenseBoost - f1Penalty);
}

export function f1InterestScore(state: CareerState) {
  if (state.category === "F1") return 100;
  const recent = state.trajectory?.[0];
  const recentF2 = (state.trajectory || []).filter((item) => item.category === "F2").slice(0, 3);
  const f2Avg = recentF2.length ? recentF2.reduce((sum, item) => sum + item.score, 0) / recentF2.length : 0;
  const base = avg(state.stats) * 0.42 + state.license * 0.72 + state.stats.reputation * 0.18 + state.stats.market * 0.12;
  const recentBoost = recent && recent.category === "F2" ? recent.score * 0.18 + recent.wins * 4 + recent.podiums * 1.3 + recent.title * 18 : 0;
  const bodyBoost = f2Avg * 0.22 + Math.min(18, recentF2.reduce((sum, item) => sum + item.points, 0) / 22);
  return clamp(Math.round(base + recentBoost + bodyBoost - 28), 0, 100);
}

export function trophyCounts(state: CareerState): Partial<Record<TrophyType, number>> {
  return (state.trophies || []).reduce<Partial<Record<TrophyType, number>>>((acc, trophy) => {
    acc[trophy.type] = (acc[trophy.type] || 0) + 1;
    return acc;
  }, Object.create(null));
}

export function minigameLabel(type: string) {
  const labels: Record<string, string> = {
    lights: "Largada",
    apex: "Apex",
    pit: "Pit stop",
    drs: "Defensa DRS",
    ers: "ERS",
    tyres: "Neumaticos",
    focus: "Foco",
    sector: "Sectores",
    walls: "Muros",
    radio: "Radio",
    duel: "Duelo",
    brake: "Frenada",
    corner: "Curvas",
    boxcrew: "Box crew",
  };
  return labels[type] || type;
}
