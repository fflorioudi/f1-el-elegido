import { useEffect, useMemo, useState } from "react";
import { rnd } from "../../engine/utils";
import { Shell, useElapsed, type MiniProps } from "./shared";

const RADIO_OPTIONS = ["BOX", "PUSH", "LIFT", "HOLD", "SWAP"] as const;

const RADIO_CALLS = [
  {
    context: "Ventana de pits",
    text: "Plan B solo si el lider NO entra. Repetimos: no copies al lider.",
    right: "HOLD",
    trap: "BOX",
    success: "Leiste la negacion y evitaste una parada trampa",
  },
  {
    context: "Gestion de delta",
    text: "Target plus cero punto dos. No pelees la recta, guarda bateria para S3.",
    right: "LIFT",
    trap: "PUSH",
    success: "Levantaste lo justo y dejaste vivo el stint",
  },
  {
    context: "Ataque libre",
    text: "Gap libre por delante. Modo ataque hasta curva cuatro, sin lift.",
    right: "PUSH",
    trap: "LIFT",
    success: "Activaste el mapa correcto en la ventana buena",
  },
  {
    context: "Safety car virtual",
    text: "VSC posible. Entra solo con delta positivo; si el volante queda amarillo, sostener pista.",
    right: "HOLD",
    trap: "BOX",
    success: "No mordiste el anzuelo de una radio incompleta",
  },
  {
    context: "Orden de equipo",
    text: "Coche hermano con damage. Cambia posicion antes de S2 y recupera despues.",
    right: "SWAP",
    trap: "HOLD",
    success: "Ejecutaste la orden sin perder tiempo con el equipo",
  },
  {
    context: "Undercut",
    text: "Ventana abierta. Box this lap si el auto naranja no cubre por fuera.",
    right: "BOX",
    trap: "HOLD",
    success: "Entraste en la vuelta clave para buscar aire limpio",
  },
  {
    context: "Caja caliente",
    text: "Temperatura critica. Evita pianos, short shift y sin pelea hasta nueva orden.",
    right: "LIFT",
    trap: "PUSH",
    success: "Protegiste la caja sin regalar demasiado ritmo",
  },
  {
    context: "Rival vulnerable",
    text: "El rival carga defensa interior. Amaga, no cambies posicion con tu companero.",
    right: "PUSH",
    trap: "SWAP",
    success: "Separaste ataque real de ruido de radio",
  },
] as const;

export function RadioGame({ difficulty, onResolve }: MiniProps) {
  const call = useMemo(() => RADIO_CALLS[rnd(0, RADIO_CALLS.length - 1)], []);
  const elapsed = useElapsed();
  const [resolved, setResolved] = useState(false);
  const limit = Math.max(4200, 8200 - difficulty * 330);
  const timeLeft = Math.max(0, 1 - elapsed / limit);

  useEffect(() => {
    if (!resolved && timeLeft <= 0) {
      setResolved(true);
      onResolve(-6, "La radio quedo sin respuesta y el muro perdio la ventana");
    }
  }, [onResolve, resolved, timeLeft]);

  function answer(option: string) {
    if (resolved) return;
    setResolved(true);
    if (option === call.right) {
      onResolve(8, call.success);
      return;
    }
    if (option === call.trap) {
      onResolve(-7, "Caiste en la palabra trampa de la radio");
      return;
    }
    onResolve(-4, "Interpretaste la prioridad equivocada del mensaje");
  }

  return (
    <Shell title="Radio">
      <h3>Radio bajo ruido</h3>
      <p>Lee la prioridad real. Hay palabras trampa y la orden vence rapido.</p>
      <div className="timer"><span style={{ width: `${timeLeft * 100}%` }} /></div>
      <p className="radio-call"><strong>{call.context}</strong><span>{call.text}</span></p>
      <div className="mini-status">
        <span>Tiempo {Math.ceil(Math.max(0, limit - elapsed) / 1000)}s</span>
        <span>Opciones {RADIO_OPTIONS.length}</span>
      </div>
      <div className="duel-buttons radio-options">
        {RADIO_OPTIONS.map((item) => (
          <button key={item} type="button" disabled={resolved} onClick={() => answer(item)}>
            {item}
          </button>
        ))}
      </div>
    </Shell>
  );
}
