import { getOrCreateVisitorId } from "@/lib/visitor/visitor-id";

function apiBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (!raw) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }
  return raw.replace(/\/$/, "");
}

async function savedFetch<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const visitorId = getOrCreateVisitorId();
  const response = await fetch(`${apiBaseUrl()}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "X-Visitor-Id": visitorId,
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({ error: "Request failed" }));
    throw new Error(
      typeof body.error === "string" ? body.error : "Request failed"
    );
  }

  return response.json() as Promise<T>;
}

export interface SavedListResponse {
  vehicleIds: string[];
  items: { id: string; vehicleId: string; createdAt: string }[];
}

export function fetchSavedVehicleIds(): Promise<SavedListResponse> {
  return savedFetch<SavedListResponse>("/api/saved");
}

export function saveVehicleRemote(vehicleId: string) {
  return savedFetch<{ id: string; vehicleId: string; createdAt: string }>(
    "/api/saved",
    {
      method: "POST",
      body: JSON.stringify({ vehicleId }),
    }
  );
}

export function unsaveVehicleRemote(vehicleId: string) {
  return savedFetch<{ ok: true }>(
    `/api/saved/${encodeURIComponent(vehicleId)}`,
    { method: "DELETE" }
  );
}
