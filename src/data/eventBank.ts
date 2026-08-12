import { MOMENT_BANK } from "./events/base";
import { DEEP_EVENT_SEEDS } from "./events/deepSeeds";
import { EXTRA_MOMENTS } from "./events/extra";
import { GENERATED_EVENT_SEEDS } from "./events/generatedSeeds";
import { TWO_OPTION_EVENT_SEEDS } from "./events/twoOptionSeeds";
import type { Choice, Moment } from "../types/game";

export function makeGeneratedEvent(phaseIndex: number, seed: string[], seedIndex: number): Moment {
  const phase = ["Pretemporada", "Primeras fechas", "Sprint", "Mitad de año", "Final de temporada"][phaseIndex];
  const minigames = [
    ["focus", "tyres", "radio", "brake", null],
    ["sector", "walls", "lights", "ers", "brake", "corner", "apex"],
    ["drs", "ers", "duel", "tyres", "corner", "brake", "apex"],
    ["radio", "sector", "focus", "corner", "boxcrew", "apex", null],
    ["pit", "duel", "tyres", "radio", "boxcrew", "brake"]
  ];
  const game = minigames[phaseIndex][seedIndex % minigames[phaseIndex].length];
  const [title, text, ...labels] = seed;
  const statSets = [
    [{ focus: 2 }, { technical: 2 }, { market: 2, focus: -1 }],
    [{ racecraft: 2 }, { focus: 2 }, { pace: 2, reputation: -1 }],
    [{ racecraft: 2, pace: 1 }, { tyre: 2, focus: 1 }, { technical: 2 }],
    [{ technical: 3 }, { reputation: 2 }, { market: 2, focus: 1 }],
    [{ focus: 2, reputation: 1 }, { pace: 2, racecraft: 1 }, { tyre: 2, technical: 1 }]
  ];
  const seasonSets = [
    [{ consistency: 3 }, { setup: 3 }, { pressure: 2, qualy: 1 }],
    [{ race: 3, volatility: 1 }, { consistency: 3 }, { qualy: 3, volatility: 2 }],
    [{ race: 3, volatility: 2 }, { tyreCare: 3, consistency: 1 }, { setup: 2, race: 1 }],
    [{ setup: 3 }, { consistency: 2, pressure: -1 }, { pressure: 2, race: 1 }],
    [{ consistency: 4 }, { race: 4, volatility: 2 }, { setup: 2, tyreCare: 2 }]
  ];
  const choices = labels.map((label, choiceIndex) => ({
    label,
    effect: statSets[phaseIndex][choiceIndex],
    season: seasonSets[phaseIndex][choiceIndex],
    note: choiceIndex === 0 ? "Opcion estable con premio moderado." : choiceIndex === 1 ? "Camino tecnico y consistente." : "Mas techo, mas ruido."
  })) as unknown as Choice[];
  const event: Moment = {
    phase,
    title,
    text,
    rival: seedIndex % 5 === 0,
    minigame: game || undefined,
    choices
  };
  event.choices.forEach((choice, choiceIndex) => {
    if (choiceIndex === 2) choice.risk = 0.22 + phaseIndex * 0.04;
    if (seedIndex % 5 === 0) choice.rival = choiceIndex - 1;
  });
  return event;
}

EXTRA_MOMENTS.forEach((events, index) => {
  MOMENT_BANK[index].push(...events);
});

GENERATED_EVENT_SEEDS.forEach((seeds, phaseIndex) => {
  seeds.forEach((seed, seedIndex) => {
    MOMENT_BANK[phaseIndex].push(makeGeneratedEvent(phaseIndex, seed, seedIndex));
  });
});

TWO_OPTION_EVENT_SEEDS.forEach((seeds, phaseIndex) => {
  seeds.forEach((seed, seedIndex) => {
    MOMENT_BANK[phaseIndex].push(makeGeneratedEvent(phaseIndex, seed, seedIndex + 40));
  });
});

DEEP_EVENT_SEEDS.forEach((seeds, phaseIndex) => {
  seeds.forEach((seed, seedIndex) => {
    MOMENT_BANK[phaseIndex].push(makeGeneratedEvent(phaseIndex, seed, seedIndex + 70));
  });
});
