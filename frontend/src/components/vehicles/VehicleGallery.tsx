"use client";

import { useState } from "react";
import { Camera } from "lucide-react";
import type { Vehicle } from "@/types/vehicle";
import { VehiclePhoto } from "@/components/vehicles/VehiclePhoto";
import { ConditionBadge } from "@/components/vehicles/ConditionBadge";
import { getVehicleImages } from "@/lib/vehicles/images";
import { cn } from "@/lib/utils";

const TINT_SHIFTS = ["#33517a", "#3d6187", "#2f6b7a", "#5a4a7a", "#6b5535"];

export function VehicleGallery({ vehicle }: { vehicle: Vehicle }) {
  const [active, setActive] = useState(0);
  const images = getVehicleImages(vehicle.id);
  const hasImages = images.length > 0;
  const slides = hasImages ? images : TINT_SHIFTS;
  const total = hasImages ? images.length : vehicle.photoCount;

  return (
    <div>
      <div className="relative overflow-hidden rounded-lg border border-border/70 shadow-card">
        <VehiclePhoto
          vehicle={hasImages ? vehicle : { ...vehicle, accent: slides[active] }}
          image={hasImages ? images[active] : undefined}
          className="w-full"
          width={800}
          height={500}
          showCount={false}
          iconClassName="h-24 w-24"
          sizes="(max-width: 1024px) 100vw, 800px"
          priority
        />
        <div className="absolute left-4 top-4">
          <ConditionBadge condition={vehicle.condition} className="text-sm" />
        </div>
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-md bg-black/55 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
          <Camera className="h-3.5 w-3.5" />
          {active + 1} / {total}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View photo ${i + 1}`}
            className={cn(
              "overflow-hidden rounded-md border-2 transition-colors",
              active === i
                ? "border-primary"
                : "border-transparent hover:border-primary/40"
            )}
          >
            <VehiclePhoto
              vehicle={hasImages ? vehicle : { ...vehicle, accent: slide }}
              image={hasImages ? slide : undefined}
              className="w-full"
              width={150}
              height={112}
              showCount={false}
              iconClassName="h-7 w-7"
              sizes="150px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
