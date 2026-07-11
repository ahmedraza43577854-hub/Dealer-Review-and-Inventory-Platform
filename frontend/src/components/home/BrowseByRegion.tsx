import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { REGIONS, ROUTES } from "@/config/constants";

const DEALER_COUNTS: Record<string, number> = {
  northeast: 128,
  southeast: 142,
  midwest: 118,
  southwest: 76,
  west: 134,
};

export function BrowseByRegion() {
  return (
    <section className="bg-background">
      <div className="container-page py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Find Dealers by Region
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore trusted dealerships across the United States.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {REGIONS.map((region) => (
            <Link
              key={region.key}
              href={`${ROUTES.dealers}?region=${region.key}`}
              className="group flex flex-col justify-between gap-3 rounded-lg border border-border/70 bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white">
                  <MapPin className="h-5 w-5" />
                </span>
                <p className="mt-3 text-base font-bold text-primary">
                  {region.label}
                </p>
                <p className="text-xs text-muted-foreground">{region.blurb}</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  {DEALER_COUNTS[region.key]} dealers
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href={ROUTES.dealers}
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            Browse all dealers nationwide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
