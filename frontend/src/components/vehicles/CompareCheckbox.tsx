"use client";

import { useId } from "react";
import type { CompareVehicleSummary } from "@/types/vehicle";
import { useCompare } from "@/contexts/compare-context";
import { MAX_COMPARE_VEHICLES } from "@/lib/vehicles/compare";
import { cn } from "@/lib/utils";

export function CompareCheckbox({
  vehicle,
  className,
}: {
  vehicle: CompareVehicleSummary;
  className?: string;
}) {
  const { isSelected, canAddMore, addVehicle, removeVehicle } = useCompare();
  const id = useId();
  const checked = isSelected(vehicle.id);
  const disabled = !checked && !canAddMore;

  return (
    <label
      htmlFor={id}
      title={
        disabled
          ? `You can compare up to ${MAX_COMPARE_VEHICLES} vehicles at a time`
          : undefined
      }
      className={cn(
        "inline-flex select-none items-center gap-1.5 text-xs font-semibold",
        disabled
          ? "cursor-not-allowed text-muted-foreground/50"
          : "cursor-pointer text-muted-foreground hover:text-primary",
        className
      )}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => {
          if (event.target.checked) {
            addVehicle(vehicle);
          } else {
            removeVehicle(vehicle.id);
          }
        }}
        className="h-4 w-4 rounded border-border accent-[#003087] disabled:cursor-not-allowed"
      />
      Compare
    </label>
  );
}
