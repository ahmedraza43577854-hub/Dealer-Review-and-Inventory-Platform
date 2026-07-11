import { VehicleSearchBar } from "@/components/vehicles/VehicleSearchBar";
import { QuickSearchPills } from "@/components/vehicles/QuickSearchPills";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-hero bg-hero-texture">
      <div className="container-page py-14 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Next Car
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
            Search thousands of vehicles from trusted dealerships across the
            United States.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <VehicleSearchBar layout="hero" submitLabel="Search" />
        </div>

        <div className="mt-6">
          <QuickSearchPills variant="hero" />
        </div>
      </div>
    </section>
  );
}
