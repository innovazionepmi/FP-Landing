import shared from "./shared.module.css";

const dates = [
  ["Martedì 06 Ottobre 2026", "Kick off, Il Mercato e il mestiere di creatore di Immagini, Il Workflow per la Creazione Sinergica"],
  ["Martedì 13 Ottobre 2026", "Educazione Visiva e Creatività, Usare l'AI come Partner Creativo"],
  ["Martedì 20 Ottobre 2026", "FASHION — Creazione dei Modelli e dei vestiti da immagini reali"],
  ["Martedì 27 Ottobre 2026", "FASHION — Fitting, inserimento in ambiente e ritocco per il realismo"],
  ["Martedì 03 Novembre 2026", "STILL LIFE PRODOTTO — Generazione dell'ambiente, scelta e enhancing"],
  ["Martedì 10 Novembre 2026", "STILL LIFE PRODOTTO — Scatto in studio in funzione dell'ambiente AI scelto"],
  ["Martedì 17 Novembre 2026", "STILL LIFE PRODOTTO — Inserimento e ritocco"],
  ["Martedì 24 Novembre 2026", "ADVERTISING — Generazione ambiente e/o contributi"],
  ["Martedì 01 Dicembre 2026", "ADVERTISING — Inserimento immagine fornita e ritocco"],
  ["Mercoledì 09 Dicembre 2026", "Ritocco Avanzato, Color Grading e Finishing"],
  ["Martedì 15 Dicembre 2026", "Lezione BONUS: Generazione video da immagini"],
];

export default function Schedule() {
  return (
    <section className={`${shared.section} ${shared.sectionAlt}`}>
      <div className={`${shared.container} ${shared.narrow}`}>
        <span className={shared.eyebrow}>Il calendario</span>
        <h2 className={shared.heading}>Quando si svolgerà The Image Master?</h2>
        <p className={shared.paragraph} style={{ textAlign: "center" }}>
          Le Live Session in Streaming iniziano ad Ottobre 2026, con cadenza
          settimanale, l&apos;orario delle Live è dalle 12:30 alle 14:30.
          Prima di Ottobre, riceverai in anticipo i primi corsi, in modo da
          iniziare subito a prepararti 😉
        </p>
        <ul className={shared.bulletList} style={{ marginTop: 24 }}>
          {dates.map(([date, topic]) => (
            <li key={date}>
              <strong>{date}</strong> — {topic}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
