import Image from "next/image";
import s from "./cop.module.css";

const outcomes = [
  "Flusso di lavoro tagliato su misura per te: veloce, efficace, invincibile",
  "Tempi di lavoro ridotti fino al 50%",
  "Qualità del risultato di alto livello",
  "Gestione del Tethering da Digital Tech Professionista",
  "Processi di Sviluppo e Regolazioni per ogni tipo di immagine",
  "Percentuale di errore ridotta a zero",
  "Clienti più felici e meno revisioni",
  "Consegne più veloci (così fatturi prima)",
];

export default function Trainer() {
  return (
    <>
      <section className={s.section}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Chi è il Trainer</h2>
          <div className={s.trainer}>
            <Image
              className={s.trainerPhoto}
              src="/captureonepro/images/Pollo-DSCF8487.jpg"
              alt="Simone Poletti"
              width={480}
              height={480}
              sizes="240px"
            />
            <div className={s.prose}>
              <p className={s.dateline}>
                Dalla scrivania di Simone Poletti — 08/09/2026
              </p>
              <p>
                Mi occupo di fotoritocco da oltre 35 anni e da quasi 20 aiuto
                fotografi e ritoccatori a sviluppare al massimo il loro
                potenziale, in modo che possano ottenere i risultati
                personali, professionali ed economici che desiderano.
              </p>
              <p>
                Ho realizzato almeno 50 video-corsi su Photoshop, tenuto
                decine e decine di workshop e conferenze sulla post e,
                insieme al mio team, nel 2015 ho creato l’unica Accademia di
                PostProduzione in Italia.
              </p>
              <p>
                L’Accademia di Post è l’unico percorso per la formazione nel
                fotoritocco di livello professionale, oggi è alla 17a
                edizione e ha “sfornato” decine di professionisti nel mondo
                della fotografia e del ritocco.
              </p>
              <p>
                Sono l’autore del Primo video-corso sul Capture One Pro
                realizzato in Italia e sono stato uno dei pochissimi Phase
                One Ambassador Italiani, fino a quando il programma
                Ambassador è esistito 😉
              </p>
              <p>
                Soprattutto sono un Ritoccatore e un Digital Tech
                professionista, uso Capture One Pro ogni giorno per lavoro,
                sui set e sviluppando le immagini dei miei clienti.
              </p>
              <p>
                A un certo punto, mi sono fatto una domanda: “Cosa possiamo
                fare per aiutare i professionisti a migliorare (e di tanto)
                i loro risultati, la loro efficacia e la loro vita
                professionale?”
              </p>
              <p>Questo percorso è la mia risposta.</p>
              <p className={s.signature}>
                Simone Poletti – Co-Fondatore di FotografiaProfessionale.it
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.navy}`}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Cosa otterrai alla fine del percorso?</h2>
          <div className={`${s.narrow} ${s.prose} ${s.center}`}>
            <p>
              È la domanda che, secondo me, dovresti fare sempre quando decidi
              di partecipare ad un corso. Cosa otterrò alla fine?
            </p>
          </div>
          <ul className={s.checkGrid} style={{ marginTop: 28 }}>
            {outcomes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Chi te lo garantisce?</h2>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              Chi ti garantisce che Capture One Professional Workflow sia un
              percorso davvero di qualità e che i tuoi trainer siano
              qualificati?
            </p>
            <p>
              Sono un Ritoccatore e Digital Tech professionista, autore dei
              primi (e degli unici) video-corsi in Italiano su Capture One
              Pro. Lavoro con Capture ogni giorno e ho formato centinaia di
              fotografi, compresi molti professionisti di alto livello.
            </p>
            <p>
              Il nostro team è formato solo da professionisti: fotografi,
              ritoccatori, assistenti digitali, tutte persone che ogni giorno
              mettono in pratica sul set quello che imparerai anche tu in
              questo percorso.
            </p>
            <p>
              FotografiaProfessionale è il brand italiano numero 1 nella
              formazione per la Fotografia e il Fotoritocco con una community
              di quasi 200.000 persone, oltre 350.000 corsi distribuiti e una
              percentuale di soddisfazione degli utenti che supera il 99,8%.
            </p>
            <p>
              Collaboriamo da anni con aziende come FUJIFILM Italia (che è
              partner di questo percorso), EIZO e WACOM, veri punti di
              riferimento del settore.
            </p>
            <p>
              Siamo i creatori della prima (e unica) Accademia italiana
              dedicata al Fotoritocco Professionale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
