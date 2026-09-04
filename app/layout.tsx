import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "The Image Master — Fotografia Professionale",
  description:
    "Il percorso per integrare Fotografia, Generazione AI e Ritocco Professionale in un unico workflow. Richiedi informazioni su The Image Master.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={inter.variable}>
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
