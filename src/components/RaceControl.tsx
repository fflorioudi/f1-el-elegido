import { useMemo } from "react";
import { DRIVE_MODES, STAT_NAMES, tierName } from "../data/catalog";
import { driverValue, f1InterestScore, getOffers } from "../engine/career";
import { describeEffect } from "../engine/utils";
import type { CareerState, Choice, DriveModeKey, Team } from "../types/game";
import type { CareerActions } from "./types";
import { DriverCard, Panel, TeamBadge, Timeline, promotionHint, teamFitReason } from "./ui";
import { MinigamePanel } from "./Minigames";

export function RaceControl({ career, actions }: { career: CareerState; actions: CareerActions }) {
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

function ChoiceButton({ choice, action }: { choice: Choice; action: () => void }) {
  const seasonText = describeEffect(choice.season, STAT_NAMES, "Temporada ");
  const statText = describeEffect(choice.effect as Record<string, number>, STAT_NAMES);

  return (
    <button className="choice" type="button" onClick={action}>
      <strong>{choice.label}</strong>
      <small>{choice.note || "Decision de carrera."}</small>
      <span className="choice-impact">
        {statText || "Sin cambio directo"}
        {seasonText ? (
          <>
            <br />
            {seasonText}
          </>
        ) : null}
      </span>
    </button>
  );
}

function DriveModePanel({ career, onLock }: { career: CareerState; onLock: (key: DriveModeKey) => void }) {
  return (
    <>
      <div className="panel-head">
        <p className="eyebrow">{career.category} - Temporada {career.season?.number}</p>
        <h2>Elegir identidad de manejo</h2>
      </div>
      <div className="main-card">
        <DriverCard
          career={career}
          subtitle="Plan de temporada"
          text="El estilo queda fijado para toda la carrera. Suma ventajas, pero tambien arrastra costos."
        />
      </div>
      <div className="choice-grid">
        {Object.entries(DRIVE_MODES).map(([key, mode]: any) => (
          <button className="choice drive-choice" type="button" key={key} onClick={() => onLock(key as DriveModeKey)}>
            <strong>{mode.name}</strong>
            <small>{mode.text}</small>
            <span className="choice-impact">{describeEffect(mode.season, STAT_NAMES, "Temporada ") || "Sin cambio de temporada"}</span>
          </button>
        ))}
      </div>
      <Timeline career={career} />
    </>
  );
}

function Market({ career, onChoose }: { career: CareerState; onChoose: (team: Team) => void }) {
  const offers = useMemo(() => getOffers(career, career.seasons === 0), [career]);
  const value = driverValue(career);
  const interest = f1InterestScore(career);

  return (
    <>
      <div className="panel-head">
        <p className="eyebrow">{career.seasons === 0 ? "Contrato inicial" : "Mercado"}</p>
        <h2>{career.seasons === 0 ? "Elige tu primer equipo" : "Elige tu proximo asiento"}</h2>
      </div>
      <div className="main-card">
        <p>
          {career.seasons === 0
            ? "Tres estructuras miran tu talento. Cada asiento cambia aprendizaje, presion y exposicion."
            : "El mercado abre despues de tu temporada. El auto mas fuerte no siempre es el camino mas inteligente."}
        </p>
        <div className="market-panel">
          <div>
            <span>Valor mercado</span>
            <strong>{value}</strong>
          </div>
          <div>
            <span>Interes F1</span>
            <strong>{interest}</strong>
          </div>
          <div className="market-wide">
            <span>{career.category === "F1" ? "Consolidado en F1" : "Proyeccion"}</span>
            <p>{promotionHint(career)}</p>
          </div>
        </div>
      </div>
      <div className="choice-grid">
        {offers.map((team) => (
          <button key={team.name} className="choice team-choice" type="button" style={{ "--team": team.color } as any} onClick={() => onChoose(team)}>
            <TeamBadge team={team} />
            <small>
              {career.category} - {tierName(team.tier)} - Potencial {team.power} - Licencia {team.country}
            </small>
            <span className="choice-impact">{teamFitReason(career, team, value)}</span>
          </button>
        ))}
      </div>
      <Timeline career={career} />
    </>
  );
}
