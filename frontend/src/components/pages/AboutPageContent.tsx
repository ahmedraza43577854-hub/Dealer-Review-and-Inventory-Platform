"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  MapPinned,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ContentPage,
  ContentSection,
  ContentSectionHeader,
  PageCtaBand,
} from "@/components/layout/ContentPage";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { REGIONS, ROUTES, SITE, WHY_CHOOSE_US } from "@/config/constants";
import { ABOUT_EXTENDED_SEO_CONTENT } from "@/config/seo-content";
import { staggerContainer, staggerItem } from "@/lib/motion";

const VALUES = [
  {
    icon: Target,
    title: "Buyer-first",
    text: "Every feature starts with the question: does this help someone choose a dealership with confidence?",
  },
  {
    icon: Users,
    title: "Community driven",
    text: "Ratings and reviews come from real customers. We grow when shoppers share honest experiences.",
  },
  {
    icon: MapPinned,
    title: "Nationwide reach",
    text: "Dealerships in all 50 states. Shop locally or search anywhere in the country.",
  },
  {
    icon: Sparkles,
    title: "Always improving",
    text: "Review submission and inventory listings are on the way. We ship features that matter to buyers.",
  },
] as const;

const CURRENT_FEATURES = [
  "Searchable dealer listings in all 50 states",
  "Average star ratings from customer reviews",
  "Full dealer profiles with contact and location",
  "Filters by state, city, and minimum rating",
  "Mobile-friendly pages for on-the-go shopping",
  "Featured dealers highlighted for quick discovery",
] as const;

export function AboutPageContent() {
  return (
    <ContentPage
      title="About Us"
      subtitle="We help drivers across the country find dealerships they can trust before they buy."
      badge="Our story"
    >
      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Car buying should not feel like a guessing game
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {SITE.name} is a dealer review and discovery platform built for car buyers
              across the United States. We started with a
              simple idea: shoppers deserve clear, honest information before they
              walk into a showroom.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we connect buyers with local dealerships through ratings,
              detailed profiles, and search tools designed for American car buyers.
              Tomorrow we are adding review submission and inventory so you can
              do even more from one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-gradient-brand">
                <Link href={ROUTES.dealers}>Browse dealers</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={ROUTES.howItWorks}>How it works</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {REGIONS.map((region) => (
              <Link
                key={region.key}
                href={`${ROUTES.dealers}?region=${region.key}`}
                className="group rounded-xl border bg-card p-5 text-center shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <span className="text-lg font-bold text-primary">
                  {region.label}
                </span>
                <p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {region.blurb}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="muted">
        <ContentSectionHeader
          title="What we stand for"
          description="The principles behind every listing, rating, and feature we build."
        />
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="rounded-2xl border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <ContentSectionHeader
              title="Available today"
              description="Everything live on the platform right now."
              centered={false}
            />
            <ul className="space-y-3">
              {CURRENT_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ContentSectionHeader
              title="Why shoppers choose us"
              description="What sets AutoSalesReviews apart."
              centered={false}
            />
            <div className="space-y-4">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border bg-muted/30 p-5"
                >
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <SeoContentSection content={ABOUT_EXTENDED_SEO_CONTENT} variant="muted" />

      <ContentSection>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Questions, feedback, or partnership ideas? We would love to hear from you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="text-lg font-semibold text-primary hover:underline"
            >
              {SITE.email}
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a
              href={`tel:${SITE.phone.replace(/\D/g, "")}`}
              className="text-lg font-semibold text-primary hover:underline"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </ContentSection>

      <PageCtaBand
        title="Find your next dealership"
        description="Search listings nationwide and compare ratings side by side."
      >
        <Button asChild size="lg" className="bg-gradient-brand w-full sm:w-auto">
          <Link href={ROUTES.dealers}>
            Start browsing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </PageCtaBand>
    </ContentPage>
  );
}
