import { useEffect, useMemo, useState } from "react";
import type { CareerState, DriveModeKey, SetupInput, Team } from "../types/game";
import { advanceMoment, chooseMoment, createCareer, lockDriveMode, resolveMinigame, retireCareer, signTeam, startSeason } from "../engine/career";
import type { CareerActions, ViewKey } from "../components/types";
import { readCareerSave, SAVE_KEY, serializeCareerSave } from "./saveMigration";

export function useCareer() {
  const [career, setCareer] = useState<CareerState | null>(null);
  const [view, setView] = useState<ViewKey>("race");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setCareer(readCareerSave(localStorage.getItem(SAVE_KEY)));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !hydrated) return;
    if (career) localStorage.setItem(SAVE_KEY, serializeCareerSave(career));
  }, [career, hydrated]);

  const actions = useMemo<CareerActions>(() => ({
    start(input: SetupInput) {
      setCareer(createCareer(input));
      setView("race");
    },
    reset() {
      if (typeof window !== "undefined") {
      localStorage.removeItem(SAVE_KEY);
      }
      setCareer(null);
      setView("race");
    },
    save() {
      if (typeof window === "undefined") return;
      if (career) localStorage.setItem(SAVE_KEY, serializeCareerSave(career));
    },
    chooseTeam(team: Team) {
      setCareer((current) => (current ? signTeam(current, team) : current));
      setView("race");
    },
    ensureSeason() {
      setCareer((current) => (current?.team && !current.season ? startSeason(current) : current));
    },
    lockMode(mode: DriveModeKey) {
      setCareer((current) => (current ? lockDriveMode(current, mode) : current));
    },
    choose(index: number) {
      setCareer((current) => (current ? chooseMoment(current, index) : current));
    },
    minigame(bonus: number, detail?: string) {
      setCareer((current) => (current ? resolveMinigame(current, bonus, detail) : current));
    },
    continue() {
      setCareer((current) => (current ? advanceMoment(current) : current));
    },
    dismissCelebration() {
      setCareer((current) => current ? { ...current, pendingCelebrations: current.pendingCelebrations.slice(1) } : current);
    },
    retire() {
      setCareer((current) => (current ? retireCareer(current) : current));
      setView("race");
    },
  }), [career]);

  return { career, setCareer, view, setView, actions, hydrated };
}
