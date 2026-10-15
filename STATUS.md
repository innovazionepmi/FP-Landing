# Stato del progetto — 04/09/2026

## Obiettivo

Landing page di backup per la campagna "The Image Master" di Fotografia
Professionale (`https://www.fotografiaprofessionale.it/prodotti/the-image-master-cmb26.html`),
creata perché il form originale (iframe Keap embeddato in WordPress) non
funziona correttamente da mobile.

## Stato attuale: ✅ Live e funzionante

- Repo GitHub: `innovazionepmi/FP-Landing`, branch `main` e `staging`
  allineati sull'ultimo commit.
- Deploy attivo su Vercel, dominio provvisorio `fp-landing-lake.vercel.app`.
- Form testato end-to-end: invio → riga scritta sul
  [Google Sheet](https://docs.google.com/spreadsheets/d/1mErdwtEPSwGgn1LcaGflzr2qQ2fRW7ZLKS_NEe6jWHI)
  + email di notifica via Brevo a `info@emiliozucca.com` → redirect a
  `/grazie` con evento `Lead` sul Meta Pixel (`633889586785014`).
- Tutte le variabili d'ambiente configurate correttamente su Vercel
  (vedi `.env.example` per l'elenco completo).

## Problemi incontrati e risolti in questa sessione

1. **Immagini tagliate** (hero e sezioni "Cosa Imparerai"/"Strumenti"):
   i contenitori forzavano un aspect-ratio diverso da quello nativo
   delle immagini. Risolto usando il rapporto d'aspetto reale di ogni
   immagine con `object-fit: contain`.
2. **Email Brevo non recapitata**: il codice usava il login SMTP
   (`xxxxx@smtp-brevo.com`, un identificativo di autenticazione) come
   indirizzo mittente — Brevo lo rifiuta perché non è un mittente
   verificato. Risolto separando login SMTP (`SMTP_USER`) e mittente
   reale verificato (`SMTP_FROM_EMAIL`).
3. **Google Sheet non aggiornato**: `GOOGLE_PRIVATE_KEY` falliva il
   parsing per apici/spazi residui da un copia-incolla imperfetto dal
   JSON del service account. Il codice ora normalizza la chiave prima
   di usarla.

## Cosa resta da fare (non fattibile da Claude — serve accesso del cliente)

1. **Dominio definitivo**: collegare `landing.fotografiaprofessionale.it`
   su Vercel (Settings → Domains) e aggiungere il CNAME risultante sul
   DNS del dominio del cliente.
2. **Campagna ads**: aggiornare il link di destinazione della campagna
   verso il dominio definitivo, una volta attivo.

## Riferimenti rapidi

- Repo locale: `C:\_DEV\FP-Landing`
- README con istruzioni di setup dettagliate: `README.md`
- Template variabili d'ambiente: `.env.example`
