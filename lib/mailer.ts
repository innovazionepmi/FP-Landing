import nodemailer from "nodemailer";

type Lead = {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
};

export async function sendLeadNotification(lead: Lead) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.NOTIFY_EMAIL_TO;

  if (!host || !user || !pass || !to) {
    throw new Error("SMTP non configurato: variabili d'ambiente mancanti");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Landing The Image Master" <${user}>`,
    to,
    replyTo: lead.email,
    subject: `Nuovo lead: ${lead.nome} ${lead.cognome}`,
    text: `Nuovo lead dalla landing di backup "The Image Master"

Nome: ${lead.nome}
Cognome: ${lead.cognome}
Email: ${lead.email}
Telefono: ${lead.telefono}`,
    html: `<h2>Nuovo lead — The Image Master (landing di backup)</h2>
<p><strong>Nome:</strong> ${lead.nome}</p>
<p><strong>Cognome:</strong> ${lead.cognome}</p>
<p><strong>Email:</strong> ${lead.email}</p>
<p><strong>Telefono:</strong> ${lead.telefono}</p>`,
  });
}
