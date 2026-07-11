import { DealerQueryParams } from "@/types/dealer";
import { ROUTES, getRegion } from "@/config/constants";

export function buildDealersUrl(params: DealerQueryParams): string {
  const searchParams = new URLSearchParams();

  if (params.search) searchParams.set("search", params.search);
  if (params.state && params.state !== "All") {
    searchParams.set("state", params.state);
  }
  if (params.city) searchParams.set("city", params.city);
  if (params.minRating) searchParams.set("minRating", params.minRating);
  if (params.region) searchParams.set("region", params.region);

  const query = searchParams.toString();
  return `${ROUTES.dealers}${query ? `?${query}` : ""}`;
}

export function formatActiveFilters(params: DealerQueryParams): string[] {
  const region = getRegion(params.region);

  return [
    region ? `Region: ${region.label}` : null,
    params.state && params.state !== "All" ? `State: ${params.state}` : null,
    params.city ? `City: ${params.city}` : null,
    params.minRating ? `Min Rating: ${params.minRating}+` : null,
    params.search ? `Search: "${params.search}"` : null,
  ].filter((filter): filter is string => filter !== null);
}
