import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DealerProfileSkeleton } from "@/components/dealers/DealerProfileSkeleton";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/constants";

export default function DealerProfileLoading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2" disabled>
        <Link href={ROUTES.dealers}>
          <ArrowLeft className="h-4 w-4" />
          Back to dealers
        </Link>
      </Button>
      <DealerProfileSkeleton />
    </div>
  );
}
