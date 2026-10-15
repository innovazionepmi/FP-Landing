// Landing page che inviano lead a /api/lead. Lo slug finisce nella colonna F
// del Google Sheet; l'etichetta è usata nell'email di notifica.
// Per aggiungere una landing: nuova voce qui + `origine` nel suo <LeadForm>.
export const ORIGINS = {
  imagemaster: "The Image Master",
  captureonepro: "Capture One Professional Workflow",
} as const;

export type Origin = keyof typeof ORIGINS;

export const FALLBACK_ORIGIN = "landing-backup";

export function resolveOrigin(value: unknown): {
  slug: string;
  label: string;
} {
  const slug = String(value ?? "").trim();
  if (slug in ORIGINS) {
    return { slug, label: ORIGINS[slug as Origin] };
  }
  return { slug: FALLBACK_ORIGIN, label: "landing di backup" };
}
