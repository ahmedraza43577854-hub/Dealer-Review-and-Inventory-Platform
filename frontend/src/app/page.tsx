import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeStatsBand } from "@/components/home/HomeStatsBand";
import { FeaturedVehicles } from "@/components/home/FeaturedVehicles";
import { BrowseByType } from "@/components/home/BrowseByType";
import { BrowseByRegion } from "@/components/home/BrowseByRegion";
import { BrowseByBrand } from "@/components/home/BrowseByBrand";
import { PopularCities } from "@/components/home/PopularCities";
import { TopRatedDealers } from "@/components/home/TopRatedDealers";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { PAGE_SEO } from "@/config/seo";
import { HOME_SEO_CONTENT } from "@/config/seo-content";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/schema/builders";

export const metadata: Metadata = PAGE_SEO.home;

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        data={[buildOrganizationSchema(), buildWebSiteSchema()]}
      />
      <HomeHero />
      <HomeStatsBand />
      <FeaturedVehicles />
      <BrowseByType />
      <BrowseByRegion />
      <BrowseByBrand />
      <PopularCities />
      <TopRatedDealers />
      <SeoContentSection content={HOME_SEO_CONTENT} variant="muted" />
    </>
  );
}
