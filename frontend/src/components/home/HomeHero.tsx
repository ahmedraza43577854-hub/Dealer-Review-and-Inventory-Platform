import { PAGE_HEADINGS } from "@/config/constants";
import { VehicleSearchBar } from "@/components/vehicles/VehicleSearchBar";
import { QuickSearchPills } from "@/components/vehicles/QuickSearchPills";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-hero bg-hero-texture">
      <div className="container-page py-14 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {PAGE_HEADINGS.home}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
            Compare dealer ratings, filter by make and price, and shop with
            confidence in every state.
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
