import type { Metadata } from "next";
import "../../styles.css";
import "../styles/react.css";

export const metadata: Metadata = {
  title: "El elegido",
  description: "Simulador fan-made de carrera F3, F2 y F1.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
