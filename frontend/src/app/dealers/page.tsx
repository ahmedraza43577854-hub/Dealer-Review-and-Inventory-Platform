import { DealerSearchForm } from "@/components/dealers/DealerSearchForm";
import { DealerFilters } from "@/components/dealers/DealerFilters";
import { DealersResultsSection } from "@/components/dealers/DealersResultsSection";
import { ActiveFilters } from "@/components/dealers/ActiveFilters";
import { DealerQueryParams } from "@/types/dealer";
import { SITE } from "@/config/constants";

interface DealersPageProps {
  searchParams: DealerQueryParams;
}

export default function DealersPage({ searchParams }: DealersPageProps) {
  return (
    <div>
      <div className="relative overflow-hidden bg-[#070c18]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_0%,rgba(37,99,235,0.22),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,black,transparent)]"
          aria-hidden
        />
        <div className="container relative mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            {SITE.region}
          </span>
          <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Dealer listings
          </h1>
          <p className="mt-3 max-w-xl text-base text-slate-400 leading-relaxed sm:text-lg">
            Browse and compare car dealerships across New Jersey, New York,
            Pennsylvania, and Connecticut.
          </p>
        </div>
      </div>

      <div className="container relative z-10 mx-auto -mt-8 px-4 pb-10 sm:-mt-10 sm:px-6 sm:pb-14">
        <div className="mb-6 rounded-2xl bg-white p-4 shadow-premium ring-hairline sm:p-5 space-y-4">
          <DealerSearchForm
            defaultValues={searchParams}
            currentParams={searchParams}
          />
          <DealerFilters params={searchParams} />
        </div>

        <div className="mb-6">
          <ActiveFilters params={searchParams} />
        </div>

        <DealersResultsSection searchParams={searchParams} />
      </div>
    </div>
  );
}
