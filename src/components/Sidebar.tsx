import { useRef } from "react";
import { STAT_NAMES } from "../data/catalog";
import { trophyCounts } from "../engine/career";
import type { CareerState } from "../types/game";
import { TrophyMini } from "./ui";

export function Sidebar({
  career,
  onSave,
  onReset,
  onImport,
}: {
  career: CareerState;
  onSave: () => void;
  onReset: () => void;
  onImport: (raw: string) => boolean;
}) {
  const fileInput = useRef<HTMLInputElement | null>(null);
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
      <button type="button" onClick={() => exportCareer(career)}>Exportar JSON</button>
      <button type="button" onClick={() => fileInput.current?.click()}>Importar JSON</button>
      <input
        ref={fileInput}
        type="file"
        accept="application/json,.json"
        hidden
        onChange={(event) => importCareer(event.currentTarget.files?.[0] || null, onImport)}
      />
      <button type="button" onClick={onReset}>Nueva carrera</button>
    </aside>
  );
}

function exportCareer(career: CareerState) {
  const blob = new Blob([JSON.stringify(career, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `el-elegido-${career.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "carrera"}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importCareer(file: File | null, onImport: (raw: string) => boolean) {
  if (!file) return;
  const raw = await file.text();
  onImport(raw);
}
