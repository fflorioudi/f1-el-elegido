import assert from "node:assert/strict";
import { describe, test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createCareer, getOffers, signTeam, startSeason } from "../src/engine/career";
import { MinigamePanel } from "../src/components/Minigames";
import { RaceControl } from "../src/components/RaceControl";
import { Sidebar } from "../src/components/Sidebar";
import type { CareerActions } from "../src/components/types";
import type { CareerState } from "../src/types/game";

(globalThis as any).React = React;

const input = {
  name: "UI Tester",
  nationality: "Argentina",
  styleId: "race",
  personalityId: "calm",
  points: { pace: 4, racecraft: 4, tyre: 4, technical: 3, focus: 3 },
};

describe("interfaz migrada", () => {
  test("la sidebar no expone importar/exportar JSON al jugador", () => {
    const career = withTeam();
    const html = renderToStaticMarkup(React.createElement(Sidebar, { career, onSave: noop, onReset: noop }));

    assert.match(html, /Guardar/);
    assert.match(html, /Nueva carrera/);
    assert.doesNotMatch(html, /JSON/);
    assert.doesNotMatch(html, /Importar/);
    assert.doesNotMatch(html, /Exportar/);
  });

  test("una carrera retirada muestra carta de legado aunque traiga season activa", () => {
    const career = {
      ...startSeason(withTeam()),
      retired: true,
      trophies: [
        { type: "title", label: "Campeon F1", season: 3, team: "Ferrari" },
        { type: "constructor", label: "Campeon de constructores", season: 3, team: "Ferrari" },
        { type: "podium", label: "4 podios", season: 3, team: "Ferrari" },
      ],
    } as CareerState;
    const html = renderToStaticMarkup(React.createElement(RaceControl, { career, actions }));

    assert.match(html, /Carta de legado/);
    assert.match(html, /Vitrina final/);
    assert.match(html, /Ultimas copas grandes/);
    assert.match(html, /Jugar otra carrera/);
    assert.doesNotMatch(html, /Elige tu proximo asiento/);
  });

  test("mercado explica si hay renovacion o por que no renuevan", () => {
    const base = withTeam();
    const currentTeam = base.team!;
    const marketCareer = {
      ...base,
      seasons: 4,
      team: null,
      marketContext: { category: base.category, currentTeam, season: 4 },
      trajectory: [
        {
          season: 4,
          age: 20,
          category: base.category,
          team: currentTeam.name,
          teamCode: currentTeam.code,
          teamColor: currentTeam.color,
          score: 50,
          driverScore: 52,
          carExpectation: 76,
          overperformance: -24,
          points: 4,
          wins: 0,
          podiums: 0,
          poles: 0,
          title: 0,
          licenseGain: 0,
          decisions: [],
        },
      ],
    } as CareerState;
    const html = renderToStaticMarkup(React.createElement(RaceControl, { career: marketCareer, actions }));

    assert.match(html, /Sin renovacion|Renovacion disponible/);
    assert.match(html, /renueva|renovacion/);
  });

  test("sectores mantiene presion visible con timer", () => {
    const career = {
      ...withTeam(),
      season: {
        number: 1,
        category: "F3",
        age: 16,
        team: withTeam().team!,
        moment: 0,
        moments: [],
        modifiers: {},
        minigameScore: 0,
        driveMode: "balanced",
        driveModeLocked: true,
        decisions: [],
        pendingMinigame: "sector",
      },
    } as CareerState;
    const html = renderToStaticMarkup(React.createElement(MinigamePanel, { career, type: "sector", onResolve: noop }));

    assert.match(html, /Sectores/);
    assert.match(html, /Tiempo/);
    assert.match(html, /timer/);
  });

  test("todos los minijuegos migrados renderizan una interfaz propia", () => {
    const games = ["lights", "apex", "pit", "drs", "ers", "tyres", "focus", "sector", "walls", "radio", "duel", "brake", "corner", "boxcrew"];

    for (const game of games) {
      const career = {
        ...withTeam(),
        minigameCounts: {},
        season: {
          number: 1,
          category: "F3",
          age: 16,
          team: withTeam().team!,
          moment: 0,
          moments: [],
          modifiers: {},
          minigameScore: 0,
          driveMode: "balanced",
          driveModeLocked: true,
          decisions: [],
          pendingMinigame: game,
        },
      } as CareerState;
      const html = renderToStaticMarkup(React.createElement(MinigamePanel, { career, type: game, onResolve: noop }));
      assert.match(html, /Minijuego/);
      assert.doesNotMatch(html, /Resultado manual/);
    }
  });
});

function withTeam() {
  const career = createCareer(input);
  return signTeam(career, getOffers(career, true)[0]);
}

const noop = () => undefined;

const actions: CareerActions = {
  start: noop,
  reset: noop,
  save: noop,
  chooseTeam: noop,
  ensureSeason: noop,
  lockMode: noop,
  choose: noop,
  minigame: noop,
  continue: noop,
  dismissCelebration: noop,
  retire: noop,
};
