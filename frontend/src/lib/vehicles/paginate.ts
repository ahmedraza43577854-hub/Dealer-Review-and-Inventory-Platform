import type { Vehicle } from "@/types/vehicle";

export interface PaginatedVehicles {
  items: Vehicle[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
}

export function paginateVehicles(
  vehicles: Vehicle[],
  page: number,
  pageSize: number
): PaginatedVehicles {
  const total = vehicles.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: vehicles.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total,
    totalPages,
    hasMore: safePage < totalPages,
  };
}
