import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

interface LocationBreadcrumbsProps {
  items: BreadcrumbEntry[];
  className?: string;
}

export function LocationBreadcrumbs({
  items,
  className,
}: LocationBreadcrumbsProps) {
  return (
    <nav
      className={cn(
        "flex flex-wrap items-center gap-1 text-sm text-muted-foreground",
        className
      )}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />
            )}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="font-medium hover:text-primary hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(isLast && "font-semibold text-primary")}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
