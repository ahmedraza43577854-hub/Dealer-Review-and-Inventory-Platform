import type { Metadata } from "next";
import { Suspense } from "react";
import { DealerProfileContent } from "@/components/dealers/DealerProfileContent";
import { DealerProfileSkeleton } from "@/components/dealers/DealerProfileSkeleton";
import { getDealerBySlug } from "@/lib/api/dealers";
import {
  buildDealerProfileMetadata,
  buildNotFoundMetadata,
} from "@/config/seo";
import { ApiError } from "@/types/dealer";

interface DealerProfilePageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: DealerProfilePageProps): Promise<Metadata> {
  try {
    const dealer = await getDealerBySlug(params.slug);
    return buildDealerProfileMetadata({
      name: dealer.name,
      slug: params.slug,
      city: dealer.city,
      state: dealer.state,
    });
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return buildNotFoundMetadata("Dealer");
    }
    throw error;
  }
}

export default function DealerProfilePage({ params }: DealerProfilePageProps) {
  return (
    <Suspense fallback={<DealerProfileSkeleton />}>
      <DealerProfileContent slug={params.slug} />
    </Suspense>
  );
}
