import { STATE_LABELS, STATES } from "@/config/constants";
import { slugifySegment } from "@/lib/dealers/location-slugs";

/** Builds a URL slug from a state name, e.g. "New Jersey" → "new-jersey". */
export function toStateSlug(stateCodeOrName: string): string {
  const upper = stateCodeOrName.toUpperCase();
  const label = STATE_LABELS[upper] ?? stateCodeOrName;
  return slugifySegment(label);
}

/** Resolves a state URL slug to a two-letter state code. */
export function parseStateSlug(slug: string): string | null {
  const normalized = slug.toLowerCase();
  for (const { code, label } of STATES) {
    if (slugifySegment(label) === normalized) {
      return code;
    }
  }
  return null;
}

export function getStateLabel(stateCode: string): string {
  return STATE_LABELS[stateCode.toUpperCase()] ?? stateCode;
}
