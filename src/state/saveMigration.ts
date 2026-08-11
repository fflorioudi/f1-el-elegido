import type { CareerState } from "../types/game";

export const SAVE_KEY = "el-elegido-react-save";
export const SAVE_VERSION = 1;

export function readCareerSave(raw: string | null): CareerState | null {
  if (!raw) return null;
  try {
    return migrateCareerSave(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function serializeCareerSave(career: CareerState) {
  return JSON.stringify({ ...career, saveVersion: SAVE_VERSION });
}

export function migrateCareerSave(value: unknown): CareerState | null {
  if (!value || typeof value !== "object") return null;
  const career = value as Partial<CareerState>;

  return {
    ...(career as CareerState),
    saveVersion: SAVE_VERSION,
    categorySeasons: {
      F3: career.categorySeasons?.F3 || 0,
      F2: career.categorySeasons?.F2 || 0,
      F1: career.categorySeasons?.F1 || 0,
    },
    trophies: career.trophies || [],
    milestones: career.milestones || {},
    trajectory: career.trajectory || [],
    decisions: career.decisions || [],
    seenEventTitles: career.seenEventTitles || [],
    minigameHistory: career.minigameHistory || [],
    minigameCounts: career.minigameCounts || {},
    pendingCelebrations: career.pendingCelebrations || [],
    marketContext: career.marketContext || null,
    careerDriveMode: career.careerDriveMode || null,
    retired: Boolean(career.retired),
    season: career.season || null,
  };
}
