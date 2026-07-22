/** Converts text to a URL-safe slug segment. */
export function slugifySegment(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Builds a city-state slug such as `paramus-nj`. */
export function toCityStateSlug(city: string, state: string): string {
  return `${slugifySegment(city)}-${state.toLowerCase()}`;
}

/** Parses a city-state slug into its slug segment and two-letter state code. */
export function parseCityStateSlug(
  slug: string
): { citySlug: string; state: string } | null {
  const match = slug.match(/^(.+)-([a-z]{2})$/i);
  if (!match) return null;
  return { citySlug: match[1], state: match[2].toUpperCase() };
}

/** Resolves the canonical city name from a slug using dealer records. */
export function resolveCityFromSlug(
  citySlug: string,
  state: string,
  dealers: readonly { city: string; state: string }[]
): string | null {
  for (const dealer of dealers) {
    if (
      dealer.state.toUpperCase() === state &&
      slugifySegment(dealer.city) === citySlug
    ) {
      return dealer.city;
    }
  }
  return null;
}

/** Returns sorted unique city-state slugs derived from dealer locations. */
export function getUniqueCityStateSlugs(
  dealers: readonly { city: string; state: string }[]
): string[] {
  const slugs = new Set<string>();

  for (const dealer of dealers) {
    if (dealer.city && dealer.state) {
      slugs.add(toCityStateSlug(dealer.city, dealer.state));
    }
  }

  return Array.from(slugs).sort();
}
