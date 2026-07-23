import dynamic from "next/dynamic";
import { QuickSearchPills } from "@/components/vehicles/QuickSearchPills";
import { HeroSearchSkeleton } from "@/components/home/HeroSearchSkeleton";
import { HomeHeroHeading } from "@/components/home/HomeHeroHeading";

const VehicleSearchBar = dynamic(
  () =>
    import("@/components/vehicles/VehicleSearchBar").then((m) => ({
      default: m.VehicleSearchBar,
    })),
  {
    loading: () => <HeroSearchSkeleton />,
    ssr: false,
  }
);

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-hero bg-hero-texture">
      <div className="container-page py-14 sm:py-20">
        <HomeHeroHeading />

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
