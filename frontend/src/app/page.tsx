import { HomeHero } from "@/components/home/HomeHero";
import { HomeStatsBand } from "@/components/home/HomeStatsBand";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { BrowseByType } from "@/components/home/BrowseByType";
import { BrowseByRegion } from "@/components/home/BrowseByRegion";
import { BrowseByBrand } from "@/components/home/BrowseByBrand";
import { TopRatedDealers } from "@/components/home/TopRatedDealers";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStatsBand />
      <FeaturedVehicles />
      <BrowseByType />
      <BrowseByRegion />
      <BrowseByBrand />
      <TopRatedDealers />
    </>
  );
}
