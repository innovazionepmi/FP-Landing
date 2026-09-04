# The Image Master — Landing di backup

Landing page di backup per la campagna "The Image Master" di Fotografia
Professionale, ospitata su Vercel per bypassare i problemi del form nativo
WordPress/Keap su mobile. Replica il contenuto e il look della pagina
originale (`https://www.fotografiaprofessionale.it/prodotti/the-image-master-cmb26.html`)
con un modulo di contatto nativo che scrive su Google Sheet e invia una
notifica email via Brevo.

## Stack

Next.js (App Router) + React, deploy su Vercel. Le variabili sensibili
vanno configurate solo su **Vercel → Project Settings → Environment
Variables**, mai committate (vedi `.env.example` per l'elenco).

## Setup locale

```bash
npm install
cp .env.example .env.local   # poi compila con le credenziali reali
npm run dev
```

## Configurazione richiesta prima del deploy definitivo

### 1. Google Sheet

1. Vai su [Google Cloud Console](https://console.cloud.google.com/), crea
   (o riusa) un progetto, abilita la **Google Sheets API**.
2. Crea un **Service Account** (IAM & Admin → Service Accounts), poi una
   chiave JSON per quel service account.
3. Dal JSON scaricato prendi `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   e `private_key` → `GOOGLE_PRIVATE_KEY` (incollalo su Vercel così com'è,
   comprese le sequenze `\n`).
4. Apri il [Google Sheet dei lead](https://docs.google.com/spreadsheets/d/1mErdwtEPSwGgn1LcaGflzr2qQ2fRW7ZLKS_NEe6jWHI)
   e condividilo come **Editor** con l'indirizzo email del service account
   (es. `xxx@nome-progetto.iam.gserviceaccount.com`).
5. La prima riga del foglio dovrebbe avere le intestazioni: `Timestamp`,
   `Nome`, `Cognome`, `Email`, `Telefono`, `Fonte`.

### 2. Email — Brevo SMTP

1. Su Brevo vai in **Impostazioni → SMTP & API → SMTP**.
2. Copia login SMTP e genera una **SMTP key** (non è la password
   dell'account Brevo).
3. Su Vercel imposta `SMTP_USER` (login) e `SMTP_PASS` (la key). Host e
   porta di default (`smtp-relay.brevo.com` / `587`) vanno bene così.
4. **Importante**: `SMTP_USER` è solo il login di autenticazione (un
   identificativo tipo `xxxxx@smtp-brevo.com`, generato da Brevo) — non è
   un mittente valido. Vai su Brevo → **Impostazioni → Mittenti e IP →
   Mittenti**, aggiungi e verifica un vero indirizzo email (es. quello del
   cliente, o un tuo indirizzo), e impostalo su Vercel come
   `SMTP_FROM_EMAIL`. Se ometti questo passaggio Brevo rifiuta l'invio con
   errore "Sending has been rejected... sender is not valid".

### 3. Dominio

Il sito è pensato per essere pubblicato su
`landing.fotografiaprofessionale.it`. Dopo il primo deploy su Vercel:

1. Vercel → Project → Settings → Domains → aggiungi
   `landing.fotografiaprofessionale.it`.
2. Vercel mostrerà il record CNAME esatto da creare nel DNS del dominio
   `fotografiaprofessionale.it` (di solito verso `cname.vercel-dns.com`).
3. Il record va aggiunto da chi gestisce il DNS del dominio del cliente.

## Workflow Git (da CLAUDE.md)

Tutte le modifiche vanno prima su `staging`, testate, poi mergiate su
`main` (che triggera il deploy automatico su Vercel).

## Note

- Il form non usa iframe di terze parti: submit via `fetch` verso
  `/api/lead`, funzione serverless Vercel che scrive su Google Sheet e
  invia l'email in parallelo — è la causa del problema mobile originale
  che qui non si presenta.
- Pagina impostata come `noindex` (vedi `app/layout.tsx`) perché è una
  landing di backup temporanea, per evitare contenuti duplicati in SEO
  rispetto all'originale.

## Meta Pixel e thank-you page

- Il Meta Pixel (ID `633889586785014`, in `components/MetaPixel.tsx`) è
  caricato su ogni pagina e traccia automaticamente `PageView`.
- Dopo un invio riuscito del form, il browser viene reindirizzato (con
  una navigazione completa, non client-side) a `/grazie`. Questo garantisce
  che il pixel si ricarichi correttamente sulla pagina di ringraziamento.
- La pagina `/grazie` (`app/grazie/page.tsx`) traccia l'evento standard
  `Lead` non appena il pixel è pronto.
- Su Meta Ads, per misurare le conversioni puoi usare l'evento `Lead` del
  pixel oppure una regola di conversione personalizzata basata sull'URL
  `/grazie`.
