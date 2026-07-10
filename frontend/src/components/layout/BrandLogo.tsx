import Link from "next/link";
import { Car } from "lucide-react";
import { SITE, ROUTES } from "@/config/constants";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "default" | "dark";
}

export function BrandLogo({ className, variant = "default" }: BrandLogoProps) {
  const isDark = variant === "dark";
  return (
    <Link
      href={ROUTES.home}
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={SITE.name}
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105",
          isDark ? "bg-white" : "bg-primary"
        )}
      >
        <Car
          className={cn("h-5 w-5", isDark ? "text-primary" : "text-white")}
          strokeWidth={2.25}
          aria-hidden
        />
      </span>
      <span
        className={cn(
          "text-lg font-extrabold tracking-tight",
          isDark ? "text-white" : "text-primary"
        )}
      >
        AutoSales<span className="text-accent">Reviews</span>
      </span>
    </Link>
  );
}
