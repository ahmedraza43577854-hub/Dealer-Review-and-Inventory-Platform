import type { Metadata } from "next";
import { WriteReviewPageContent } from "@/components/pages/WriteReviewPageContent";
import { SITE } from "@/config/constants";

export const metadata: Metadata = {
  title: `Write a Review | ${SITE.name}`,
  description: `Share your dealership experience on ${SITE.name}. Review submission is opening soon.`,
};

export default function WriteReviewPage() {
  return <WriteReviewPageContent />;
}
