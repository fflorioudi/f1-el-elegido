import type { ReactNode } from "react";
import { DRIVE_MODES, tierName, trophyIcon } from "../data/catalog";
import { driverValue, f1InterestScore } from "../engine/career";
import { avg } from "../engine/utils";
import type { CareerState, Team } from "../types/game";

export function Panel({ stage, title, children }: { stage: string; title: string; children: ReactNode }) {
  return (
    <>
      <div className="panel-head">
        <p className="eyebrow">{stage}</p>
        <h2>{title}</h2>
      </div>
      <div className="main-card">{children}</div>
    </>
  );
}

export function DriverCard({ career, subtitle, text }: { career: CareerState; subtitle: string; text: string }) {
  return (
    <div className="driver-card">
      <div>
        {career.team ? <TeamBadge team={career.team} /> : null}
        <p className="phase">{subtitle}</p>
        <p>{text}</p>
        <div className="impact-strip">
          <span>Auto {career.team?.power || "-"}</span>
          <span>Valor {driverValue(career)}</span>
          <span>Minijuegos {career.season?.minigameScore || 0}</span>
          <span>Rival {career.rival.heat}/100</span>
        </div>
      </div>
      <div className="big-number">{avg(career.stats)}</div>
    </div>
  );
}

export function TeamBadge({ team }: { team: Team }) {
  return (
    <div className="team-badge">
      <span className={`logo ${logoTone(team)}`} style={{ "--team": team.color } as any}>
        {team.logo ? <img src={`/${team.logo}`} alt="" /> : null}
        <b>{team.code}</b>
      </span>
      <strong>{team.name}</strong>
      <em className={`team-tier ${team.tier}`}>{tierName(team.tier)}</em>
    </div>
  );
}

export function TrophyMini({ label, count, type }: { label: string; count: number; type: string }) {
  return (
    <span className={`trophy-cup-card ${count ? "earned" : ""} ${type}`}>
      <img src={trophyIcon(type)} alt="" />
      <b>{label}</b>
      <strong>{count}</strong>
    </span>
  );
}

export function Info({ title, text }: { title: string; text: string }) {
  return (
    <article className="info-card">
      <strong>{title}</strong>
      <span>{text}</span>
    </article>
  );
}

export function Timeline({ career }: { career: CareerState }) {
  return (
    <div className="timeline">
      {career.decisions.slice(0, 10).map((item, index) => (
        <div className="log" key={`${item.season}-${item.phase}-${index}`}>
          <strong>
            T{item.season} - {item.phase}: {item.title}
          </strong>
          <br />
          {item.text}
          <br />
          <span>{item.impact || "Sin impacto registrado"}</span>
        </div>
      ))}
    </div>
  );
}

export function promotionHint(career: CareerState) {
  if (career.category === "F3") {
    return (career.categorySeasons.F3 || 0) >= 2
      ? "F2 deberia abrirse con una temporada correcta."
      : "Un año fuerte o dos años solidos abren F2.";
  }
  if (career.category === "F2") {
    return (career.categorySeasons.F2 || 0) >= 4
      ? "El mercado no deberia retenerte mucho mas."
      : "F1 mira puntaje, licencia y consistencia de F2.";
  }
  return "Ahora el objetivo es escalar de equipo y sostener titulos.";
}

export function teamFitReason(career: CareerState, team: Team, value: number) {
  const gap = team.power - value;
  if (career.category === "F1" && team.tier === "mid") return "media tabla real para crecer sin quedar atrapado";
  if (career.category === "F1" && team.tier === "low") return "asiento de entrada, puntos como gran objetivo";
  if (career.category === "F1" && team.tier === "top") return "auto para ganar, presion maxima";
  if (gap <= -8) return "asiento seguro, bajo riesgo";
  if (gap <= 3) return "encaje natural por rendimiento";
  if (gap <= 9) return "apuesta ambiciosa con presion";
  return "salto grande, contrato de riesgo";
}

export function driveModeName(career: CareerState) {
  return (DRIVE_MODES as any)[career.careerDriveMode || "balanced"].name;
}

export function f1MarketLine(career: CareerState) {
  return `Valor de mercado ${driverValue(career)}. Interes F1 ${f1InterestScore(career)}.`;
}

function logoTone(team: Team) {
  const lightBacked = new Set(["Rodin Motorsport", "ART Grand Prix", "Van Amersfoort Racing"]);
  const darkBacked = new Set([
    "Mercedes",
    "Ferrari",
    "McLaren",
    "Red Bull Racing",
    "Racing Bulls",
    "Alpine",
    "Haas F1 Team",
    "Audi",
    "Williams",
    "Aston Martin",
    "Cadillac",
  ]);
  if (lightBacked.has(team.name)) return "logo-light";
  if (darkBacked.has(team.name)) return "logo-dark";
  return "logo-native";
}
