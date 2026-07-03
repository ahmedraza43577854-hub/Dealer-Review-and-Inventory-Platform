"use client";

import { Suspense } from "react";
import { DealerResults } from "@/components/dealers/DealerResults";
import { DealerGridSkeleton } from "@/components/dealers/DealerGridSkeleton";
import { useDealerNavigation } from "@/contexts/dealer-navigation-context";
import { DealerQueryParams } from "@/types/dealer";
import { cn } from "@/lib/utils";

interface DealersResultsSectionProps {
  searchParams: DealerQueryParams;
}

function buildSuspenseKey(params: DealerQueryParams): string {
  return [params.state, params.city, params.search, params.minRating]
    .filter(Boolean)
    .join("|");
}

export function DealersResultsSection({
  searchParams,
}: DealersResultsSectionProps) {
  const { isPending } = useDealerNavigation();
  const suspenseKey = buildSuspenseKey(searchParams);

  return (
    <div className={cn("relative transition-opacity duration-200", isPending && "opacity-70")}>
      <Suspense key={suspenseKey} fallback={<DealerGridSkeleton count={9} />}>
        <DealerResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
