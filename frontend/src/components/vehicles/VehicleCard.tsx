import Link from "next/link";
import { Gauge, MapPin } from "lucide-react";
import type { Vehicle } from "@/types/vehicle";
import { ROUTES } from "@/config/constants";
import { formatMileage, formatPrice } from "@/lib/utils/format";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { VehiclePhoto } from "@/components/vehicles/VehiclePhoto";
import { ConditionBadge } from "@/components/vehicles/ConditionBadge";
import { DealerRatingInline } from "@/components/vehicles/DealerRatingInline";

interface VehicleCardProps {
  vehicle: Vehicle;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export function VehicleCard({
  vehicle,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  quality = 70,
}: VehicleCardProps) {
  const href = ROUTES.vehicleDetail(vehicle.id);
  const vehicleLabel = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        vehicle.dealer.featured
          ? "border-accent/50 ring-1 ring-accent/30"
          : "border-border/70"
      )}
    >
      <Link
        href={href}
        className="relative block"
        aria-label={`View ${vehicleLabel}`}
      >
        <VehiclePhoto
          vehicle={vehicle}
          className="w-full"
          sizes={sizes}
          priority={priority}
          quality={quality}
        />
        <div className="absolute left-3 top-3 flex items-center gap-2" aria-hidden>
          <ConditionBadge condition={vehicle.condition} />
          {vehicle.dealer.featured && (
            <span className="inline-flex items-center rounded-md bg-accent px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-accent-foreground">
              Featured
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={href}>
          <h3 className="text-base font-bold text-primary transition-colors group-hover:text-navy-600">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>
        </Link>
        <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
          {vehicle.trim}
        </p>

        <p className="mt-2 text-2xl font-extrabold text-price">
          {formatPrice(vehicle.price)}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-primary">
            <Gauge className="h-3.5 w-3.5" />
            {formatMileage(vehicle.mileage)}
          </span>
          <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-primary">
            {vehicle.bodyStyle}
          </span>
          <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-primary">
            {vehicle.fuelType}
          </span>
        </div>

        <div className="mt-4 border-t border-border/70 pt-3">
          <div className="flex items-center justify-between gap-2">
            <Link
              href={ROUTES.dealerProfile(vehicle.dealer.slug)}
              className="truncate text-sm font-semibold text-foreground hover:text-primary hover:underline"
            >
              {vehicle.dealer.name}
            </Link>
            <DealerRatingInline rating={vehicle.dealer.ratings.combined} />
          </div>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {vehicle.dealer.city}, {vehicle.dealer.state}
          </p>
        </div>

        <Button asChild className="mt-4 w-full">
          <Link href={href}>View Details</Link>
        </Button>
      </div>
    </article>
  );
}
