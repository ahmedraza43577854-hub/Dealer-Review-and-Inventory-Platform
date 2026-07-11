import type { Metadata } from "next";
import { ForDealersPageContent } from "@/components/pages/ForDealersPageContent";
import { SITE } from "@/config/constants";

export const metadata: Metadata = {
  title: `For Dealers | ${SITE.name}`,
  description: `List your dealership on ${SITE.name} and reach car buyers across the United States.`,
};

export default function ForDealersPage() {
  return <ForDealersPageContent />;
}
