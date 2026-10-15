"use client";

import { useEffect } from "react";
import Link from "next/link";
import shared from "@/components/sections/shared.module.css";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function GraziePage() {
  useEffect(() => {
    let attempts = 0;
    const fireLeadEvent = () => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead");
        return;
      }
      // The pixel script loads async: retry briefly until it's ready.
      if (attempts < 20) {
        attempts += 1;
        setTimeout(fireLeadEvent, 200);
      }
    };
    fireLeadEvent();
  }, []);

  return (
    <section
      className={`${shared.section} ${shared.sectionOrange}`}
      style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}
    >
      <div
        className={`${shared.container} ${shared.narrow}`}
        style={{ textAlign: "center" }}
      >
        <h1 className={shared.heading} style={{ color: "var(--white)" }}>
          Grazie! La tua richiesta è stata inviata.
        </h1>
        <p className={shared.paragraph} style={{ color: "var(--white)" }}>
          Ti contatteremo al più presto per parlare di The Image Master. Nei
          prossimi giorni tieni d&apos;occhio il telefono e rispondi a
          chiamate e messaggi WhatsApp: siamo noi che cerchiamo di
          contattarti 😉
        </p>
        <div style={{ marginTop: 32 }}>
          <Link
            href="/imagemaster"
            style={{
              color: "var(--white)",
              textDecoration: "underline",
              fontWeight: 700,
            }}
          >
            Torna alla pagina
          </Link>
        </div>
      </div>
    </section>
  );
}
