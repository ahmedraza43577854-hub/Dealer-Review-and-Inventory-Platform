import { DealerRowsSkeleton } from "@/components/dealers/DealerRowsSkeleton";

export default function DealersLoading() {
  return (
    <div className="bg-background">
      <div className="bg-primary bg-hero-texture">
        <div className="container-page py-12 sm:py-14">
          <div className="mb-3 h-6 w-24 rounded-full bg-white/20" />
          <div className="h-9 w-64 rounded-md bg-white/20" />
          <div className="mt-3 h-5 w-96 max-w-full rounded-md bg-white/10" />
        </div>
      </div>

      {/* Mirrors the intro SEO text strip that sits between the hero and
          the search box on the real page, so content doesn't jump down
          once it loads in. */}
      <div className="border-b border-border/70 bg-white">
        <div className="container-page py-6 lg:py-8">
          <div className="mx-auto max-w-3xl space-y-3">
            <div className="h-4 w-full skeleton" />
            <div className="h-4 w-5/6 skeleton" />
          </div>
        </div>
      </div>

      <div className="container-page pb-10">
        <div className="mb-6 h-32 skeleton rounded-lg" />
        <DealerRowsSkeleton count={6} />
      </div>
    </div>
  );
}
