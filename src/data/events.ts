import { MOMENT_BANK } from "./events/base";
import "./eventBank";
import type { Moment } from "../types/game";

export function momentBank() {
  return MOMENT_BANK as Moment[][];
}
