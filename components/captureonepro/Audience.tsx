import CtaButton from "./CtaButton";
import s from "./cop.module.css";

const yes = [
  "Fotografi Professionisti",
  "Fotografi non ancora pro che vogliono fare le cose sul serio",
  "Team di lavoro di Aziende e Studi Fotografici",
  "Assistenti Digitali (Digital Tech)",
  "Assistenti di Studio",
  "Ritoccatori Professionisti",
  "Chi ha sempre usato Lightroom o Camera Raw e vuole cambiare passo",
];

const no = [
  "Per chi non ha più voglia di crescere",
  "Per chi “Io ho sempre fatto così”",
  "Per chi lo fa solo per gioco",
  "Per chi crede che “Tanto l’AI…”",
  "Per chi non vuole dominare Capture One Pro",
];

export default function Audience() {
  return (
    <section className={`${s.section} ${s.alt}`}>
      <div className={s.wrap}>
        <div className={s.fitGrid}>
          <div className={`${s.fit} ${s.fitYes}`}>
            <h3>Per chi è questo percorso</h3>
            <ul>
              {yes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className={`${s.fit} ${s.fitNo}`}>
            <h3>Per chi NON è questo percorso</h3>
            <ul>
              {no.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${s.narrow} ${s.prose}`} style={{ marginTop: 40 }}>
          <p>
            <strong>
              Chiunque abbia a che fare con il mondo delle immagini dovrebbe
              frequentare questo percorso.
            </strong>
          </p>
          <p>Lo abbiamo creato per te.</p>
          <p>
            Ogni Fotografo Professionista e ogni Studio di Fotografia possono
            ottenere benefici incredibili da Capture One Professional
            Workflow, rivoluzionando i propri risultati.
          </p>
          <p>
            Ogni Digital tech e ogni Assistente di Studio dovrebbero
            possedere le competenze e il metodo che questo percorso
            garantisce, per avere un grande vantaggio competitivo rispetto ai
            colleghi freelance.
          </p>
          <p>
            Ogni Ritoccatore dovrebbe dominare il processo di lavoro con
            Capture One Pro per velocizzare i propri processi e migliorare
            incredibilmente il livello del successivo ritocco.
          </p>
          <p>
            Chi fino ad oggi ha lavorato con Lightroom, Camera Raw o altri
            software per la gestione del raw, oggi può fare un deciso salto
            in avanti!
          </p>
          <p>
            <strong>
              Chiunque faccia le cose sul serio dovrebbe correre ad
              iscriversi!
            </strong>
          </p>
        </div>
        <div style={{ marginTop: 36 }}>
          <CtaButton href="#form-mid" />
        </div>
      </div>
    </section>
  );
}
