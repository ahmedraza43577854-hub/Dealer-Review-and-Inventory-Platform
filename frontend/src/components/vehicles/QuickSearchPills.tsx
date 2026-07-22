import Link from "next/link";
import { QUICK_SEARCH_PILLS } from "@/config/vehicle";

export function QuickSearchPills({ variant = "hero" }: { variant?: "hero" | "light" }) {
  const isHero = variant === "hero";
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {isHero && (
        <span className="mr-1 text-sm font-medium text-white/85">Popular:</span>
      )}
      {QUICK_SEARCH_PILLS.map((pill) => (
        <Link
          key={pill.label}
          href={pill.href}
          className={
            isHero
              ? "rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
              : "rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          }
        >
          {pill.label}
        </Link>
      ))}
    </div>
  );
}
