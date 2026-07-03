import { MapPin, Star } from "lucide-react";
import { DealerDetail } from "@/types/dealer";
import { StarRating } from "@/components/shared/StarRating";
import { ReviewCount } from "@/components/shared/ReviewCount";
import { Badge } from "@/components/ui/badge";
import { formatLocation } from "@/lib/utils/format";
import { cn } from "@/lib/utils";

interface DealerProfileHeaderProps {
  dealer: DealerDetail;
}

export function DealerProfileHeader({ dealer }: DealerProfileHeaderProps) {
  return (
    <div className="overflow-hidden rounded-xl border shadow-sm">
      <div
        className={cn(
          "relative h-36 sm:h-44 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50",
          dealer.featured && "from-primary via-primary/80 to-blue-600/70"
        )}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        {dealer.featured && (
          <Badge className="absolute top-4 right-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Star className="h-3 w-3 mr-1 fill-current" />
            Featured Dealer
          </Badge>
        )}
      </div>

      <div className="bg-card px-6 pb-6 pt-5 sm:px-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          {dealer.name}
        </h1>

        <div className="mt-2 flex items-start gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 mt-1 shrink-0 text-primary" aria-hidden />
          <p className="text-sm sm:text-base leading-relaxed">
            {dealer.address}, {formatLocation(dealer.city, dealer.state)}{" "}
            {dealer.zip}
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t pt-5 sm:flex-row sm:items-center sm:gap-6">
          <StarRating rating={dealer.averageRating} size="xl" showValue />
          <ReviewCount count={dealer.totalReviews} className="text-base" />
        </div>

        {dealer.description && (
          <p className="mt-5 text-muted-foreground leading-relaxed text-base border-t pt-5">
            {dealer.description}
          </p>
        )}
      </div>
    </div>
  );
}
