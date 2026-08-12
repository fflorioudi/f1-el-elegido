import { useEffect, useState, type ReactNode } from "react";

export interface MiniResult {
  bonus: number;
  detail: string;
}

export interface MiniProps {
  difficulty: number;
  onResolve: (bonus: number, detail?: string) => void;
}

export interface TimingCopy {
  title: string;
  text: string;
  className: string;
  button: string;
  good: string;
  bad: string;
}

export function Shell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <div className="panel-head">
        <p className="eyebrow">Minijuego</p>
        <h2>{title}</h2>
      </div>
      <div className="minigame">{children}</div>
    </>
  );
}

export function MinigameResult({ title, result, onContinue }: { title: string; result: MiniResult; onContinue: () => void }) {
  const tone = result.bonus > 0 ? "ok" : result.bonus === 0 ? "warn" : "bad";
  return (
    <>
      <div className="panel-head">
        <p className="eyebrow">Minijuego</p>
        <h2>{title}</h2>
      </div>
      <div className={`feedback ${tone}`}>
        <strong>{title}: {result.bonus > 0 ? "bien ejecutado" : result.bonus === 0 ? "neutro" : "error"}</strong>
        <span>{result.detail}. Consecuencia: rendimiento de temporada {result.bonus > 0 ? "+" : ""}{result.bonus}.</span>
      </div>
      <div className="actions">
        <button type="button" className="primary" onClick={onContinue}>Continuar</button>
      </div>
    </>
  );
}

export function useTicker(duration: number, mode: "linear" | "sine") {
  const [position, setPosition] = useState(mode === "sine" ? 50 : 0);
  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const value = mode === "sine"
        ? (Math.sin((elapsed / duration) * Math.PI * 2 - Math.PI / 2) + 1) * 50
        : Math.min(100, Math.max(0, (elapsed / duration) * 100));
      setPosition(value);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, mode]);
  return position;
}

export function useElapsed() {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      setElapsed(now - start);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  return elapsed;
}
