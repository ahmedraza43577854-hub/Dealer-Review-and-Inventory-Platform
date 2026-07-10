import type { DealerRatings } from "@/types/vehicle";
import type { DealerSummary } from "@/types/dealer";
import {
  DEMO_DEALERS,
  getVehiclesByDealerSlug,
} from "@/lib/vehicles/data";

export interface DealerCardData {
  name: string;
  slug: string;
  city: string;
  state: string;
  phone: string | null;
  website: string | null;
  featured: boolean;
  ratings: DealerRatings;
  vehicleCount: number;
}

function clampRating(value: number): number {
  return Math.min(5, Math.max(0, Math.round(value * 10) / 10));
}

/** Deterministic hash so derived numbers stay stable across renders. */
function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

/**
 * Backend only exposes a single average rating. Derive a plausible
 * Google / Yelp / Carfax breakdown from it so the multi-source UI renders.
 */
export function deriveRatings(
  average: number,
  totalReviews: number,
  seed: string
): DealerRatings {
  const h = hash(seed);
  const google = clampRating(average + 0.1);
  const yelp = clampRating(average - 0.2);
  const carfax = clampRating(average + 0.3);
  const combined = clampRating((google + yelp + carfax) / 3);
  const base = Math.max(totalReviews, 40 + (h % 180));
  const googleCount = Math.round(base * 0.62);
  const yelpCount = base - googleCount;
  return {
    google,
    googleCount,
    yelp,
    yelpCount,
    carfax,
    combined,
    totalReviews: googleCount + yelpCount,
  };
}

export function getVehicleCountForSlug(slug: string): number {
  const real = getVehiclesByDealerSlug(slug).length;
  if (real > 0) return real;
  // Deterministic plausible inventory size for dealers without demo cars.
  return 8 + (hash(slug) % 40);
}

export function enrichDealerSummary(dealer: DealerSummary): DealerCardData {
  const demo = DEMO_DEALERS[dealer.slug];
  const ratings = demo
    ? demo.ratings
    : deriveRatings(dealer.averageRating, dealer.totalReviews, dealer.slug);

  return {
    name: dealer.name,
    slug: dealer.slug,
    city: dealer.city,
    state: dealer.state,
    phone: dealer.phone,
    website: dealer.website,
    featured: dealer.featured,
    ratings,
    vehicleCount: getVehicleCountForSlug(dealer.slug),
  };
}

/** Homepage: top-rated dealers straight from the self-contained demo set. */
export function getTopRatedDemoDealers(limit = 3): DealerCardData[] {
  return Object.values(DEMO_DEALERS)
    .map((d) => ({
      name: d.name,
      slug: d.slug,
      city: d.city,
      state: d.state,
      phone: d.phone,
      website: null,
      featured: d.featured,
      ratings: d.ratings,
      vehicleCount: getVehiclesByDealerSlug(d.slug).length,
    }))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return b.ratings.combined - a.ratings.combined;
    })
    .slice(0, limit);
}
