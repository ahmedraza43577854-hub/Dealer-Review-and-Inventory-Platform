import { DealerGrid } from "@/components/dealers/DealerGrid";
import { EmptyState } from "@/components/shared/EmptyState";
import { ErrorState } from "@/components/shared/ErrorState";
import { RetryButton } from "@/components/shared/RetryButton";
import { getDealers } from "@/lib/api/dealers";
import { DealerQueryParams } from "@/types/dealer";
import { Search } from "lucide-react";

interface DealerResultsProps {
  searchParams: DealerQueryParams;
}

export async function DealerResults({ searchParams }: DealerResultsProps) {
  try {
    const dealers = await getDealers(searchParams);

    if (dealers.length === 0) {
      return (
        <EmptyState
          icon={Search}
          title="No dealers found"
          description="We couldn't find any dealerships matching your criteria. Try broadening your search or clearing some filters."
        />
      );
    }

    return <DealerGrid dealers={dealers} />;
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
