export type UserLocationSource = "geolocation" | "popular" | "search";

export interface UserLocation {
  city: string;
  stateCode: string;
  slug?: string;
  source: UserLocationSource;
}

export const LOCATION_COOKIE_NAME = "asr_location";
export const LOCATION_PROMPTED_COOKIE_NAME = "asr_location_prompted";
/** 180 days. */
export const LOCATION_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

export function serializeUserLocation(location: UserLocation): string {
  return encodeURIComponent(JSON.stringify(location));
}

export function parseUserLocationCookie(
  raw: string | undefined | null
): UserLocation | null {
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(raw));
    if (
      parsed &&
      typeof parsed === "object" &&
      typeof (parsed as UserLocation).city === "string" &&
      typeof (parsed as UserLocation).stateCode === "string"
    ) {
      return parsed as UserLocation;
    }
    return null;
  } catch {
    return null;
  }
}
