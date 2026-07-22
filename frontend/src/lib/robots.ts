/** Paths and patterns blocked in robots.txt for all crawlers. */
export const ROBOTS_DISALLOW = [
  "/api/",
  "/_next/",
  "/admin/",
  /** Block filtered/paginated URLs; clean city/state canonical paths remain crawlable. */
  "/*?",
] as const;

export const ROBOTS_ALLOW = ["/"] as const;
