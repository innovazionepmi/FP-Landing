import Image from "next/image";
import Link from "next/link";
import TrackLead from "@/components/TrackLead";
import s from "@/components/captureonepro/cop.module.css";

export default function GraziePage() {
  return (
    <>
      <TrackLead />
      <main style={{ minHeight: "100vh", background: "#fff" }}>
        {/* Banner contenuto: il messaggio di ringraziamento deve restare in vista. */}
        <div className={s.navy} style={{ padding: "20px 20px" }}>
          <Image
            src="/captureonepro/images/Capture-One-Header-Slim-1.jpg"
            alt="Capture One Professional Workflow"
            width={2560}
            height={862}
            sizes="(min-width: 800px) 760px, 100vw"
            priority
            style={{
              width: "100%",
              maxWidth: 760,
              height: "auto",
              margin: "0 auto",
              borderRadius: 12,
            }}
          />
        </div>

        <section className={s.wrap} style={{ padding: "56px 20px 80px" }}>
          <div className={s.narrow} style={{ textAlign: "center" }}>
            <h1 className={s.h2}>Grazie! La tua richiesta è stata inviata.</h1>
            <div className={s.prose}>
              <p style={{ fontSize: "1.2rem" }}>
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
                  color: "var(--blue)",
                  textDecoration: "underline",
                  fontWeight: 700,
                }}
              >
                Torna alla pagina
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
