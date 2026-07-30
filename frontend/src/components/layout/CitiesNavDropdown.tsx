"use client";

import Link from "next/link";
import { ChevronDown, MapPin } from "lucide-react";
import { TOP_CITIES_SERVED } from "@/config/locations";
import { ROUTES } from "@/config/constants";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const triggerClass = cn(
    "inline-flex items-center gap-1 whitespace-nowrap rounded-md text-sm font-semibold transition-colors",
    variant === "desktop"
      ? "px-3.5 py-2"
      : "w-full justify-between rounded-lg px-4 py-3.5 text-base",
    isActive
      ? "bg-secondary text-primary"
      : variant === "desktop"
        ? "text-slate-600 hover:bg-secondary hover:text-primary"
        : "text-slate-700 hover:bg-secondary"
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={triggerClass}
          aria-label="Cities we serve"
        >
          {variant === "mobile" ? (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              Cities
            </span>
          ) : (
            "Cities"
          )}
          <ChevronDown className="h-4 w-4 opacity-70" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={variant === "desktop" ? "start" : "center"}
        className="w-[min(100vw-2rem,20rem)] p-2"
      >
        <DropdownMenuLabel className="px-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          Cities We Serve
        </DropdownMenuLabel>
        <div className="grid grid-cols-2 gap-0.5 py-1">
          {TOP_CITIES_SERVED.map((city) => (
            <DropdownMenuItem key={city.slug} asChild className="px-2">
              <Link
                href={ROUTES.dealerCity(city.slug)}
                onClick={onNavigate}
                className="flex items-center gap-1.5"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
                <span className="truncate">
                  {city.city}, {city.stateCode}
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="px-2 font-bold text-primary">
          <Link href={ROUTES.cities} onClick={onNavigate}>
            View All Cities →
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
