import { notFound } from "next/navigation";
import { Car, MessageSquare } from "lucide-react";
import { getDealerBySlug } from "@/lib/api/dealers";
import { DealerProfileHeader } from "@/components/dealers/DealerProfileHeader";
import { DealerContactCard } from "@/components/dealers/DealerContactCard";
import { DealerMapPlaceholder } from "@/components/dealers/DealerMapPlaceholder";
import { ComingSoonSection } from "@/components/dealers/ComingSoonSection";
import { ErrorState } from "@/components/shared/ErrorState";
import { RetryButton } from "@/components/shared/RetryButton";
import { ApiError } from "@/types/dealer";

interface DealerProfileContentProps {
  slug: string;
}

export async function DealerProfileContent({ slug }: DealerProfileContentProps) {
  try {
    const dealer = await getDealerBySlug(slug);

    return (
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        <div className="space-y-6 lg:col-span-2">
          <DealerProfileHeader dealer={dealer} />

          <ComingSoonSection
            icon={MessageSquare}
            title="Reviews"
            description="Read and submit customer reviews right from this page."
            message="Review listing and submission opening soon."
          />

          <ComingSoonSection
            icon={Car}
            title="Inventory"
            description="Browse vehicles available at this dealership."
            message="Inventory listings opening soon."
          />
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <DealerContactCard dealer={dealer} />
          <DealerMapPlaceholder
            address={`${dealer.address}, ${dealer.city}, ${dealer.state} ${dealer.zip}`}
          />
        </aside>
      </div>
    );
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }

    return (
      <ErrorState
        title="Unable to load dealer"
        message="Something went wrong while fetching this dealership. Please try again."
        action={<RetryButton />}
      />
    );
  }
}
