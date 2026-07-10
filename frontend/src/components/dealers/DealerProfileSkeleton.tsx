import { VehicleCardSkeleton } from "@/components/vehicles/VehicleCardSkeleton";

export function DealerProfileSkeleton() {
  return (
    <div
      className="container-page py-6 lg:py-8"
      aria-busy="true"
      aria-label="Loading dealer profile"
    >
      {/* Header */}
      <div className="mb-6 rounded-lg border border-border/70 bg-white p-6 shadow-card">
        <div className="mb-4 h-4 w-52 skeleton" />
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
          <div className="flex-1 space-y-3">
            <div className="h-8 w-2/3 skeleton" />
            <div className="h-4 w-full max-w-md skeleton" />
            <div className="flex items-center gap-3 pt-2">
              <div className="h-10 w-14 skeleton" />
              <div className="h-6 w-40 skeleton" />
            </div>
            <div className="h-4 w-64 skeleton" />
          </div>
          <div className="flex flex-col gap-2 lg:w-52">
            <div className="h-10 w-full skeleton" />
            <div className="h-10 w-full skeleton" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px] lg:gap-8">
        <div>
          <div className="mb-6 flex gap-4 border-b border-border/70 pb-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-5 w-20 skeleton" />
            ))}
          </div>
          <div className="mb-5 h-14 w-full skeleton rounded-lg" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <VehicleCardSkeleton key={i} />
            ))}
          </div>
        </div>
        <aside className="space-y-4">
          <div className="h-64 w-full skeleton rounded-lg" />
          <div className="h-44 w-full skeleton rounded-lg" />
        </aside>
      </div>
    </div>
  );
}
