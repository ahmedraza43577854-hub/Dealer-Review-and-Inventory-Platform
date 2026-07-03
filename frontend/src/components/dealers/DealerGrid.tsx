import { DealerSummary } from "@/types/dealer";
import { DealerCard } from "@/components/dealers/DealerCard";
import { cn } from "@/lib/utils";

interface DealerGridProps {
  dealers: DealerSummary[];
  className?: string;
  onDark?: boolean;
}

export function DealerGrid({ dealers, className, onDark }: DealerGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3",
        className
      )}
    >
      {dealers.map((dealer) => (
        <DealerCard key={dealer.id} dealer={dealer} onDark={onDark} />
      ))}
    </div>
  );
}
