import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { teamObjects } from "../src/data/catalog";
import { chooseMoment, createCareer, getOffers, lockDriveMode, renewalEvaluation, resolveMinigame, signTeam, startSeason } from "../src/engine/career";
import type { CareerState, DriveModeKey, SetupInput, Team } from "../src/types/game";

const STRONG_DRIVER: SetupInput = {
  name: "Test Driver",
  nationality: "Argentina",
  styleId: "race",
  personalityId: "calm",
  points: { pace: 4, racecraft: 4, tyre: 4, technical: 3, focus: 3 },
};

describe("balance de categorias y mercado", () => {
  test("F1 conserva tiers pedidos: top, medio y bajo", () => {
    const teams = Object.fromEntries(teamObjects("F1").map((team) => [team.name, team.tier]));

    assert.equal(teams.Cadillac, "low");
    assert.equal(teams["Aston Martin"], "low");
    assert.equal(teams.Williams, "low");
    assert.equal(teams.Alpine, "mid");
    assert.equal(teams["Haas F1 Team"], "mid");
    assert.equal(teams.Audi, "mid");
    assert.equal(teams["Racing Bulls"], "mid");
    assert.equal(teams.Mercedes, "top");
    assert.equal(teams.Ferrari, "top");
    assert.equal(teams.McLaren, "top");
    assert.equal(teams["Red Bull Racing"], "top");
  });

  test("primer mercado F3 no ofrece equipos absurdamente altos", () => {
    const career = createCareer(STRONG_DRIVER);
    const offers = getOffers(career, true);

    assert.equal(offers.length, 3);
    assert.ok(offers.every((team) => team.power <= 78));
  });

  test("crear carrera con 18 puntos genera piloto competitivo de academia", () => {
    const career = createCareer(STRONG_DRIVER);
    const baseAverage = Math.round((career.stats.pace + career.stats.racecraft + career.stats.tyre + career.stats.technical + career.stats.focus) / 5);

    assert.ok(baseAverage >= 60, `media inicial ${baseAverage}`);
    assert.equal(career.category, "F3");
    assert.equal(career.team, null);
  });

  test("un piloto fuerte no queda atrapado demasiadas temporadas antes de F1", () => {
    withSeed(12, () => {
      let career = createCareer(STRONG_DRIVER);
      career = signTeam(career, lowestTeam(career));

      for (let guard = 0; guard < 8 && career.category !== "F1"; guard += 1) {
        career = playSeason(career, "balanced", 8);
        if (!career.team) career = signTeam(career, bestOffer(career));
      }

      assert.equal(career.category, "F1");
      assert.ok(career.categorySeasons.F3 <= 3, `F3 duro ${career.categorySeasons.F3}`);
      assert.ok(career.categorySeasons.F2 <= 5, `F2 duro ${career.categorySeasons.F2}`);
    });
  });

  test("F1 no ofrece top en el debut salvo caso excepcional", () => {
    let career = createCareer(STRONG_DRIVER);
    career = {
      ...career,
      category: "F1",
      license: 38,
      categorySeasons: { F3: 2, F2: 3, F1: 0 },
      stats: { ...career.stats, reputation: 58, market: 55 },
    };

    const offers = getOffers(career, false);
    assert.ok(offers.every((team) => team.tier !== "top"));
  });

  test("mercado muestra renovacion cuando el rendimiento sostiene el asiento", () => {
    let career = createCareer(STRONG_DRIVER);
    const team = teamObjects("F1").find((item) => item.name === "Alpine")!;
    career = {
      ...career,
      category: "F1",
      team: null,
      seasons: 6,
      categorySeasons: { F3: 2, F2: 2, F1: 2 },
      marketContext: { category: "F1", currentTeam: team, season: 6 },
      trajectory: [{
        season: 6,
        age: 22,
        category: "F1",
        team: team.name,
        teamCode: team.code,
        teamColor: team.color,
        score: 91,
        driverScore: 90,
        carExpectation: 84,
        overperformance: 7,
        points: 210,
        wins: 1,
        podiums: 5,
        poles: 1,
        title: 0,
        licenseGain: 0,
        decisions: [],
      }],
    };

    const renewal = renewalEvaluation(career);
    const offers = getOffers(career, false);

    assert.equal(renewal.status, "approved");
    assert.equal(offers[0].name, team.name);
  });
});

function playSeason(career: CareerState, mode: DriveModeKey, minigameBonus: number) {
  let next = startSeason(career);
  if (!next.season?.driveModeLocked) next = lockDriveMode(next, mode);

  while (next.season) {
    const moment = next.season.moments[next.season.moment];
    const choiceIndex = bestChoiceIndex(moment.choices);
    next = chooseMoment(next, choiceIndex);
    if (next.season?.pendingMinigame) next = resolveMinigame(next, minigameBonus);
  }

  return next;
}

function bestChoiceIndex(choices: Array<{ effect?: Record<string, number>; season?: Record<string, number>; risk?: number }>) {
  let best = 0;
  let bestScore = -Infinity;
  choices.forEach((choice, index) => {
    const statScore = Object.values(choice.effect || {}).reduce((sum, value) => sum + value, 0);
    const seasonScore = Object.values(choice.season || {}).reduce((sum, value) => sum + value, 0);
    const riskPenalty = (choice.risk || 0) * 6;
    const score = statScore * 1.4 + seasonScore - riskPenalty;
    if (score > bestScore) {
      best = index;
      bestScore = score;
    }
  });
  return best;
}

function lowestTeam(career: CareerState): Team {
  return getOffers(career, true).sort((a, b) => a.power - b.power)[0];
}

function bestOffer(career: CareerState): Team {
  return getOffers(career, false).sort((a, b) => b.power - a.power)[0];
}

function withSeed(seed: number, run: () => void) {
  const original = Math.random;
  let value = seed;
  Math.random = () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
  try {
    run();
  } finally {
    Math.random = original;
  }
}
