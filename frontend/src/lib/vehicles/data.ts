import type { Vehicle, VehicleDealerRef } from "@/types/vehicle";
import { GENERATED_INVENTORY } from "@/lib/vehicles/inventory.generated";

function orderVehicles(list: Vehicle[]): Vehicle[] {
  return [...list].sort((a, b) => {
    if (a.dealer.featured !== b.dealer.featured) {
      return a.dealer.featured ? -1 : 1;
    }
    return b.freshness - a.freshness;
  });
}

export const ALL_VEHICLES: Vehicle[] = orderVehicles(GENERATED_INVENTORY);

/** Unique dealer refs from inventory (replaces legacy DEMO_DEALERS map). */
export const DEMO_DEALERS: Record<string, VehicleDealerRef> = Object.fromEntries(
  ALL_VEHICLES.reduce((map, vehicle) => {
    if (!map.has(vehicle.dealer.slug)) {
      map.set(vehicle.dealer.slug, vehicle.dealer);
    }
    return map;
  }, new Map<string, VehicleDealerRef>())
);

export function getAllVehicles(): Vehicle[] {
  return ALL_VEHICLES;
}

export function getVehicleById(id: string): Vehicle | undefined {
  return ALL_VEHICLES.find((v) => v.id === id);
}

export interface VehicleLocationHint {
  city?: string;
  stateCode?: string;
}

export function getFeaturedVehicles(
  limit = 6,
  location?: VehicleLocationHint
): Vehicle[] {
  if (!location?.city && !location?.stateCode) {
    return ALL_VEHICLES.slice(0, limit);
  }

  const local = location.city
    ? getVehiclesByCity(location.city, location.stateCode)
    : getVehiclesByState(location.stateCode!);

  if (local.length === 0) {
    return ALL_VEHICLES.slice(0, limit);
  }

  const localIds = new Set(local.map((v) => v.id));
  const rest = ALL_VEHICLES.filter((v) => !localIds.has(v.id));
  return [...local, ...rest].slice(0, limit);
}

export function getVehiclesByDealerSlug(slug: string): Vehicle[] {
  return orderVehicles(ALL_VEHICLES.filter((v) => v.dealer.slug === slug));
}

export function getVehiclesByCity(city: string, state?: string): Vehicle[] {
  const normalized = city.trim().toLowerCase();
  return orderVehicles(
    ALL_VEHICLES.filter((v) => {
      const cityMatch = v.dealer.city.toLowerCase() === normalized;
      if (!state) return cityMatch;
      return cityMatch && v.dealer.state.toUpperCase() === state.toUpperCase();
    })
  );
}

export function getVehiclesByState(state: string): Vehicle[] {
  const code = state.toUpperCase();
  return orderVehicles(ALL_VEHICLES.filter((v) => v.dealer.state === code));
}

export function getSimilarVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  const sameDealer = ALL_VEHICLES.filter(
    (v) => v.dealer.slug === vehicle.dealer.slug && v.id !== vehicle.id
  );
  const sameBody = ALL_VEHICLES.filter(
    (v) =>
      v.dealer.slug !== vehicle.dealer.slug &&
      v.bodyStyle === vehicle.bodyStyle &&
      v.id !== vehicle.id
  );
  return [...sameDealer, ...sameBody].slice(0, limit);
}

export function getDemoDealerBySlug(slug: string): VehicleDealerRef | undefined {
  return DEMO_DEALERS[slug];
}

export const TOTAL_VEHICLE_COUNT = ALL_VEHICLES.length;
