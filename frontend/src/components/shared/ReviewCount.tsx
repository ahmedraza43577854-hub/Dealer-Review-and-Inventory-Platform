import { formatReviewCount } from "@/lib/utils/format";
import { cn } from "@/lib/utils";

interface ReviewCountProps {
  count: number;
  className?: string;
}

export function ReviewCount({ count, className }: ReviewCountProps) {
  return (
    <span className={cn("text-sm text-muted-foreground", className)}>
      {formatReviewCount(count)}
    </span>
  );
}
