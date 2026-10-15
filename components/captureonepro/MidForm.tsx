import LeadForm from "@/components/LeadForm";
import s from "./cop.module.css";

// Secondo punto di raccolta contatti, a metà pagina: chi è già convinto
// non deve scorrere fino in fondo.
export default function MidForm() {
  return (
    <section
      className={`${s.section} ${s.navy}`}
      id="form-mid"
      data-lead-form
    >
      <div className={s.wrap}>
        <div className={s.formIntro}>
          <h2 className={s.h2}>Capture One Professional Workflow</h2>
          <p>
            Se vuoi ulteriori informazioni o hai qualche dubbio, compila il
            modulo di contatto qui sotto.
          </p>
          <p>Ti chiameremo per rispondere a tutte le tue domande.</p>
        </div>
        <LeadForm
          formId="lead-form-mid"
          thankYouPath="/captureonepro/grazie"
          origine="captureonepro"
        />
      </div>
    </section>
  );
}
