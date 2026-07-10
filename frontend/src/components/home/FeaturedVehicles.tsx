import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedVehicles } from "@/lib/vehicles/data";
import { ROUTES } from "@/config/constants";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

export function FeaturedVehicles() {
  const vehicles = getFeaturedVehicles(6);

  return (
    <section className="bg-background">
      <div className="container-page py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Browse Latest Vehicles
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fresh inventory from top-rated dealers near you.
            </p>
          </div>
          <Link
            href={ROUTES.vehicles}
            className="hidden shrink-0 items-center gap-1 text-sm font-bold text-primary hover:text-navy-600 hover:underline sm:inline-flex"
          >
            View All Vehicles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href={ROUTES.vehicles}
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            View All Vehicles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
