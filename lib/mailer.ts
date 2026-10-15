import nodemailer from "nodemailer";

type Lead = {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
};

export async function sendLeadNotification(lead: Lead, originLabel: string) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.NOTIFY_EMAIL_TO;
  // The SMTP login (SMTP_USER) is often a system-generated identifier
  // (e.g. Brevo's "xxxxx@smtp-brevo.com") that authenticates the
  // connection but is NOT a valid "From" address. The From header must
  // be a sender verified in the provider's dashboard, so it's a
  // separate, explicit setting.
  const fromEmail = process.env.SMTP_FROM_EMAIL;

  if (!host || !user || !pass || !to || !fromEmail) {
    throw new Error("SMTP non configurato: variabili d'ambiente mancanti");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Landing ${originLabel}" <${fromEmail}>`,
    to,
    replyTo: lead.email,
    subject: `Nuovo lead (${originLabel}): ${lead.nome} ${lead.cognome}`,
    text: `Nuovo lead dalla landing "${originLabel}"

Nome: ${lead.nome}
Cognome: ${lead.cognome}
Email: ${lead.email}
Telefono: ${lead.telefono}`,
    html: `<h2>Nuovo lead — ${originLabel}</h2>
<p><strong>Nome:</strong> ${lead.nome}</p>
<p><strong>Cognome:</strong> ${lead.cognome}</p>
<p><strong>Email:</strong> ${lead.email}</p>
<p><strong>Telefono:</strong> ${lead.telefono}</p>`,
  });
}
