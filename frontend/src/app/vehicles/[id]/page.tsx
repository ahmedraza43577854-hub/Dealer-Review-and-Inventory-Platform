import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageSquare, CalendarClock } from "lucide-react";
import {
  getVehicleById,
  getSimilarVehicles,
  getAllVehicles,
} from "@/lib/vehicles/data";
import { ROUTES, SITE } from "@/config/constants";
import { formatPrice } from "@/lib/utils/format";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { VehicleSpecs } from "@/components/vehicles/VehicleSpecs";
import { VehicleFeatures } from "@/components/vehicles/VehicleFeatures";
import { VehicleDealerCard } from "@/components/vehicles/VehicleDealerCard";
import { SimilarVehicles } from "@/components/vehicles/SimilarVehicles";
import { MobileContactBar } from "@/components/vehicles/MobileContactBar";
import { ConditionBadge } from "@/components/vehicles/ConditionBadge";
import { Button } from "@/components/ui/button";

interface VehicleDetailPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return getAllVehicles().map((v) => ({ id: v.id }));
}

export function generateMetadata({
  params,
}: VehicleDetailPageProps): Metadata {
  const vehicle = getVehicleById(params.id);
  if (!vehicle) return { title: `Vehicle | ${SITE.name}` };
  return {
    title: `${vehicle.year} ${vehicle.make} ${vehicle.model} | ${SITE.name}`,
    description: vehicle.description,
  };
}

export default function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const vehicle = getVehicleById(params.id);
  if (!vehicle) notFound();

  const similar = getSimilarVehicles(vehicle, 3);

  return (
    <div className="bg-background pb-24 lg:pb-0">
      {/* Breadcrumb */}
      <div className="border-b border-border/70 bg-white">
        <div className="container-page py-3">
          <nav
            className="flex items-center gap-1.5 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href={ROUTES.home} className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={ROUTES.vehicles} className="hover:text-primary">
              Find Cars
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="truncate font-medium text-primary">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </span>
          </nav>
        </div>
      </div>

      <div className="container-page py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          {/* Main column */}
          <div className="space-y-8">
            <VehicleGallery vehicle={vehicle} />

            <div>
              <h1 className="text-2xl font-extrabold text-primary sm:text-3xl">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <p className="mt-1 text-base text-muted-foreground">
                {vehicle.trim}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-3xl font-extrabold text-price sm:text-4xl">
                  {formatPrice(vehicle.price)}
                </span>
                <ConditionBadge condition={vehicle.condition} className="text-sm" />
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-primary">
                Key Specifications
              </h2>
              <VehicleSpecs vehicle={vehicle} />
              <p className="mt-3 text-xs text-muted-foreground">
                VIN: <span className="font-mono">{vehicle.vin}</span> ·{" "}
                {vehicle.drivetrain} · {vehicle.mpg}
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-primary">
                Vehicle Description
              </h2>
              <p className="leading-relaxed text-foreground/90">
                {vehicle.description}
              </p>
            </div>

            <div className="rounded-lg border border-border/70 bg-white p-5 shadow-card">
              <h2 className="mb-4 text-lg font-bold text-primary">
                Features &amp; Options
              </h2>
              <VehicleFeatures features={vehicle.features} />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="gold" size="lg" className="flex-1">
                <MessageSquare className="h-4 w-4" />
                Contact Dealer About This Car
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <CalendarClock className="h-4 w-4" />
                Schedule a Test Drive
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            <VehicleDealerCard dealer={vehicle.dealer} />

            {similar.length > 0 && (
              <div>
                <h2 className="mb-3 text-lg font-bold text-primary">
                  Similar Vehicles
                </h2>
                <SimilarVehicles vehicles={similar} />
              </div>
            )}
          </aside>
        </div>
      </div>

      <MobileContactBar vehicle={vehicle} />
    </div>
  );
}
