"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useCompare } from "@/contexts/compare-context";
import { buildCompareUrl } from "@/lib/vehicles/compare";
import { formatPrice } from "@/lib/utils/format";
import { cn } from "@/lib/utils";
import { VehiclePhoto } from "@/components/vehicles/VehiclePhoto";
import { Button } from "@/components/ui/button";

export function CompareTray() {
  const router = useRouter();
  const { vehicles, removeVehicle, clearAll } = useCompare();
  const trayRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    const el = trayRef.current;
    if (!el) {
      setSpacerHeight(0);
      return;
    }
    const observer = new ResizeObserver(([entry]) => {
      setSpacerHeight(entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [vehicles.length]);

  if (vehicles.length === 0) return null;

  return (
    <>
      {/* Reserves space in normal flow so the fixed tray never covers the footer. */}
      <div style={{ height: spacerHeight }} aria-hidden />

      <div
        ref={trayRef}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-white shadow-card-hover"
      >
        <div className="container-page flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div
            className={cn(
              "flex flex-1 items-center gap-2.5",
              vehicles.length > 2 && "overflow-x-auto overscroll-x-contain pb-0.5"
            )}
          >
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className={cn(
                  "relative flex items-center gap-2 rounded-lg border border-border/70 bg-secondary/40 py-1.5 pl-1.5 pr-2",
                  vehicles.length <= 2
                    ? "min-w-0 flex-1"
                    : "w-[min(12rem,calc(50vw-1.5rem))] shrink-0"
                )}
              >
                <VehiclePhoto
                  vehicle={vehicle}
                  className="h-10 w-14 shrink-0 rounded-md"
                  showCount={false}
                  sizes="56px"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-bold text-primary">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </p>
                  <p className="text-xs font-semibold text-price">
                    {formatPrice(vehicle.price)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeVehicle(vehicle.id)}
                  aria-label={`Remove ${vehicle.year} ${vehicle.make} ${vehicle.model} from comparison`}
                  className="shrink-0 rounded-full p-1 text-muted-foreground hover:bg-secondary hover:text-primary"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex shrink-0 items-center justify-between gap-4 sm:justify-end">
            <button
              type="button"
              onClick={clearAll}
              className="text-sm font-semibold text-muted-foreground hover:text-primary hover:underline"
            >
              Clear all
            </button>
            <Button
              type="button"
              variant="gold"
              disabled={vehicles.length < 2}
              title={
                vehicles.length < 2
                  ? "Add at least one more vehicle to compare"
                  : undefined
              }
              onClick={() =>
                router.push(buildCompareUrl(vehicles.map((v) => v.id)))
              }
            >
              Compare ({vehicles.length})
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
