export type Category = "F3" | "F2" | "F1";
export type TeamTier = "top" | "mid" | "low";
export type DriveModeKey = "safe" | "balanced" | "attack";
export type StatKey = "pace" | "racecraft" | "tyre" | "technical" | "focus" | "market" | "reputation";
export type TrophyType =
  | "title"
  | "constructor"
  | "podium"
  | "pole"
  | "sprint"
  | "honor"
  | "overtake"
  | "firstWin"
  | "firstPodium"
  | "rookie";

export type Stats = Record<StatKey, number>;

export interface Team {
  name: string;
  power: number;
  country: string;
  color: string;
  code: string;
  logo?: string;
  tier: TeamTier;
}

export interface Choice {
  label: string;
  effect?: Partial<Stats>;
  season?: Record<string, number>;
  note?: string;
  risk?: number;
  rival?: number;
}

export interface Moment {
  phase: string;
  title: string;
  text: string;
  minigame?: string;
  rival?: boolean;
  choices: Choice[];
}

export interface Rival {
  name: string;
  heat: number;
  rating: number;
  category: Category;
  team?: Team | null;
}

export interface DecisionLog {
  season: number;
  phase: string;
  title: string;
  text: string;
  impact?: string;
}

export interface SeasonState {
  number: number;
  category: Category;
  age: number;
  team: Team;
  moment: number;
  moments: Moment[];
  modifiers: Record<string, number>;
  minigameScore: number;
  driveMode: DriveModeKey;
  driveModeLocked: boolean;
  decisions: DecisionLog[];
  pendingMinigame?: string | null;
}

export interface Trophy {
  type: TrophyType;
  label: string;
  season: number;
  team: string;
}

export interface TrajectoryItem {
  season: number;
  age: number;
  category: Category;
  team: string;
  teamCode: string;
  teamColor: string;
  score: number;
  driverScore: number;
  carExpectation: number;
  overperformance: number;
  points: number;
  wins: number;
  podiums: number;
  poles: number;
  title: number;
  licenseGain: number;
  decisions: string[];
}

export interface CareerState {
  saveVersion: number;
  name: string;
  nationality: string;
  style: string;
  personality: string;
  age: number;
  category: Category;
  team: Team | null;
  stats: Stats;
  license: number;
  seasons: number;
  wins: number;
  podiums: number;
  poles: number;
  titles: number;
  points: number;
  money: number;
  categorySeasons: Record<Category, number>;
  rival: Rival;
  trophies: Trophy[];
  milestones: Record<string, number>;
  trajectory: TrajectoryItem[];
  decisions: DecisionLog[];
  seenEventTitles: string[];
  minigameHistory: string[];
  minigameCounts: Record<string, number>;
  pendingCelebrations: Trophy[];
  marketContext: { category: Category; currentTeam: Team; season: number } | null;
  careerDriveMode: DriveModeKey | null;
  retired: boolean;
  season: SeasonState | null;
}

export interface SetupInput {
  name: string;
  nationality: string;
  styleId: string;
  personalityId: string;
  points: Record<"pace" | "racecraft" | "tyre" | "technical" | "focus", number>;
}
