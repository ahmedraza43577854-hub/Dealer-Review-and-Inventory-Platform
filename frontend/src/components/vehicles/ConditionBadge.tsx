import type { VehicleCondition } from "@/types/vehicle";
import { cn } from "@/lib/utils";

const LABELS: Record<VehicleCondition, string> = {
  NEW: "New",
  USED: "Used",
  CPO: "Certified",
};

const STYLES: Record<VehicleCondition, string> = {
  NEW: "bg-success text-success-foreground",
  USED: "bg-secondary text-primary",
  CPO: "bg-primary text-primary-foreground",
};

export function ConditionBadge({
  condition,
  className,
}: {
  condition: VehicleCondition;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide",
        STYLES[condition],
        className
      )}
    >
      {LABELS[condition]}
    </span>
  );
}
