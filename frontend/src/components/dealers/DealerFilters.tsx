"use client";

import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StateSelect } from "@/components/dealers/StateSelect";
import { MinRatingSelect } from "@/components/dealers/MinRatingSelect";
import { useDealerNavigation } from "@/contexts/dealer-navigation-context";
import { DealerQueryParams } from "@/types/dealer";

interface DealerFiltersProps {
  params: DealerQueryParams;
}

export function DealerFilters({ params }: DealerFiltersProps) {
  const { navigateToDealers, isPending } = useDealerNavigation();

  function handleCitySubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const city = (formData.get("city") as string).trim();
    navigateToDealers(params, { city: city || undefined });
  }

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
      <StateSelect
        value={params.state ?? "All"}
        onValueChange={(value) =>
          navigateToDealers(params, {
            state: value === "All" ? undefined : value,
          })
        }
        className="lg:w-44"
        disabled={isPending}
      />

      <MinRatingSelect
        value={params.minRating ?? "any"}
        onValueChange={(value) =>
          navigateToDealers(params, {
            minRating: value === "any" ? undefined : value,
          })
        }
        className="lg:w-44"
        disabled={isPending}
      />

      <form
        onSubmit={handleCitySubmit}
        className="flex flex-col gap-2 sm:flex-row sm:items-center lg:flex-1"
      >
        <Input
          name="city"
          placeholder="Filter by city..."
          defaultValue={params.city ?? ""}
          className="lg:max-w-xs h-11"
          aria-label="Filter by city"
          disabled={isPending}
        />
        <Button
          type="submit"
          variant="outline"
          className="h-11 sm:w-auto w-full"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Apply"
          )}
        </Button>
      </form>
    </div>
  );
}
