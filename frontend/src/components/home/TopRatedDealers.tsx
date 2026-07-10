import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTopRatedDemoDealers } from "@/lib/dealers/enrich";
import { ROUTES } from "@/config/constants";
import { DealerListCard } from "@/components/dealers/DealerListCard";

export function TopRatedDealers() {
  const dealers = getTopRatedDemoDealers(3);

  return (
    <section className="bg-background">
      <div className="container-page py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Top Rated Dealerships
            </h2>
            <p className="mt-2 text-muted-foreground">
              Highly reviewed dealers across Google, Yelp, and Carfax.
            </p>
          </div>
          <Link
            href={ROUTES.dealers}
            className="hidden shrink-0 items-center gap-1 text-sm font-bold text-primary hover:underline sm:inline-flex"
          >
            View All Dealers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {dealers.map((dealer) => (
            <DealerListCard key={dealer.slug} dealer={dealer} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
