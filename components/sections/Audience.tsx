import Image from "next/image";
import shared from "./shared.module.css";

const cards = [
  {
    img: "/imagemaster/images/Fotografi.jpg",
    title: "Fotografi e Studi",
    text: "The Image Master è il percorso che i Fotografi aspettavano: l'occasione per fare finalmente chiarezza nella “questione AI” e acquisire le competenze e le abilità necessarie per gestire un processo di creazione pronto per il mercato dei prossimi anni. È rivolto a Fotografi Professionisti e Appassionati che vogliano utilizzare Fotografia, AI e Ritocco in modo professionale e di alto livello. Perfetto per studi che vogliono formare i propri fotografi, assistenti e ritoccatori interni.",
  },
  {
    img: "/imagemaster/images/Retoucher-2.jpg",
    title: "Ritoccatori e Appassionati di Post",
    text: "Chi si occupa di fotoritocco oggi ha la necessità di dominare la Generazione AI e il Ritocco di Alto Profilo. I nostri clienti, agenzie e fotografi, ci chiedono ogni giorno immagini che mescolano Fotografia e AI, per campagne pubblicitarie nazionali e internazionali. Essere in grado di creare immagini belle e credibili, attraverso un processo sinergico Photo + AI + Retouch, è il presente e il futuro di questo settore.",
  },
  {
    img: "/imagemaster/images/Creativi.jpg",
    title: "Creativi, Grafici e Agenzie",
    text: "Il percorso perfetto per formare chi crea immagini: Art Director, team creativi di agenzia, grafici pubblicitari. Un percorso progressivo, che esplora diverse tipologie di immagini, dal Fashion all'Advertising, aiutandoti a costruire il tuo workflow sinergico per creare immagini incredibili.",
  },
];

export default function Audience() {
  return (
    <section className={`${shared.section} ${shared.sectionAlt}`}>
      <div className={shared.container}>
        <span className={shared.eyebrow}>A chi è dedicato</span>
        <h2 className={shared.heading}>
          Chiunque abbia a che fare con il mondo delle immagini dovrebbe
          frequentare questo percorso.
        </h2>
        <div className={shared.grid3}>
          {cards.map((c) => (
            <div key={c.title} className={shared.card}>
              <div className={shared.cardImage}>
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 860px) 100vw, 33vw"
                />
              </div>
              <div className={shared.cardBody}>
                <h3 className={shared.cardTitle}>{c.title}</h3>
                <p className={shared.cardText}>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={`${shared.paragraph} ${shared.narrow}`} style={{ textAlign: "center", marginTop: 40 }}>
          Lo abbiamo creato per te. Per te che vuoi cogliere al volo le
          opportunità ed essere fra i primi a mettere in campo tutta la
          potenza creativa delle super-immagini, per chi sente la necessità
          di aggiornarsi e rimanere al passo. The Image Master è la risposta
          a queste esigenze, ma soprattutto è l&apos;occasione per iniziare
          una strada di successo.
        </p>
      </div>
    </section>
  );
}
