import Image from "next/image";
import shared from "./shared.module.css";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    img: "/images/Angelo-Florio.jpg",
    name: "Angelo Florio",
    role: "Fotografo Professionista",
    quote:
      "Prima di iniziare THE IMAGE MASTER, la mia conoscenza sull'uso dell'AI in fotografia si limitava a chat GPT usato in modo molto basico. Questo corso è andato ben oltre le mie aspettative: mi ha dato una chiara visione delle reali possibilità dell'AI e dei suoi limiti. Soprattutto mi ha dato un metodo di lavoro per sfruttare un processo integrato fra AI, fotografia e postproduzione.",
  },
  {
    img: "/images/Marco-Vagnetti.jpg",
    name: "Marco Vagnetti",
    role: "Fotografo e Ritoccatore Professionista",
    quote:
      "Questo corso mi ha dato il confronto produttivo che cercavo e mi ha permesso di comprendere i limiti e le potenzialità di questo strumento. Il punto forte è stata la proposta concreta di seguire un processo creativo e pratico dall'inizio alla fine. Consiglio The Image Master a tutti quelli che lavorano con l'immagine.",
  },
  {
    img: "/images/Liana-Celano.jpg",
    name: "Liana Celano",
    role: "",
    quote:
      "Integrare fotografia, AI e ritocco senza un flusso di lavoro adeguato era il mio limite. Grazie a The Image Master ho costruito vere e proprie mappe mentali dell'intero processo creativo e produttivo: oggi riesco a valutare fin dall'inizio quale approccio sia più adatto al progetto e come integrare fotografia, AI e ritocco in modo efficace.",
  },
  {
    img: "/images/Dario-Quinzani.jpg",
    name: "Dario Quinzani",
    role: "",
    quote:
      "Il passaggio che ritengo più importante è quello riguardante la gestione della creatività, perché fornisce un metodo chiaro per dare fondamenta solide a un progetto creativo. Il corso mi ha dato sicurezza e basi solide per tradurre in immagini le idee, affrontando ogni dettaglio del processo: dalla gestione delle idee, allo scatto, alla generazione AI, fino al ritocco.",
  },
];

export default function Testimonials() {
  return (
    <section className={shared.section}>
      <div className={shared.container}>
        <span className={shared.eyebrow}>Testimonianze</span>
        <h2 className={shared.heading}>Vuoi sapere cosa ne pensano gli allievi?</h2>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.header}>
                <div className={styles.avatar}>
                  <Image src={t.img} alt={t.name} fill sizes="56px" />
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  {t.role && <div className={styles.role}>{t.role}</div>}
                </div>
              </div>
              <p className={styles.quote}>{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
