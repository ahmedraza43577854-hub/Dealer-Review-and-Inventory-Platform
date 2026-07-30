"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import type { Vehicle } from "@/types/vehicle";
import type { PaginatedVehicles } from "@/lib/vehicles/paginate";
import { VehicleRow } from "@/components/vehicles/VehicleRow";
import { VehicleRowSkeletonList } from "@/components/vehicles/VehicleRowSkeleton";

interface VehicleInfiniteListProps {
  initialVehicles: Vehicle[];
  totalCount: number;
  /** Filter/sort query string without `page` — used for /api/vehicles. */
  queryString: string;
}

export function VehicleInfiniteList({
  initialVehicles,
  totalCount,
  queryString,
}: VehicleInfiniteListProps) {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [hasMore, setHasMore] = useState(initialVehicles.length < totalCount);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sentinelRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef(false);
  const pageRef = useRef(1);

  const loadMore = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setLoading(true);
    setError(null);

    const nextPage = pageRef.current + 1;
    const params = new URLSearchParams(queryString);
    params.set("page", String(nextPage));

    try {
      const response = await fetch(`/api/vehicles?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Could not load more vehicles.");
      }

      const data = (await response.json()) as PaginatedVehicles;
      setVehicles((prev) => {
        const seen = new Set(prev.map((v) => v.id));
        const appended = data.items.filter((item) => !seen.has(item.id));
        return appended.length > 0 ? [...prev, ...appended] : prev;
      });
      pageRef.current = data.page;
      setHasMore(data.hasMore);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not load more vehicles."
      );
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [hasMore, queryString]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void loadMore();
        }
      },
      { root: null, rootMargin: "480px 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // Re-bind when the list grows so a still-visible sentinel can fetch again.
  }, [hasMore, loadMore, vehicles.length]);

  return (
    <div>
      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <VehicleRow key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>

      <div
        ref={sentinelRef}
        className="mt-6"
        aria-live="polite"
        aria-busy={loading}
      >
        {loading && <VehicleRowSkeletonList count={2} />}

        {error && (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <p className="text-sm text-destructive">{error}</p>
            <button
              type="button"
              onClick={() => void loadMore()}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Try again
            </button>
          </div>
        )}

        {!loading && !error && hasMore && (
          <div className="flex items-center justify-center gap-2 py-4 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Scroll for more vehicles
          </div>
        )}

        {!hasMore && vehicles.length > 0 && (
          <p className="py-4 text-center text-sm text-muted-foreground">
            You&apos;ve viewed all {totalCount.toLocaleString("en-US")} vehicles
          </p>
        )}
      </div>
    </div>
  );
}
