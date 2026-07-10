export function VehicleCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border/70 bg-card shadow-card">
      <div className="h-48 w-full skeleton rounded-none" />
      <div className="flex flex-col gap-3 p-4">
        <div className="h-4 w-3/4 skeleton" />
        <div className="h-3 w-1/2 skeleton" />
        <div className="h-7 w-28 skeleton" />
        <div className="flex gap-2">
          <div className="h-6 w-20 skeleton" />
          <div className="h-6 w-14 skeleton" />
        </div>
        <div className="mt-2 flex items-center justify-between border-t border-border/70 pt-3">
          <div className="h-4 w-24 skeleton" />
          <div className="h-4 w-10 skeleton" />
        </div>
        <div className="h-10 w-full skeleton" />
      </div>
    </div>
  );
}

export function VehicleCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <VehicleCardSkeleton key={i} />
      ))}
    </div>
  );
}
