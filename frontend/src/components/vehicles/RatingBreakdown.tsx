import { Star } from "lucide-react";
import type { DealerRatings } from "@/types/vehicle";
import { StarRating } from "@/components/shared/StarRating";
import { cn } from "@/lib/utils";

function Source({
  label,
  value,
  count,
}: {
  label: string;
  value: number;
  count?: number;
}) {
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <span className="font-semibold text-foreground">{label}</span>
      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
      <span className="font-bold text-primary">{value.toFixed(1)}</span>
      {count !== undefined && (
        <span className="text-xs text-muted-foreground">({count})</span>
      )}
    </div>
  );
}

/** Inline row: Google ★ 4.2 | Yelp ★ 4.0 | Carfax ★ 4.5 */
export function RatingSources({
  ratings,
  showCounts = true,
  className,
}: {
  ratings: DealerRatings;
  showCounts?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 divide-slate-200",
        className
      )}
    >
      <Source
        label="Google"
        value={ratings.google}
        count={showCounts ? ratings.googleCount : undefined}
      />
      <span className="hidden h-4 w-px bg-border sm:inline-block" aria-hidden />
      <Source
        label="Yelp"
        value={ratings.yelp}
        count={showCounts ? ratings.yelpCount : undefined}
      />
      <span className="hidden h-4 w-px bg-border sm:inline-block" aria-hidden />
      <Source label="Carfax" value={ratings.carfax} />
    </div>
  );
}

/** Full breakdown card with combined average + individual sources. */
export function RatingBreakdown({
  ratings,
  className,
}: {
  ratings: DealerRatings;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-3">
        <span className="text-3xl font-extrabold text-primary">
          {ratings.combined.toFixed(1)}
        </span>
        <div>
          <StarRating rating={ratings.combined} size="md" />
          <p className="mt-0.5 text-xs text-muted-foreground">
            Combined average · {ratings.totalReviews} reviews
          </p>
        </div>
      </div>
      <RatingSources ratings={ratings} />
    </div>
  );
}
