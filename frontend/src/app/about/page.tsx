import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { SITE } from "@/config/constants";

export const metadata: Metadata = {
  title: `About Us | ${SITE.name}`,
  description: `Learn about ${SITE.name} and our mission to help car buyers find trusted dealerships in ${SITE.region}.`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
