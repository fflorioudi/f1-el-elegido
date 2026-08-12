import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { momentBank } from "../src/data/catalog";

describe("banco de eventos", () => {
  test("mantiene cinco fases de temporada con volumen alto", () => {
    const phases = momentBank();
    const events = phases.flat();
    const choices = events.flatMap((event) => event.choices);

    assert.equal(phases.length, 5);
    assert.ok(events.length >= 200, `eventos detectados ${events.length}`);
    assert.ok(choices.length >= 500, `opciones detectadas ${choices.length}`);
  });

  test("mantiene variedad de minijuegos migrados", () => {
    const games = new Set(momentBank().flat().map((event) => event.minigame).filter(Boolean));
    const expected = ["lights", "apex", "pit", "drs", "ers", "tyres", "focus", "sector", "walls", "radio", "duel", "brake", "corner", "boxcrew"];

    for (const game of expected) assert.ok(games.has(game), `falta minijuego ${game}`);
  });

  test("cada fase tiene eventos con dos y tres opciones", () => {
    for (const [index, phase] of momentBank().entries()) {
      const sizes = new Set(phase.map((event) => event.choices.length));
      assert.ok(sizes.has(2), `fase ${index} no tiene eventos de 2 opciones`);
      assert.ok(sizes.has(3), `fase ${index} no tiene eventos de 3 opciones`);
    }
  });
});
