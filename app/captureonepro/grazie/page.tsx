import Image from "next/image";
import Link from "next/link";
import TrackLead from "@/components/TrackLead";
import s from "@/components/captureonepro/cop.module.css";

export default function GraziePage() {
  return (
    <>
      <TrackLead />
      <main className={`${s.navy}`} style={{ minHeight: "100vh" }}>
        <Image
          src="/captureonepro/images/Capture-One-Header-Slim-2.jpg"
          alt="Capture One Professional Workflow"
          width={2560}
          height={1007}
          sizes="100vw"
          priority
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div className={s.wrap} style={{ padding: "56px 20px 72px" }}>
          <div className={s.narrow} style={{ textAlign: "center" }}>
            <h1 className={s.h2} style={{ color: "#fff" }}>
              Grazie! La tua richiesta è stata inviata.
            </h1>
            <div className={s.prose}>
              <p>
                Ti contatteremo al più presto per parlare di Capture One
                Professional Workflow. Nei prossimi giorni tieni d’occhio il
                telefono e rispondi a chiamate e messaggi WhatsApp: siamo noi
                che cerchiamo di contattarti 😉
              </p>
            </div>
            <div style={{ marginTop: 32 }}>
              <Link
                href="/captureonepro"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontWeight: 700,
                }}
              >
                Torna alla pagina
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
