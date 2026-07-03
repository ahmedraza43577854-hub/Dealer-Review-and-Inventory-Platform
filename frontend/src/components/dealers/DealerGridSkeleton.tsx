import { DealerCardSkeleton } from "@/components/dealers/DealerCardSkeleton";
import { cn } from "@/lib/utils";

interface DealerGridSkeletonProps {
  count?: number;
  className?: string;
}

export function DealerGridSkeleton({
  count = 6,
  className,
}: DealerGridSkeletonProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3",
        className
      )}
      aria-busy="true"
      aria-label="Loading dealers"
    >
      {Array.from({ length: count }).map((_, index) => (
        <DealerCardSkeleton key={index} featured={index === 0} />
      ))}
    </div>
  );
}
