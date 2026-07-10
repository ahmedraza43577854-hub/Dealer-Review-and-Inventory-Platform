import { Phone } from "lucide-react";
import type { Vehicle } from "@/types/vehicle";
import { formatPrice } from "@/lib/utils/format";

export function MobileContactBar({ vehicle }: { vehicle: Vehicle }) {
  const digits = vehicle.dealer.phone.replace(/\D/g, "");
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-border/70 bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="min-w-0">
        <p className="truncate text-xs text-muted-foreground">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </p>
        <p className="text-lg font-extrabold text-price">
          {formatPrice(vehicle.price)}
        </p>
      </div>
      <a
        href={`tel:${digits}`}
        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-600"
      >
        <Phone className="h-4 w-4" />
        Contact Dealer
      </a>
    </div>
  );
}
