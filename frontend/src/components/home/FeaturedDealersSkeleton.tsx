import { DealerGridSkeleton } from "@/components/dealers/DealerGridSkeleton";

export function FeaturedDealersSkeleton() {
  return (
    <section className="section-dark py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 space-y-3">
          <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
          <div className="h-9 w-64 animate-pulse rounded bg-white/10" />
          <div className="h-5 w-80 animate-pulse rounded bg-white/10" />
        </div>
        <DealerGridSkeleton count={6} />
      </div>
    </section>
  );
}
