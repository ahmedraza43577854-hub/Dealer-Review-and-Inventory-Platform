import type { Metadata } from "next";
import { Car } from "lucide-react";
import { getAllVehicles } from "@/lib/vehicles/data";
import {
  filterAndSortVehicles,
  parsePage,
  parseVehicleFilters,
  parseVehicleSort,
  countActiveFilters,
  stateLabel,
  type VehicleSearchParams,
} from "@/lib/vehicles/filters";
import { VEHICLES_PER_PAGE } from "@/config/vehicle";
import { ROUTES, SITE } from "@/config/constants";
import { VehicleSearchBar } from "@/components/vehicles/VehicleSearchBar";
import { VehicleFilters } from "@/components/vehicles/VehicleFilters";
import { MobileFilterDrawer } from "@/components/vehicles/MobileFilterDrawer";
import { VehicleSortSelect } from "@/components/vehicles/VehicleSortSelect";
import { VehicleRow } from "@/components/vehicles/VehicleRow";
import { VehiclePagination } from "@/components/vehicles/VehiclePagination";
import { EmptyState } from "@/components/shared/EmptyState";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Find Cars | ${SITE.name}`,
  description:
    "Search thousands of vehicles by make, model, price, and mileage from trusted dealerships across the United States.",
};

interface VehiclesPageProps {
  searchParams: VehicleSearchParams;
}

export default function VehiclesPage({ searchParams }: VehiclesPageProps) {
  const filters = parseVehicleFilters(searchParams);
  const sort = parseVehicleSort(searchParams);
  const page = parsePage(searchParams);

  const results = filterAndSortVehicles(getAllVehicles(), filters, sort);
  const totalPages = Math.max(1, Math.ceil(results.length / VEHICLES_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * VEHICLES_PER_PAGE;
  const pageItems = results.slice(start, start + VEHICLES_PER_PAGE);
  const activeCount = countActiveFilters(filters);

  const location = stateLabel(filters.state);
  const countLabel =
    results.length === 1 ? "1 vehicle" : `${results.length} vehicles`;

  return (
    <div className="bg-background">
      {/* Top search bar */}
      <div className="border-b border-border/70 bg-white">
        <div className="container-page py-5">
          <h1 className="mb-3 text-2xl font-bold text-primary">
            Find Your Next Car
          </h1>
          <VehicleSearchBar
            layout="bar"
            submitLabel="Update Results"
            defaultValues={{
              make: filters.make,
              model: filters.model,
              year: filters.yearFrom?.toString(),
              priceTo: filters.priceTo?.toString(),
            }}
          />
        </div>
      </div>

      <div className="container-page py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[290px_1fr] lg:gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 rounded-lg border border-border/70 bg-white p-4 shadow-card">
              <VehicleFilters filters={filters} sort={sort} />
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-bold text-primary">
                  Showing {countLabel}
                  {location ? ` in ${location}` : ""}
                </p>
                {activeCount > 0 && (
                  <Link
                    href={ROUTES.vehicles}
                    className="text-sm font-semibold text-accent-foreground/70 hover:text-primary hover:underline"
                  >
                    Clear all filters
                  </Link>
                )}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 lg:hidden">
                  <MobileFilterDrawer
                    filters={filters}
                    sort={sort}
                    activeCount={activeCount}
                  />
                </div>
                <VehicleSortSelect value={sort} />
              </div>
            </div>

            {pageItems.length === 0 ? (
              <EmptyState
                icon={Car}
                title="No vehicles match your search"
                description="Try widening your price range, removing a filter, or clearing all filters to see more results."
                action={
                  <Button asChild variant="gold">
                    <Link href={ROUTES.vehicles}>Clear All Filters</Link>
                  </Button>
                }
              />
            ) : (
              <>
                <div className="space-y-4">
                  {pageItems.map((vehicle) => (
                    <VehicleRow key={vehicle.id} vehicle={vehicle} />
                  ))}
                </div>
                <VehiclePagination
                  page={currentPage}
                  totalPages={totalPages}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
