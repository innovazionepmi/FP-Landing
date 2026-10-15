"use client";

import { useEffect, useState } from "react";
import s from "./cop.module.css";

// Barra CTA fissa (solo mobile). Compare quando nessun form è visibile e
// porta al primo form più in basso rispetto alla posizione attuale.
export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const forms = Array.from(
      document.querySelectorAll<HTMLElement>("[data-lead-form]")
    );
    const inView = new Set<Element>();

    const update = () => setVisible(window.scrollY > 300 && inView.size === 0);

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) inView.add(entry.target);
        else inView.delete(entry.target);
      }
      update();
    });
    forms.forEach((f) => observer.observe(f));
    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
    };
  }, []);

  function goToNextForm() {
    const forms = Array.from(
      document.querySelectorAll<HTMLElement>("[data-lead-form]")
    );
    const next =
      forms.find((f) => f.getBoundingClientRect().top > 80) ??
      forms[forms.length - 1];
    next?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div
      className={`${s.sticky} ${visible ? s.stickyOn : ""}`}
      aria-hidden={!visible}
    >
      <button type="button" className={s.ctaBtn} onClick={goToNextForm} tabIndex={visible ? 0 : -1}>
        Richiedi Informazioni
      </button>
    </div>
  );
}
