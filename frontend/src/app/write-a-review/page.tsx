import type { Metadata } from "next";
import { WriteReviewPageContent } from "@/components/pages/WriteReviewPageContent";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PAGE_SEO } from "@/config/seo";
import { buildWriteReviewPageSchema } from "@/lib/schema/builders";

export const metadata: Metadata = PAGE_SEO.writeReview;

export default function WriteReviewPage() {
  return (
    <>
      <SchemaMarkup data={buildWriteReviewPageSchema()} />
      <WriteReviewPageContent />
    </>
  );
}
