import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Image Master — Fotografia Professionale",
  description:
    "Il percorso per integrare Fotografia, Generazione AI e Ritocco Professionale in un unico workflow. Richiedi informazioni su The Image Master.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ImageMasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
