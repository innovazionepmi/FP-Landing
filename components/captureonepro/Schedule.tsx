import Image from "next/image";
import CtaButton from "./CtaButton";
import s from "./cop.module.css";

const dates = [
  {
    when: "Giovedì 12 Novembre 2026",
    what: "Kick off – Workflow Professionale con Capture One Pro",
  },
  {
    when: "Giovedì 19 Novembre 2026",
    what: "Organizzare il lavoro: cataloghi, sessioni, organizzazione dei file, archiviazione e sicurezza",
  },
  {
    when: "Giovedì 26 Novembre 2026",
    what: "Sviluppo del Raw – Processi di Sviluppo, Regolazioni, Ritocco dei difetti, Strumenti AI",
  },
  {
    when: "Giovedì 03 Dicembre 2026",
    what: "Gestione Avanzata delle Luci e del Colore, Regolazioni Avanzate, Automazione dei Processi",
  },
  {
    when: "Giovedì 10 Dicembre 2026",
    what: "Capture One Pro sul set: Tethering e flusso operativo (diretta dal set)",
  },
];

const bonuses: { title: string; text: string[] }[] = [
  {
    title: "BONUS nr.1 – Registrazione di TUTTE le Live Session",
    text: [
      "Ti regaliamo la registrazione di tutte le Sessioni in Live Streaming!",
      "Avrai accesso ad un’area riservata dove troverai tutte le registrazioni delle sessioni live: pochi giorni dopo ogni Live Session settimanale, troverai la lezione disponibile per riguardarla tutte le volte che vuoi.",
      "Così potrai rivedere ogni passaggio e, anche se per caso non riuscissi a partecipare alla live, non ti perderesti neanche un secondo di Capture One Professional Workflow!",
    ],
  },
  {
    title: "BONUS nr.2 – Aggiornamenti Gratuiti delle Video-Lezioni",
    text: [
      "Vogliamo che i contenuti di Capture One Professional Workflow non invecchino mai.",
      "Per questo abbiamo scelto di fare le sessioni in Live Streaming e per questo abbiamo deciso di aggiornare le video-lezioni quando usciranno delle novità in Capture One Pro. Aggiornare la singola video-lezione ci permetterà di essere più veloci e più agili e tu avrai sempre un corso aggiornato.",
    ],
  },
  {
    title: "BONUS nr.3 – Una Live Session IN REGALO!",
    text: [
      "Ok ok, 5 Live Session in Streaming non bastano? Ecco in regalo la sesta!",
      "Una super-sessione speciale di due ore durante la quale andremo ad approfondire i temi dello sviluppo e ti aiuterò a creare il tuo Workflow Personalizzato.",
    ],
  },
  {
    title: "BONUS nr.4 – Accesso al Gruppo Facebook",
    text: [
      "Avrai accesso ad un gruppo Facebook Esclusivo dove potrai interagire con me e il mio team, condividere il tuo lavoro e le tue domande e ricevere commenti e aiuto anche dagli altri partecipanti al percorso.",
      "Sarà un luogo dove crescere insieme 🙂",
    ],
  },
  {
    title: "BONUS nr.5 – Modulo sulla creazione del Workflow",
    text: [
      "Un modulo esclusivo tutto dedicato alla creazione del tuo Workflow personalizzato.",
      "Oltre alla lezione in streaming, avrai un video-corso esclusivo che ti aiuterà a creare il flusso di lavoro ideale per te. Avrai a disposizione video, schede da compilare e un pannello da stampare e personalizzare.",
    ],
  },
];

export default function Schedule() {
  return (
    <>
      <section className={`${s.section} ${s.alt}`}>
        <div className={s.wrap}>
          <h2 className={s.h2}>
            Quando si svolgeranno le sessioni in Live Streaming?
          </h2>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              Le Live Session in Streaming iniziano a Novembre 2026, con
              cadenza settimanale.
            </p>
            <p>
              Prima di Novembre, riceverai in anticipo i primi video-corsi, in
              modo da iniziare subito a prepararti 😉
            </p>
            <p>
              <strong>Ecco le date nel dettaglio:</strong>
            </p>
          </div>
          <div className={`${s.dates} ${s.narrow}`}>
            {dates.map((d) => (
              <div className={s.date} key={d.when}>
                <div className={s.dateWhen}>{d.when}</div>
                <div className={s.dateWhat}>{d.what}</div>
              </div>
            ))}
          </div>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>Non male vero?</p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <div className={`${s.narrow} ${s.prose}`}>
            <p className={s.lead} style={{ textAlign: "center" }}>
              Beh, non è finita qui: iscrivendoti a Capture One Professional
              Workflow avrai diritto a 5 incredibili bonus!
            </p>
          </div>
          <div className={s.bonusGrid}>
            {bonuses.map((b) => (
              <div className={s.bonus} key={b.title}>
                <Image
                  src="/captureonepro/images/Bonus-Capture.jpg"
                  alt=""
                  width={192}
                  height={192}
                  sizes="96px"
                />
                <div>
                  <h3 className={s.h3}>{b.title}</h3>
                  {b.text.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <CtaButton href="#form-final" />
          </div>
        </div>
      </section>
    </>
  );
}
