import type { Metadata } from "next";
import { cookies } from "next/headers";
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
import {
  LOCATION_COOKIE_NAME,
  parseUserLocationCookie,
} from "@/lib/location/location-cookie";

export const metadata: Metadata = PAGE_SEO.home;

export default function HomePage() {
  // Reading the visitor's saved location cookie personalizes the sections
  // below, which opts this route into per-request (dynamic) rendering.
  const location = parseUserLocationCookie(
    cookies().get(LOCATION_COOKIE_NAME)?.value
  );

  return (
    <>
      <SchemaMarkup
        data={[buildOrganizationSchema(), buildWebSiteSchema()]}
      />
      <HomeHero />
      <HomeStatsBand />
      <FeaturedVehicles location={location ?? undefined} />
      <BrowseByType />
      <BrowseByRegion />
      <BrowseByBrand />
      <PopularCities />
      <TopRatedDealers location={location ?? undefined} />
      <SeoContentSection content={HOME_SEO_CONTENT} variant="muted" />
    </>
  );
}
