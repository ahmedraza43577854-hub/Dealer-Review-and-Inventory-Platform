"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import {
  LOCATION_COOKIE_NAME,
  LOCATION_COOKIE_MAX_AGE_SECONDS,
  LOCATION_PROMPTED_COOKIE_NAME,
  parseUserLocationCookie,
  serializeUserLocation,
  type UserLocation,
} from "@/lib/location/location-cookie";

interface UserLocationContextValue {
  location: UserLocation | null;
  /** True once the visitor has set a location or explicitly skipped the prompt. */
  hasBeenPrompted: boolean;
  setLocation: (location: UserLocation) => void;
  clearLocation: () => void;
  dismissPrompt: () => void;
}

const UserLocationContext = createContext<UserLocationContextValue | null>(
  null
);

function readCookie(name: string): string | undefined {
  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));
  return match?.slice(name.length + 1);
}

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=${LOCATION_COOKIE_MAX_AGE_SECONDS}; samesite=lax`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0; samesite=lax`;
}

export function UserLocationProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [location, setLocationState] = useState<UserLocation | null>(() =>
    typeof document === "undefined"
      ? null
      : parseUserLocationCookie(readCookie(LOCATION_COOKIE_NAME))
  );
  const [hasBeenPrompted, setHasBeenPrompted] = useState(() =>
    typeof document === "undefined"
      ? false
      : readCookie(LOCATION_PROMPTED_COOKIE_NAME) === "1" || location !== null
  );

  const setLocation = useCallback(
    (next: UserLocation) => {
      writeCookie(LOCATION_COOKIE_NAME, serializeUserLocation(next));
      writeCookie(LOCATION_PROMPTED_COOKIE_NAME, "1");
      setLocationState(next);
      setHasBeenPrompted(true);
      router.refresh();
    },
    [router]
  );

  const clearLocation = useCallback(() => {
    deleteCookie(LOCATION_COOKIE_NAME);
    setLocationState(null);
    router.refresh();
  }, [router]);

  const dismissPrompt = useCallback(() => {
    writeCookie(LOCATION_PROMPTED_COOKIE_NAME, "1");
    setHasBeenPrompted(true);
  }, []);

  const value = useMemo(
    () => ({ location, hasBeenPrompted, setLocation, clearLocation, dismissPrompt }),
    [location, hasBeenPrompted, setLocation, clearLocation, dismissPrompt]
  );

  return (
    <UserLocationContext.Provider value={value}>
      {children}
    </UserLocationContext.Provider>
  );
}

export function useUserLocation() {
  const context = useContext(UserLocationContext);
  if (!context) {
    throw new Error("useUserLocation must be used within UserLocationProvider");
  }
  return context;
}
