import { useState } from "react";
import { NATIONALITIES, PERSONALITIES, STAT_NAMES, STYLES } from "../data/catalog";
import type { SetupInput } from "../types/game";

const STARTING_POINTS = 18;
const STAT_KEYS = ["pace", "racecraft", "tyre", "technical", "focus"] as const;
const DEFAULT_POINTS: SetupInput["points"] = { pace: 4, racecraft: 4, tyre: 4, technical: 3, focus: 3 };

export function SetupPanel({ onStart }: { onStart: (input: SetupInput) => void }) {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState(NATIONALITIES[0]);
  const [styleId, setStyleId] = useState((STYLES[0] as any).id);
  const [personalityId, setPersonalityId] = useState((PERSONALITIES[0] as any).id);
  const [points, setPoints] = useState<SetupInput["points"]>(DEFAULT_POINTS);
  const used = Object.values(points).reduce((sum, item) => sum + item, 0);
  const left = STARTING_POINTS - used;

  function updateStat(key: keyof typeof points, value: number) {
    setPoints((current) => {
      const next = { ...current, [key]: value };
      return Object.values(next).reduce((sum, item) => sum + item, 0) <= STARTING_POINTS ? next : current;
    });
  }

  function randomize() {
    const randomStyle = STYLES[Math.floor(Math.random() * STYLES.length)] as any;
    const randomPersonality = PERSONALITIES[Math.floor(Math.random() * PERSONALITIES.length)] as any;
    setName(["Rayo", "Fenix", "Poleman", "Pampa"][Math.floor(Math.random() * 4)]);
    setNationality(NATIONALITIES[Math.floor(Math.random() * NATIONALITIES.length)]);
    setStyleId(randomStyle.id);
    setPersonalityId(randomPersonality.id);
    setPoints(randomPoints());
  }

  function startCareer() {
    onStart({ name, nationality, styleId, personalityId, points: completePoints(points) });
  }

  return (
    <section id="setup" className="panel">
      <div className="panel-head">
        <p className="eyebrow">Academia</p>
        <h2>Prepara tu carrera</h2>
      </div>
      <div className="mode-grid" aria-label="Modos de juego">
        <button type="button" className="mode-card active">
          <span>Carrera completa</span>
          <strong>F3 a F1</strong>
          <small>Progresion, contratos, rival, minijuegos y legado.</small>
        </button>
        <button type="button" className="mode-card" disabled>
          <span>Reto express</span>
          <strong>Proximamente</strong>
          <small>Temporadas cortas para partidas rapidas.</small>
        </button>
        <button type="button" className="mode-card" disabled>
          <span>Sandbox</span>
          <strong>Proximamente</strong>
          <small>Probar equipos, stats y balance sin carrera larga.</small>
        </button>
      </div>
      <div className="setup-layout">
        <div className="setup-card">
          <h3>Identidad del piloto</h3>
          <div className="form-grid setup-form">
            <label>
              Nombre
              <input maxLength={24} placeholder="El elegido" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
              Nacionalidad
              <select value={nationality} onChange={(event) => setNationality(event.target.value)}>
                {NATIONALITIES.map((item: string) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label>
              Estilo de conduccion
              <select value={styleId} onChange={(event) => setStyleId(event.target.value)}>
                {STYLES.map((item: any) => <option key={item.id} value={item.id}>{item.name}</option>)}
              </select>
            </label>
            <label>
              Personalidad
              <select value={personalityId} onChange={(event) => setPersonalityId(event.target.value)}>
                {PERSONALITIES.map((item: any) => <option key={item.id} value={item.id}>{item.name}</option>)}
              </select>
            </label>
          </div>
        </div>
        <div className="setup-card setup-summary">
          <span>Perfil inicial</span>
          <strong>{name || "Nuevo piloto"}</strong>
          <small>{nationality} - {selectedName(STYLES, styleId)} - {selectedName(PERSONALITIES, personalityId)}</small>
          <b>{left} puntos libres</b>
        </div>
      </div>
      <div className="allocation">
        <div>
          <h3>Reparte 18 puntos de talento</h3>
          <p>Puntos disponibles: {left}</p>
        </div>
        <div className="stat-inputs">
          {STAT_KEYS.map((key) => (
            <label key={key}>
              {STAT_NAMES[key]} <strong>{points[key]}</strong>
              <input type="range" min={0} max={7} value={points[key]} onChange={(event) => updateStat(key, Number(event.target.value))} />
            </label>
          ))}
        </div>
      </div>
      <div className="actions">
        <button type="button" onClick={randomize}>Piloto aleatorio</button>
        <button type="button" className="primary" onClick={startCareer}>
          Empezar carrera
        </button>
      </div>
    </section>
  );
}

function selectedName(items: readonly any[], id: string) {
  return items.find((item) => item.id === id)?.name || "";
}

function randomPoints(): SetupInput["points"] {
  const next: SetupInput["points"] = { pace: 2, racecraft: 2, tyre: 2, technical: 2, focus: 2 };
  let left = STARTING_POINTS - Object.values(next).reduce((sum, item) => sum + item, 0);

  while (left > 0) {
    const key = STAT_KEYS[Math.floor(Math.random() * STAT_KEYS.length)];
    if (next[key] >= 7) continue;
    next[key] += 1;
    left -= 1;
  }

  return next;
}

function completePoints(points: SetupInput["points"]): SetupInput["points"] {
  const next = { ...points };
  let left = STARTING_POINTS - Object.values(next).reduce((sum, item) => sum + item, 0);

  for (const key of STAT_KEYS) {
    while (left > 0 && next[key] < 7) {
      next[key] += 1;
      left -= 1;
    }
  }

  return next;
}
