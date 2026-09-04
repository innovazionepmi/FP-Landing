import LeadForm from "@/components/LeadForm";
import shared from "./shared.module.css";

export default function FinalCta() {
  return (
    <section className={`${shared.section} ${shared.sectionOrange}`} id="form-footer-wrap">
      <div className={`${shared.container} ${shared.narrow}`}>
        <h2 className={shared.heading} style={{ color: "var(--white)" }}>
          Vuoi partecipare a The Image Master?
        </h2>
        <p
          className={shared.paragraph}
          style={{ textAlign: "center", color: "var(--white)" }}
        >
          Compila il modulo qui sotto per richiedere maggiori informazioni e
          candidarti ad uno dei posti disponibili. Ricordati di inserire
          tutti i tuoi dati e la mail che usi più spesso: riceverai la
          chiamata della nostra consulente didattica per scegliere insieme
          il miglior percorso per te. Nei prossimi giorni tieni d&apos;occhio
          il telefono e rispondi a chiamate e messaggi WhatsApp, siamo noi
          che cerchiamo di contattarti 😉
        </p>

        <div style={{ marginTop: 32 }}>
          <LeadForm formId="form-footer" />
        </div>

        <div style={{ marginTop: 48, color: "var(--white)" }}>
          <p className={shared.paragraph} style={{ color: "var(--white)", fontSize: "0.9rem" }}>
            PS: Mentre tu ci stai pensando, gli altri si iscrivono e occupano
            i posti disponibili… cosa aspetti?
          </p>
          <p className={shared.paragraph} style={{ color: "var(--white)", fontSize: "0.9rem" }}>
            PPS: Questo percorso costa come tre giornate di Workshop dal vivo
            e avrai molto, molto di più!
          </p>
        </div>
      </div>
    </section>
  );
}
