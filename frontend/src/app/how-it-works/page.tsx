import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PAGE_SEO } from "@/config/seo";

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
  return <HowItWorksPageContent />;
}
