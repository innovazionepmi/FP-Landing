import { NextRequest, NextResponse } from "next/server";
import { appendLeadRow } from "@/lib/googleSheets";
import { sendLeadNotification } from "@/lib/mailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload non valido" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const nome = String(payload?.nome ?? "").trim();
  const cognome = String(payload?.cognome ?? "").trim();
  const email = String(payload?.email ?? "").trim();
  const telefono = String(payload?.telefono ?? "").trim();

  if (!nome || !cognome || !email || !telefono) {
    return NextResponse.json(
      { error: "Compila tutti i campi richiesti" },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Email non valida" }, { status: 400 });
  }

  const timestamp = new Date().toISOString();

  const [sheetResult, mailResult] = await Promise.allSettled([
    appendLeadRow([timestamp, nome, cognome, email, telefono, "landing-backup"]),
    sendLeadNotification({ nome, cognome, email, telefono }),
  ]);

  if (sheetResult.status === "rejected") {
    console.error("Google Sheets append failed:", sheetResult.reason);
  }
  if (mailResult.status === "rejected") {
    console.error("Email notification failed:", mailResult.reason);
  }

  if (sheetResult.status === "rejected" && mailResult.status === "rejected") {
    return NextResponse.json(
      { error: "Errore interno, riprova più tardi o contattaci direttamente." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
