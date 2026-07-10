import { VehicleRowSkeletonList } from "@/components/vehicles/VehicleRowSkeleton";

export default function VehiclesLoading() {
  return (
    <div className="bg-background">
      <div className="border-b border-border/70 bg-white">
        <div className="container-page py-5">
          <div className="mb-3 h-7 w-56 skeleton" />
          <div className="h-24 w-full skeleton rounded-lg" />
        </div>
      </div>

      <div className="container-page py-6 lg:py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[290px_1fr] lg:gap-8">
          <aside className="hidden lg:block">
            <div className="space-y-4 rounded-lg border border-border/70 bg-white p-4 shadow-card">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="space-y-2 border-b border-border/60 pb-4">
                  <div className="h-4 w-24 skeleton" />
                  <div className="h-9 w-full skeleton" />
                </div>
              ))}
            </div>
          </aside>
          <div>
            <div className="mb-5 flex items-center justify-between">
              <div className="h-6 w-48 skeleton" />
              <div className="h-9 w-40 skeleton" />
            </div>
            <VehicleRowSkeletonList count={5} />
          </div>
        </div>
      </div>
    </div>
  );
}
