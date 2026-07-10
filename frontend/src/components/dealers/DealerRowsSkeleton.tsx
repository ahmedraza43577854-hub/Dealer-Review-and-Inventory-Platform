export function DealerRowsSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div aria-busy="true" aria-label="Loading dealers">
      <div className="mb-4 h-4 w-40 skeleton" />
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-lg border border-border/70 bg-card p-5 shadow-card sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4 sm:flex-1">
              <div className="h-16 w-16 shrink-0 skeleton rounded-lg" />
              <div className="flex-1 space-y-2">
                <div className="h-5 w-40 skeleton" />
                <div className="h-3 w-28 skeleton" />
                <div className="h-4 w-52 skeleton" />
                <div className="h-3 w-36 skeleton" />
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:w-44">
              <div className="h-10 w-full skeleton" />
              <div className="h-8 w-full skeleton" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
