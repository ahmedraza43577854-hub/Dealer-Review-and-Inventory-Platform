import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, ContentSection } from "@/components/layout/ContentPage";
import { FaqAccordion, type FaqGroup } from "@/components/pages/FaqAccordion";
import { Button } from "@/components/ui/button";
import { ROUTES, SITE } from "@/config/constants";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${SITE.name}`,
  description: `Answers to common questions about searching cars, dealer ratings, and using ${SITE.name}.`,
};

const FAQ_GROUPS: FaqGroup[] = [
  {
    category: "Shopping for a car",
    items: [
      {
        question: "How do I search for vehicles?",
        answer:
          "Use the search bar on the homepage or the Find Cars page to filter by make, model, year, and price. On the results page you can narrow further by mileage, body style, condition, state, and dealer rating.",
      },
      {
        question: "Is AutoSalesReviews free to use?",
        answer:
          "Yes. Searching vehicles, reading reviews, and comparing dealer ratings is completely free for car buyers, with no account required.",
      },
      {
        question: "How do I contact a dealer about a car?",
        answer:
          'Open any vehicle page and use "Contact Dealer About This Car" or "Schedule a Test Drive" to reach the dealership directly by phone.',
      },
      {
        question: "Can I save vehicles I'm interested in?",
        answer:
          "Yes — tap the heart icon on any vehicle in the search results to save it while you browse during your session.",
      },
    ],
  },
  {
    category: "Dealer ratings & reviews",
    items: [
      {
        question: "How are dealer ratings calculated?",
        answer:
          "We combine ratings from Google, Yelp, and Carfax into a single average score for each dealership so you get the full picture at a glance.",
      },
      {
        question: "Can a dealership remove a negative review?",
        answer:
          "No. Dealers can respond publicly to reviews, but they cannot delete or suppress honest feedback from verified buyers.",
      },
      {
        question: "How do I write a review for a dealership?",
        answer:
          'Open any dealer profile and select "Write a Review," or use the Write a Review page to search for the dealership first.',
      },
    ],
  },
  {
    category: "Coverage & dealerships",
    items: [
      {
        question: "Which areas do you cover?",
        answer:
          "We cover dealerships nationwide, across all 50 states. Filter by state or city to find inventory near you, or search anywhere in the country.",
      },
      {
        question: "How do I list my dealership?",
        answer:
          'Visit the "List Your Dealership" page to get started. You can showcase your inventory, respond to reviews, and reach thousands of local buyers.',
      },
      {
        question: "Is the inventory up to date?",
        answer:
          "Dealers manage their own listings. We strive for accuracy but always recommend confirming availability and price directly with the dealership before visiting.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <ContentPage
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about finding your next car and comparing dealers on AutoSalesReviews."
      badge="Help Center"
      centered
    >
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <FaqAccordion groups={FAQ_GROUPS} />

          <div className="mt-10 rounded-lg border border-border/70 bg-white p-6 text-center shadow-card">
            <h3 className="text-lg font-bold text-primary">
              Still have questions?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Our support team is happy to help you find the right car or dealer.
            </p>
            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="gold">
                <Link href={ROUTES.contact}>Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={ROUTES.vehicles}>Browse Vehicles</Link>
              </Button>
            </div>
          </div>
        </div>
      </ContentSection>
    </ContentPage>
  );
}
