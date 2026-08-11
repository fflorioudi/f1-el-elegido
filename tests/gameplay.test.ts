import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { chooseMoment, createCareer, getOffers, lockDriveMode, resolveMinigame, retireCareer, shouldRetire, signTeam, startSeason } from "../src/engine/career";
import type { CareerState, Moment, SetupInput } from "../src/types/game";

const DRIVER: SetupInput = {
  name: "Exploit Tester",
  nationality: "Argentina",
  styleId: "race",
  personalityId: "calm",
  points: { pace: 4, racecraft: 4, tyre: 4, technical: 3, focus: 3 },
};

describe("jugabilidad y exploits", () => {
  test("la carrera no puede extenderse mas alla del retiro", () => {
    withSeed(42, () => {
      let career = createCareer(DRIVER);

      for (let guard = 0; guard < 35 && !career.retired; guard += 1) {
        if (!career.team) career = signTeam(career, bestOffer(career));
        if (!career.season) career = startSeason(career);
        if (career.retired) break;
        if (!career.season?.driveModeLocked) career = lockDriveMode(career, "balanced");

        while (career.season && !career.retired) {
          career = chooseMoment(career, bestChoiceIndex(career.season.moments[career.season.moment].choices));
          if (career.season?.pendingMinigame) career = resolveMinigame(career, 8, "Test perfecto");
        }
      }

      assert.equal(career.retired, true);
      assert.ok(career.seasons <= 20, `la carrera llego a ${career.seasons} temporadas`);
      assert.equal(career.season, null);
    });
  });

  test("una decision sin minijuego avanza y no queda clickeable en el mismo momento", () => {
    const moment: Moment = {
      phase: "Test",
      title: "Decision simple",
      text: "No deberia repetirse.",
      choices: [
        { label: "Elegir", effect: { reputation: 1 }, note: "Una sola vez." },
        { label: "Alternativa", effect: { market: 1 } },
      ],
    };
    const nextMoment: Moment = {
      phase: "Test",
      title: "Siguiente",
      text: "Si llegamos aca, avanzo.",
      choices: [{ label: "Cerrar", effect: { focus: 1 } }],
    };
    let career = signTeam(createCareer(DRIVER), bestOffer(createCareer(DRIVER)));
    career = {
      ...career,
      season: {
        number: 1,
        category: "F3",
        age: 16,
        team: career.team!,
        moment: 0,
        moments: [moment, nextMoment],
        modifiers: {},
        minigameScore: 0,
        driveMode: "balanced",
        driveModeLocked: true,
        decisions: [],
        pendingMinigame: null,
      },
    };

    const after = chooseMoment(career, 0);
    assert.equal(after.season?.moment, 1);
    assert.equal(after.season?.moments[after.season.moment].title, "Siguiente");
    assert.equal(after.decisions.filter((item) => item.title === "Elegir").length, 1);
  });

  test("un save viejo o roto en edad/temporadas de retiro se cierra sin abrir otra temporada", () => {
    let career = signTeam(createCareer(DRIVER), bestOffer(createCareer(DRIVER)));
    career = {
      ...career,
      age: 36,
      seasons: 24,
      category: "F1",
      categorySeasons: { F3: 2, F2: 3, F1: 19 },
    };

    assert.equal(shouldRetire(career), true);
    const retired = retireCareer(career);
    assert.equal(retired.retired, true);
    assert.equal(retired.season, null);
    assert.equal(startSeason(retired).season, null);
  });

  test("la rotacion de minijuegos no abandona tipos ni concentra demasiado", () => {
    const counts: Record<string, number> = {};

    for (let seed = 1; seed <= 35; seed += 1) {
      withSeed(seed, () => {
        let career = createCareer(DRIVER);
        for (let guard = 0; guard < 22 && !career.retired; guard += 1) {
          if (!career.team) career = signTeam(career, bestOffer(career));
          if (!career.season) career = startSeason(career);
          if (career.retired) break;
          if (!career.season?.driveModeLocked) career = lockDriveMode(career, seed % 3 === 0 ? "attack" : seed % 3 === 1 ? "balanced" : "safe");
          while (career.season && !career.retired) {
            career = chooseMoment(career, bestChoiceIndex(career.season.moments[career.season.moment].choices));
            if (career.season?.pendingMinigame) career = resolveMinigame(career, seed % 5 === 0 ? -5 : seed % 2 === 0 ? 8 : 2, "Rotacion test");
          }
        }
        Object.entries(career.minigameCounts).forEach(([game, amount]) => {
          counts[game] = (counts[game] || 0) + amount;
        });
      });
    }

    const amounts = Object.values(counts);
    assert.ok(Object.keys(counts).length >= 12, `solo aparecieron ${Object.keys(counts).length} minijuegos`);
    assert.ok(Math.max(...amounts) / Math.max(1, Math.min(...amounts)) <= 3, JSON.stringify(counts));
  });
});

function bestOffer(career: CareerState) {
  return getOffers(career, career.seasons === 0).sort((a, b) => b.power - a.power)[0];
}

function bestChoiceIndex(choices: Array<{ effect?: Record<string, number>; season?: Record<string, number>; risk?: number }>) {
  let best = 0;
  let bestScore = -Infinity;
  choices.forEach((choice, index) => {
    const statScore = Object.values(choice.effect || {}).reduce((sum, value) => sum + value, 0);
    const seasonScore = Object.values(choice.season || {}).reduce((sum, value) => sum + value, 0);
    const score = statScore * 1.4 + seasonScore - (choice.risk || 0) * 5;
    if (score > bestScore) {
      best = index;
      bestScore = score;
    }
  });
  return best;
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
