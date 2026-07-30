import { NextRequest, NextResponse } from "next/server";
import { VEHICLES_PER_PAGE } from "@/config/vehicle";
import { getAllVehicles } from "@/lib/vehicles/data";
import {
  filterAndSortVehicles,
  parsePage,
  parseVehicleFilters,
  parseVehicleSort,
} from "@/lib/vehicles/filters";
import { paginateVehicles } from "@/lib/vehicles/paginate";

export function GET(request: NextRequest) {
  const raw = Object.fromEntries(request.nextUrl.searchParams.entries());
  const filters = parseVehicleFilters(raw);
  const sort = parseVehicleSort(raw);
  const page = parsePage(raw);

  const results = filterAndSortVehicles(getAllVehicles(), filters, sort);
  const payload = paginateVehicles(results, page, VEHICLES_PER_PAGE);

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
