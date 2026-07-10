export const SITE = {
  name: "AutoSalesReviews",
  tagline: "Find your next car from trusted dealerships",
  description:
    "Search thousands of vehicles from trusted, top-rated dealerships across New Jersey, New York, Pennsylvania, and Connecticut.",
  region: "NJ, NY, PA & CT",
  email: "hello@autosalesreviews.com",
  phone: "(800) 555-0199",
} as const;

export const ROUTES = {
  home: "/",
  vehicles: "/vehicles",
  vehicleDetail: (id: string) => `/vehicles/${id}`,
  dealers: "/dealers",
  dealerProfile: (slug: string) => `/dealers/${slug}`,
  about: "/about",
  blog: "/blog",
  howItWorks: "/how-it-works",
  writeReview: "/write-a-review",
  forDealers: "/for-dealers",
  contact: "/contact",
  faq: "/faq",
  sitemap: "/sitemap",
  accessibility: "/accessibility",
  privacy: "/privacy",
  terms: "/terms",
  cookies: "/cookies",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.vehicles, label: "Find Cars" },
  { href: ROUTES.dealers, label: "Dealers" },
  { href: ROUTES.blog, label: "Blog" },
  { href: ROUTES.about, label: "About" },
] as const;

export const FOOTER = {
  explore: [
    { href: ROUTES.vehicles, label: "Find Cars" },
    { href: ROUTES.dealers, label: "Dealers" },
    { href: ROUTES.blog, label: "Blog" },
    { href: `${ROUTES.vehicles}?bodyStyle=SUV`, label: "Browse SUVs" },
    { href: `${ROUTES.vehicles}?condition=NEW`, label: "New Vehicles" },
  ],
  support: [
    { href: ROUTES.contact, label: "Contact Us" },
    { href: ROUTES.faq, label: "FAQ" },
    { href: ROUTES.forDealers, label: "List Your Dealership" },
    { href: ROUTES.accessibility, label: "Accessibility" },
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
    { href: ROUTES.sitemap, label: "Sitemap" },
  ],
} as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Search vehicles",
    description:
      "Filter thousands of cars by make, model, price, mileage, and body style across New Jersey, New York, Pennsylvania, and Connecticut.",
  },
  {
    step: "02",
    title: "Compare dealers",
    description:
      "Every vehicle shows its dealer's combined star rating from Google, Yelp, and Carfax so you can buy with confidence.",
  },
  {
    step: "03",
    title: "Contact & drive",
    description:
      "Reach out to the dealer, schedule a test drive, and pick up your next car — all from one place.",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Real inventory",
    description:
      "Browse actual vehicles for sale with prices, mileage, and features — not just dealer listings.",
  },
  {
    title: "Combined ratings",
    description:
      "We aggregate Google, Yelp, and Carfax scores into one trusted rating for every dealership.",
  },
  {
    title: "Regional focus",
    description:
      "We cover NJ, NY, PA, and CT only, so every car and dealer is relevant to Northeast buyers.",
  },
  {
    title: "Built for buyers",
    description:
      "Fast search, clear vehicle pages, and mobile-friendly browsing designed for real car shopping.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Found the exact SUV I wanted at a Bergen County dealer within minutes. The combined rating told me the dealership was legit before I even called.",
    name: "Michael R.",
    location: "Bergen County, NJ",
    rating: 5,
  },
  {
    quote:
      "Being able to filter by price and mileage and still see dealer reviews saved me a wasted Saturday and a bad deal.",
    name: "Priya S.",
    location: "Nassau County, NY",
    rating: 5,
  },
  {
    quote:
      "Simple, honest, no clutter. I compared three cars from three dealers side by side and picked the best one.",
    name: "Daniel K.",
    location: "Bucks County, PA",
    rating: 4,
  },
] as const;

export const FAQS = [
  {
    question: "Is AutoSalesReviews free to use?",
    answer:
      "Yes. Searching vehicles, reading reviews, and comparing dealer ratings is completely free for car buyers, with no account required.",
  },
  {
    question: "How are dealer ratings calculated?",
    answer:
      "We combine ratings from Google, Yelp, and Carfax into a single average score for each dealership so you get the full picture at a glance.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We currently focus on New Jersey, New York, Pennsylvania, and Connecticut, with more Northeast states planned as we grow.",
  },
  {
    question: "Can a dealership remove a negative review?",
    answer:
      "No. Dealers can respond publicly to reviews, but they cannot delete or suppress honest feedback from verified buyers.",
  },
  {
    question: "How do I contact a dealer about a car?",
    answer:
      "Open any vehicle page and use \"Contact Dealer About This Car\" or \"Schedule a Test Drive\" to reach the dealership directly.",
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
