import "server-only";

import { apiClient } from "@/lib/api/client";
import {
  DealerDetail,
  DealerQueryParams,
  DealerSummary,
} from "@/types/dealer";

function buildQueryString(params: DealerQueryParams): string {
  const searchParams = new URLSearchParams();

  if (params.state && params.state !== "All") {
    searchParams.set("state", params.state);
  }
  if (params.city) searchParams.set("city", params.city);
  if (params.minRating) searchParams.set("minRating", params.minRating);
  if (params.search) searchParams.set("search", params.search);

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}

export async function getDealers(
  params: DealerQueryParams = {}
): Promise<DealerSummary[]> {
  return apiClient<DealerSummary[]>(
    `/api/dealers${buildQueryString(params)}`
  );
}

export async function getDealerBySlug(slug: string): Promise<DealerDetail> {
  return apiClient<DealerDetail>(`/api/dealers/${slug}`);
}
