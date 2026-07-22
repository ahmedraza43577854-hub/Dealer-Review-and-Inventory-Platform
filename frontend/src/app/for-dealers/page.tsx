import type { Metadata } from "next";
import { ForDealersPageContent } from "@/components/pages/ForDealersPageContent";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PAGE_SEO } from "@/config/seo";
import { buildDealerListingServiceSchema } from "@/lib/schema/builders";

export const metadata: Metadata = PAGE_SEO.forDealers;

export default function ForDealersPage() {
  return (
    <>
      <SchemaMarkup data={buildDealerListingServiceSchema()} />
      <ForDealersPageContent />
    </>
  );
}
