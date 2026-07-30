import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ROUTES, SITE } from "@/config/constants";
import { SavedVehiclesList } from "@/components/vehicles/SavedVehiclesList";
import { LocationFaqSection } from "@/components/dealers/LocationFaqSection";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { SAVED_FAQ_ITEMS, SAVED_SEO_CONTENT } from "@/config/seo-content";

export const metadata: Metadata = {
  title: `Saved Vehicles | ${SITE.name}`,
  description:
    "Your shortlisted vehicles — come back anytime to compare, book, or contact dealers.",
  robots: { index: false, follow: true },
};

export default function SavedVehiclesPage() {
  return (
    <div className="bg-background">
      <div className="container-page py-8 sm:py-10">
        <Link
          href={ROUTES.vehicles}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all vehicles
        </Link>

        <header className="mt-5 max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Saved Vehicles
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Your shortlist — compare options, open a listing, or remove cars
            you&apos;re done with.
          </p>
        </header>

        <div className="mt-8">
          <SavedVehiclesList />
        </div>
      </div>

      <LocationFaqSection items={SAVED_FAQ_ITEMS} />
      <SeoContentSection content={SAVED_SEO_CONTENT} variant="muted" />
    </div>
  );
}
