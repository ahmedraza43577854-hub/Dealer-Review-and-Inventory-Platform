import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, ContentSection } from "@/components/layout/ContentPage";
import { ROUTES } from "@/config/constants";
import { getCitiesGroupedByState } from "@/config/locations";
import { createPageMetadata, PAGE_KEYWORDS } from "@/config/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildCitiesDirectorySchemas } from "@/lib/schema/builders";

export const metadata: Metadata = createPageMetadata(
  "Find Car Dealerships by City | AutoSalesReviews",
  "Browse trusted car dealerships in cities across the United States. Find dealers, read reviews and search inventory in your city.",
  ROUTES.cities,
  { keywords: [...PAGE_KEYWORDS.cities] }
);

export default function CitiesDirectoryPage() {
  const groups = getCitiesGroupedByState();

  return (
    <>
      <SchemaMarkup data={buildCitiesDirectorySchemas()} />
      <ContentPage
      title="Browse Car Dealers by City"
      subtitle="Find trusted dealerships in major cities across the United States."
      badge="City directory"
      centered
    >
      <ContentSection>
        <div className="space-y-10">
          {groups.map((group) => (
            <section key={group.stateCode}>
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-bold text-primary sm:text-2xl">
                  <Link
                    href={ROUTES.dealerState(group.stateCode)}
                    className="hover:underline"
                  >
                    {group.stateName}
                  </Link>
                </h2>
                <Link
                  href={ROUTES.dealerState(group.stateCode)}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  All dealers in {group.stateName} →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {group.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={ROUTES.dealerCity(city.slug)}
                    className="rounded-lg border border-border/70 bg-white px-4 py-3 shadow-card transition-all hover:border-primary/30 hover:shadow-card-hover"
                  >
                    <span className="block font-bold text-primary">{city.city}</span>
                    <span className="text-xs text-muted-foreground">
                      {group.stateName}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </ContentSection>
    </ContentPage>
    </>
  );
}
