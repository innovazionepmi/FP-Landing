import Image from "next/image";
import shared from "./shared.module.css";
import styles from "./WhatYouLearn.module.css";

const items = [
  "Il Processo Creativo: come passare dal brief del cliente all'idea e dall'idea ad un'immagine reale.",
  "Come “mettere a terra” le idee, cioè come realizzare le tue fantasie visive, anche quando sembrano impossibili.",
  "Il Workflow ideale per la Creazione Sinergica: da cosa iniziare? Chi guida il processo: lo scatto fotografico o l'immagine generata?",
  "Integrazione intelligente: dalla fotografia alla generazione AI, fino al ritocco finale, con un flusso fluido e logico.",
  "Generazione AI: dal Brief Refinement al progetto creativo in collaborazione con l'AI, per creare immagini coerenti e aderenti all'idea creativa.",
  "Come scegliere gli strumenti per la generazione: una guida pratica per orientarsi nello sconfinato mondo delle app per la Generazione AI.",
  "AI Enhancement: come passare da immagini di 2000 pixel a super-immagini pronte per un'affissione di grande formato.",
  "Fotografia in Studio: come scattare immagini perfette per l'inserimento in ambienti AI.",
  "Tecnica Fotografica e Illuminazione: creare in studio lo schema luci e il set-up perfetto, per far dialogare illuminazione reale e virtuale.",
  "Controllo dell'Output AI: analisi critica, ricerca e ritocco degli errori.",
  "Tecniche di Ritocco per le immagini AI: come rendere più realistica un'immagine generata e correggere difetti e incongruenze.",
  "Montaggio e Realismo: fotomontaggio di alta qualità, fusione dei materiali, integrazione di luci, ombre e riflessi.",
  "Creare immagini di alta qualità: tre Case History, un'immagine Still Life di Prodotto, un'immagine Fashion e un'immagine Advertising ambientata.",
];

export default function WhatYouLearn() {
  return (
    <section className={shared.section}>
      <div className={shared.container}>
        <span className={shared.eyebrow}>Il percorso</span>
        <h2 className={shared.heading}>
          Cosa Imparerai in questo Percorso
        </h2>
        <div className={styles.wrap}>
          <div className={styles.imageBox}>
            <Image
              src="/images/Cosa-Imparareai.jpg"
              alt="Cosa imparerai in The Image Master"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
          <ul className={shared.bulletList}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
