import "server-only";

import { API } from "@/config/constants";
import { env } from "@/config/env";
import { ApiError, ApiErrorResponse } from "@/types/dealer";

interface RequestOptions {
  revalidate?: number;
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const url = `${env.apiBaseUrl}${endpoint}`;
  const revalidate = options.revalidate ?? API.revalidateSeconds;

  const response = await fetch(url, { next: { revalidate } });

  if (!response.ok) {
    const body: ApiErrorResponse = await response.json().catch(() => ({
      error: "Request failed",
    }));

    throw new ApiError(body.error, response.status, body.code);
  }

  return response.json();
}
