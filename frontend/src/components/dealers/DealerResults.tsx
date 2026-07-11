import { Search } from "lucide-react";
import { getDealers } from "@/lib/api/dealers";
import { getRegion } from "@/config/constants";
import { enrichDealerSummary } from "@/lib/dealers/enrich";
import { DealerListCard } from "@/components/dealers/DealerListCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { ErrorState } from "@/components/shared/ErrorState";
import { RetryButton } from "@/components/shared/RetryButton";
import { DealerQueryParams } from "@/types/dealer";

interface DealerResultsProps {
  searchParams: DealerQueryParams;
}

export async function DealerResults({ searchParams }: DealerResultsProps) {
  try {
    const dealers = await getDealers(searchParams);

    // The API has no region filter, so apply it here over the fetched results.
    const region = getRegion(searchParams.region);
    const scoped = region
      ? dealers.filter((d) =>
          (region.states as readonly string[]).includes(d.state.toUpperCase())
        )
      : dealers;

    if (scoped.length === 0) {
      return (
        <EmptyState
          icon={Search}
          title="No dealers found"
          description="We couldn't find any dealerships matching your criteria. Try broadening your search or clearing some filters."
        />
      );
    }

    const enriched = scoped.map(enrichDealerSummary);

    return (
      <div>
        <p className="mb-4 text-sm font-semibold text-muted-foreground">
          Showing {enriched.length}{" "}
          {enriched.length === 1 ? "dealership" : "dealerships"}
          {region ? ` in the ${region.label}` : ""}
        </p>
        <div className="space-y-4">
          {enriched.map((dealer) => (
            <DealerListCard key={dealer.slug} dealer={dealer} />
          ))}
        </div>
      </div>
    );
  } catch {
    return (
      <ErrorState
        title="Unable to load dealers"
        message="Something went wrong while fetching dealerships. Please check that the backend API is running and try again."
        action={<RetryButton />}
      />
    );
  }
}
