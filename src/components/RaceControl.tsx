import type { CareerState } from "../types/game";
import type { CareerActions } from "./types";
import { DriverCard, Panel, Timeline } from "./ui";
import { MinigamePanel } from "./Minigames";
import { ChoiceButton, DriveModePanel, Market, RetirementPanel } from "./race/Panels";

export function RaceControl({ career, actions }: { career: CareerState; actions: CareerActions }) {
  if (career.retired) return <RetirementPanel career={career} onReset={actions.reset} />;
  if (!career.team) return <Market career={career} onChoose={actions.chooseTeam} />;
  if (!career.season) {
    return (
      <Panel stage="Temporada" title="Preparando temporada">
        <p>Armando calendario...</p>
      </Panel>
    );
  }
  if (!career.season.driveModeLocked) return <DriveModePanel career={career} onLock={actions.lockMode} />;
  if (career.season.pendingMinigame) return <MinigamePanel career={career} type={career.season.pendingMinigame} onResolve={actions.minigame} />;

  const moment = career.season.moments[career.season.moment];
  return (
    <>
      <div className="panel-head">
        <p className="eyebrow">
          {career.category} - Temporada {career.season.number} - Momento {career.season.moment + 1}/{career.season.moments.length}
        </p>
        <h2>{moment.title}</h2>
      </div>
      <div className="main-card">
        <DriverCard career={career} subtitle={moment.phase} text={moment.text} />
      </div>
      <div className="choice-grid">
        {moment.choices.map((choice, index) => (
          <ChoiceButton key={`${choice.label}-${index}`} choice={choice} action={() => actions.choose(index)} />
        ))}
      </div>
      <Timeline career={career} />
    </>
  );
}
