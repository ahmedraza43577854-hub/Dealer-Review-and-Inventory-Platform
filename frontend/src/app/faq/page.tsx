import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, ContentSection } from "@/components/layout/ContentPage";
import { FaqAccordion } from "@/components/pages/FaqAccordion";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { FAQ_GROUPS, getAllFaqItems } from "@/config/faq";
import { ROUTES } from "@/config/constants";
import { FAQ_INTRO_SEO_CONTENT } from "@/config/seo-content";
import { PAGE_SEO } from "@/config/seo";
import { buildFaqPageSchema } from "@/lib/schema/builders";

export const metadata: Metadata = PAGE_SEO.faq;

export default function FaqPage() {
  const faqSchema = buildFaqPageSchema(getAllFaqItems());

  return (
    <ContentPage
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about finding your next car and comparing dealers on AutoSalesReviews."
      badge="Help Center"
      centered
    >
      {faqSchema && <SchemaMarkup data={faqSchema} />}
      <ContentSection>
        <div className="mx-auto max-w-3xl">
          <SeoContentSection
            content={FAQ_INTRO_SEO_CONTENT}
            embedded
            collapsible={false}
          />

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
