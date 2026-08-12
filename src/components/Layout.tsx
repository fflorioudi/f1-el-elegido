import { ASSETS } from "../data/catalog";
import type { CareerState } from "../types/game";
import type { ViewKey } from "./types";

const NAV_ITEMS: ViewKey[] = ["race", "lab", "telemetry", "trophies"];

export function Topbar({
  view,
  disabled,
  onChange,
}: {
  view: ViewKey;
  disabled: boolean;
  onChange: (view: ViewKey) => void;
}) {
  return (
    <nav className="topbar" aria-label="Principal">
      <div className="brand-mark">
        <span className="brand-logo">
          <img src={ASSETS.brand} alt="" />
        </span>
        <strong>El elegido</strong>
      </div>
      <div className="nav-pills" aria-label="Secciones de carrera">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            type="button"
            className={view === item ? "active" : ""}
            disabled={disabled && item !== "race"}
            onClick={() => onChange(item)}
          >
            <span className="nav-full">{item === "race" ? "Race Control" : item === "lab" ? "Career Lab" : item === "telemetry" ? "Telemetry" : "Vitrina"}</span>
            <span className="nav-short">{item === "race" ? "Race" : item === "lab" ? "Lab" : item === "telemetry" ? "Datos" : "Copas"}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export function Hero({ career }: { career: CareerState | null }) {
  return (
    <section className={`hero ${career ? "hero-compact" : ""}`}>
      <div>
        <p className="eyebrow">F3 - F2 - F1</p>
        <h1>El elegido</h1>
        <p className="lead">Crea un piloto, toma decisiones de carrera, supera pruebas clave y persigue el asiento que cambia una vida.</p>
      </div>
      <div className="status-card" aria-live="polite">
        <span>{career ? `${career.category} - Edad ${career.age}` : "Academia"}</span>
        <strong>{career?.name || "Nuevo piloto"}</strong>
        <small>{career ? `${career.nationality} - ${career.style} - ${career.personality}` : "Define tu identidad para empezar."}</small>
      </div>
    </section>
  );
}

export function LegalFooter() {
  return (
    <footer className="legal-footer">
      <strong>Proyecto no oficial.</strong> El elegido es un prototipo fan-made/portfolio y no esta asociado,
      aprobado ni respaldado por Formula 1, FIA, equipos, pilotos o titulares de marcas mencionadas.
    </footer>
  );
}
