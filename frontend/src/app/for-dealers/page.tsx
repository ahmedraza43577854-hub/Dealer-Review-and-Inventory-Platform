import type { Metadata } from "next";
import { ForDealersPageContent } from "@/components/pages/ForDealersPageContent";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PAGE_SEO } from "@/config/seo";
import { FOR_DEALERS_FAQ_ITEMS } from "@/config/seo-content";
import {
  buildDealerListingServiceSchema,
  buildFaqPageSchema,
} from "@/lib/schema/builders";

export const metadata: Metadata = PAGE_SEO.forDealers;

export default function ForDealersPage() {
  const faqSchema = buildFaqPageSchema(FOR_DEALERS_FAQ_ITEMS);

  return (
    <>
      <SchemaMarkup
        data={[
          buildDealerListingServiceSchema(),
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />
      <ForDealersPageContent />
    </>
  );
}
