import type { Metadata } from "next";
import s from "@/components/captureonepro/cop.module.css";

export const metadata: Metadata = {
  title: "Capture One Professional Workflow — Fotografia Professionale",
  description:
    "Costruisci un workflow più efficiente e professionale con Capture One Pro per lavorare meglio, più velocemente e con più controllo. Richiedi informazioni.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CaptureOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={s.theme}>{children}</div>;
}
