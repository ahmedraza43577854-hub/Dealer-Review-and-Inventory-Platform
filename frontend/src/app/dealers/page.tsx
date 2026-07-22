import type { Metadata } from "next";
import { DealersListingView } from "@/components/dealers/DealersListingView";
import { PAGE_SEO } from "@/config/seo";
import type { DealerQueryParams } from "@/types/dealer";

export const metadata: Metadata = PAGE_SEO.dealers;

interface DealersPageProps {
  searchParams: DealerQueryParams;
}

export default function DealersPage({ searchParams }: DealersPageProps) {
  return <DealersListingView searchParams={searchParams} />;
}
