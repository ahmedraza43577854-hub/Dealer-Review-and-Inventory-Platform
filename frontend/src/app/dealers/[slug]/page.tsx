import { Suspense } from "react";
import { DealerProfileContent } from "@/components/dealers/DealerProfileContent";
import { DealerProfileSkeleton } from "@/components/dealers/DealerProfileSkeleton";

interface DealerProfilePageProps {
  params: { slug: string };
}

export default function DealerProfilePage({ params }: DealerProfilePageProps) {
  return (
    <Suspense fallback={<DealerProfileSkeleton />}>
      <DealerProfileContent slug={params.slug} />
    </Suspense>
  );
}
