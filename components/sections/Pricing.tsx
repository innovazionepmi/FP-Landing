import Image from "next/image";
import shared from "./shared.module.css";
import styles from "./Pricing.module.css";

const includes = [
  "10 SESSIONI ESCLUSIVE in LIVE STREAMING DI 2 ORE",
  "TUTTI I NUOVI VIDEO-CORSI",
  "ESERCITAZIONI PRATICHE",
  "LE SCHEDE TECNICHE in PDF",
  "ACCESSO AL GRUPPO “THE IMAGE FORGE”",
  "IL TUO PROCESSO DI LAVORO DA PRO",
];

const bonuses = [
  {
    title: "BONUS 1 — Registrazione di tutte le Live Session",
    text: "Accesso a un'area riservata con tutte le registrazioni delle 10 sessioni live, disponibili pochi giorni dopo ogni appuntamento settimanale.",
  },
  {
    title: "BONUS 2 — Aggiornamenti gratuiti delle video-lezioni",
    text: "Aggiorniamo le video-lezioni ogni volta che escono novità sulla Generazione AI e sul Ritocco: avrai sempre un corso aggiornato.",
  },
  {
    title: "BONUS 3 — Una Live Session in regalo",
    text: "Un'undicesima sessione speciale di due ore su come creare piccoli video partendo dalle immagini create durante il percorso.",
  },
  {
    title: "BONUS 4 — Accesso al Gruppo Facebook",
    text: "Un gruppo esclusivo dove interagire con Simone e il team, condividere il tuo lavoro e ricevere commenti e aiuto dagli altri allievi.",
  },
  {
    title: "BONUS 5 — Modulo sulla Creazione Video",
    text: "Un modulo esclusivo dedicato alla generazione video: scoprirai come creare animazioni realistiche partendo dalle immagini generate.",
  },
];

export default function Pricing() {
  return (
    <section className={shared.section}>
      <div className={`${shared.container} ${shared.narrow}`}>
        <span className={shared.eyebrow}>L&apos;investimento</span>
        <h2 className={shared.heading}>Ma… quanto costa?</h2>
        <p className={shared.paragraph}>
          Image Master è un percorso incredibile e ragionando sul prezzo di
          vendita siamo giunti a una conclusione: questo percorso dovrebbe
          costare almeno 1.500 euro. Dopo la prima edizione, avendo aggiunto
          altri contenuti e bonus, il valore di questo percorso è di almeno
          2.000 euro.
        </p>
        <p className={shared.paragraph}>
          Ma durante il periodo di lancio della seconda edizione, puoi
          iscriverti a The Image Master ad un prezzo speciale, ancora per
          pochissimi giorni.
        </p>

        <div className={styles.priceImage}>
          <Image
            src="/imagemaster/images/Prezzo-Image-Master.jpg"
            alt="Prezzo The Image Master"
            fill
            sizes="480px"
          />
        </div>

        <div className={styles.includes}>
          {includes.map((i) => (
            <div key={i} className={styles.includeItem}>
              {i}
            </div>
          ))}
        </div>

        <h3 className={shared.heading} style={{ marginTop: 56 }}>
          E non solo… riceverai IN REGALO cinque fantastici BONUS
        </h3>
        <div className={styles.bonusGrid}>
          {bonuses.map((b) => (
            <div key={b.title} className={styles.bonusCard}>
              <div className={styles.bonusIcon}>
                <Image
                  src="/imagemaster/images/Pacco-regalo.jpg"
                  alt=""
                  fill
                  sizes="64px"
                />
              </div>
              <div className={styles.bonusTitle}>{b.title}</div>
              <p className={styles.bonusText}>{b.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.urgency}>
          ATTENZIONE: The Image Master è un percorso a numero chiuso.
          Iscriviti ora, prima che il prezzo cambi e prima che i posti siano
          esauriti — la prima edizione è andata sold-out in due settimane.
        </div>
      </div>
    </section>
  );
}
