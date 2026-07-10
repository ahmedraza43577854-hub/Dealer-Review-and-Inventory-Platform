import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Compact "4.2 ★" style rating chip used on vehicle cards. */
export function DealerRatingInline({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-sm font-bold text-primary",
        className
      )}
    >
      {rating > 0 ? rating.toFixed(1) : "New"}
      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
    </span>
  );
}
