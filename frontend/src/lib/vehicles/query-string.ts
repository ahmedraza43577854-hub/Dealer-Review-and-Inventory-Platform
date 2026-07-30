import type { VehicleFilters, VehicleSort } from "@/types/vehicle";

/** Serializes active filters + sort for /api/vehicles and list remount keys. */
export function buildVehiclesQueryString(
  filters: VehicleFilters,
  sort: VehicleSort
): string {
  const params = new URLSearchParams();

  if (filters.make) params.set("make", filters.make);
  if (filters.model) params.set("model", filters.model);
  if (filters.yearFrom != null) params.set("yearFrom", String(filters.yearFrom));
  if (filters.yearTo != null) params.set("yearTo", String(filters.yearTo));
  if (filters.priceFrom != null)
    params.set("priceFrom", String(filters.priceFrom));
  if (filters.priceTo != null) params.set("priceTo", String(filters.priceTo));
  if (filters.maxMileage != null)
    params.set("maxMileage", String(filters.maxMileage));
  if (filters.bodyStyle) params.set("bodyStyle", filters.bodyStyle);
  if (filters.condition) params.set("condition", filters.condition);
  if (filters.state) params.set("state", filters.state);
  if (filters.city) params.set("city", filters.city);
  if (filters.minRating != null)
    params.set("minRating", String(filters.minRating));
  if (filters.query) params.set("query", filters.query);
  if (sort !== "relevance") params.set("sort", sort);

  return params.toString();
}
