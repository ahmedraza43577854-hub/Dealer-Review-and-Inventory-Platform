import type { Metadata } from "next";
import { WriteReviewPageContent } from "@/components/pages/WriteReviewPageContent";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PAGE_SEO } from "@/config/seo";
import { WRITE_REVIEW_FAQ_ITEMS } from "@/config/seo-content";
import {
  buildFaqPageSchema,
  buildWriteReviewPageSchema,
} from "@/lib/schema/builders";

export const metadata: Metadata = PAGE_SEO.writeReview;

export default function WriteReviewPage() {
  const faqSchema = buildFaqPageSchema(WRITE_REVIEW_FAQ_ITEMS);

  return (
    <>
      <SchemaMarkup
        data={[buildWriteReviewPageSchema(), ...(faqSchema ? [faqSchema] : [])]}
      />
      <WriteReviewPageContent />
    </>
  );
}
