"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Search } from "lucide-react";
import type { VehicleFilters as Filters } from "@/types/vehicle";
import {
  BODY_STYLES,
  CONDITIONS,
  MAKES,
  MILEAGE_OPTIONS,
  PRICE_OPTIONS,
  RATING_FILTER_OPTIONS,
  YEARS,
} from "@/config/vehicle";
import { STATES } from "@/config/constants";
import { ROUTES } from "@/config/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VehicleFiltersProps {
  filters: Filters;
  sort?: string;
  onApplied?: () => void;
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border/70 py-4 first:pt-0">
      <h3 className="mb-2.5 text-sm font-bold text-primary">{title}</h3>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-white text-foreground hover:border-primary/40"
      )}
    >
      {children}
    </button>
  );
}

function selectClass() {
  return "h-9 w-full appearance-none rounded-lg border border-input bg-white px-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
}

export function VehicleFilters({
  filters,
  sort,
  onApplied,
}: VehicleFiltersProps) {
  const router = useRouter();
  const [applying, setApplying] = useState(false);

  const [make, setMake] = useState(filters.make ?? "");
  const [makeQuery, setMakeQuery] = useState("");
  const [model, setModel] = useState(filters.model ?? "");
  const [yearFrom, setYearFrom] = useState(filters.yearFrom?.toString() ?? "");
  const [yearTo, setYearTo] = useState(filters.yearTo?.toString() ?? "");
  const [priceFrom, setPriceFrom] = useState(
    filters.priceFrom?.toString() ?? ""
  );
  const [priceTo, setPriceTo] = useState(filters.priceTo?.toString() ?? "");
  const [maxMileage, setMaxMileage] = useState(
    filters.maxMileage?.toString() ?? "any"
  );
  const [bodyStyle, setBodyStyle] = useState(filters.bodyStyle ?? "");
  const [condition, setCondition] = useState(filters.condition ?? "");
  const [state, setState] = useState(filters.state ?? "");
  const [minRating, setMinRating] = useState(
    filters.minRating?.toString() ?? ""
  );

  const filteredMakes = useMemo(
    () =>
      MAKES.filter((m) =>
        m.toLowerCase().includes(makeQuery.trim().toLowerCase())
      ),
    [makeQuery]
  );

  function toggle(current: string, value: string, set: (v: string) => void) {
    set(current === value ? "" : value);
  }

  function apply() {
    setApplying(true);
    const params = new URLSearchParams();
    if (make) params.set("make", make);
    if (model) params.set("model", model);
    if (yearFrom) params.set("yearFrom", yearFrom);
    if (yearTo) params.set("yearTo", yearTo);
    if (priceFrom) params.set("priceFrom", priceFrom);
    if (priceTo) params.set("priceTo", priceTo);
    if (maxMileage && maxMileage !== "any")
      params.set("maxMileage", maxMileage);
    if (bodyStyle) params.set("bodyStyle", bodyStyle);
    if (condition) params.set("condition", condition);
    if (state) params.set("state", state);
    if (minRating) params.set("minRating", minRating);
    if (sort && sort !== "relevance") params.set("sort", sort);
    const query = params.toString();
    router.push(query ? `${ROUTES.vehicles}?${query}` : ROUTES.vehicles);
    onApplied?.();
  }

  function clearAll() {
    setApplying(true);
    router.push(ROUTES.vehicles);
    onApplied?.();
  }

  return (
    <div>
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-base font-bold text-primary">Filters</h2>
        <button
          type="button"
          onClick={clearAll}
          className="text-xs font-semibold text-accent-foreground/70 hover:text-primary hover:underline"
        >
          Clear all
        </button>
      </div>

      <Section title="Make">
        <div className="relative mb-2">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={makeQuery}
            onChange={(e) => setMakeQuery(e.target.value)}
            placeholder="Search makes"
            className="h-9 w-full rounded-lg border border-input bg-white pl-8 pr-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="max-h-40 space-y-0.5 overflow-y-auto pr-1">
          {filteredMakes.map((m) => (
            <label
              key={m}
              className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1 text-sm hover:bg-secondary"
            >
              <input
                type="checkbox"
                checked={make === m}
                onChange={() => toggle(make, m, setMake)}
                className="h-4 w-4 accent-[#003087]"
              />
              <span className="text-foreground">{m}</span>
            </label>
          ))}
        </div>
      </Section>

      <Section title="Model">
        <input
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="e.g. Camry"
          className="h-9 w-full rounded-lg border border-input bg-white px-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </Section>

      <Section title="Year">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative">
            <select
              value={yearFrom}
              onChange={(e) => setYearFrom(e.target.value)}
              className={selectClass()}
            >
              <option value="">From</option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <select
              value={yearTo}
              onChange={(e) => setYearTo(e.target.value)}
              className={selectClass()}
            >
              <option value="">To</option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Section>

      <Section title="Price">
        <div className="grid grid-cols-2 gap-2">
          <select
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            className={selectClass()}
          >
            <option value="">Min</option>
            {PRICE_OPTIONS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          <select
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            className={selectClass()}
          >
            <option value="">Max</option>
            {PRICE_OPTIONS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </Section>

      <Section title="Mileage">
        <select
          value={maxMileage}
          onChange={(e) => setMaxMileage(e.target.value)}
          className={selectClass()}
        >
          {MILEAGE_OPTIONS.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
      </Section>

      <Section title="Body Style">
        <div className="flex flex-wrap gap-1.5">
          {BODY_STYLES.map((b) => (
            <Chip
              key={b.value}
              active={bodyStyle === b.value}
              onClick={() => toggle(bodyStyle, b.value, setBodyStyle)}
            >
              {b.label}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Condition">
        <div className="flex flex-wrap gap-1.5">
          {CONDITIONS.map((c) => (
            <Chip
              key={c.value}
              active={condition === c.value}
              onClick={() => toggle(condition, c.value, setCondition)}
            >
              {c.label}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="State">
        <div className="flex flex-wrap gap-1.5">
          {STATES.map((s) => (
            <Chip
              key={s.code}
              active={state === s.code}
              onClick={() => toggle(state, s.code, setState)}
            >
              {s.code}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Dealer Rating">
        <div className="flex flex-wrap gap-1.5">
          {RATING_FILTER_OPTIONS.map((r) => (
            <Chip
              key={r.value}
              active={minRating === r.value}
              onClick={() => toggle(minRating, r.value, setMinRating)}
            >
              {r.label}
            </Chip>
          ))}
        </div>
      </Section>

      <div className="sticky bottom-0 -mx-4 mt-2 border-t border-border/70 bg-white px-4 pt-4">
        <Button
          type="button"
          variant="gold"
          className="w-full"
          onClick={apply}
          disabled={applying}
        >
          {applying ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            "Apply Filters"
          )}
        </Button>
      </div>
    </div>
  );
}
