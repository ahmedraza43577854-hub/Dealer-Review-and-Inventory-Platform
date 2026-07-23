import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Car } from "lucide-react";
import Link from "next/link";
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
import { PAGE_HEADINGS, ROUTES } from "@/config/constants";
import { buildVehicleCategoryMetadata, PAGE_SEO } from "@/config/seo";
import { getVehicleCategoryConfig } from "@/config/vehicle-categories";
import { VEHICLES_INTRO_SEO_CONTENT } from "@/config/seo-content";
import { VehicleCategoryHero } from "@/components/vehicles/VehicleCategoryHero";
import { VehicleFilters } from "@/components/vehicles/VehicleFilters";
import { VehicleSortSelect } from "@/components/vehicles/VehicleSortSelect";
import { VehicleRow } from "@/components/vehicles/VehicleRow";
import { VehiclePagination } from "@/components/vehicles/VehiclePagination";
import { EmptyState } from "@/components/shared/EmptyState";
import { Button } from "@/components/ui/button";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { LocationFaqSection } from "@/components/dealers/LocationFaqSection";
import {
  buildVehicleCategorySchemas,
  buildVehicleListItems,
  buildVehiclesListingSchemas,
} from "@/lib/schema/builders";

const MobileFilterDrawer = dynamic(
  () =>
    import("@/components/vehicles/MobileFilterDrawer").then((m) => ({
      default: m.MobileFilterDrawer,
    })),
  {
    loading: () => (
      <div className="h-10 w-full animate-pulse rounded-lg bg-muted lg:hidden" aria-hidden />
    ),
  }
);

interface VehiclesPageProps {
  searchParams: VehicleSearchParams;
}

export function generateMetadata({
  searchParams,
}: VehiclesPageProps): Metadata {
  const category = getVehicleCategoryConfig(
    parseVehicleFilters(searchParams).bodyStyle
  );

  if (category) {
    return buildVehicleCategoryMetadata(category);
  }

  return PAGE_SEO.vehicles;
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
  const category = getVehicleCategoryConfig(filters.bodyStyle);
  const listItems = buildVehicleListItems(results);
  const schemaData = category
    ? buildVehicleCategorySchemas(category, listItems)
    : buildVehiclesListingSchemas({
        path: ROUTES.vehicles,
        collectionName: "Search Cars for Sale Nationwide",
        collectionDescription:
          "Browse thousands of new and used cars for sale from verified dealerships across the US. Filter by make, model, year, price and more.",
        listItems,
        breadcrumbs: [
          { name: "Home", path: ROUTES.home },
          { name: "Vehicles", path: ROUTES.vehicles },
        ],
      });

  const searchDefaults = {
    make: filters.make,
    model: filters.model,
    year: filters.yearFrom?.toString(),
    priceTo: filters.priceTo?.toString(),
  };

  return (
    <>
      <SchemaMarkup data={schemaData} />

      <div className="bg-background">
        {category ? (
          <VehicleCategoryHero
            badge={category.badge}
            h1={category.h1}
            subtitle={category.subtitle}
            submitLabel={category.searchSubmitLabel}
            bodyStyle={category.key}
            defaultValues={searchDefaults}
          />
        ) : (
          <VehicleCategoryHero
            badge="Nationwide Inventory"
            h1={PAGE_HEADINGS.vehicles}
            subtitle="Browse thousands of new and used vehicles from verified dealerships. Filter by make, model, year, and price to find your match."
            submitLabel={activeCount > 0 ? "Update Results" : "Search Inventory"}
            showQuickPills
            defaultValues={searchDefaults}
          />
        )}

        <div className="container-page py-6 lg:py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[290px_1fr] lg:gap-8">
            <aside className="hidden lg:block">
              <div className="sticky top-20 rounded-lg border border-border/70 bg-white p-4 shadow-card">
                <VehicleFilters filters={filters} sort={sort} />
              </div>
            </aside>

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

        {category ? (
          <>
            <SeoContentSection content={category.seoContent} variant="muted" wide />
            <LocationFaqSection
              items={category.faqs}
              title={`${category.label} Buying FAQ`}
            />
          </>
        ) : (
          <SeoContentSection content={VEHICLES_INTRO_SEO_CONTENT} variant="muted" wide />
        )}
      </div>
    </>
  );
}
