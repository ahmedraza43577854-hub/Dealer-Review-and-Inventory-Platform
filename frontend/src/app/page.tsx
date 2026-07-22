import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeSectionSkeleton } from "@/components/home/HomeSectionSkeleton";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PAGE_SEO } from "@/config/seo";
import { HOME_SEO_CONTENT } from "@/config/seo-content";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/schema/builders";

const HomeStatsBand = dynamic(
  () =>
    import("@/components/home/HomeStatsBand").then((m) => ({
      default: m.HomeStatsBand,
    })),
  {
    loading: () => (
      <div className="border-b border-border/70 bg-white py-8" aria-hidden>
        <div className="container-page h-11 animate-pulse rounded-lg bg-muted" />
      </div>
    ),
  }
);

const SeoContentSection = dynamic(
  () =>
    import("@/components/seo/SeoContentSection").then((m) => ({
      default: m.SeoContentSection,
    })),
  { loading: () => <HomeSectionSkeleton /> }
);

const FeaturedVehicles = dynamic(
  () =>
    import("@/components/home/FeaturedVehicles").then((m) => ({
      default: m.FeaturedVehicles,
    })),
  { loading: () => <HomeSectionSkeleton /> }
);

const BrowseByType = dynamic(
  () =>
    import("@/components/home/BrowseByType").then((m) => ({
      default: m.BrowseByType,
    })),
  { loading: () => <HomeSectionSkeleton /> }
);

const BrowseByRegion = dynamic(
  () =>
    import("@/components/home/BrowseByRegion").then((m) => ({
      default: m.BrowseByRegion,
    })),
  { loading: () => <HomeSectionSkeleton /> }
);

const BrowseByBrand = dynamic(
  () =>
    import("@/components/home/BrowseByBrand").then((m) => ({
      default: m.BrowseByBrand,
    })),
  { loading: () => <HomeSectionSkeleton /> }
);

const PopularCities = dynamic(
  () =>
    import("@/components/home/PopularCities").then((m) => ({
      default: m.PopularCities,
    })),
  { loading: () => <HomeSectionSkeleton /> }
);

const TopRatedDealers = dynamic(
  () =>
    import("@/components/home/TopRatedDealers").then((m) => ({
      default: m.TopRatedDealers,
    })),
  { loading: () => <HomeSectionSkeleton /> }
);

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
