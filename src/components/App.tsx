import { useEffect } from "react";
import { useCareer } from "../state/useCareer";
import { shouldRetire } from "../engine/career";
import { CareerLab, Telemetry, TrophyGuide } from "./Dashboards";
import { Celebration } from "./Celebration";
import { Hero, LegalFooter, Topbar } from "./Layout";
import { RaceControl } from "./RaceControl";
import { SetupPanel } from "./SetupPanel";
import { Sidebar } from "./Sidebar";

export function App() {
  const { career, view, setView, actions, hydrated } = useCareer();

  useEffect(() => {
    if (career && shouldRetire(career) && !career.retired) actions.retire();
    else if (career?.team && !career.season && !career.retired) actions.ensureSeason();
  }, [career?.team, career?.season, actions]);

  const navDisabled = !career || Boolean(career.season?.pendingMinigame);

  return (
    <main className="app">
      <Topbar view={view} disabled={navDisabled} onChange={setView} />
      <Hero career={career} />

      {!hydrated ? (
        <section className="panel boot-panel" aria-live="polite">
          <div className="panel-head">
            <p className="eyebrow">Garage</p>
            <h2>Cargando carrera</h2>
          </div>
        </section>
      ) : !career ? (
        <SetupPanel onStart={actions.start} />
      ) : (
        <section id="game" className="game">
          <Sidebar career={career} onSave={actions.save} onReset={actions.reset} />
          <section className="career">
            {view === "race" && <RaceControl career={career} actions={actions} />}
            {view === "lab" && <CareerLab career={career} />}
            {view === "telemetry" && <Telemetry career={career} />}
            {view === "trophies" && <TrophyGuide career={career} />}
          </section>
        </section>
      )}

      {career?.pendingCelebrations[0] && <Celebration career={career} onContinue={actions.dismissCelebration} />}
      <LegalFooter />
    </main>
  );
}
