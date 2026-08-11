import { DRIVE_MODES, TROPHY_GUIDE, trophyIcon } from "../data/catalog";
import { driverValue, f1InterestScore, trophyCounts } from "../engine/career";
import type { CareerState } from "../types/game";
import { DriverCard, Info, Panel, driveModeName, f1MarketLine, promotionHint } from "./ui";

export function CareerLab({ career }: { career: CareerState }) {
  const last = career.trajectory[0];
  return (
    <Panel stage="Career Lab" title="Proyecto deportivo">
      <DriverCard career={career} subtitle={`Modo ${driveModeName(career)}`} text={f1MarketLine(career)} />
      <div className="info-grid">
        <Info title="Mercado" text={promotionHint(career)} />
        <Info title="Rival" text={`${career.rival.name} tiene valoracion ${career.rival.rating} y tension ${career.rival.heat}/100.`} />
        <Info
          title="Ultima temporada"
          text={
            last
              ? `${last.category} con ${last.team}: ${last.points} pts, score ${last.score}, piloto vs auto ${last.overperformance >= 0 ? "+" : ""}${last.overperformance}.`
              : "Todavia no hay temporada cerrada."
          }
        />
        <Info title="Trayectoria" text={`F3 ${career.categorySeasons.F3} temp. | F2 ${career.categorySeasons.F2} temp. | F1 ${career.categorySeasons.F1} temp.`} />
      </div>
    </Panel>
  );
}

export function Telemetry({ career }: { career: CareerState }) {
  const lastFive = career.trajectory.slice(0, 5);
  const games = Object.entries(career.minigameCounts).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const mode = (DRIVE_MODES as any)[career.careerDriveMode || "balanced"];

  return (
    <Panel stage="Telemetry" title="Lectura de rendimiento">
      <div className="info-grid">
        <Info title="Forma reciente" text={lastFive.length ? lastFive.map((item) => `T${item.season}: score ${item.score}`).join(" | ") : "Sin datos de temporada."} />
        <Info
          title="Piloto vs auto"
          text={lastFive.length ? lastFive.map((item) => `T${item.season} ${item.overperformance >= 0 ? "+" : ""}${item.overperformance}`).join(" | ") : "Aparece al cerrar una temporada."}
        />
        <Info title="Minijuegos mas vistos" text={games.length ? games.map(([game, count]) => `${game} ${count}`).join(" | ") : "Todavia sin minijuegos registrados."} />
        <Info title="Superlicencia" text={`${career.license} puntos acumulados.`} />
        <Info title="Modo fijo" text={`${mode.name}: ${mode.text}`} />
        <Info title="Mercado F1" text={`Valor ${driverValue(career)} | Interes ${f1InterestScore(career)}`} />
      </div>
    </Panel>
  );
}

export function TrophyGuide({ career }: { career: CareerState }) {
  const counts = trophyCounts(career);
  const guideCounts = {
    ...counts,
    honor: (counts.overtake || 0) + (counts.firstWin || 0) + (counts.firstPodium || 0) + (counts.rookie || 0),
  } as Record<string, number>;

  return (
    <Panel stage="Vitrina" title="Trofeos y significado">
      <div className="trophy-guide">
        {Object.entries(TROPHY_GUIDE).map(([type, [label, description]]: any) => (
          <article className="trophy-guide-card" key={type}>
            <img src={trophyIcon(type)} alt="" />
            <div>
              <strong>
                {label} ({guideCounts[type] || 0})
              </strong>
              <span>{description}</span>
            </div>
          </article>
        ))}
      </div>
    </Panel>
  );
}
