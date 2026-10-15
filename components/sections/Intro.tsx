import LeadForm from "@/components/LeadForm";
import shared from "./shared.module.css";

export default function Intro() {
  return (
    <section className={shared.section}>
      <div className={`${shared.container} ${shared.narrow}`}>
        <p className={shared.paragraph}>
          Parlo spesso con fotografi, ritoccatori e creativi. Ho notato, in
          questo periodo, un grande spaesamento nei confronti del fenomeno
          &ldquo;Intelligenza Artificiale&rdquo;. Molti mi dicono: &ldquo;Non
          capisco cosa devo studiare, ogni settimana esce un nuovo software
          rivoluzionario… che poi rivoluzionario non è&rdquo;. Altri sono
          disorientati: &ldquo;Ha senso continuare con la fotografia e il
          ritocco quando tutti ti dicono che l&apos;AI ci
          sostituirà?&rdquo;
        </p>
        <p className={shared.paragraph}>
          Ognuno deve per forza esprimere la sua opinione, anche se non ne ha
          alcun titolo e parla di un mondo che non conosce. Ci sono mille
          voci diverse e mille strumenti che promettono risultati
          miracolosi, risultando spesso deludenti.
        </p>
        <p className={shared.paragraph}>
          <strong>Che fare?</strong>
        </p>
        <p className={shared.paragraph}>
          Ho deciso di fare tabula rasa di tutte la stronz*** che sento in
          giro, per aiutarti a capire cosa serve davvero e come puoi usare
          l&apos;Intelligenza Artificiale come strumento di lavoro vero,
          serio e professionale!
        </p>
        <p className={shared.paragraph}>
          Insieme al mio team di lavoro ho creato un percorso completamente
          nuovo e innovativo che ti permetterà di raggiungere risultati
          straordinari e creare le immagini che il mercato sta già
          chiedendo, le immagini che i nostri clienti ci commissionano ogni
          settimana!
        </p>
        <p className={shared.paragraph}>
          <strong>
            Un&apos;immagine professionale nasce da un progetto, un flusso di
            lavoro e una visione.
          </strong>
        </p>
        <ul className={shared.bulletList}>
          <li>
            Ti servono le competenze necessarie per combinare fotografia,
            generazione AI e ritocco avanzato per arrivare a un risultato
            coerente, credibile e potente.
          </li>
          <li>
            Ti servono le abilità tecniche e pratiche nella fotografia per
            scattare immagini efficaci e utili al risultato finale.
          </li>
          <li>
            Ti servono competenze nel fotoritocco per rendere tutto coerente
            e perfetto.
          </li>
          <li>
            Ti serve la conoscenza degli strumenti di Generazione AI e di
            enhancement per creare immagini credibili e realistiche.
          </li>
          <li>
            Ti serve qualcuno che ti guidi in questo percorso e ti aiuti a
            trasformare la creatività in immagini, sfruttando la potenza di
            ognuno di questi strumenti.
          </li>
        </ul>
        <p className={shared.paragraph}>
          Oggi puoi avere tutto questo in un percorso unico, grazie al quale
          potrai apprendere il nostro sistema di lavoro esclusivo e
          raggiungere risultati incredibili.
        </p>
      </div>

      <div className={shared.ctaWrap} id="form-hero-wrap">
        <h2 className={shared.heading}>Vuoi partecipare a The Image Master?</h2>
        <p className={`${shared.paragraph} ${shared.narrow}`} style={{ textAlign: "center" }}>
          Compila il modulo qui sotto per richiedere maggiori informazioni e
          candidarti ad uno dei posti disponibili per questo incredibile
          percorso. Ricordati di inserire tutti i tuoi dati e la mail che usi
          più spesso. Riceverai la chiamata della nostra consulente
          didattica, che risponderà a tutte le tue domande e insieme
          sceglierete il miglior percorso per te.
        </p>
        <div style={{ marginTop: 32 }}>
          <LeadForm formId="form-hero" thankYouPath="/imagemaster/grazie" origine="imagemaster" />
        </div>
      </div>
    </section>
  );
}
