"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { NAV_DROPDOWN_CITIES } from "@/config/locations";
import { ROUTES } from "@/config/constants";
import { cn } from "@/lib/utils";

const REGION_LABELS = {
  northeast: "Northeast",
  south: "South",
  west: "West",
} as const;

interface CitiesNavDropdownProps {
  isActive: boolean;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}

export function CitiesNavDropdown({
  isActive,
  onNavigate,
  variant = "desktop",
}: CitiesNavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant !== "desktop") return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [variant]);

  const triggerClass = cn(
    "inline-flex items-center gap-1 rounded-md text-sm font-semibold transition-colors",
    variant === "desktop" ? "px-3.5 py-2" : "w-full rounded-lg px-4 py-3.5 text-base",
    isActive
      ? "bg-secondary text-primary"
      : variant === "desktop"
        ? "text-slate-600 hover:bg-secondary hover:text-primary"
        : "text-slate-700 hover:bg-secondary"
  );

  const panel = (
    <div
      className={cn(
        "rounded-lg border border-border/70 bg-white shadow-card",
        variant === "desktop" ? "absolute left-0 top-full z-50 mt-2 w-[320px] p-4" : "mt-2 p-4"
      )}
      role="menu"
    >
      {(Object.keys(NAV_DROPDOWN_CITIES) as Array<keyof typeof NAV_DROPDOWN_CITIES>).map(
        (region) => (
          <div key={region} className="mb-4 last:mb-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
              {REGION_LABELS[region]}
            </p>
            <ul className="space-y-1">
              {NAV_DROPDOWN_CITIES[region].map((city) => (
                <li key={city.slug}>
                  <Link
                    href={ROUTES.dealerCity(city.slug)}
                    className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-primary hover:bg-secondary"
                    role="menuitem"
                    onClick={() => {
                      setOpen(false);
                      onNavigate?.();
                    }}
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
      <div className="mt-3 border-t border-border/70 pt-3">
        <Link
          href={ROUTES.cities}
          className="block rounded-md px-2 py-2 text-sm font-bold text-primary hover:bg-secondary"
          role="menuitem"
          onClick={() => {
            setOpen(false);
            onNavigate?.();
          }}
        >
          View All Cities →
        </Link>
      </div>
    </div>
  );

  if (variant === "mobile") {
    return (
      <div className="space-y-1">
        <Link
          href={ROUTES.vehicles}
          onClick={onNavigate}
          className={triggerClass}
        >
          Find Cars
        </Link>
        <button
          type="button"
          className={cn(triggerClass, "justify-between")}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Cities
          </span>
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          />
        </button>
        {open && panel}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center">
        <Link href={ROUTES.vehicles} className={triggerClass}>
          Find Cars
        </Link>
        <button
          type="button"
          className={cn(
            "ml-0.5 inline-flex h-9 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-secondary hover:text-primary",
            isActive && "bg-secondary text-primary"
          )}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label="Browse cities"
          onClick={() => setOpen((v) => !v)}
        >
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          />
        </button>
      </div>
      {open && panel}
    </div>
  );
}
