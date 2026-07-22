import { Suspense } from "react";
import { DealerResults } from "@/components/dealers/DealerResults";
import { DealerRowsSkeleton } from "@/components/dealers/DealerRowsSkeleton";
import { DealerQueryParams } from "@/types/dealer";

interface DealersResultsSuspenseProps {
  searchParams: DealerQueryParams;
  emptyTitle?: string;
  emptyDescription?: string;
}

function buildSuspenseKey(params: DealerQueryParams): string {
  return [
    params.state,
    params.city,
    params.search,
    params.minRating,
    params.region,
  ]
    .filter(Boolean)
    .join("|");
}

/** Server-only results boundary, must not live in the same module as client hooks. */
export function DealersResultsSuspense({
  searchParams,
  emptyTitle,
  emptyDescription,
}: DealersResultsSuspenseProps) {
  const suspenseKey = buildSuspenseKey(searchParams);

  return (
      <Suspense key={suspenseKey} fallback={<DealerRowsSkeleton count={6} />}>
        <DealerResults
          searchParams={searchParams}
          emptyTitle={emptyTitle}
          emptyDescription={emptyDescription}
        />
      </Suspense>
  );
}
