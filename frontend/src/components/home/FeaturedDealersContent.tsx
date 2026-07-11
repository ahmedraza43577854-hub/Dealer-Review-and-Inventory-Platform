import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DealerGrid } from "@/components/dealers/DealerGrid";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ErrorState } from "@/components/shared/ErrorState";
import { RetryButton } from "@/components/shared/RetryButton";
import { Button } from "@/components/ui/button";
import { getDealers } from "@/lib/api/dealers";
import { ROUTES } from "@/config/constants";

const FEATURED_LIMIT = 6;

export async function FeaturedDealersContent() {
  try {
    const dealers = (await getDealers()).slice(0, FEATURED_LIMIT);

    if (dealers.length === 0) return null;

    return (
      <section className="section-dark py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Top picks"
            title="Featured Dealers"
            description="Highly rated dealerships across the country."
            dark
            action={
              <Button
                asChild
                className="hidden sm:inline-flex bg-white/10 text-white border border-white/20 hover:bg-white/20"
              >
                <Link href={ROUTES.dealers}>
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            }
          />
          <DealerGrid dealers={dealers} onDark />
          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link href={ROUTES.dealers}>View all dealers</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  } catch {
    return (
      <section className="py-12">
        <ErrorState
          title="Unable to load featured dealers"
          message="We could not fetch dealership data right now. Please try again."
          action={<RetryButton />}
          className="container mx-auto px-4 sm:px-6"
        />
      </section>
    );
  }
}
