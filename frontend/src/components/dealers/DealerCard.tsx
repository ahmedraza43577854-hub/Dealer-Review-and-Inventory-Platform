import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { DealerSummary } from "@/types/dealer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/shared/StarRating";
import { ReviewCount } from "@/components/shared/ReviewCount";
import { formatLocation } from "@/lib/utils/format";
import { ROUTES } from "@/config/constants";
import { cn } from "@/lib/utils";

interface DealerCardProps {
  dealer: DealerSummary;
  className?: string;
  onDark?: boolean;
}

export function DealerCard({ dealer, className, onDark }: DealerCardProps) {
  return (
    <Card
      className={cn(
        "group h-full overflow-hidden bg-white transition-all duration-300",
        "hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-0.5",
        onDark && "border-slate-200/80 shadow-md shadow-black/10",
        dealer.featured
          ? "border-l-4 border-l-accent ring-1 ring-accent/25 hover:ring-accent/40"
          : "hover:border-slate-300",
        className
      )}
    >
      <CardContent className="flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Link
            href={ROUTES.dealerProfile(dealer.slug)}
            className="font-semibold text-lg leading-snug transition-colors hover:text-primary line-clamp-2"
          >
            {dealer.name}
          </Link>
          {dealer.featured && (
            <Badge className="shrink-0 bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-50">
              Featured
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 shrink-0 text-primary/60" aria-hidden />
          <span>{formatLocation(dealer.city, dealer.state)}</span>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-5">
          <StarRating rating={dealer.averageRating} size="lg" showValue />
          <ReviewCount count={dealer.totalReviews} />
        </div>

        <Button
          asChild
          variant={dealer.featured ? "default" : "outline"}
          size="sm"
          className={cn(
            "mt-auto w-full transition-all duration-200 group-hover:gap-3",
            dealer.featured && "bg-gradient-gold text-slate-900 hover:opacity-90 border-0"
          )}
        >
          <Link href={ROUTES.dealerProfile(dealer.slug)}>
            View Profile
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
