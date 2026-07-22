import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES, STATE_LABELS } from "@/config/constants";
import type { TargetCity } from "@/config/locations/cities-data";

interface StateCitiesSectionProps {
  stateCode: string;
  cities: TargetCity[];
}

export function StateCitiesSection({
  stateCode,
  cities,
}: StateCitiesSectionProps) {
  if (cities.length === 0) return null;

  const stateName = STATE_LABELS[stateCode] ?? stateCode;

  return (
    <section className="border-t border-border/70 bg-background py-10 lg:py-12">
      <div className="container-page">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-primary sm:text-2xl">
              Cities in {stateName}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse dealers by city across {stateName}.
            </p>
          </div>
          <Link
            href={ROUTES.cities}
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            View all cities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={ROUTES.dealerCity(city.slug)}
              className="group rounded-lg border border-border/70 bg-white px-4 py-3 shadow-card transition-all hover:border-primary/30 hover:shadow-card-hover"
            >
              <span className="block font-bold text-primary group-hover:underline">
                {city.city}
              </span>
              <span className="text-xs text-muted-foreground">{stateName}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
