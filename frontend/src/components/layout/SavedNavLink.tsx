"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { ROUTES } from "@/config/constants";
import { useSavedVehicles } from "@/contexts/saved-vehicles-context";
import { cn } from "@/lib/utils";

export function SavedNavLink({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const { count, hydrated } = useSavedVehicles();

  return (
    <Link
      href={ROUTES.saved}
      onClick={onNavigate}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md text-sm font-semibold transition-colors",
        className
      )}
      aria-label={
        hydrated && count > 0
          ? `Saved vehicles, ${count} saved`
          : "Saved vehicles"
      }
    >
      <Heart className="h-4 w-4" />
      Saved
      {hydrated && count > 0 && (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1.5 text-[11px] font-bold text-accent-foreground">
          {count}
        </span>
      )}
    </Link>
  );
}
