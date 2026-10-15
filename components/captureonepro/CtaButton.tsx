import s from "./cop.module.css";

// Pulsante che porta al form indicato (anchor interno, nessun acquisto).
export default function CtaButton({ href }: { href: string }) {
  return (
    <div className={s.ctaBand}>
      <a href={href} className={s.ctaBtn}>
        Richiedi Informazioni
      </a>
    </div>
  );
}
