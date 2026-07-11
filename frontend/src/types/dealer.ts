export interface DealerSummary {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  phone: string | null;
  website: string | null;
  featured: boolean;
  averageRating: number;
  totalReviews: number;
}

export interface DealerDetail extends DealerSummary {
  address: string;
  zip: string;
  email: string | null;
  description: string | null;
  logo: string | null;
  createdAt: string;
}

export interface DealerQueryParams {
  state?: string;
  city?: string;
  minRating?: string;
  search?: string;
  /** Frontend-only: broad US region, applied after fetching (API has no region param). */
  region?: string;
}

export interface ApiErrorResponse {
  error: string;
  code?: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code?: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}
