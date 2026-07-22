import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { ROUTES, STATE_LABELS } from "@/config/constants";
import type { TargetCity } from "@/config/locations/cities-data";

interface NearbyCitiesSectionProps {
  cities: TargetCity[];
  heading?: string;
}

export function NearbyCitiesSection({
  cities,
  heading = "Nearby cities",
}: NearbyCitiesSectionProps) {
  if (cities.length === 0) return null;

  return (
    <section className="border-t border-border/70 bg-background py-10 lg:py-12">
      <div className="container-page">
        <h2 className="text-xl font-bold text-primary sm:text-2xl">{heading}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Explore trusted dealerships in nearby markets.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={ROUTES.dealerCity(city.slug)}
              className="group flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-white p-4 shadow-card transition-all hover:border-primary/30 hover:shadow-card-hover"
            >
              <span className="flex items-center gap-3 min-w-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-primary truncate">
                    {city.city}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {STATE_LABELS[city.stateCode] ?? city.stateCode}
                  </span>
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
