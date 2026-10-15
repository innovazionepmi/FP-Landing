import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import s from "./cop.module.css";

export default function Hero() {
  return (
    <header className={s.hero}>
      {/*
        Desktop: titolo a tutta larghezza; sotto, immagine + dati a sinistra e
        form a destra, allineati.
        Mobile (ordine via CSS): immagine, titolo, dati del percorso, pulsante
        che porta al form, poi il form. Il form non deve occupare la prima
        schermata: sopra la piega si deve capire che è un percorso formativo.
      */}
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
              sizes="(min-width: 1180px) 600px, (min-width: 900px) 52vw, 100vw"
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={s.heroFacts}>
            <p className={s.kicker}>Percorso formativo</p>
            <div className={s.facts}>
              <div className={s.fact}>
                <strong>5 sessioni live</strong>in Streaming di 2 ore
              </div>
              <div className={s.fact}>
                <strong>Dal 12 Novembre 2026</strong>ogni giovedì
              </div>
              <div className={s.fact}>
                <span className={s.promo}>
                  Promo fino al <span className={s.nowrap}>15 Ottobre</span>
                </span>
                <strong>297,00 € + IVA</strong>invece di 1.200,00 €
              </div>
              <div className={s.fact}>
                <strong>5 bonus inclusi</strong>solo in fase di lancio
              </div>
            </div>
          </div>
        </div>

        {/* Solo mobile: porta al form qui sotto. */}
        <a href="#form-hero" className={`${s.ctaBtn} ${s.heroCta}`}>
          Richiedi Informazioni
        </a>

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
