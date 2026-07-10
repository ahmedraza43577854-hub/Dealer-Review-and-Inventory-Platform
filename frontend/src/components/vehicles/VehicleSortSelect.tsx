"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { SORT_OPTIONS } from "@/config/vehicle";
import { ROUTES } from "@/config/constants";

export function VehicleSortSelect({ value }: { value: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(next: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "relevance") {
      params.delete("sort");
    } else {
      params.set("sort", next);
    }
    params.delete("page");
    const query = params.toString();
    router.push(query ? `${ROUTES.vehicles}?${query}` : ROUTES.vehicles);
  }

  return (
    <label className="flex items-center gap-2 text-sm">
      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
      <span className="hidden font-medium text-muted-foreground sm:inline">
        Sort:
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          className="h-9 appearance-none rounded-lg border border-input bg-white pl-3 pr-8 text-sm font-semibold text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </label>
  );
}
