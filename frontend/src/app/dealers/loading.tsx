import { DealerRowsSkeleton } from "@/components/dealers/DealerRowsSkeleton";

export default function DealersLoading() {
  return (
    <div className="bg-background">
      <div className="bg-primary">
        <div className="container-page py-12 sm:py-14">
          <div className="mb-3 h-6 w-24 rounded-full bg-white/20" />
          <div className="h-9 w-64 rounded-md bg-white/20" />
          <div className="mt-3 h-5 w-96 max-w-full rounded-md bg-white/10" />
        </div>
      </div>
      <div className="container-page -mt-6 pb-10">
        <div className="mb-6 h-32 skeleton rounded-lg" />
        <DealerRowsSkeleton count={6} />
      </div>
    </div>
  );
}
