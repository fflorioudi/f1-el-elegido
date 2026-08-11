import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
import { test } from "node:test";

const root = process.cwd();

async function exists(path) {
  await access(join(root, path));
}

test("assets principales disponibles", async () => {
  await Promise.all([
    exists("assets/brand-helmet.png"),
    exists("public/assets/brand-helmet.png"),
    exists("assets/paddock-hero.jpg"),
    exists("public/assets/paddock-hero.jpg"),
    exists("assets/garage-detail.jpg"),
    exists("public/assets/garage-detail.jpg"),
    exists("assets/trophies/title.png"),
    exists("public/assets/trophies/title.png"),
    exists("assets/trophies/constructor.png"),
    exists("public/assets/trophies/constructor.png"),
    exists("assets/trophies/podium.png"),
    exists("public/assets/trophies/podium.png"),
    exists("assets/trophies/pole.png"),
    exists("public/assets/trophies/pole.png"),
    exists("assets/trophies/sprint.png"),
    exists("public/assets/trophies/sprint.png"),
    exists("assets/trophies/honor.png"),
    exists("public/assets/trophies/honor.png"),
  ]);
});

test("logos F1 locales disponibles", async () => {
  const logos = [
    "mercedes.png",
    "ferrari.png",
    "red-bull-racing.png",
    "mclaren.png",
    "aston-martin.png",
    "williams.png",
    "alpine.png",
    "haas-f1-team.png",
    "audi.png",
    "racing-bulls.png",
    "cadillac.png",
  ];

  await Promise.all([
    ...logos.map((logo) => exists(`assets/teams/${logo}`)),
    ...logos.map((logo) => exists(`public/assets/teams/${logo}`)),
  ]);
});

test("entrada principal usa React/Vite y conserva legado", async () => {
  const index = await readFile(join(root, "index.html"), "utf8");
  const legacy = await readFile(join(root, "legacy-index.html"), "utf8");

  assert.match(index, /src\/main\.tsx/);
  assert.match(legacy, /game\.js/);
});
