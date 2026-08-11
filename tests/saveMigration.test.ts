import assert from "node:assert/strict";
import { test } from "node:test";
import { createCareer } from "../src/engine/career";
import { migrateCareerSave, SAVE_VERSION, serializeCareerSave } from "../src/state/saveMigration";

test("migracion agrega saveVersion y colecciones nuevas", () => {
  const legacy = {
    name: "Legacy",
    nationality: "Argentina",
    style: "Ritmo de carrera",
    personality: "Frio",
    age: 16,
    category: "F3",
    team: null,
    stats: { pace: 60, racecraft: 60, tyre: 60, technical: 60, focus: 60, market: 50, reputation: 50 },
    license: 0,
    seasons: 0,
    wins: 0,
    podiums: 0,
    poles: 0,
    titles: 0,
    points: 0,
    money: 0,
    rival: { name: "Rival", heat: 20, rating: 60, category: "F3" },
  };

  const migrated = migrateCareerSave(legacy);

  assert.equal(migrated?.saveVersion, SAVE_VERSION);
  assert.deepEqual(migrated?.categorySeasons, { F3: 0, F2: 0, F1: 0 });
  assert.deepEqual(migrated?.trophies, []);
  assert.deepEqual(migrated?.minigameCounts, {});
});

test("serializacion mantiene version actual", () => {
  const career = createCareer({
    name: "Save",
    nationality: "Argentina",
    styleId: "race",
    personalityId: "calm",
    points: { pace: 3, racecraft: 3, tyre: 3, technical: 3, focus: 6 },
  });

  const raw = serializeCareerSave(career);
  assert.equal(JSON.parse(raw).saveVersion, SAVE_VERSION);
});
