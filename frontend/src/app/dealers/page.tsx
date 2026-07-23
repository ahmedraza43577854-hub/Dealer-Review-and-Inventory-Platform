import type { Metadata } from "next";
import { DealersListingView } from "@/components/dealers/DealersListingView";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PAGE_SEO } from "@/config/seo";
import { buildDealersListingSchemas } from "@/lib/schema/builders";
import type { DealerQueryParams } from "@/types/dealer";

export const metadata: Metadata = PAGE_SEO.dealers;

interface DealersPageProps {
  searchParams: DealerQueryParams;
}

export default function DealersPage({ searchParams }: DealersPageProps) {
  return (
    <>
      <SchemaMarkup data={buildDealersListingSchemas()} />
      <DealersListingView searchParams={searchParams} />
    </>
  );
}
