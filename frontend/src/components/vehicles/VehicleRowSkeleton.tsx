export function VehicleRowSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border/70 bg-card shadow-card sm:flex-row">
      <div className="h-52 w-full skeleton rounded-none sm:h-auto sm:min-h-[210px] sm:w-[220px]" />
      <div className="flex flex-1 flex-col gap-3 p-4 sm:flex-row">
        <div className="flex-1 space-y-3">
          <div className="h-5 w-2/3 skeleton" />
          <div className="h-3 w-1/3 skeleton" />
          <div className="h-7 w-32 skeleton" />
          <div className="flex gap-2">
            <div className="h-6 w-24 skeleton" />
            <div className="h-6 w-16 skeleton" />
            <div className="h-6 w-16 skeleton" />
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-20 skeleton" />
            <div className="h-5 w-24 skeleton" />
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:w-[160px]">
          <div className="h-10 w-full skeleton" />
          <div className="h-8 w-full skeleton" />
        </div>
      </div>
    </div>
  );
}

export function VehicleRowSkeletonList({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <VehicleRowSkeleton key={i} />
      ))}
    </div>
  );
}
