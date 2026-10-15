import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import s from "./cop.module.css";

export default function Hero() {
  return (
    <header className={s.hero}>
      {/* Mobile: banner a tutta larghezza, poi titolo e form subito sotto. */}
      <Image
        className={s.heroBanner}
        src="/captureonepro/images/Capture-One-Header-Slim-2.jpg"
        alt="Capture One Professional Workflow — Percorso completo su Capture One Pro"
        width={2560}
        height={1007}
        sizes="100vw"
        priority
        style={{ width: "100%", height: "auto" }}
      />

      <div className={s.heroGrid}>
        <h1 className={s.heroTitle}>
          Costruisci un workflow più efficiente e professionale con Capture
          One Pro per lavorare meglio, più velocemente e con più controllo.
        </h1>
        <div className={s.heroLeft}>
          <div className={s.heroArt}>
            <Image
              src="/captureonepro/images/Capture-One-Header.jpg"
              alt="Capture One Professional Workflow — Scatto in tethering, scelta e organizzazione, editing, archiviazione, consegna"
              width={2500}
              height={1438}
              sizes="(min-width: 1180px) 600px, 52vw"
              style={{ width: "100%", height: "auto", borderRadius: 14 }}
            />
          </div>
          <div className={s.heroFacts}>
            <div className={s.facts}>
              <div className={s.fact}>
                <strong>5 sessioni live</strong>in Streaming di 2 ore
              </div>
              <div className={s.fact}>
                <strong>Dal 12 Novembre 2026</strong>ogni giovedì
              </div>
              <div className={s.fact}>
                <strong>297,00 € + IVA</strong>invece di 1.200,00 €
              </div>
              <div className={s.fact}>
                <strong>5 bonus inclusi</strong>solo in fase di lancio
              </div>
            </div>
          </div>
        </div>

        {/* Titolo a tutta larghezza sopra; sotto, immagine e form allineati. */}
        <div className={s.heroForm} data-lead-form id="form-hero">
          <LeadForm
            formId="lead-form-hero"
            thankYouPath="/captureonepro/grazie"
            origine="captureonepro"
          />
        </div>
      </div>
    </header>
  );
}
