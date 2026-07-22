import type { Metadata } from "next";
import { WriteReviewPageContent } from "@/components/pages/WriteReviewPageContent";
import { PAGE_SEO } from "@/config/seo";

export const metadata: Metadata = PAGE_SEO.writeReview;

export default function WriteReviewPage() {
  return <WriteReviewPageContent />;
}
