import shared from "./shared.module.css";

export default function Trainer() {
  return (
    <section className={`${shared.section} ${shared.sectionAlt}`}>
      <div className={`${shared.container} ${shared.narrow}`}>
        <span className={shared.eyebrow}>Chi è il Trainer</span>
        <p
          className={shared.paragraph}
          style={{ textAlign: "center", fontWeight: 700 }}
        >
          Dalla scrivania di Simone Poletti — 12/11/2025
        </p>
        <p className={shared.paragraph}>
          Mi occupo di fotoritocco da oltre 30 anni e da 15 aiuto fotografi e
          ritoccatori a sviluppare al massimo il loro potenziale, in modo che
          possano ottenere i risultati personali, professionali ed economici
          che desiderano.
        </p>
        <p className={shared.paragraph}>
          Ho realizzato almeno 50 video-corsi su Photoshop, tenuto decine e
          decine di workshop e conferenze sulla post e, insieme al mio team,
          nel 2015 ho creato l&apos;unica Accademia di PostProduzione in
          Italia. L&apos;Accademia di Post è l&apos;unico percorso per la
          formazione nel fotoritocco di livello professionale, oggi è alla
          17a edizione e ha &ldquo;sfornato&rdquo; decine di professionisti
          nel mondo della fotografia e del ritocco.
        </p>
        <p className={shared.paragraph}>
          Soprattutto sono un Ritoccatore Professionista e il Direttore
          Creativo di un&apos;Agenzia di Comunicazione. In questi ultimi
          anni, insieme al mio team, ho realizzato immagini che uniscono
          Fotografia, Generazione AI e Ritocco Professionale per campagne
          pubblicitarie di aziende come TIM ed Enel, solo per fare due
          esempi.
        </p>
        <p className={shared.paragraph}>
          In questo percorso sarò il tuo punto di riferimento principale e
          il trainer per tutte le lezioni in streaming, ma sarò accompagnato
          dalla AI Artist del nostro team e da altri professionisti del
          settore.
        </p>
        <p className={shared.paragraph} style={{ textAlign: "right", fontWeight: 700 }}>
          Simone Poletti – Co-Fondatore di FotografiaProfessionale.it
        </p>
      </div>
    </section>
  );
}
