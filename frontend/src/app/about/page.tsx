import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PAGE_SEO } from "@/config/seo";
import { buildAboutPageSchema } from "@/lib/schema/builders";

const AboutPageContent = dynamic(
  () =>
    import("@/components/pages/AboutPageContent").then((m) => ({
      default: m.AboutPageContent,
    })),
  {
    loading: () => (
      <div className="min-h-[60vh] animate-pulse bg-muted" aria-hidden />
    ),
  }
);
export const metadata: Metadata = PAGE_SEO.about;

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup data={buildAboutPageSchema()} />
      <AboutPageContent />
    </>
  );
}
