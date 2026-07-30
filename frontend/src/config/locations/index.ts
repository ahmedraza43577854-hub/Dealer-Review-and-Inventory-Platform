import { STATE_LABELS } from "@/config/constants";
import {
  TARGET_CITIES,
  TARGET_CITY_BY_SLUG,
  type TargetCity,
} from "./cities-data";
import { toStateSlug } from "@/lib/dealers/state-slugs";

export {
  TARGET_CITIES,
  TARGET_CITY_BY_SLUG,
  TOP_CITIES_SERVED,
  HOMEPAGE_POPULAR_CITIES,
  LOCATION_PROMPT_CITIES,
} from "./cities-data";
export type { TargetCity, TopCityServed } from "./cities-data";
export * from "./location-content";

/** State codes that have at least one target city page. */
export function getTargetStateCodes(): string[] {
  const codes = new Set(TARGET_CITIES.map((c) => c.stateCode));
  return Array.from(codes).sort((a, b) =>
    (STATE_LABELS[a] ?? a).localeCompare(STATE_LABELS[b] ?? b)
  );
}

export function getCityBySlug(slug: string): TargetCity | undefined {
  return TARGET_CITY_BY_SLUG.get(slug.toLowerCase());
}

export function getCityByNameAndState(
  city: string,
  stateCode: string
): TargetCity | undefined {
  const normalizedCity = city.trim().toLowerCase();
  const state = stateCode.toUpperCase();
  return TARGET_CITIES.find(
    (entry) =>
      entry.city.toLowerCase() === normalizedCity &&
      entry.stateCode.toUpperCase() === state
  );
}

export function getCitiesByState(stateCode: string): TargetCity[] {
  const state = stateCode.toUpperCase();
  return TARGET_CITIES.filter((c) => c.stateCode === state).sort((a, b) =>
    a.city.localeCompare(b.city)
  );
}

export function getNearbyCities(target: TargetCity): TargetCity[] {
  return target.nearbySlugs
    .map((slug) => TARGET_CITY_BY_SLUG.get(slug))
    .filter((c): c is TargetCity => c !== undefined);
}

export function getCitiesGroupedByState(): {
  stateCode: string;
  stateName: string;
  stateSlug: string;
  cities: TargetCity[];
}[] {
  return getTargetStateCodes().map((stateCode) => ({
    stateCode,
    stateName: STATE_LABELS[stateCode] ?? stateCode,
    stateSlug: toStateSlug(stateCode),
    cities: getCitiesByState(stateCode),
  }));
}

export function getAllCitySlugs(): string[] {
  return TARGET_CITIES.map((c) => c.slug);
}

export function getAllTargetStateSlugs(): string[] {
  return getTargetStateCodes().map((code) => toStateSlug(code));
}
