import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PAGE_SEO } from "@/config/seo";
import { buildHowItWorksPageSchemas } from "@/lib/schema/builders";

const HowItWorksPageContent = dynamic(
  () =>
    import("@/components/pages/HowItWorksPageContent").then((m) => ({
      default: m.HowItWorksPageContent,
    })),
  {
    loading: () => (
      <div className="min-h-[60vh] animate-pulse bg-muted" aria-hidden />
    ),
  }
);
export const metadata: Metadata = PAGE_SEO.howItWorks;

export default function HowItWorksPage() {
  return (
    <>
      <SchemaMarkup data={buildHowItWorksPageSchemas()} />
      <HowItWorksPageContent />
    </>
  );
}
