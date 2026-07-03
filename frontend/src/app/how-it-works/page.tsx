import type { Metadata } from "next";
import { HowItWorksPageContent } from "@/components/pages/HowItWorksPageContent";
import { SITE } from "@/config/constants";

export const metadata: Metadata = {
  title: `How It Works | ${SITE.name}`,
  description: `Learn how to search, compare, and choose dealerships on ${SITE.name}.`,
};

export default function HowItWorksPage() {
  return <HowItWorksPageContent />;
}
