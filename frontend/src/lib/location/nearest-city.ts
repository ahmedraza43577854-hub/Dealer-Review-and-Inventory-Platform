import { TARGET_CITIES, type TargetCity } from "@/config/locations/cities-data";

const EARTH_RADIUS_KM = 6371;

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

function haversineDistanceKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) ** 2;
  return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

/** Nearest-neighbor match against the curated city list, used to turn a
 * raw browser coordinate into one of our served markets. */
export function findNearestCity(lat: number, lng: number): TargetCity {
  return TARGET_CITIES.reduce((closest, candidate) => {
    const candidateDistance = haversineDistanceKm(
      lat,
      lng,
      candidate.lat,
      candidate.lng
    );
    const closestDistance = haversineDistanceKm(
      lat,
      lng,
      closest.lat,
      closest.lng
    );
    return candidateDistance < closestDistance ? candidate : closest;
  });
}
