import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES, STATE_LABELS } from "@/config/constants";
import { HOMEPAGE_POPULAR_CITIES } from "@/config/locations";

export function PopularCities() {
  return (
    <section className="bg-background">
      <div className="container-page py-16">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Find Dealers in Popular Cities
            </h2>
            <p className="mt-2 text-muted-foreground">
              Browse trusted dealerships in cities across the United States
            </p>
          </div>
          <Link
            href={ROUTES.cities}
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline shrink-0"
          >
            View All Cities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {HOMEPAGE_POPULAR_CITIES.map(({ city, stateCode, slug }) => (
            <Link
              key={slug}
              href={ROUTES.dealerCity(slug)}
              className="group flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-white p-4 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover sm:p-5"
            >
              <span className="min-w-0">
                <span className="block font-bold text-primary truncate">
                  {city}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {STATE_LABELS[stateCode] ?? stateCode}
                </span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
