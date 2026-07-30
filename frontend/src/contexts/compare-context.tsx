"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CompareVehicleSummary } from "@/types/vehicle";
import { MAX_COMPARE_VEHICLES } from "@/lib/vehicles/compare";

const STORAGE_KEY = "asr_compare_vehicles";

interface CompareContextValue {
  vehicles: CompareVehicleSummary[];
  isSelected: (id: string) => boolean;
  canAddMore: boolean;
  addVehicle: (vehicle: CompareVehicleSummary) => void;
  removeVehicle: (id: string) => void;
  clearAll: () => void;
}

const CompareContext = createContext<CompareContextValue | null>(null);

function readStoredVehicles(): CompareVehicleSummary[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as CompareVehicleSummary[]) : [];
  } catch {
    return [];
  }
}

export function CompareProvider({ children }: { children: ReactNode }) {
  // Always starts empty so the server render and the client's first render
  // match exactly; the real localStorage list loads a moment later via the
  // effect below, avoiding a hydration mismatch on every checkbox's `checked`.
  const [vehicles, setVehicles] = useState<CompareVehicleSummary[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setVehicles(readStoredVehicles());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(vehicles));
  }, [vehicles, hydrated]);

  const isSelected = useCallback(
    (id: string) => vehicles.some((v) => v.id === id),
    [vehicles]
  );

  const addVehicle = useCallback((vehicle: CompareVehicleSummary) => {
    setVehicles((current) => {
      if (current.length >= MAX_COMPARE_VEHICLES) return current;
      if (current.some((v) => v.id === vehicle.id)) return current;
      return [...current, vehicle];
    });
  }, []);

  const removeVehicle = useCallback((id: string) => {
    setVehicles((current) => current.filter((v) => v.id !== id));
  }, []);

  const clearAll = useCallback(() => setVehicles([]), []);

  const value = useMemo<CompareContextValue>(
    () => ({
      vehicles,
      isSelected,
      canAddMore: vehicles.length < MAX_COMPARE_VEHICLES,
      addVehicle,
      removeVehicle,
      clearAll,
    }),
    [vehicles, isSelected, addVehicle, removeVehicle, clearAll]
  );

  return (
    <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within CompareProvider");
  }
  return context;
}
