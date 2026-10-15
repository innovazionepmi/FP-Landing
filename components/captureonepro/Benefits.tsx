import Image from "next/image";
import s from "./cop.module.css";

const benefits = [
  "Imparerai ad utilizzare Capture One Pro da zero, fino ad un livello professionale avanzato",
  "Se hai sempre usato Camera Raw, Lightroom o altri sviluppatori Raw, potrai passare a Capture One in modo rapido e indolore",
  "Scoprirai come impostare il lavoro prima di iniziare a scattare, creando la situazione ideale per ottenere grandi risultati",
  "Acquisirai tutte le abilità e le conoscenze che ti servono per gestire sessioni di scatto complesse",
  "Sessioni e Cataloghi non avranno più segreti",
  "Sarai in grado di impostare e portare a termine ogni sessione di scatto in Tethering (Acquisizione Diretta), anche in location",
  "Dominerai gli strumenti di regolazione, correzione e sviluppo di Capture One Pro",
  "Sarai in grado di sviluppare grandissime quantità di immagini in pochissimo tempo, anche durante la sessione di scatto",
  "Ridurrai i tempi di lavorazione in modo incredibile, fino a dimezzarli",
  "Organizzerai e archivierai le tue immagini in modo semplice, veloce e super efficace",
  "Potrai dire addio a file persi o danneggiati, addio alle lunghe ricerche in archivio per trovare foto, mai più clienti nervosi o insoddisfatti",
  "Costruiremo insieme il TUO workflow professionale personalizzato sulle tue esigenze",
  "Diventerai veloce (senza fare le cose di fretta), efficace e infallibile (quasi dai 😉 )",
  "Imparerai a sfruttare gli strumenti e la tecnologia per fare il lavoro noioso",
  "Così potrai concentrarti sulla Fotografia, dove dai il vero valore aggiunto!",
  "Tutto questo in un percorso studiato apposta per te, seguendo il nostro metodo Digital Pro Workflow",
];

const tools: { title: string; text: string[] }[] = [
  {
    title: "Percorso Guidato e Progressivo",
    text: [
      "Capture One Professional Workflow ha un piano didattico chiaro, diviso in moduli settimanali, che potrai seguire senza sforzi. Saprai cosa studiare in ogni momento e dove trovare ciò che ti serve. Ti guideremo passo dopo passo e non perderai mai la strada maestra.",
    ],
  },
  {
    title: "Sessioni in Live Streaming",
    text: [
      "Capture One Professional Workflow è prima di tutto un programma di lavoro live! 5 Sessioni settimanali in Live Streaming di 2 ore per scoprire insieme i processi di lavoro con Capture One Pro. Affronteremo un argomento alla volta, in modo progressivo, costruendo insieme il tuo workflow efficace e potente.",
      "Ogni Live Session in Streaming sarà un’occasione di lavoro insieme, avrai la possibilità di interagire con me e con i coach di FotografiaProfessionale, facendo tutte le domande che vuoi e condividendo il tuo lavoro, se lo desideri. Sarà come essere ad un grande workshop insieme, con la differenza che potrai seguire comodamente da casa tua o dal tuo studio, senza spese di trasferta e senza perdere giornate di lavoro.",
    ],
  },
  {
    title: "Video Corsi",
    text: [
      "Avrai a disposizione un video-corso completo di Capture One Pro completamente nuovo, studiato per lavorare in sinergia con le lezioni in streaming e gli esercizi settimanali.",
    ],
  },
  {
    title: "Esercitazioni Pratiche",
    text: [
      "Mettere in pratica ciò che impari, ogni giorno, è fondamentale per ottenere grandi risultati. L’esperienza dell’Accademia di Post ci ha insegnato che le persone che fanno le esercitazioni crescono e migliorano al doppio della velocità rispetto agli altri. Per questo, quando abbiamo progettato Capture One Professional Workflow abbiamo deciso di creare un’esercitazione pratica per ogni modulo del corso.",
    ],
  },
  {
    title: "Schede Tecniche",
    text: [
      "Abbiamo realizzato una serie di schede tecniche utilissime, che ti metteremo a disposizione durante il percorso. Sarà un fantastico libro degli appunti con tutto ciò che ti serve per sviluppare le tue immagini con Capture One Pro.",
    ],
  },
  {
    title: "Teamwork: Capture One Professional Workflow è un lavoro di squadra!",
    text: [
      "Insieme è meglio: un team di lavoro ti può aiutare a raggiungere gli obiettivi più rapidamente e a superare gli ostacoli alla grande. Tutti abbiamo provato la sensazione di sentirci da soli davanti ad un’impresa da compiere. Beh, avere un team di lavoro al tuo fianco aiuterà ancora di più!",
      "Per questo avrai accesso al Gruppo Facebook Privato “Capture Pro team” nel quale condivideremo contenuti esclusivi e dove ti potrai confrontare con il team di FotografiaProfessionale e con gli altri allievi.",
    ],
  },
];

export default function Benefits() {
  return (
    <>
      <section className={s.section}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Che benefici avrai da questo percorso</h2>
          <Image
            className={s.banner}
            src="/captureonepro/images/Capture-One-Processo-Short.jpg"
            alt="Il processo: scatto in tethering, acquisizione e organizzazione, editing e regolazioni, back-up e archiviazione, esportazione e consegna"
            width={2000}
            height={904}
            sizes="(min-width: 1080px) 1040px, 100vw"
          />
          <div className={`${s.narrow} ${s.prose}`}>
            <p>Ecco solo alcuni dei benefici che avrai frequentando questo percorso:</p>
          </div>
          <ul className={s.checkGrid} style={{ marginTop: 24 }}>
            {benefits.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${s.section} ${s.alt}`}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Gli Strumenti che avrai a disposizione</h2>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              Capture One Professional Workflow è strutturato per essere
              facile da seguire e da frequentare per chiunque, un percorso
              intenso e breve, per mettere subito in pratica ciò che impari:
            </p>
          </div>
          <Image
            className={s.banner}
            style={{ marginTop: 24, marginBottom: 0 }}
            src="/captureonepro/images/Strumenti-Capture.jpg"
            alt="Dirette streaming, video-corsi, esercitazioni pratiche, schede tecniche, teamwork"
            width={2000}
            height={600}
            sizes="(min-width: 1080px) 1040px, 100vw"
          />
          <div className={s.toolGrid}>
            {tools.map((t) => (
              <div className={s.tool} key={t.title}>
                <h3 className={s.h3}>{t.title}</h3>
                {t.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
