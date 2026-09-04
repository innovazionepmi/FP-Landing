import { google } from "googleapis";

export async function appendLeadRow(row: string[]) {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !key || !sheetId) {
    throw new Error(
      "Google Sheets non configurato: variabili d'ambiente mancanti"
    );
  }

  // Defensive normalization: env vars are frequently pasted with the
  // literal \n sequences from the downloaded JSON, sometimes with stray
  // surrounding quotes or whitespace that break PEM parsing.
  let normalizedKey = key.trim();
  if (normalizedKey.startsWith('"') && normalizedKey.endsWith('"')) {
    normalizedKey = normalizedKey.slice(1, -1);
  }
  normalizedKey = normalizedKey.replace(/\\n/g, "\n").trim();

  const auth = new google.auth.JWT({
    email,
    key: normalizedKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: "A:F",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}
