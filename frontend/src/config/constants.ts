export const SITE = {
  name: "DealerReview",
  tagline: "Find trusted dealerships across the Northeast",
  description:
    "Read real reviews and discover top-rated car dealers across New Jersey, New York, Pennsylvania, and Connecticut.",
  region: "NJ, NY, PA & CT",
  email: "hello@dealerreview.com",
  phone: "(800) 555-0199",
} as const;

export const ROUTES = {
  home: "/",
  dealers: "/dealers",
  dealerProfile: (slug: string) => `/dealers/${slug}`,
  about: "/about",
  howItWorks: "/how-it-works",
  writeReview: "/write-a-review",
  forDealers: "/for-dealers",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.dealers, label: "Browse Dealers" },
] as const;

export const FOOTER = {
  explore: [
    { href: ROUTES.home, label: "Home" },
    { href: ROUTES.dealers, label: "All Dealers" },
    { href: `${ROUTES.dealers}?state=NJ`, label: "New Jersey Dealers" },
    { href: `${ROUTES.dealers}?state=NY`, label: "New York Dealers" },
    { href: `${ROUTES.dealers}?state=PA`, label: "Pennsylvania Dealers" },
    { href: `${ROUTES.dealers}?state=CT`, label: "Connecticut Dealers" },
  ],
  company: [
    { href: ROUTES.about, label: "About Us" },
    { href: ROUTES.howItWorks, label: "How It Works" },
    { href: ROUTES.writeReview, label: "Write a Review" },
    { href: ROUTES.forDealers, label: "For Dealers" },
  ],
  legal: [
    { href: ROUTES.privacy, label: "Privacy Policy" },
    { href: ROUTES.terms, label: "Terms of Service" },
    { href: ROUTES.cookies, label: "Cookie Policy" },
  ],
} as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Search your area",
    description:
      "Filter dealerships by state, city, or name across New Jersey, New York, Pennsylvania, and Connecticut.",
  },
  {
    step: "02",
    title: "Compare ratings",
    description:
      "View average star ratings and review counts to shortlist dealers that match what you are looking for.",
  },
  {
    step: "03",
    title: "Visit with confidence",
    description:
      "Open a dealer profile for contact details, location, and more before you step onto the lot.",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Regional focus",
    description:
      "We cover NJ, NY, PA, and CT only, so every listing is relevant to Northeast car buyers.",
  },
  {
    title: "Transparent ratings",
    description:
      "Average scores are calculated live from customer reviews, not padded or stored separately.",
  },
  {
    title: "No pay-to-hide",
    description:
      "Dealers cannot remove honest feedback. Our goal is accurate information for buyers.",
  },
  {
    title: "Built for buyers",
    description:
      "Simple search, clear profiles, and mobile-friendly pages designed for real shopping trips.",
  },
] as const;

export const STATES = [
  { code: "NJ", label: "New Jersey" },
  { code: "NY", label: "New York" },
  { code: "PA", label: "Pennsylvania" },
  { code: "CT", label: "Connecticut" },
] as const;

export const MIN_RATING_OPTIONS = [
  { value: "any", label: "Any Rating" },
  { value: "4", label: "4+ Stars" },
  { value: "3", label: "3+ Stars" },
  { value: "2", label: "2+ Stars" },
] as const;

export const API = {
  revalidateSeconds: 60,
} as const;
