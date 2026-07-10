import { HomeHero } from "@/components/home/HomeHero";
import { HomeStatsBand } from "@/components/home/HomeStatsBand";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { BrowseByType } from "@/components/home/BrowseByType";
import { BrowseByState } from "@/components/home/BrowseByState";
import { BrowseByBrand } from "@/components/home/BrowseByBrand";
import { TopRatedDealers } from "@/components/home/TopRatedDealers";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStatsBand />
      <FeaturedVehicles />
      <BrowseByType />
      <BrowseByState />
      <BrowseByBrand />
      <TopRatedDealers />
    </>
  );
}
