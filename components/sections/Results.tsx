import Image from "next/image";
import shared from "./shared.module.css";
import styles from "./Results.module.css";

const outcomes = [
  "Creare immagini incredibili, realistiche e professionali.",
  "Integrare AI e fotografia in modo consapevole e coerente.",
  "Costruire il tuo workflow di alto livello per ADV, Fashion e Still Life.",
  "Gestire Scatto Fotografico, Generazione AI, Enhancing e Ritocco come un Pro.",
  "Offrire un livello di qualità visiva superiore e competitivo.",
];

const gallery = [
  "Pollo-DSCF8487.jpg",
  "BabaSucco.jpg",
  "Ambientata-Ascensore-ok.jpg",
  "2.palla-con-bottiglia.jpg",
  "Modella-in-Taxi-01_NO-BRAND.jpg",
  "Modella-in-Strada-02_NO-BRAND.jpg",
  "Modella-in-Strada-01_NO-BRAND.jpg",
  "KV1-Atleta-in-Palestra.jpg",
  "KV3-Atleta-in-spogliatoio.jpg",
  "KV2-Atleta-in-Pista.jpg",
  "MODELLOCATION_Idea4.jpg",
  "MODELLOCATION_Idea2.jpg",
  "MODELLOCATION_Idea1.jpg",
  "Miss-Dior-new.jpg",
  "Ambiente-vicolo-modella-6_definitivo-copia.jpg",
  "miele-di-agrumi_Renata-Petti.jpeg",
];

export default function Results() {
  return (
    <section className={shared.section}>
      <div className={shared.container}>
        <span className={shared.eyebrow}>Il risultato finale</span>
        <h2 className={shared.heading}>
          Alla fine di questo percorso sarai in grado di…
        </h2>
        <ul className={`${shared.bulletList} ${shared.narrow}`}>
          {outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
        <p
          className={`${shared.paragraph} ${shared.narrow}`}
          style={{ textAlign: "center", marginTop: 32 }}
        >
          Questo è il livello che puoi raggiungere anche tu! Le immagini qui
          sotto sono solo una piccolissima parte di quelle realizzate dagli
          allievi della prima edizione di The Image Master e alcuni esempi
          delle immagini che creiamo ogni giorno.
        </p>
        <div className={styles.gallery}>
          {gallery.map((file) => (
            <div key={file} className={styles.tile}>
              <Image
                src={`/images/${file}`}
                alt="Immagine creata durante il percorso The Image Master (foto + AI + post)"
                fill
                sizes="(max-width: 860px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        <p className={styles.disclaimer}>
          *queste immagini sono state realizzate all&apos;interno del
          percorso, solo a scopo didattico e non commerciale. Tutti i
          prodotti fotografati o generati dagli allievi sono stati
          utilizzati solo a scopo didattico. I diritti di utilizzo delle
          immagini sono dei rispettivi autori, concessi a
          FotografiaProfessionale solo per illustrare il percorso The Image
          Master.
        </p>
      </div>
    </section>
  );
}
