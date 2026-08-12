import { STAT_NAMES } from "../data/catalog";
import { trophyCounts } from "../engine/career";
import type { CareerState } from "../types/game";
import { TrophyMini } from "./ui";

export function Sidebar({
  career,
  onSave,
  onReset,
}: {
  career: CareerState;
  onSave: () => void;
  onReset: () => void;
}) {
  const counts = trophyCounts(career);
  const majors = (counts.title || 0) + (counts["constructor"] || 0);
  const honors =
    (counts.podium || 0) +
    (counts.sprint || 0) +
    (counts.pole || 0) +
    (counts.overtake || 0) +
    (counts.firstWin || 0) +
    (counts.firstPodium || 0) +
    (counts.rookie || 0);
  const average = Math.round(
    Object.values(career.stats).reduce((total, value) => total + value, 0) / Object.values(career.stats).length
  );

  return (
    <aside className="sidebar">
      <div className="license">
        <span>Superlicencia</span>
        <strong>{career.license}</strong>
      </div>
      <div className="trophy-case">
        <div className="trophy-head">
          <span>Vitrina</span>
          <strong>{career.trophies.length}</strong>
        </div>
        <div className="trophy-showcase">
          <TrophyMini label="Pilotos" count={counts.title || 0} type="title" />
          <TrophyMini label="Const." count={counts["constructor"] || 0} type="constructor" />
          <TrophyMini label="Podios" count={counts.podium || 0} type="podium" />
          <TrophyMini label="Poles" count={counts.pole || 0} type="pole" />
          <TrophyMini label="Sprints" count={counts.sprint || 0} type="sprint" />
          <TrophyMini label="Hitos" count={honors - (counts.podium || 0) - (counts.pole || 0) - (counts.sprint || 0)} type="honor" />
        </div>
        <p className="trophy-note">{majors ? `${majors} copas mayores ganadas` : "Las copas grandes esperan su temporada."}</p>
      </div>
      <div className="mobile-driver-summary" aria-label="Resumen del piloto">
        <span>Media <strong>{average}</strong></span>
        <span>Licencia <strong>{career.license}</strong></span>
        <span>Trofeos <strong>{career.trophies.length}</strong></span>
      </div>
      <div className="stats-panel">
        {Object.entries(STAT_NAMES).map(([key, label]) => (
          <div className="meter" key={key}>
            <div>
              <span>{label}</span>
              <strong>{career.stats[key as keyof typeof career.stats]}</strong>
            </div>
            <span className="bar">
              <span style={{ width: `${career.stats[key as keyof typeof career.stats]}%` }} />
            </span>
          </div>
        ))}
      </div>
      <button type="button" onClick={onSave}>Guardar</button>
      <button type="button" onClick={onReset}>Nueva carrera</button>
    </aside>
  );
}
