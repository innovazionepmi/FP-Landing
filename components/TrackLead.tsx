"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Spara l'evento standard `Lead` del Meta Pixel. Va montato solo sulle
// pagine di ringraziamento. Il pixel base (MetaPixel nel layout root) viene
// caricato in modo asincrono, quindi si riprova per qualche secondo.
export default function TrackLead() {
  const fired = useRef(false);

  useEffect(() => {
    // Evita il doppio invio quando React monta due volte l'effetto (dev).
    if (fired.current) return;
    fired.current = true;

    let attempts = 0;
    const fire = () => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead");
        return;
      }
      if (attempts < 20) {
        attempts += 1;
        setTimeout(fire, 200);
      }
    };
    fire();
  }, []);

  return null;
}
