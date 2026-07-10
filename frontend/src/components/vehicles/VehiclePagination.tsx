"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ROUTES } from "@/config/constants";
import { cn } from "@/lib/utils";

export function VehiclePagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  function goTo(next: number) {
    const params = new URLSearchParams(searchParams.toString());
    if (next <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(next));
    }
    const query = params.toString();
    router.push(query ? `${ROUTES.vehicles}?${query}` : ROUTES.vehicles);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-1.5"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => goTo(page - 1)}
        disabled={page <= 1}
        className="inline-flex h-9 items-center gap-1 rounded-lg border border-border bg-white px-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Prev</span>
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => goTo(p)}
          aria-current={p === page ? "page" : undefined}
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold transition-colors",
            p === page
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-white text-primary hover:bg-secondary"
          )}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        onClick={() => goTo(page + 1)}
        disabled={page >= totalPages}
        className="inline-flex h-9 items-center gap-1 rounded-lg border border-border bg-white px-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
