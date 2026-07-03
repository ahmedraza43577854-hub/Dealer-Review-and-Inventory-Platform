import { DealerSearchForm } from "@/components/dealers/DealerSearchForm";
import { DealerFilters } from "@/components/dealers/DealerFilters";
import { DealersResultsSection } from "@/components/dealers/DealersResultsSection";
import { ActiveFilters } from "@/components/dealers/ActiveFilters";
import { DealerQueryParams } from "@/types/dealer";

interface DealersPageProps {
  searchParams: DealerQueryParams;
}

export default function DealersPage({ searchParams }: DealersPageProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <header className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Dealer Listings
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Browse car dealerships across NJ, NY, PA, and CT.
        </p>
      </header>

      <div className="mb-6 rounded-xl border bg-card p-4 sm:p-5 shadow-sm space-y-4">
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
  );
}
