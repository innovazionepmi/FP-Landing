import Image from "next/image";
import CtaButton from "./CtaButton";
import s from "./cop.module.css";

const results = [
  "Tempi di lavoro accorciati fino al 50% (hai letto bene, la metà)",
  "Percentuale di errore vicina a zero",
  "Ti potrai concentrare sull’esecuzione degli scatti, aumentando la qualità del risultato finale",
  "Back-up più sicuro ed istantaneo",
  "Immagini già pronte al termine della sessione di scatto",
  "Meno stress e clienti più felici",
  "Margini più alti e meno contestazioni",
];

const needs = [
  "Competenze e abilità tecniche",
  "Gestione Professionale del Tethering (Scatto in Acquisizione Diretta)",
  "Strumenti e Software di livello professionale",
  "Workflow personalizzato in base alle tue esigenze",
  "Editing e Sviluppo del RAW professionale",
  "Processi di Sviluppo ottimizzati per ogni tipo di Immagine (moda, still life, ADV, ecc…)",
  "Team di lavoro addestrato e competente",
  "Una guida esperta che conosca le esigenze dei professionisti",
  "Un percorso breve, intenso, professionale, dritto al punto",
  "Un metodo didattico pensato per i professionisti dell’immagine",
];

export default function Story() {
  return (
    <>
      <section className={`${s.section} ${s.alt}`}>
        <div className={s.wrap}>
          <div className={`${s.narrow} ${s.prose}`}>
            <p className={s.lead}>
              Se ti occupi di Fotografia a livello professionale, sai
              benissimo come stanno le cose oggi, rispetto a qualche anno fa:
            </p>
          </div>
          <div className={s.painGrid}>
            <div className={s.pain}>Devi consegnare molte più immagini</div>
            <div className={s.pain}>In meno tempo</div>
            <div className={s.pain}>Con budget più rigidi (e più bassi)</div>
          </div>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              I clienti hanno bisogno di tantissime immagini di alta qualità,
              scattate, sviluppate, ritoccate e consegnate in tempi
              brevissimi, rispettando budget molto rigidi. E più sono
              importanti i clienti, più sono grosse le produzioni, più
              diventa complesso gestire tutto rimanendo nei tempi e
              guadagnandoci il giusto.
            </p>
            <p>
              Beh, fino ad ora non ti ho detto niente di nuovo vero? La
              situazione è questa da tempo e combatti con questi problemi
              ogni giorno.
            </p>
            <p>
              Continua a leggere, perché fra poco la smetto di parlare di
              problemi e ti do le soluzioni 😉
            </p>
            <p>
              <strong>
                La soluzione che molti scelgono è: lavorare di più, più in
                fretta, facendosi pagare meno.
              </strong>
            </p>
            <p>Lascia che ti dica cosa penso… È una stronzata!</p>
          </div>
          <ul className={`${s.noList} ${s.narrow}`}>
            <li>Non puoi lavorare 12 ore al giorno per riuscire a fare tutto.</li>
            <li>
              Non puoi penalizzare la qualità del tuo lavoro per consegnare
              più in fretta.
            </li>
            <li>
              Non puoi abbassare i prezzi per competere con chi si svende.
            </li>
          </ul>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              Se scegli queste strade ti ritroverai in una spirale negativa
              terribile: lavori sempre di più per riuscire a consegnare
              tutto, chiedi ai tuoi collaboratori ritmi allucinanti
              rischiando di rovinare i rapporti, riduci i tuoi margini sempre
              all’osso lavorando quasi gratis, hai sempre meno tempo da
              dedicare alla ricerca di clienti migliori.
            </p>
            <p>
              <strong>La riconosci questa sensazione?</strong>
            </p>
            <p>
              Facendo il mio lavoro di ritoccatore professionista e di
              formatore, incontro centinaia di fotografi e assistenti ogni
              anno… Sai quante volte ho sentito questa storia?
            </p>
            <p>
              Ma ora ho una buona notizia: ci siamo! C’è una soluzione, è
              alla tua portata e ne parliamo nel prossimo paragrafo 😉
            </p>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <h2 className={s.h2}>La soluzione</h2>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              La soluzione più intelligente, efficace e rapida da mettere in
              pratica è sviluppare un sistema di lavoro che ti permetta di
              essere veloce senza lavorare di fretta, efficace senza correre
              come un pazzo, dentro ai prezzi di mercato guadagnandoci il
              giusto.
            </p>
          </div>
          <div className={s.stepGrid}>
            {[
              "Sviluppare un workflow professionale super efficace.",
              "Organizzare ogni produzione grazie ad un processo efficiente e collaudato.",
              "Scegliere gli strumenti giusti e i software migliori per fargli fare il lavoro duro.",
              "Formare i tuoi collaboratori per renderli più sicuri, autonomi e felici del lavoro che fanno.",
            ].map((t, i) => (
              <div className={s.step} key={t}>
                <span className={s.num}>{i + 1}</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              Per questo abbiamo creato un percorso dedicato a tutti i
              fotografi, gli assistenti digitali e di studio, i ritoccatori e
              i professionisti del mondo dell’immagine.
            </p>
            <p>
              E anche a chi ancora non lo fa per professione, ma vuole
              risultati di alto livello, sempre.
            </p>
            <p>
              <strong>Oggi sono qui per presentartelo!</strong>
            </p>
          </div>
          <Image
            className={s.banner}
            src="/captureonepro/images/Capture-One-Header-Slim-1.jpg"
            alt="Capture One Professional Workflow"
            width={2560}
            height={862}
            sizes="(min-width: 1080px) 1040px, 100vw"
          />
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              È un percorso completamente nuovo, basato su oltre 30 anni di
              esperienza nella produzione di immagini di alta qualità per
              clienti nazionali ed internazionali.
            </p>
            <p>
              È un percorso creato per i professionisti dell’immagine e per
              chi vuol fare le cose sul serio: fotografi, assistenti digitali,
              ritoccatori, team di lavoro e studi fotografici.
            </p>
            <p>
              È la soluzione più efficace per costruire un workflow
              professionale di alto livello, alzare la qualità del risultato,
              abbassare i tempi di esecuzione, ridurre a zero la percentuale
              di errore.
            </p>
          </div>
          <div className={`${s.narrow} ${s.callout}`}>
            <p>
              Per riuscire a gestire più immagini, ottenendo risultati di
              altissima qualità, riducendo i tempi e rispettando i budget,
              non devi diventare un super-eroe e nemmeno allenarti per il
              triathlon olimpico.
            </p>
            <p>La parola magica è “Workflow Professionale“.</p>
          </div>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              Non serve lavorare il doppio delle ore a ritmi forsennati, ma
              far lavorare per te gli strumenti che hai a disposizione,
              organizzando un flusso di lavoro ripetibile ed ottimizzato,
              valorizzando la tua professionalità e quella dei tuoi
              collaboratori
            </p>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.alt}`}>
        <div className={s.wrap}>
          <h2 className={s.h2}>
            Un Workflow Professionale di qualità può garantirti questi
            risultati
          </h2>
          <ol className={s.numList}>
            {results.map((t, i) => (
              <li className={s.numItem} key={t}>
                <span className={s.num}>{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 36 }}>
            <CtaButton href="#form-mid" />
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Cosa ti serve per riuscirci?</h2>
          <ol className={s.numList}>
            {needs.map((t, i) => (
              <li className={s.numItem} key={t}>
                <span className={s.num}>{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
