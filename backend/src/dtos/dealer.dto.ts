import { computeAverageRating } from "../utils/rating";
import { DealerWithReviews } from "../types/dealer.types";

function extractRatings(dealer: DealerWithReviews): number[] {
  return dealer.reviews.map((review) => review.rating);
}

export function toDealerSummaryDto(dealer: DealerWithReviews) {
  const ratings = extractRatings(dealer);

  return {
    id: dealer.id,
    name: dealer.name,
    slug: dealer.slug,
    city: dealer.city,
    state: dealer.state,
    phone: dealer.phone,
    website: dealer.website,
    featured: dealer.featured,
    averageRating: computeAverageRating(ratings),
    totalReviews: ratings.length,
  };
}

export function toDealerDetailDto(dealer: DealerWithReviews) {
  const summary = toDealerSummaryDto(dealer);

  return {
    ...summary,
    address: dealer.address,
    zip: dealer.zip,
    email: dealer.email,
    description: dealer.description,
    logo: dealer.logo,
    createdAt: dealer.createdAt,
  };
}
