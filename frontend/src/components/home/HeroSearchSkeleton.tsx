/** Placeholder matching hero search bar dimensions to prevent CLS while search loads. */
export function HeroSearchSkeleton() {
  return (
    <div
      className="rounded-lg border border-white/20 bg-white/95 p-4 shadow-card backdrop-blur-sm sm:p-5"
      aria-hidden
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-1.5">
            <div className="h-3 w-12 animate-pulse rounded bg-muted/50" />
            <div className="h-10 animate-pulse rounded-md bg-muted/40" />
          </div>
        ))}
        <div className="flex items-end">
          <div className="h-10 w-full animate-pulse rounded-md bg-muted/50 sm:min-w-[7.5rem]" />
        </div>
      </div>
    </div>
  );
}
