import { DealerSearchForm } from "@/components/dealers/DealerSearchForm";
import { DealerFilters } from "@/components/dealers/DealerFilters";
import { DealerResultsPendingShell } from "@/components/dealers/DealerResultsPendingShell";
import { DealersResultsSuspense } from "@/components/dealers/DealersResultsSuspense";
import { ActiveFilters } from "@/components/dealers/ActiveFilters";
import {
  LocationBreadcrumbs,
  type BreadcrumbEntry,
} from "@/components/dealers/LocationBreadcrumbs";
import { LocationFaqSection } from "@/components/dealers/LocationFaqSection";
import { NearbyCitiesSection } from "@/components/dealers/NearbyCitiesSection";
import { StateCitiesSection } from "@/components/dealers/StateCitiesSection";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import type { LocationFaqItem } from "@/config/locations/location-content";
import type { TargetCity } from "@/config/locations/cities-data";
import type { SeoContent } from "@/config/seo-content";
import type { JsonLd } from "@/lib/schema/types";
import type { DealerQueryParams } from "@/types/dealer";

interface LocationLandingViewProps {
  h1: string;
  subtitle: string;
  badge: string;
  breadcrumbs: BreadcrumbEntry[];
  searchParams: DealerQueryParams;
  seoContent: SeoContent;
  faqItems: LocationFaqItem[];
  schemas: JsonLd[];
  nearbyCities?: TargetCity[];
  stateCities?: { stateCode: string; cities: TargetCity[] };
  emptyTitle?: string;
  emptyDescription?: string;
}

export function LocationLandingView({
  h1,
  subtitle,
  badge,
  breadcrumbs,
  searchParams,
  seoContent,
  faqItems,
  schemas,
  nearbyCities,
  stateCities,
  emptyTitle,
  emptyDescription,
}: LocationLandingViewProps) {
  return (
    <>
      <SchemaMarkup data={schemas} />
      <div className="bg-background">
        <div className="border-b border-border/70 bg-white">
          <div className="container-page py-4">
            <LocationBreadcrumbs items={breadcrumbs} />
          </div>
        </div>

        <div className="bg-primary bg-hero-texture">
          <div className="container-page py-10 sm:py-12">
            <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
              {badge}
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {h1}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-6 max-w-3xl rounded-lg border border-white/20 bg-white/95 p-4 shadow-card backdrop-blur-sm sm:p-5">
              <DealerSearchForm
                defaultValues={searchParams}
                currentParams={searchParams}
              />
            </div>
          </div>
        </div>

        <div className="container-page py-8 lg:py-10">
          <div className="mb-6 rounded-lg border border-border/70 bg-white p-4 shadow-card sm:p-5">
            <DealerFilters params={searchParams} />
          </div>

          <div className="mb-5">
            <ActiveFilters params={searchParams} />
          </div>

          <DealerResultsPendingShell>
            <DealersResultsSuspense
              searchParams={searchParams}
              emptyTitle={emptyTitle}
              emptyDescription={emptyDescription}
            />
          </DealerResultsPendingShell>
        </div>

        <SeoContentSection content={seoContent} variant="muted" />

        <LocationFaqSection items={faqItems} />

        {nearbyCities && nearbyCities.length > 0 && (
          <NearbyCitiesSection cities={nearbyCities} />
        )}

        {stateCities && (
          <StateCitiesSection
            stateCode={stateCities.stateCode}
            cities={stateCities.cities}
          />
        )}
      </div>
    </>
  );
}
