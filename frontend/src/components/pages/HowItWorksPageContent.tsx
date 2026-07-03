"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  MapPin,
  ArrowRight,
  Filter,
  Phone,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ContentPage,
  ContentSection,
  ContentSectionHeader,
  PageCtaBand,
} from "@/components/layout/ContentPage";
import { HOW_IT_WORKS_STEPS, ROUTES, SITE } from "@/config/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";

const STEP_ICONS = [Search, Star, MapPin] as const;

const SEARCH_TIPS = [
  {
    icon: Filter,
    title: "Filter by state first",
    text: "Narrow to NJ, NY, PA, or CT before searching by city to get the most relevant results.",
  },
  {
    icon: Star,
    title: "Set a minimum rating",
    text: "Use the 4+ stars filter to surface dealerships with consistently strong feedback.",
  },
  {
    icon: Phone,
    title: "Check the profile first",
    text: "Open a dealer page for phone, email, website, and address before you schedule a visit.",
  },
  {
    icon: RefreshCw,
    title: "Come back often",
    text: "New dealers and reviews are added regularly as we expand across the Northeast.",
  },
] as const;

const PLATFORM_FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified listings",
    text: "Every dealership is listed with location and contact details you can act on immediately.",
  },
  {
    icon: Star,
    title: "Live ratings",
    text: "Average scores are calculated from real reviews, updated whenever new feedback arrives.",
  },
  {
    icon: Search,
    title: "Smart search",
    text: "Find dealers by name or city across all four states from a single search bar.",
  },
  {
    icon: MapPin,
    title: "Regional coverage",
    text: "Focused on NJ, NY, PA, and CT so you never wade through irrelevant national results.",
  },
] as const;

export function HowItWorksPageContent() {
  return (
    <ContentPage
      title="How It Works"
      subtitle="Three straightforward steps from search to showroom. Everything you need to shop smarter across the Northeast."
      badge="Buyer guide"
    >
      <ContentSection>
        <p className="mx-auto max-w-3xl text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
          Whether you are buying new, used, or comparing your options, {SITE.name}{" "}
          gives you a clear starting point with ratings, dealer profiles, and
          filters built for {SITE.region}.
        </p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12 md:mt-16 grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = STEP_ICONS[index] ?? Search;
            return (
              <motion.div key={item.step} variants={staggerItem} className="relative">
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div
                    className="absolute top-12 left-[calc(50%+3rem)] hidden h-px w-[calc(100%-6rem)] bg-gradient-to-r from-primary/40 to-primary/10 md:block"
                    aria-hidden
                  />
                )}
                <div className="group relative flex h-full flex-col rounded-2xl border bg-card p-7 sm:p-8 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Icon className="h-6 w-6 text-primary" aria-hidden />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </ContentSection>

      <ContentSection variant="muted">
        <ContentSectionHeader
          title="Tips for a better search"
          description="Get more from every visit to DealerReview with these practical suggestions."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SEARCH_TIPS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
                <Icon className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <ContentSectionHeader
          title="What you get on every search"
          description="Tools designed specifically for Northeast car buyers."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORM_FEATURES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border bg-gradient-to-b from-card to-muted/30 p-6 text-center shadow-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-7 w-7 text-primary" aria-hidden />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <PageCtaBand
        title="Start your search today"
        description="Browse dealerships across New Jersey, New York, Pennsylvania, and Connecticut."
      >
        <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-brand">
          <Link href={ROUTES.dealers}>
            Browse all dealers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
          <Link href={ROUTES.writeReview}>Write a review</Link>
        </Button>
      </PageCtaBand>
    </ContentPage>
  );
}
