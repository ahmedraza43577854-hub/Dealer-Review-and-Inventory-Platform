import { Dealer, Review } from "@prisma/client";

export type DealerWithReviews = Dealer & {
  reviews: Pick<Review, "rating">[];
};

export interface DealerListFilters {
  state?: string;
  city?: string;
  search?: string;
  minRating?: number;
}

export interface CreateDealerInput {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  description?: string | null;
  logo?: string | null;
  featured?: boolean;
}

export interface DealerSummaryDto {
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

export interface DealerDetailDto extends DealerSummaryDto {
  address: string;
  zip: string;
  email: string | null;
  description: string | null;
  logo: string | null;
  createdAt: Date;
}
