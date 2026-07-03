import { DealerGridSkeleton } from "@/components/dealers/DealerGridSkeleton";

export default function DealersLoading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="mb-8 space-y-3">
        <div className="h-9 w-56 animate-pulse rounded-md bg-muted" />
        <div className="h-5 w-80 animate-pulse rounded-md bg-muted" />
      </div>
      <div className="mb-6 h-36 animate-pulse rounded-xl bg-muted" />
      <DealerGridSkeleton count={9} />
    </div>
  );
}
