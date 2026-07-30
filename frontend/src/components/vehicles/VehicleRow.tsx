"use client";

import { useState } from "react";
import Link from "next/link";
import { Gauge, Heart, MapPin, Phone, Star } from "lucide-react";
import type { Vehicle } from "@/types/vehicle";
import { CityPageLink } from "@/components/dealers/CityPageLink";
import { ROUTES } from "@/config/constants";
import { formatMileage, formatPrice } from "@/lib/utils/format";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { VehiclePhoto } from "@/components/vehicles/VehiclePhoto";
import { ConditionBadge } from "@/components/vehicles/ConditionBadge";
import { CompareCheckbox } from "@/components/vehicles/CompareCheckbox";
import { toCompareVehicleSummary } from "@/lib/vehicles/compare";

export function VehicleRow({ vehicle }: { vehicle: Vehicle }) {
  const [saved, setSaved] = useState(false);
  const href = ROUTES.vehicleDetail(vehicle.id);

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover sm:flex-row",
        vehicle.dealer.featured
          ? "border-l-4 border-l-accent border-y-border/70 border-r-border/70"
          : "border-border/70"
      )}
    >
      <Link
        href={href}
        className="relative block shrink-0 sm:w-[220px]"
        aria-label={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
      >
        <VehiclePhoto
          vehicle={vehicle}
          fill
          // On mobile the row stacks, so the photo keeps a normal aspect
          // ratio; on desktop it sits beside taller text content, so it
          // stretches to match that height instead of leaving dead space
          // below a short, aspect-ratio-locked photo.
          className="aspect-[8/5] w-full sm:aspect-auto sm:h-full sm:w-[220px]"
          sizes="(max-width: 640px) 100vw, 220px"
        />
        <div className="absolute left-3 top-3">
          <ConditionBadge condition={vehicle.condition} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:flex-row sm:gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <Link href={href}>
              <h2 className="text-lg font-bold text-primary transition-colors hover:text-navy-600">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h2>
            </Link>
            <button
              type="button"
              onClick={() => setSaved((s) => !s)}
              aria-pressed={saved}
              aria-label={saved ? "Remove from saved" : "Save vehicle"}
              className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-accent sm:hidden"
            >
              <Heart className={cn("h-5 w-5", saved && "fill-accent text-accent")} />
            </button>
          </div>
          <p className="text-sm text-muted-foreground">{vehicle.trim}</p>

          <p className="mt-1.5 text-2xl font-extrabold text-price">
            {formatPrice(vehicle.price)}
          </p>

          <div className="mt-2 sm:hidden">
            <CompareCheckbox vehicle={toCompareVehicleSummary(vehicle)} />
          </div>

          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-primary">
              <Gauge className="h-3.5 w-3.5" />
              {formatMileage(vehicle.mileage)}
            </span>
            <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-primary">
              {vehicle.bodyStyle}
            </span>
            <span className="rounded-md bg-secondary px-2 py-1 text-xs font-medium text-primary">
              {vehicle.fuelType}
            </span>
          </div>

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {vehicle.features.slice(0, 4).map((feature) => (
              <span
                key={feature}
                className="rounded-md border border-border bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border/70 pt-3">
            <Link
              href={ROUTES.dealerProfile(vehicle.dealer.slug)}
              className="text-sm font-semibold text-foreground hover:text-primary hover:underline"
            >
              {vehicle.dealer.name}
            </Link>
            <span className="inline-flex items-center gap-1 rounded-md bg-gold-light px-1.5 py-0.5 text-xs font-bold text-gold-600">
              <Star className="h-3 w-3 fill-accent text-accent" />
              {vehicle.dealer.ratings.combined.toFixed(1)}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <CityPageLink city={vehicle.dealer.city} state={vehicle.dealer.state} />
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Phone className="h-3 w-3" />
              {vehicle.dealer.phone}
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 sm:w-[160px] sm:flex-col sm:items-stretch sm:justify-center">
          <Button asChild className="flex-1 sm:flex-none">
            <Link href={href}>View Vehicle</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link href={ROUTES.dealerProfile(vehicle.dealer.slug)}>
              View Dealer
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setSaved((s) => !s)}
            aria-pressed={saved}
            aria-label={saved ? "Remove from saved" : "Save vehicle"}
            className="hidden items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent sm:inline-flex"
          >
            <Heart className={cn("h-4 w-4", saved && "fill-accent text-accent")} />
            {saved ? "Saved" : "Save"}
          </button>
          <CompareCheckbox
            vehicle={toCompareVehicleSummary(vehicle)}
            className="hidden justify-center rounded-lg border border-border px-3 py-1.5 sm:inline-flex"
          />
        </div>
      </div>
    </article>
  );
}
