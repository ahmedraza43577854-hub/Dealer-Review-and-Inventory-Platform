import { VEHICLE_IMAGES } from "./images.generated";

/** Real Pexels photos for a vehicle, or [] if none were downloaded. */
export function getVehicleImages(id: string): string[] {
  return VEHICLE_IMAGES[id] ?? [];
}

export function getPrimaryImage(id: string): string | undefined {
  return getVehicleImages(id)[0];
}
