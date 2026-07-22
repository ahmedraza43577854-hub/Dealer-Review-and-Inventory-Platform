"use client";

import { useDealerNavigation } from "@/contexts/dealer-navigation-context";
import { cn } from "@/lib/utils";

interface DealerResultsPendingShellProps {
  children: React.ReactNode;
}

/** Client-only wrapper for navigation pending opacity, keeps API code on the server. */
export function DealerResultsPendingShell({
  children,
}: DealerResultsPendingShellProps) {
  const { isPending } = useDealerNavigation();

  return (
    <div
      className={cn(
        "relative transition-opacity duration-200",
        isPending && "opacity-70"
      )}
    >
      {children}
    </div>
  );
}
