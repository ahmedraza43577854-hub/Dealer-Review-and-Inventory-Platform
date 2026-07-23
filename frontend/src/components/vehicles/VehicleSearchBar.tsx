"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Loader2, Search } from "lucide-react";
import {
  MAKES,
  MODELS_BY_MAKE,
  MAX_PRICE_OPTIONS,
  YEARS,
} from "@/config/vehicle";
import { ROUTES } from "@/config/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VehicleSearchBarProps {
  layout?: "hero" | "bar";
  submitLabel?: string;
  bodyStyle?: string;
  defaultValues?: {
    make?: string;
    model?: string;
    year?: string;
    priceTo?: string;
  };
  className?: string;
}

function NativeSelect({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full appearance-none rounded-lg border border-input bg-white px-3 pr-9 text-sm font-medium text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    </label>
  );
}

export function VehicleSearchBar({
  layout = "hero",
  submitLabel = "Search",
  bodyStyle,
  defaultValues,
  className,
}: VehicleSearchBarProps) {
  const router = useRouter();
  const [make, setMake] = useState(defaultValues?.make ?? "");
  const [model, setModel] = useState(defaultValues?.model ?? "");
  const [year, setYear] = useState(defaultValues?.year ?? "");
  const [priceTo, setPriceTo] = useState(defaultValues?.priceTo ?? "");
  const [submitting, setSubmitting] = useState(false);

  const models = useMemo(
    () => (make ? MODELS_BY_MAKE[make] ?? [] : []),
    [make]
  );

  function handleMakeChange(value: string) {
    setMake(value);
    setModel("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const params = new URLSearchParams();
    if (bodyStyle) params.set("bodyStyle", bodyStyle);
    if (make) params.set("make", make);
    if (model) params.set("model", model);
    if (year) params.set("yearFrom", year);
    if (priceTo) params.set("priceTo", priceTo);
    const query = params.toString();
    router.push(query ? `${ROUTES.vehicles}?${query}` : ROUTES.vehicles);
  }

  const isHero = layout === "hero";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        isHero
          ? "rounded-xl bg-white p-4 shadow-card sm:p-5"
          : "rounded-lg border border-border/70 bg-white p-4 shadow-card",
        className
      )}
    >
      <div
        className={cn(
          "grid gap-3",
          isHero
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        )}
      >
        <NativeSelect label="Make" value={make} onChange={handleMakeChange}>
          <option value="">All Makes</option>
          {MAKES.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </NativeSelect>

        <NativeSelect label="Model" value={model} onChange={setModel}>
          <option value="">{make ? "All Models" : "Any Model"}</option>
          {models.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </NativeSelect>

        <NativeSelect label="Year" value={year} onChange={setYear}>
          <option value="">Any Year</option>
          {YEARS.map((y) => (
            <option key={y} value={String(y)}>
              {y}
            </option>
          ))}
        </NativeSelect>

        <NativeSelect label="Max Price" value={priceTo} onChange={setPriceTo}>
          <option value="">No Max</option>
          {MAX_PRICE_OPTIONS.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </NativeSelect>

        <div className="flex flex-col justify-end">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            disabled={submitting}
            className="h-11 w-full"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <Search className="h-4 w-4" />
                {submitLabel}
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
