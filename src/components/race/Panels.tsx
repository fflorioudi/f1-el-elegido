import { useMemo } from "react";
import { DRIVE_MODES, STAT_NAMES, tierName, trophyIcon } from "../../data/catalog";
import { driverValue, f1InterestScore, getOffers, legacyScore, legacyVerdict, renewalEvaluation, trophyCounts } from "../../engine/career";
import { avg, describeEffect } from "../../engine/utils";
import type { CareerState, Choice, DriveModeKey, Team, TrophyType } from "../../types/game";
import type { CareerActions } from "../types";
import { DriverCard, Panel, TeamBadge, Timeline, promotionHint, teamFitReason } from "../ui";

export function RetirementPanel({ career, onReset }: { career: CareerState; onReset: () => void }) {
  const score = legacyScore(career);
  const peak = Math.max(avg(career.stats), ...career.trajectory.map((item) => item.score));
  const expectedTitles = peak >= 96 ? 4 : peak >= 92 ? 2 : peak >= 88 ? 1 : 0;
  const titleGap = expectedTitles - career.titles;
  const analysis =
    titleGap > 2
      ? "Tu talento supero por bastante a la vitrina. Faltaron autos, oportunidades o decisiones clave en años grandes."
      : titleGap > 0
        ? "La carrera dejo la sensacion de que habia una copa mas posible."
        : "La vitrina acompaño bien al nivel mostrado.";

  return (
    <>
      <div className="panel-head">
        <p className="eyebrow">Retiro</p>
        <h2>Carta de legado</h2>
      </div>
      <div className="main-card">
        <div className="driver-card legacy-card">
          <div>
            <p className="eyebrow">{legacyVerdict(career)}</p>
            <h2>{career.name}</h2>
            <p>{career.nationality} - {career.style} - {career.personality}</p>
            <div className="pill-row">
              <span className="pill">{career.points} puntos</span>
              <span className="pill">{career.wins} victorias</span>
              <span className="pill">{career.podiums} podios</span>
              <span className="pill">{career.poles} poles</span>
              <span className="pill">{career.titles} titulos</span>
              <span className="pill">${career.money.toLocaleString("es-AR")}</span>
            </div>
            <div className="legacy-analysis">
              <strong>Analisis deportivo</strong>
              <p>{analysis}</p>
              <div>
                <span>Pico competitivo {peak}</span>
                <span>Titulos esperados {expectedTitles}</span>
                <span>Legado {score}</span>
              </div>
            </div>
          </div>
          <div className="big-number">{score}</div>
        </div>
      </div>
      <LegacyTrophyWall career={career} />
      <div className="timeline">
        {career.trajectory.slice().reverse().map((item) => (
          <article className="season-row" key={`${item.season}-${item.team}`}>
            <span className="logo logo-native" style={{ "--team": item.teamColor } as any}>{item.teamCode}</span>
            <div>
              <strong>T{item.season} - {item.category} - {item.team}</strong>
              <p>{item.points} pts, {item.wins} victorias, {item.podiums} podios, {item.poles} poles{item.title ? ", campeon" : ""}. Score {item.score}.</p>
              <small>{item.decisions.join(" | ")}</small>
            </div>
          </article>
        ))}
      </div>
      <div className="actions">
        <button type="button" className="primary" onClick={onReset}>Jugar otra carrera</button>
      </div>
    </>
  );
}

function LegacyTrophyWall({ career }: { career: CareerState }) {
  const counts = trophyCounts(career);
  const honors =
    (counts.overtake || 0) +
    (counts.firstWin || 0) +
    (counts.firstPodium || 0) +
    (counts.rookie || 0) +
    (counts.honor || 0);
  const cards: Array<{ type: TrophyType | "honor"; label: string; count: number; detail: string }> = [
    { type: "title", label: "Campeonatos", count: counts.title || 0, detail: "Titulos de pilotos" },
    { type: "constructor", label: "Constructores", count: counts.constructor || 0, detail: "Aporte al equipo" },
    { type: "podium", label: "Podios", count: counts.podium || 0, detail: "Domingos fuertes" },
    { type: "pole", label: "Poles", count: counts.pole || 0, detail: "Sabados perfectos" },
    { type: "sprint", label: "Sprints", count: counts.sprint || 0, detail: "Ritmo corto" },
    { type: "honor", label: "Hitos", count: honors, detail: "Marcas especiales" },
  ];
  const majors = career.trophies.filter((trophy) => trophy.type === "title" || trophy.type === "constructor").slice(-8).reverse();
  const recognitions = career.trophies.filter((trophy) => trophy.type !== "title" && trophy.type !== "constructor").slice(-10).reverse();

  return (
    <section className="legacy-wall">
      <div className="section-title">
        <span>Vitrina final</span>
        <strong>{career.trophies.length} premios</strong>
      </div>
      <div className="legacy-trophy-grid">
        {cards.map((card) => (
          <article className={`legacy-trophy ${card.count ? "earned" : ""}`} key={card.type}>
            <img src={trophyIcon(card.type)} alt="" />
            <div>
              <strong>{card.label}</strong>
              <b>{card.count}</b>
              <span>{card.detail}</span>
            </div>
          </article>
        ))}
      </div>
      <TrophyChips title="Ultimas copas grandes" trophies={majors} empty="No hubo copas mayores en la vitrina final." />
      <TrophyChips title="Reconocimientos" trophies={recognitions} empty="Los reconocimientos chicos no llegaron esta vez." />
    </section>
  );
}

function TrophyChips({ title, trophies, empty }: { title: string; trophies: CareerState["trophies"]; empty: string }) {
  return (
    <div className="legacy-chip-section">
      <h3>{title}</h3>
      {trophies.length ? (
        <div className="legacy-chip-row">
          {trophies.map((trophy, index) => (
            <span className="legacy-chip" key={`${trophy.type}-${trophy.season}-${index}`}>
              <img src={trophyIcon(trophy.type)} alt="" />
              <strong>{trophy.label}</strong>
              <b>T{trophy.season}</b>
            </span>
          ))}
        </div>
      ) : (
        <p className="muted-line">{empty}</p>
      )}
    </div>
  );
}

export function ChoiceButton({ choice, action }: { choice: Choice; action: () => void }) {
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

export function DriveModePanel({ career, onLock }: { career: CareerState; onLock: (key: DriveModeKey) => void }) {
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

export function Market({ career, onChoose }: { career: CareerState; onChoose: CareerActions["chooseTeam"] }) {
  const offers = useMemo(() => getOffers(career, career.seasons === 0), [career]);
  const value = driverValue(career);
  const interest = f1InterestScore(career);
  const renewal = renewalEvaluation(career, value, career.seasons === 0);

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
          {career.seasons > 0 ? (
            <div className={`market-wide renewal-status ${renewal.status}`}>
              <span>{renewal.status === "approved" ? "Renovacion disponible" : renewal.status === "rejected" ? "Sin renovacion" : "Renovacion"}</span>
              <p>{renewal.message}</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="choice-grid">
        {offers.map((team: Team) => (
          <button
            key={team.name}
            className={`choice team-choice ${career.marketContext?.currentTeam?.name === team.name || career.trajectory[0]?.team === team.name ? "renewal-choice" : ""}`}
            type="button"
            style={{ "--team": team.color } as any}
            onClick={() => onChoose(team)}
          >
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
