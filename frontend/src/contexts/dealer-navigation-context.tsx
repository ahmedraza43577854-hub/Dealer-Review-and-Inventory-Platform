"use client";

import {
  createContext,
  useCallback,
  useContext,
  useTransition,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { DealerQueryParams } from "@/types/dealer";
import { buildDealersUrl } from "@/lib/dealers/query-params";

interface DealerNavigationContextValue {
  isPending: boolean;
  navigateToDealers: (
    params: DealerQueryParams,
    updates?: Partial<DealerQueryParams>
  ) => void;
}

const DealerNavigationContext =
  createContext<DealerNavigationContextValue | null>(null);

export function DealerNavigationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navigateToDealers = useCallback(
    (params: DealerQueryParams, updates: Partial<DealerQueryParams> = {}) => {
      const merged: DealerQueryParams = { ...params, ...updates };

      Object.keys(merged).forEach((key) => {
        const value = merged[key as keyof DealerQueryParams];
        if (
          value === undefined ||
          value === "" ||
          value === "All" ||
          value === "any"
        ) {
          delete merged[key as keyof DealerQueryParams];
        }
      });

      startTransition(() => {
        router.push(buildDealersUrl(merged));
      });
    },
    [router]
  );

  return (
    <DealerNavigationContext.Provider value={{ isPending, navigateToDealers }}>
      {children}
    </DealerNavigationContext.Provider>
  );
}

export function useDealerNavigation() {
  const context = useContext(DealerNavigationContext);
  if (!context) {
    throw new Error(
      "useDealerNavigation must be used within DealerNavigationProvider"
    );
  }
  return context;
}
