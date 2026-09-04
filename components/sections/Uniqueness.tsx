import shared from "./shared.module.css";

const points = [
  "The Image Master è l'unico percorso che ti permette di acquisire le competenze e le abilità per creare immagini di alto livello con Fotografia + Generazione AI + Ritocco Professionale.",
  "The Image Master è l'unico percorso creato da un team di Ritoccatori e AI Artist professionisti.",
  "The Image Master è l'unico percorso creato da chi fa questo ogni giorno, realizzando immagini per le campagne pubblicitarie di clienti reali.",
  "The Image Master è l'unico percorso completo che unisce Live Streaming, Video-Corsi e tanta Pratica.",
];

export default function Uniqueness() {
  return (
    <section className={`${shared.section} ${shared.sectionOrange}`}>
      <div className={`${shared.container} ${shared.narrow}`}>
        <h2 className={shared.heading} style={{ color: "var(--white)" }}>
          Cosa rende questo percorso UNICO
        </h2>
        <p
          className={shared.paragraph}
          style={{ textAlign: "center", color: "var(--white)", fontWeight: 700 }}
        >
          Sarò chiaro: non esiste niente di simile là fuori.
        </p>
        <ul className={`${shared.bulletList} ${shared.bulletListOnDark}`}>
          {points.map((p) => (
            <li key={p} style={{ color: "var(--white)" }}>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
