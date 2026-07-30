"use client";

import { Heart, Loader2, Trash2 } from "lucide-react";
import { useSavedVehicles } from "@/contexts/saved-vehicles-context";
import { cn } from "@/lib/utils";

interface SaveVehicleButtonProps {
  vehicleId: string;
  /** icon = compact heart; button = labeled control; remove = explicit delete on Saved page */
  variant?: "icon" | "button" | "remove";
  className?: string;
}

export function SaveVehicleButton({
  vehicleId,
  variant = "button",
  className,
}: SaveVehicleButtonProps) {
  const { isSaved, isSaving, toggleSave, hydrated } = useSavedVehicles();
  const saved = hydrated && isSaved(vehicleId);
  const saving = isSaving(vehicleId);

  if (variant === "remove") {
    return (
      <button
        type="button"
        onClick={() => void toggleSave(vehicleId)}
        disabled={saving}
        aria-busy={saving}
        aria-label={saving ? "Removing…" : "Remove from saved vehicles"}
        className={cn(
          "group inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors",
          "hover:border-destructive/40 hover:bg-destructive/5 hover:text-destructive",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-destructive/30",
          "disabled:pointer-events-none disabled:opacity-70",
          className
        )}
      >
        {saving ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Trash2 className="h-3.5 w-3.5" />
        )}
        {saving ? "Removing…" : "Remove"}
      </button>
    );
  }

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={() => void toggleSave(vehicleId)}
        disabled={saving}
        aria-busy={saving}
        aria-pressed={saved}
        aria-label={
          saving
            ? saved
              ? "Removing…"
              : "Saving…"
            : saved
              ? "Remove from saved"
              : "Save vehicle"
        }
        title={
          saving
            ? saved
              ? "Removing…"
              : "Saving…"
            : saved
              ? "Remove from saved"
              : "Save for later"
        }
        className={cn(
          "group relative shrink-0 rounded-full p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-70",
          saved
            ? "bg-accent/15 text-accent hover:bg-destructive/10 hover:text-destructive"
            : "text-muted-foreground hover:bg-secondary hover:text-accent",
          className
        )}
      >
        {saving ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Heart
            className={cn(
              "h-5 w-5 transition-transform group-active:scale-90",
              saved && "fill-current"
            )}
          />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => void toggleSave(vehicleId)}
      disabled={saving}
      aria-busy={saving}
      aria-pressed={saved}
      aria-label={
        saving
          ? saved
            ? "Removing…"
            : "Saving…"
          : saved
            ? "Remove from saved"
            : "Save vehicle"
      }
      title={
        saving
          ? saved
            ? "Removing…"
            : "Saving…"
          : saved
            ? "Click to remove"
            : "Save for later"
      }
      className={cn(
        "group inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-70",
        saved
          ? "border-accent/40 bg-accent/10 text-accent hover:border-destructive/40 hover:bg-destructive/5 hover:text-destructive"
          : "border-border bg-white text-muted-foreground hover:border-accent/50 hover:text-accent",
        className
      )}
    >
      {saving ? (
        <>
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
          {saved ? "Removing…" : "Saving…"}
        </>
      ) : saved ? (
        <>
          <Heart className="h-3.5 w-3.5 fill-current group-hover:hidden" />
          <Trash2 className="hidden h-3.5 w-3.5 group-hover:block" />
          <span className="group-hover:hidden">Saved</span>
          <span className="hidden group-hover:inline">Remove</span>
        </>
      ) : (
        <>
          <Heart className="h-3.5 w-3.5" />
          Save
        </>
      )}
    </button>
  );
}
