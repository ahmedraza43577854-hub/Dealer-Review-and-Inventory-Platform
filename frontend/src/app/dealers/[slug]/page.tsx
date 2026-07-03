import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import { DealerProfileContent } from "@/components/dealers/DealerProfileContent";
import { DealerProfileSkeleton } from "@/components/dealers/DealerProfileSkeleton";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/constants";

interface DealerProfilePageProps {
  params: { slug: string };
}

export default function DealerProfilePage({ params }: DealerProfilePageProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
        <Link href={ROUTES.dealers}>
          <ArrowLeft className="h-4 w-4" />
          Back to dealers
        </Link>
      </Button>

      <Suspense fallback={<DealerProfileSkeleton />}>
        <DealerProfileContent slug={params.slug} />
      </Suspense>
    </div>
  );
}
