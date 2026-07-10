import type { Metadata } from "next";
import { DealerSearchForm } from "@/components/dealers/DealerSearchForm";
import { DealerFilters } from "@/components/dealers/DealerFilters";
import { DealersResultsSection } from "@/components/dealers/DealersResultsSection";
import { ActiveFilters } from "@/components/dealers/ActiveFilters";
import { DealerQueryParams } from "@/types/dealer";
import { SITE } from "@/config/constants";

export const metadata: Metadata = {
  title: `Top Rated Dealerships | ${SITE.name}`,
  description:
    "Browse and compare trusted car dealerships across NJ, NY, PA & CT with combined ratings from Google, Yelp, and Carfax.",
};

interface DealersPageProps {
  searchParams: DealerQueryParams;
}

export default function DealersPage({ searchParams }: DealersPageProps) {
  return (
    <div className="bg-background">
      <div className="bg-primary bg-hero-texture">
        <div className="container-page py-12 sm:py-14">
          <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            {SITE.region}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Top Rated Dealerships
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Compare trusted car dealerships with combined ratings from Google,
            Yelp, and Carfax — then browse their inventory.
          </p>
        </div>
      </div>

      <div className="container-page -mt-6 pb-10">
        <div className="mb-6 space-y-4 rounded-lg border border-border/70 bg-white p-4 shadow-card sm:p-5">
          <DealerSearchForm
            defaultValues={searchParams}
            currentParams={searchParams}
          />
          <div className="border-t border-border/70 pt-4">
            <DealerFilters params={searchParams} />
          </div>
        </div>

        <div className="mb-5">
          <ActiveFilters params={searchParams} />
        </div>

        <DealersResultsSection searchParams={searchParams} />
      </div>
    </div>
  );
}
