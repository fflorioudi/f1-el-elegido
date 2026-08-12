import { useEffect, useMemo, useState } from "react";
import { DRIVE_MODES } from "../../data/catalog";
import { clamp, rnd } from "../../engine/utils";
import { minigameLabel } from "../../engine/career";
import type { CareerState } from "../../types/game";
import { RadioGame } from "./RadioGame";
import { MinigameResult, Shell, useElapsed, useTicker, type MiniProps, type MiniResult, type TimingCopy } from "./shared";

export function MinigamePanel({ career, type, onResolve }: { career: CareerState; type: string; onResolve: (bonus: number, detail?: string) => void }) {
  const difficulty = minigameDifficulty(career, type);
  const [result, setResult] = useState<MiniResult | null>(null);
  const finish = (bonus: number, detail?: string) => setResult({ bonus, detail: detail || outcomeText(type, bonus) });
  const common = { difficulty, onResolve: finish };

  if (result) {
    return <MinigameResult title={minigameLabel(type)} result={result} onContinue={() => onResolve(result.bonus, result.detail)} />;
  }

  if (type === "lights") return <LightsGame {...common} />;
  if (type === "apex") return <TimingTrackGame {...common} title="Apex" text="Toca cuando el auto entra en la zona de apex." className="corner-track" button="Tocar apex" good="Apex conectado, gran salida de curva." bad="Apex fuera de zona." />;
  if (type === "pit") return <OscillatingNeedleGame {...common} title="Pit stop" text="Para la aguja en la ventana verde." className="pit-track" button="Parar ahora" good="Parada limpia y vuelta de salida fuerte." bad="Parada lenta, trafico al volver." />;
  if (type === "drs") return <DrsGame {...common} />;
  if (type === "ers") return <OscillatingNeedleGame {...common} title="ERS" text="Descarga cuando el marcador entra en la zona dorada." className="ers-bar" button="Descargar" good="Descarga ideal en recta." bad="Descarga lejos de la zona." />;
  if (type === "tyres") return <TyresGame {...common} />;
  if (type === "focus") return <FocusGame {...common} />;
  if (type === "sector") return <SectorGame {...common} />;
  if (type === "walls") return <WallsGame {...common} />;
  if (type === "radio") return <RadioGame {...common} />;
  if (type === "duel") return <DuelGame {...common} />;
  if (type === "brake") return <BrakeGame {...common} />;
  if (type === "corner") return <CornerGame {...common} />;
  if (type === "boxcrew") return <BoxCrewGame {...common} />;

  return <RadioGame {...common} />;
}

function LightsGame({ difficulty, onResolve }: MiniProps) {
  const [armed, setArmed] = useState(false);
  const [readyAt, setReadyAt] = useState<number | null>(null);

  useEffect(() => {
    const delay = rnd(1100, 2700);
    const timer = window.setTimeout(() => {
      setArmed(true);
      setReadyAt(performance.now());
    }, delay);
    return () => window.clearTimeout(timer);
  }, []);

  function release() {
    const reaction = readyAt ? performance.now() - readyAt : -1;
    const perfect = Math.max(95, 290 - difficulty * 16);
    const good = Math.max(240, 560 - difficulty * 24);
    const bonus = reaction < 0 ? -6 : reaction < perfect ? 8 : reaction < good ? 4 : reaction < 1050 ? 1 : -4;
    onResolve(bonus, bonus > 0 ? `Reaccion competitiva: ${Math.round(reaction)} ms` : reaction < 0 ? "Saltaste antes de que se apaguen las luces" : "La largada costo posiciones");
  }

  return (
    <Shell title="Largada">
      <h3>Largada: suelta cuando se apaguen las luces</h3>
      <p>Dificultad {difficulty}. Si saltas antes, penaliza. Si reaccionas tarde, pierdes posiciones.</p>
      <div className="lights">{Array.from({ length: 5 }, (_, index) => <span key={index} className={`light ${armed ? "" : "on"}`} />)}</div>
      <button type="button" className="primary" onClick={release}>Soltar embrague</button>
    </Shell>
  );
}

function TimingTrackGame({ difficulty, onResolve, title, text, className, button, good, bad }: MiniProps & TimingCopy) {
  const target = useMemo(() => rnd(42, 62), []);
  const windowSize = Math.max(10, 25 - difficulty);
  const position = useTicker(Math.max(2200, 4100 - difficulty * 125), "linear");

  function finish() {
    const distance = Math.abs(position - target);
    const bonus = distance <= windowSize / 2 ? 8 : distance <= windowSize ? 4 : -5;
    onResolve(bonus, bonus > 0 ? `${title} ejecutado en ${Math.round(position)}%, dentro de ventana` : `${title} fuera de zona: ${Math.round(position)}%`);
  }

  return (
    <Shell title={title}>
      <h3>{title}: precision de curva</h3>
      <p>{text}</p>
      <div className={className}>
        <i style={{ left: `${target - windowSize / 2}%`, width: `${windowSize}%` }} />
        <span style={{ left: `${position}%` }} />
      </div>
      <div className="mini-status"><span>Entrada {Math.round(position)}%</span><span>{position >= target - windowSize / 2 && position <= target + windowSize / 2 ? good : bad}</span></div>
      <button type="button" className="primary" onClick={finish}>{button}</button>
    </Shell>
  );
}

function OscillatingNeedleGame({ difficulty, onResolve, title, text, className, button, good, bad }: MiniProps & TimingCopy) {
  const target = useMemo(() => rnd(36, 66), []);
  const windowSize = Math.max(11, 25 - difficulty);
  const position = useTicker(Math.max(1800, 3600 - difficulty * 125), "sine");

  function finish() {
    const distance = Math.abs(position - target);
    const bonus = distance <= windowSize / 2 ? 8 : distance <= windowSize ? 4 : distance <= windowSize * 1.7 ? 1 : -5;
    onResolve(bonus, bonus > 0 ? `${title} en ${Math.round(position)}%, zona ideal` : `${title} en ${Math.round(position)}%, lejos de la zona`);
  }

  return (
    <Shell title={title}>
      <h3>{title}: ventana de ejecucion</h3>
      <p>{text}</p>
      <div className={className}>
        <i style={{ left: `${target - windowSize / 2}%`, width: `${windowSize}%` }} />
        <span style={className === "ers-bar" ? { width: `${position}%` } : { left: `${position}%` }} />
        {className === "ers-bar" ? <b style={{ left: `${position}%` }} /> : <b />}
      </div>
      <div className="mini-status"><span>Marcador {Math.round(position)}%</span><span>Zona {Math.round(target - windowSize / 2)}-{Math.round(target + windowSize / 2)}%</span></div>
      <button type="button" className="primary" onClick={finish}>{button}</button>
      <p className="mini-hint">{position >= target - windowSize / 2 && position <= target + windowSize / 2 ? good : bad}</p>
    </Shell>
  );
}

function DrsGame({ difficulty, onResolve }: MiniProps) {
  const attackLane = useMemo(() => (Math.random() > 0.5 ? "inside" : "outside"), []);
  const attackAt = useMemo(() => rnd(42, 72), []);
  const windowSize = Math.max(12, 28 - difficulty);
  const position = useTicker(Math.max(3400, 6400 - difficulty * 220), "linear");
  const signal = position > Math.max(16, attackAt - 22);

  function choose(line: string) {
    const timing = Math.abs(position - attackAt);
    const rightLine = line === attackLane;
    const bonus = rightLine && timing <= windowSize / 2 ? 8 : rightLine && timing <= windowSize ? 4 : timing <= windowSize / 2 ? 0 : -5;
    const lineText = attackLane === "inside" ? "interior" : "exterior";
    onResolve(bonus, bonus > 0 ? `Cubriste ${lineText} a tiempo` : `El ataque real era por ${lineText}`);
  }

  return (
    <Shell title="Defensa DRS">
      <h3>Defensa DRS: lee la maniobra</h3>
      <p className="mini-hint">{signal ? `El rival carga por ${attackLane === "inside" ? "interior" : "exterior"}.` : "El rival todavia no muestra la linea."}</p>
      <div className="drs-track">
        <i className="drs-window" style={{ left: `${attackAt - windowSize / 2}%`, width: `${windowSize}%` }} />
        <span style={{ left: `${position}%` }} />
      </div>
      <div className="duel-buttons">
        <button type="button" onClick={() => choose("inside")}>Interior</button>
        <button type="button" onClick={() => choose("outside")}>Exterior</button>
      </div>
    </Shell>
  );
}

function BrakeGame(props: MiniProps) {
  return <TimingTrackGame {...props} title="Frenada" text="Frena cuando la velocidad cae dentro de la zona verde." className="brake-zone" button="Frenar" good="Referencia limpia." bad="Fuera de ventana." />;
}

function FocusGame({ difficulty, onResolve }: MiniProps) {
  const position = useTicker(1700 + Math.max(0, 9 - difficulty) * 120, "sine");
  const [hits, setHits] = useState(0);
  const [attempts, setAttempts] = useState(0);

  function breathe() {
    const hit = position >= 40 && position <= 60;
    const nextHits = hits + (hit ? 1 : 0);
    const nextAttempts = attempts + 1;
    setHits(nextHits);
    setAttempts(nextAttempts);
    if (nextHits >= 3 || nextAttempts >= 5) onResolve(nextHits >= 3 ? 7 : -4, nextHits >= 3 ? "Pulso bajo control" : "La ansiedad se filtro al volante");
  }

  return (
    <Shell title="Foco">
      <h3>Ritmo cardiaco</h3>
      <p>Toca cuando el pulso entra en la franja verde. Necesitas 3 aciertos en 5 intentos.</p>
      <div className="focus-ring"><span style={{ left: `${position}%` }} /><b /></div>
      <div className="mini-status"><span>Aciertos {hits}/3</span><span>Intentos {attempts}/5</span></div>
      <button type="button" className="primary" onClick={breathe}>Respirar</button>
    </Shell>
  );
}

function TyresGame({ difficulty, onResolve }: MiniProps) {
  const [temp, setTemp] = useState(rnd(72, 96));
  const [turns, setTurns] = useState(5);

  function move(type: "push" | "hold" | "cool") {
    const nextTemp = temp + (type === "push" ? rnd(8, 13) : type === "cool" ? -rnd(7, 12) : rnd(-4, 5)) + Math.floor(difficulty / 3);
    const nextTurns = turns - 1;
    setTemp(nextTemp);
    setTurns(nextTurns);
    if (nextTurns <= 0) {
      const distance = nextTemp < 82 ? 82 - nextTemp : nextTemp > 98 ? nextTemp - 98 : 0;
      const bonus = distance === 0 ? 8 : distance <= 8 ? 3 : -5;
      onResolve(bonus, distance === 0 ? "Gomas en ventana perfecta" : "La goma no llego en temperatura ideal");
    }
  }

  return (
    <Shell title="Neumaticos">
      <h3>Ventana de temperatura</h3>
      <p>Manten la goma entre 82 y 98 grados durante 5 vueltas de preparacion.</p>
      <div className="temp-gauge"><span style={{ width: `${clamp(temp, 40, 120) - 30}%` }} /><strong>{temp}C</strong></div>
      <div className="mini-status"><span>Vueltas {turns}</span><span>{temp >= 82 && temp <= 98 ? "En ventana" : "Fuera de ventana"}</span></div>
      <div className="duel-buttons">
        <button type="button" onClick={() => move("push")}>Empujar</button>
        <button type="button" onClick={() => move("hold")}>Mantener</button>
        <button type="button" onClick={() => move("cool")}>Enfriar</button>
      </div>
    </Shell>
  );
}

function SectorGame({ difficulty, onResolve }: MiniProps) {
  const total = clamp(3 + Math.floor((difficulty - 3) / 3), 3, 5);
  const order = useMemo(() => Array.from({ length: total }, (_, index) => index + 1).sort(() => Math.random() - 0.5), [total]);
  const [current, setCurrent] = useState(1);
  const [resolved, setResolved] = useState(false);
  const elapsed = useElapsed();
  const limit = Math.max(4200, 7400 - difficulty * 260);
  const timeLeft = clamp(1 - elapsed / limit, 0, 1);

  useEffect(() => {
    if (!resolved && timeLeft <= 0) {
      setResolved(true);
      onResolve(-5, "La vuelta se desarmo por trafico y tiempo");
    }
  }, [onResolve, resolved, timeLeft]);

  function pick(sector: number) {
    if (resolved) return;
    if (sector !== current) {
      setResolved(true);
      onResolve(-4, "Referencia incorrecta en vuelta rapida");
      return;
    }
    if (current >= total) {
      setResolved(true);
      onResolve(8, "Vuelta limpia, todos los sectores conectados");
    }
    else setCurrent(current + 1);
  }

  return (
    <Shell title="Sectores">
      <h3>Vuelta lanzada</h3>
      <p>Toca los sectores en orden antes de que se cierre la vuelta.</p>
      <div className="timer"><span style={{ width: `${timeLeft * 100}%` }} /></div>
      <div className="sector-grid">{order.map((sector) => <button key={sector} type="button" disabled={sector < current} onClick={() => pick(sector)}>S{sector}</button>)}</div>
      <div className="mini-status"><span>Siguiente S{current}</span><span>Tiempo {Math.ceil(Math.max(0, limit - elapsed) / 1000)}s</span><span>Total {total}</span></div>
    </Shell>
  );
}

function WallsGame({ difficulty, onResolve }: MiniProps) {
  const risks = [
    { id: "inside", label: "Interior", risk: clamp(18 + difficulty * 3, 20, 48), bonus: 6 },
    { id: "kerb", label: "Piano", risk: clamp(28 + difficulty * 4, 30, 62), bonus: 8 },
    { id: "outside", label: "Exterior", risk: clamp(10 + difficulty * 2, 12, 36), bonus: 4 },
  ];

  function choose(risk: (typeof risks)[number]) {
    const crash = rnd(1, 100) <= risk.risk;
    onResolve(crash ? -7 : risk.bonus, crash ? `La linea ${risk.label.toLowerCase()} termino en muro` : `La linea ${risk.label.toLowerCase()} salio limpia`);
  }

  return (
    <Shell title="Muros">
      <h3>Circuito callejero</h3>
      <p>Cada linea tiene riesgo real. Mas premio tambien significa mas muro.</p>
      <div className="risk-grid">{risks.map((risk) => <button key={risk.id} type="button" onClick={() => choose(risk)}><strong>{risk.label}</strong><small>Riesgo {risk.risk}% - premio +{risk.bonus}</small></button>)}</div>
    </Shell>
  );
}

function DuelGame({ onResolve }: MiniProps) {
  const [grip, setGrip] = useState(55);
  const [gap, setGap] = useState(rnd(-8, 8));
  const [turns, setTurns] = useState(4);

  function move(type: "attack" | "defend" | "save") {
    const nextGap = gap + (type === "attack" ? rnd(5, 11) : type === "defend" ? rnd(1, 5) : -rnd(2, 7));
    const nextGrip = clamp(grip + (type === "save" ? rnd(5, 10) : type === "defend" ? -rnd(4, 9) : -rnd(10, 16)), 0, 100);
    const nextTurns = turns - 1;
    setGap(nextGap);
    setGrip(nextGrip);
    setTurns(nextTurns);
    if (nextTurns <= 0) {
      const bonus = nextGap > 0 && nextGrip >= 18 ? 9 : nextGap > 0 ? 3 : -6;
      onResolve(bonus, nextGap > 0 ? "Ganaste el duelo rueda a rueda" : "Tu rival te sostuvo la posicion");
    }
  }

  return (
    <Shell title="Duelo">
      <h3>Gestiona ataque y goma</h3>
      <p>Busca quedar con gap positivo sin destruir el grip.</p>
      <div className="duel-state"><span>Gap {gap}</span><span>Grip {grip}</span><span>Turnos {turns}</span></div>
      <div className="duel-buttons">
        <button type="button" onClick={() => move("attack")}>Atacar</button>
        <button type="button" onClick={() => move("defend")}>Defender</button>
        <button type="button" onClick={() => move("save")}>Guardar goma</button>
      </div>
    </Shell>
  );
}

function CornerGame({ onResolve }: MiniProps) {
  const [balance, setBalance] = useState(rnd(44, 62));
  const [grip, setGrip] = useState(70);
  const [corners, setCorners] = useState(4);

  function move(type: "rotate" | "flow" | "stabilize") {
    const nextBalance = clamp(balance + (type === "rotate" ? rnd(7, 12) : type === "flow" ? rnd(-4, 6) : -rnd(6, 11)), 20, 90);
    const nextGrip = clamp(grip - (type === "rotate" ? rnd(10, 16) : type === "flow" ? rnd(5, 10) : rnd(3, 7)), 0, 100);
    const nextCorners = corners - 1;
    setBalance(nextBalance);
    setGrip(nextGrip);
    setCorners(nextCorners);
    if (nextCorners <= 0) {
      const inWindow = nextBalance >= 45 && nextBalance <= 65 && nextGrip >= 25;
      const close = nextBalance >= 38 && nextBalance <= 72 && nextGrip >= 15;
      onResolve(inWindow ? 8 : close ? 2 : -5, inWindow ? "El auto fluyo perfecto en enlazadas" : close ? "Sobreviviste sin perder demasiado" : "El auto quedo fuera de balance");
    }
  }

  return (
    <Shell title="Curvas">
      <h3>Curvas enlazadas</h3>
      <p>Manten balance entre 45 y 65 y grip sobre 25 durante cuatro curvas.</p>
      <div className="duel-state"><span>Balance {balance}</span><span>Grip {grip}</span><span>Curvas {corners}</span></div>
      <div className="duel-buttons">
        <button type="button" onClick={() => move("rotate")}>Rotar</button>
        <button type="button" onClick={() => move("flow")}>Fluir</button>
        <button type="button" onClick={() => move("stabilize")}>Estabilizar</button>
      </div>
    </Shell>
  );
}

function BoxCrewGame({ difficulty, onResolve }: MiniProps) {
  const wheels = useMemo(() => ["FL", "FR", "RL", "RR"].map((name) => ({ name, readyAt: rnd(520, Math.max(760, 1650 - difficulty * 72)) })), [difficulty]);
  const elapsed = useElapsed();
  const [done, setDone] = useState<string[]>([]);
  const [early, setEarly] = useState(false);

  function clickWheel(name: string, readyAt: number) {
    if (done.includes(name)) return;
    if (elapsed < readyAt) setEarly(true);
    else {
      const next = [...done, name];
      setDone(next);
      if (next.length === 4) onResolve(early ? 2 : 8, early ? "Cambiaste las cuatro, pero una pistola se trabo temprano" : "Parada limpia de cuatro ruedas");
    }
  }

  useEffect(() => {
    const limit = Math.max(2800, 4300 - difficulty * 155);
    if (elapsed > limit && done.length < 4) onResolve(-5, "La parada quedo incompleta");
  }, [difficulty, done.length, elapsed, onResolve]);

  return (
    <Shell title="Box crew">
      <h3>Cuatro ruedas</h3>
      <p>Cambia cada rueda cuando se ilumine. Si apretas antes, la pistola se traba.</p>
      <div className="wheel-grid">
        {wheels.map((wheel) => (
          <button
            key={wheel.name}
            type="button"
            className={`${elapsed >= wheel.readyAt ? "ready" : ""} ${done.includes(wheel.name) ? "done" : ""} ${early && !done.includes(wheel.name) ? "early" : ""}`}
            disabled={done.includes(wheel.name)}
            onClick={() => clickWheel(wheel.name, wheel.readyAt)}
          >
            <span>{wheel.name}</span>
          </button>
        ))}
      </div>
      <div className="mini-status"><span>Ruedas {done.length}/4</span><span>{early ? "Una pistola se trabo" : "Sin errores"}</span></div>
    </Shell>
  );
}

function minigameDifficulty(career: CareerState, type: string) {
  const mode = (DRIVE_MODES as any)[career.season?.driveMode || "balanced"] || DRIVE_MODES.balanced;
  const category = career.category === "F1" ? 3 : career.category === "F2" ? 2 : 0;
  const tier = career.category === "F1" && career.team?.tier === "top" ? 2 : career.category === "F1" && career.team?.tier === "mid" ? 1 : 0;
  const phase = career.season?.moments?.[career.season.moment]?.phase || "";
  const phasePressure = phase === "Final de temporada" ? 2 : phase === "Sprint" ? 1 : 0;
  const careerPressure = Math.floor((career.season?.number || 1) / 4);
  const typePressure: Record<string, number> = { lights: 1, apex: 1, drs: 2, ers: 1, sector: 1, pit: 1, boxcrew: 1, brake: 1, focus: career.category === "F1" ? 1 : 0 };
  return clamp(3 + category + tier + phasePressure + careerPressure + (typePressure[type] || 0) + mode.difficulty, 3, 12);
}

function outcomeText(type: string, bonus: number) {
  const label = minigameLabel(type);
  if (bonus > 0) return `${label} resuelto con buen rendimiento`;
  if (bonus === 0) return `${label} quedo neutral, sin ganancia clara`;
  return `${label} salio mal bajo presion`;
}
