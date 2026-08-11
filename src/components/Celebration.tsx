import { trophyIcon } from "../data/catalog";
import type { CareerState } from "../types/game";

export function Celebration({ career, onContinue }: { career: CareerState; onContinue: () => void }) {
  const trophy = career.pendingCelebrations[0];
  return (
    <div className="celebration-board">
      <div className="confetti-field" aria-hidden="true">
        {Array.from({ length: 28 }, (_, index) => (
          <i key={index} style={{ "--i": index, "--x": `${6 + (index * 7) % 88}%`, "--d": `${(index * 83) % 900}ms` } as any} />
        ))}
      </div>
      <section className="celebration-card" role="dialog" aria-modal="true" aria-label="Celebracion de campeonato">
        <div className="celebration-cup" aria-hidden="true">
          <img src={trophyIcon(trophy.type)} alt="" />
        </div>
        <p className="eyebrow">{trophy.type === "title" ? "Campeonato de pilotos" : "Constructores"}</p>
        <h2>{trophy.label}</h2>
        <p>
          {career.name} celebra con {trophy.team}. La vitrina suma una copa nueva.
        </p>
        <button type="button" className="primary" onClick={onContinue}>Seguir carrera</button>
      </section>
    </div>
  );
}
