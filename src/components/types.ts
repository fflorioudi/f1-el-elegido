import type { DriveModeKey, SetupInput, Team } from "../types/game";

export type ViewKey = "race" | "lab" | "telemetry" | "trophies";

export interface CareerActions {
  start(input: SetupInput): void;
  reset(): void;
  save(): void;
  chooseTeam(team: Team): void;
  ensureSeason(): void;
  lockMode(mode: DriveModeKey): void;
  choose(index: number): void;
  minigame(bonus: number, detail?: string): void;
  continue(): void;
  dismissCelebration(): void;
  retire(): void;
}
