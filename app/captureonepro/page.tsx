import Hero from "@/components/captureonepro/Hero";
import Story from "@/components/captureonepro/Story";
import Audience from "@/components/captureonepro/Audience";
import MidForm from "@/components/captureonepro/MidForm";
import Benefits from "@/components/captureonepro/Benefits";
import Trainer from "@/components/captureonepro/Trainer";
import Schedule from "@/components/captureonepro/Schedule";
import Pricing from "@/components/captureonepro/Pricing";
import StickyCta from "@/components/captureonepro/StickyCta";
import s from "@/components/captureonepro/cop.module.css";

export default function CaptureOnePage() {
  return (
    <>
      <Hero />

      <div className={s.proof}>
        <div className={`${s.wrap} ${s.proofList}`}>
          <div className={s.proofItem}>
            <strong>~200.000</strong>persone nella community
          </div>
          <div className={s.proofItem}>
            <strong>350.000+</strong>corsi distribuiti
          </div>
          <div className={s.proofItem}>
            <strong>99,8%</strong>soddisfazione degli utenti
          </div>
          <div className={s.proofItem}>
            <strong>FUJIFILM Italia</strong>partner del percorso
          </div>
        </div>
      </div>

      <Story />
      <Audience />
      <MidForm />
      <Benefits />
      <Trainer />
      <Schedule />
      <Pricing />

      <footer className={s.footer}>
        FotografiaProfessionale.it — Capture One Professional Workflow
      </footer>
      <StickyCta />
    </>
  );
}
