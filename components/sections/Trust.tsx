import shared from "./shared.module.css";

export default function Trust() {
  return (
    <section className={`${shared.section} ${shared.sectionAlt}`}>
      <div className={`${shared.container} ${shared.narrow}`}>
        <h2 className={shared.heading}>
          Chi ti garantisce che avrai quello che prometto?
        </h2>
        <p className={shared.paragraph}>
          La prima edizione di The Image Master è andata sold-out in 2
          settimane con un totale di 100 iscritti. Il livello di
          soddisfazione medio è stato altissimo. La cosa davvero importante
          e che ci ha dato particolare soddisfazione sono i risultati degli
          allievi, di cui hai visto qualche esempio qui sopra.
        </p>
        <p className={shared.paragraph}>
          FotografiaProfessionale è il brand italiano numero 1 nella
          formazione per la Fotografia e il Fotoritocco, con una community
          di quasi 200.000 persone, oltre 350.000 corsi distribuiti e una
          percentuale di soddisfazione degli utenti che supera il 99,8%.
        </p>
        <p className={shared.paragraph}>
          Collaboriamo da anni con aziende come <strong>FUJIFILM Italia</strong>,{" "}
          <strong>EIZO</strong> (partner di questo percorso) e{" "}
          <strong>WACOM</strong>, veri punti di riferimento del settore. Siamo
          i creatori della prima (e unica) Accademia italiana dedicata al
          Fotoritocco Professionale.
        </p>
        <p className={shared.paragraph}>
          Il nostro team è formato da Ritoccatori, Fotografi e AI Specialist
          professionisti che lavorano ogni giorno per clienti nazionali ed
          internazionali. Solo negli ultimi mesi abbiamo generato e
          ritoccato immagini per brand come <strong>ENEL</strong>,{" "}
          <strong>TIM</strong>, <strong>Old Spice</strong>,{" "}
          <strong>Fratelli Carli</strong>, <strong>Nestlè</strong>,{" "}
          <strong>FILA</strong> e per agenzie e producer del livello di{" "}
          <strong>Saatchi &amp; Saatchi</strong>, <strong>Havas</strong> e{" "}
          <strong>Think Cattleya</strong>.
        </p>
        <p className={shared.paragraph}>
          Il metodo di lavoro che acquisirai in questo percorso è lo stesso
          che usiamo ogni giorno per i nostri clienti.
        </p>
      </div>
    </section>
  );
}
