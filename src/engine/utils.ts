import type { StatKey, Stats } from "../types/game";

export const clamp = (num: number, min: number, max: number) => Math.max(min, Math.min(max, num));

export const rnd = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export function avg(stats: Partial<Stats>) {
  const keys = ["pace", "racecraft", "tyre", "technical", "focus"] as const;
  return Math.round(keys.reduce((sum, key) => sum + (stats[key] ?? 50), 0) / keys.length);
}

export function applyEffect(stats: Partial<Stats>, effect?: Partial<Stats>): Stats {
  const next = { ...stats } as Stats;
  Object.entries(effect || {}).forEach(([key, value]) => {
    const statKey = key as StatKey;
    next[statKey] = clamp((next[statKey] ?? 50) + (value || 0), 20, 99);
  });
  return next;
}

export function describeEffect(effect: Record<string, number> | undefined, labels: Record<string, string>, prefix = "") {
  const entries = Object.entries(effect || {});
  if (!entries.length) return "";
  return entries
    .map(([key, value]) => `${prefix}${labels[key] || key} ${value > 0 ? "+" : ""}${value}`)
    .join(", ");
}
