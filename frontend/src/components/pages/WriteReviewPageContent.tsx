"use client";

import Link from "next/link";
import {
  MessageSquare,
  Star,
  PenLine,
  Clock,
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
import { LocationFaqSection } from "@/components/dealers/LocationFaqSection";
import { ROUTES, SITE } from "@/config/constants";
import {
  WRITE_REVIEW_FAQ_ITEMS,
  WRITE_REVIEW_SEO_CONTENT,
} from "@/config/seo-content";

const REVIEW_INCLUDES = [
  "Overall rating from 1 to 5 stars",
  "Written comments about sales, pricing, and service",
  "Notes on the service department for return visits",
  "Your name shown as first name and last initial",
  "Ability to update your review if circumstances change",
] as const;

const WHY_REVIEW = [
  {
    icon: MessageSquare,
    title: "Help your neighbors",
    text: "A detailed review saves the next buyer from a bad experience or points them to a great one.",
  },
  {
    icon: Star,
    title: "Keep ratings honest",
    text: "The more voices on a dealership, the more accurate the average score becomes for everyone.",
  },
  {
    icon: PenLine,
    title: "Take two minutes",
    text: "When submission opens, sharing your experience will be quick and straightforward.",
  },
] as const;

export function WriteReviewPageContent() {
  return (
    <ContentPage
      title="Write a Review"
      subtitle="Your experience helps the next buyer make a smarter choice. Review submission is opening soon."
      badge="Coming soon"
    >
      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="rounded-2xl border bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-10 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 mb-6">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              Review submission opens soon
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are finishing the review form and moderation tools. Soon you
              will be able to rate your experience, leave a comment, and help
              shoppers across the country shop with confidence.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In the meantime, browse dealer profiles to see current ratings and
              existing feedback from other buyers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-6">
              What you will be able to share
            </h2>
            <ul className="space-y-4">
              {REVIEW_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="muted">
        <ContentSectionHeader
          title="Why your review matters"
          description="Honest feedback is the backbone of AutoSalesReviews."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {WHY_REVIEW.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border bg-card p-7 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <LocationFaqSection items={WRITE_REVIEW_FAQ_ITEMS} />

      <SeoContentSection content={WRITE_REVIEW_SEO_CONTENT} />

      <PageCtaBand
        title="Explore dealers while you wait"
        description="Compare ratings and read profiles from dealerships nationwide today."
      >
        <Button asChild size="lg" className="bg-gradient-brand w-full sm:w-auto">
          <Link href={ROUTES.dealers}>
            Browse dealers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="w-full sm:w-auto border-white/25 text-white hover:bg-white/10 bg-transparent"
        >
          <Link href={`mailto:${SITE.email}`}>Contact us</Link>
        </Button>
      </PageCtaBand>
    </ContentPage>
  );
}
