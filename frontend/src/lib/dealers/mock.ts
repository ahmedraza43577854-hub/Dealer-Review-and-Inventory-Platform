export interface MockReview {
  id: string;
  author: string;
  initials: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
}

const REVIEW_POOL: Omit<MockReview, "id">[] = [
  {
    author: "Marcus Delgado",
    initials: "MD",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Smoothest car-buying experience I've had. No pressure, transparent pricing, and the vehicle was exactly as described. Financing took under an hour.",
    helpful: 14,
  },
  {
    author: "Priya Sharma",
    initials: "PS",
    rating: 5,
    date: "1 month ago",
    comment:
      "The team went above and beyond to find the trim I wanted. They even delivered it to my house. Highly recommend to anyone shopping in the area.",
    helpful: 9,
  },
  {
    author: "Kevin O'Brien",
    initials: "KO",
    rating: 4,
    date: "1 month ago",
    comment:
      "Great selection and fair trade-in offer. Took a little longer than expected at signing, but the sales rep kept me updated the whole time.",
    helpful: 6,
  },
  {
    author: "Latoya Jenkins",
    initials: "LJ",
    rating: 5,
    date: "2 months ago",
    comment:
      "Certified pre-owned SUV was spotless and came with a solid warranty. Service department has been excellent for my first oil change too.",
    helpful: 11,
  },
  {
    author: "Daniel Kim",
    initials: "DK",
    rating: 4,
    date: "3 months ago",
    comment:
      "Honest dealership. They pointed out a minor issue before I even noticed and fixed it at no charge before delivery. Would buy here again.",
    helpful: 5,
  },
];

function hash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h;
}

export function getMockReviews(slug: string): MockReview[] {
  const offset = hash(slug) % REVIEW_POOL.length;
  return REVIEW_POOL.map((review, i) => ({
    ...REVIEW_POOL[(i + offset) % REVIEW_POOL.length],
    id: `${slug}-review-${i}`,
  }));
}

export const BUSINESS_HOURS = [
  { day: "Monday", hours: "9:00 AM – 8:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 8:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 8:00 PM" },
  { day: "Friday", hours: "9:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
] as const;

export const TODAY_HOURS = "Open until 8:00 PM";

export const SERVICES = [
  "New & Used Sales",
  "Financing & Leasing",
  "Trade-In Appraisal",
  "Certified Pre-Owned",
  "Service & Maintenance",
  "Parts Department",
  "Home Delivery",
  "Extended Warranties",
] as const;

export const BRANDS_CARRIED = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "Hyundai",
  "Kia",
  "Subaru",
] as const;

export function dealerDescription(name: string, city: string, state: string): string {
  return `${name} is a full-service dealership proudly serving ${city}, ${state} and the surrounding Northeast community. Our team is committed to a no-pressure, transparent buying experience — from browsing our extensive new and pre-owned inventory to financing, trade-ins, and expert service after the sale. Every certified vehicle is fully inspected so you can drive off the lot with confidence.`;
}
