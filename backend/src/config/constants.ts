export const VALID_STATES = ["NJ", "NY", "PA", "CT"] as const;
export type StateCode = (typeof VALID_STATES)[number];

export const DEALER_SORT = {
  featuredFirst: { featured: "desc" as const },
  nameAsc: { name: "asc" as const },
} as const;
