"use client";

import { useId, useState } from "react";
import styles from "./LeadForm.module.css";

type Status = "idle" | "loading" | "error";

export default function LeadForm({ formId }: { formId: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const nameId = useId();
  const surnameId = useId();
  const emailId = useId();
  const phoneId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: if filled, it's a bot — stop silently, no submit.
    if (String(data.get("website") || "").trim() !== "") {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: data.get("nome"),
          cognome: data.get("cognome"),
          email: data.get("email"),
          telefono: data.get("telefono"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Invio non riuscito");
      }

      form.reset();
      // Full navigation (not client-side routing) so the Meta Pixel base
      // code re-fires on the thank-you page and the Lead event is tracked.
      window.location.href = "/grazie";
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Si è verificato un errore"
      );
    }
  }

  return (
    <form id={formId} className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className={styles.honeypot}
        aria-hidden="true"
      />

      <div className={styles.row}>
        <label htmlFor={nameId} className={styles.label}>
          Nome
        </label>
        <input
          id={nameId}
          name="nome"
          type="text"
          required
          className={styles.input}
          placeholder="Il tuo nome"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor={surnameId} className={styles.label}>
          Cognome
        </label>
        <input
          id={surnameId}
          name="cognome"
          type="text"
          required
          className={styles.input}
          placeholder="Il tuo cognome"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor={emailId} className={styles.label}>
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          className={styles.input}
          placeholder="La mail che usi più spesso"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor={phoneId} className={styles.label}>
          Telefono
        </label>
        <input
          id={phoneId}
          name="telefono"
          type="tel"
          required
          className={styles.input}
          placeholder="Il tuo numero di telefono"
        />
      </div>

      <button type="submit" className={styles.submit} disabled={status === "loading"}>
        {status === "loading" ? "Invio in corso…" : "Richiedi Informazioni"}
      </button>

      {status === "error" && (
        <div className={`${styles.status} ${styles.statusError}`}>
          {errorMessage || "Qualcosa è andato storto, riprova."}
        </div>
      )}

      <p className={styles.disclaimer}>
        Compilare questo modulo è solo una dimostrazione di interesse, non ti
        obbliga in alcun modo all&apos;iscrizione, ma ti garantisce priorità.
      </p>
    </form>
  );
}
