"use client";

import { useState } from "react";
import { Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StateSelect } from "@/components/dealers/StateSelect";
import { useDealerNavigation } from "@/contexts/dealer-navigation-context";
import { DealerQueryParams } from "@/types/dealer";
import { cn } from "@/lib/utils";

interface DealerSearchFormProps {
  defaultValues?: DealerQueryParams;
  currentParams?: DealerQueryParams;
  variant?: "default" | "hero";
}

export function DealerSearchForm({
  defaultValues = {},
  currentParams = {},
  variant = "default",
}: DealerSearchFormProps) {
  const { navigateToDealers, isPending } = useDealerNavigation();
  const [search, setSearch] = useState(defaultValues.search ?? "");
  const [state, setState] = useState(defaultValues.state ?? "All");
  const isHero = variant === "hero";

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    navigateToDealers(currentParams, {
      search: search.trim() || undefined,
      state: state !== "All" ? state : undefined,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full flex-col gap-2 sm:flex-row sm:items-center",
        isHero ? "sm:gap-2" : "gap-3"
      )}
    >
      <div className="relative min-w-0 flex-1">
        <Search
          className={cn(
            "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2",
            isHero ? "text-slate-400" : "text-muted-foreground"
          )}
          aria-hidden
        />
        <Input
          type="search"
          placeholder="Search by dealer name or city..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className={cn(
            "pl-9",
            isHero
              ? "h-10 border-slate-200 bg-white text-sm text-foreground placeholder:text-slate-400 focus-visible:ring-primary"
              : "h-12 text-base"
          )}
          aria-label="Search dealers"
          disabled={isPending}
        />
      </div>

      <StateSelect
        value={state}
        onValueChange={setState}
        className={cn(
          isHero ? "h-10 w-full border-slate-200 sm:w-36" : "h-12 sm:w-44"
        )}
        disabled={isPending}
      />

      <Button
        type="submit"
        className={cn(
          "font-semibold",
          isHero
            ? "h-10 w-full shrink-0 bg-gradient-brand px-5 text-sm hover:opacity-90 sm:w-auto"
            : "h-12 w-full sm:w-auto"
        )}
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Searching...
          </>
        ) : (
          "Search"
        )}
      </Button>
    </form>
  );
}
