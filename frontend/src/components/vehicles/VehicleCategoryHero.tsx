import { VehicleSearchBar } from "@/components/vehicles/VehicleSearchBar";

interface VehicleCategoryHeroProps {
  badge: string;
  h1: string;
  subtitle: string;
  submitLabel?: string;
  defaultValues?: {
    make?: string;
    model?: string;
    year?: string;
    priceTo?: string;
  };
}

export function VehicleCategoryHero({
  badge,
  h1,
  subtitle,
  submitLabel = "Search Inventory",
  defaultValues,
}: VehicleCategoryHeroProps) {
  return (
    <div className="bg-primary bg-hero-texture">
      <div className="container-page py-10 sm:py-12">
        <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
          {badge}
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {h1}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-6 max-w-3xl rounded-lg border border-white/20 bg-white/95 p-4 shadow-card backdrop-blur-sm sm:p-5">
          <VehicleSearchBar
            layout="bar"
            submitLabel={submitLabel}
            defaultValues={defaultValues}
          />
        </div>
      </div>
    </div>
  );
}
