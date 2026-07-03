import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface DealerCardSkeletonProps {
  featured?: boolean;
  className?: string;
}

export function DealerCardSkeleton({
  featured = false,
  className,
}: DealerCardSkeletonProps) {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden",
        featured && "border-l-4 border-l-primary bg-primary/[0.03]",
        className
      )}
    >
      <CardContent className="p-5 sm:p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <Skeleton className="h-6 w-3/4" />
          {featured && <Skeleton className="h-5 w-16 rounded-full shrink-0" />}
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="h-3.5 w-3.5 rounded-full shrink-0" />
          <Skeleton className="h-4 w-28" />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-5 w-5 rounded-sm" />
              ))}
            </div>
            <Skeleton className="h-4 w-8" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>

        <Skeleton className="h-9 w-full rounded-md" />
      </CardContent>
    </Card>
  );
}
