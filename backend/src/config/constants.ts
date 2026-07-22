/** US state codes supported by dealer list filters and seed data. */
export const VALID_STATES = [
  "AZ",
  "CA",
  "CO",
  "CT",
  "FL",
  "GA",
  "IL",
  "IN",
  "MA",
  "NC",
  "NJ",
  "NY",
  "OH",
  "PA",
  "TN",
  "TX",
  "WA",
] as const;

export type StateCode = (typeof VALID_STATES)[number];

export const DEALER_SORT = {
  featuredFirst: { featured: "desc" as const },
  nameAsc: { name: "asc" as const },
} as const;
