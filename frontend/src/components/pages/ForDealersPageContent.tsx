"use client";

import Link from "next/link";
import {
  Building2,
  TrendingUp,
  BadgeCheck,
  Car,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ContentPage,
  ContentSection,
  ContentSectionHeader,
  PageCtaBand,
} from "@/components/layout/ContentPage";
import { ROUTES, SITE } from "@/config/constants";

const DEALER_BENEFITS = [
  {
    icon: TrendingUp,
    title: "Reach active buyers",
    text: "Get in front of shoppers comparing dealerships across the country right now.",
  },
  {
    icon: BadgeCheck,
    title: "Earn trust fairly",
    text: "Your reputation is built on real reviews. No pay-to-hide, no manipulated scores.",
  },
  {
    icon: Building2,
    title: "Complete profile",
    text: "Showcase your location, contact info, description, and ratings in one place.",
  },
  {
    icon: Car,
    title: "Inventory coming",
    text: "Vehicle listings will be available in a future release so buyers can browse your stock online.",
  },
] as const;

const ONBOARDING_STEPS = [
  "Email us with your dealership name, city, state, and website",
  "Our team verifies your business and creates or updates your profile",
  "Your listing goes live with ratings and contact details",
  "We notify you when review responses and inventory tools are available",
] as const;

export function ForDealersPageContent() {
  return (
    <ContentPage
      title="For Dealers"
      subtitle="Reach motivated car buyers nationwide. List your dealership and build trust with real customer feedback."
      badge="Partner with us"
    >
      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Put your dealership where buyers are already looking
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {SITE.name} puts your store in front of shoppers actively comparing
              options nationwide. We focus on trust and transparency, which
              means your reputation is earned through service, not ad spend.
            </p>
            <Button asChild className="mt-8 bg-gradient-brand" size="lg">
              <Link href={`mailto:${SITE.email}?subject=Dealer%20listing%20inquiry`}>
                <Mail className="h-4 w-4" />
                Request a listing
              </Link>
            </Button>
          </div>

          <div className="rounded-2xl border bg-gradient-to-br from-primary/10 to-card p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              How onboarding works
            </h3>
            <ol className="space-y-4">
              {ONBOARDING_STEPS.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-sm text-muted-foreground leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="muted">
        <ContentSectionHeader
          title="Why list with AutoSalesReviews"
          description="Benefits for dealerships joining the platform."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DEALER_BENEFITS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-8 sm:p-10 text-center shadow-sm">
          <h2 className="text-xl font-bold text-foreground">Contact our dealer team</h2>
          <p className="mt-3 text-muted-foreground">
            Email{" "}
            <a
              href={`mailto:${SITE.email}?subject=Dealer%20listing%20inquiry`}
              className="font-semibold text-primary hover:underline"
            >
              {SITE.email}
            </a>{" "}
            with your dealership details. We typically respond within one business day.
          </p>
        </div>
      </ContentSection>

      <PageCtaBand
        title="See what buyers see"
        description="Browse current listings and profiles nationwide."
      >
        <Button asChild size="lg" className="bg-gradient-brand w-full sm:w-auto">
          <Link href={ROUTES.dealers}>
            View listings
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </PageCtaBand>
    </ContentPage>
  );
}
