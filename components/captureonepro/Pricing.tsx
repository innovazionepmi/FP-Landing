import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import s from "./cop.module.css";

const included = [
  "5 SESSIONI ESCLUSIVE in LIVE STREAMING DI 2 ore",
  "TUTTI I NUOVI VIDEO-CORSI",
  "ESERCITAZIONI PRATICHE",
  "LE SCHEDE TECNICHE in PDF",
  "ACCESSO AL GRUPPO “CAPTURE PRO TEAM”",
  "IL TUO PROCESSO DI LAVORO DA PRO",
  "IL MIGLIOR PERCORSO CHE TU POSSA SOGNARE",
  "TUTTI I BONUS!",
];

export default function Pricing() {
  return (
    <>
      <section className={`${s.section} ${s.alt}`}>
        <div className={s.wrap}>
          <h2 className={s.h2}>Quanto Costa?</h2>
          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              Capture One Professional Workflow è un percorso eccezionale e
              credo che possa darti degli enormi vantaggi operativi ed
              economici.
            </p>
            <p>
              Essere più veloci ed efficienti, sbagliare meno e consegnare
              prima, alzando la qualità, significa avere clienti più felici e
              soddisfatti. Devo spiegarti quanto può valere? 😉
            </p>
            <p>
              Però so anche che in questo momento starai pensando… “Tutto
              questo costerà un sacco di soldi e vedrai che non me lo posso
              permettere…”
            </p>
            <p>
              Sì, penso che Capture One Professional Workflow abbia un
              grandissimo valore e ragionando sul prezzo di vendita sono
              giunto a una conclusione: questo percorso dovrebbe costare
              almeno 1.200 euro.
            </p>
            <p>
              Credo che sia un prezzo equo e che ripaghi solo in parte il
              valore delle competenze e delle abilità che apprenderai.
            </p>
            <p>
              <strong>
                Ma ho una notizia straordinaria per te: durante il periodo di
                lancio puoi iscriverti a Capture One Professional Workflow ad
                un prezzo indecente!
              </strong>
            </p>
            <p>Solo per il periodo di lancio e solo fino ad esaurimento posti!</p>
          </div>

          <div className={s.priceCard}>
            <p className={s.priceTitle}>
              IL PERCORSO CAPTURE ONE PROFESSIONAL WORKFLOW
            </p>
            <ul className={s.priceItems}>
              {included.map((t, i) => (
                <li key={t}>{i > 0 ? "+ " : ""}{t}</li>
              ))}
            </ul>
            <p className={s.priceOld}>a soli 1.200,00 euro + IVA</p>
            <p className={s.priceNew}>a soli 347,00 euro + IVA</p>
          </div>

          <div className={`${s.narrow} ${s.prose}`}>
            <p>
              Sì sì, hai letto bene, puoi avere tutto questo al prezzo di una
              giornata di workshop.
            </p>
            <p>Recupererai il costo di questo percorso nella prima mattina di lavoro.</p>
            <p>Perché?</p>
            <p>
              Perché voglio che tutti i professionisti possano avere accesso a
              questo percorso e alle competenze che ti trasmetteremo.
            </p>
            <p>
              E anche perché sono convinto di una cosa: chiunque parteciperà a
              questo percorso lo consiglierà a tutti gli amici e ai colleghi
              😉
            </p>
          </div>
          <div className={s.alert} style={{ marginTop: 28 }}>
            ATTENZIONE: la promo di lancio termina il 5 Novembre
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.navy}`} id="form-final" data-lead-form>
        <div className={s.wrap}>
          <Image
            className={s.banner}
            src="/captureonepro/images/Capture-One-Header-Slim-2.jpg"
            alt="Capture One Professional Workflow — Percorso completo su Capture One Pro"
            width={2560}
            height={1007}
            sizes="(min-width: 1080px) 1040px, 100vw"
          />
          <div className={s.formIntro}>
            <h2 className={s.h2}>Capture One Professional Workflow</h2>
            <p>
              Se vuoi ulteriori informazioni o hai qualche dubbio, compila il
              modulo di contatto qui sotto.
            </p>
            <p>Ti chiameremo per rispondere a tutte le tue domande.</p>
          </div>
          <LeadForm
            formId="lead-form-final"
            thankYouPath="/captureonepro/grazie"
            origine="captureonepro"
          />

          <div className={s.letter}>
            <p>
              Probabilmente hai già smesso di leggere e stai concludendo
              l’acquisto del tuo nuovo percorso.
            </p>
            <p>Bene, non vedo l’ora di iniziare! 🙂</p>
            <p>A presto.</p>
            <p>
              <strong>Simone Poletti</strong>
            </p>
            <p className={s.ps}>
              PS: Mentre tu ci stai pensando, gli altri si iscrivono e
              occupano i posti disponibili… cosa aspetti?
            </p>
            <p className={s.ps}>
              PPS: Questo percorso costa come una giornata di Workshop dal
              vivo e avrai molto, molto di più!
            </p>
            <p className={s.ps}>
              PPPS: Ma sul serio stai ancora leggendo? Clicca su quel tasto e
              ci vediamo in Capture One Professional Workflow!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
