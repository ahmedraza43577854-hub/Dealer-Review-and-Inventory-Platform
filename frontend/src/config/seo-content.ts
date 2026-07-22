import { ROUTES } from "@/config/constants";
import {
  getVehicleCategoryConfig,
  isVehicleCategoryKey,
  vehicleCategoryHref,
  type VehicleCategoryKey,
} from "@/config/vehicle-categories";
import { toCityStateSlug } from "@/lib/dealers/location-slugs";

/** Inline text or an internal link within SEO copy. */
export type SeoInline = string | { text: string; href: string };

export interface SeoBlock {
  type: "h2" | "h3" | "p";
  content: SeoInline[];
}

export interface SeoContent {
  blocks: SeoBlock[];
}

function link(text: string, href: string): SeoInline {
  return { text, href };
}

export const HOME_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Find car dealerships you can trust before you buy"],
    },
    {
      type: "p",
      content: [
        "Shopping for a vehicle should start with research, not pressure. ",
        link("AutoSalesReviews", ROUTES.home),
        " helps you ",
        link("find car dealerships", ROUTES.dealers),
        " across the United States, compare ",
        link("auto dealer reviews", ROUTES.dealers),
        ", and browse inventory from stores that earn their reputation through real customer experiences, not paid placement.",
      ],
    },
    {
      type: "h3",
      content: ["Search inventory and reviews in one place"],
    },
    {
      type: "p",
      content: [
        "Whether you want to ",
        link("buy used cars nationwide", ROUTES.vehicles),
        " or explore new models at a local showroom, our platform connects you with ",
        link("trusted car dealers", ROUTES.dealers),
        " in all 50 states. Filter by make, model, price, and body style, then read ratings sourced from verified review platforms before you schedule a test drive.",
      ],
    },
    {
      type: "h3",
      content: ["Shop by city and compare local dealers"],
    },
    {
      type: "p",
      content: [
        "Local markets differ in pricing, inventory, and service quality. Browse our ",
        link("city dealer directory", ROUTES.cities),
        " to find dealerships in major metros like New York, Los Angeles, Chicago, and Houston. Each city page includes verified reviews, nearby dealer links, and inventory filtered to your area, so you can research locally before you visit the lot.",
      ],
    },
    {
      type: "h3",
      content: ["Built for confident car buyers"],
    },
    {
      type: "p",
      content: [
        "Every listing includes location details, contact information, and aggregated star ratings so you can shortlist dealerships quickly. Start on our ",
        link("dealer directory", ROUTES.dealers),
        " to compare stores near you, or jump straight to ",
        link("cars for sale", ROUTES.vehicles),
        " to search thousands of vehicles from top-rated sellers. The goal is simple: give you the clarity you need to choose the right dealer and the right car.",
      ],
    },
  ],
};

export const DEALERS_INTRO_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Discover car dealerships near me with verified reviews"],
    },
    {
      type: "p",
      content: [
        "Looking for ",
        link("car dealerships near me", ROUTES.dealers),
        "? AutoSalesReviews lists ",
        link("best car dealers", ROUTES.dealers),
        " across every state, with filters for city, region, and minimum rating. Each profile combines ",
        link("verified dealer reviews", ROUTES.dealers),
        " from trusted sources so you can compare reputation, inventory, and contact details before you visit the lot.",
      ],
    },
    {
      type: "p",
      content: [
        "Use the search bar to narrow results by location, or browse featured and top-rated stores nationwide. When you find a dealership that fits, view their full profile and explore ",
        link("vehicles they have listed", ROUTES.vehicles),
        ", all from one place designed for serious car shoppers.",
      ],
    },
  ],
};

export const DEALERS_EXTENDED_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Why shoppers use our dealer directory"],
    },
    {
      type: "h3",
      content: ["Transparent ratings you can compare"],
    },
    {
      type: "p",
      content: [
        "We aggregate review scores from established platforms so you see a balanced picture of each dealership's service, pricing fairness, and follow-through. No hidden scores and no pay-to-rank, just data that helps you identify ",
        link("trusted car dealers", ROUTES.dealers),
        " in your area or anywhere you are willing to travel.",
      ],
    },
    {
      type: "h3",
      content: ["Nationwide coverage, local detail"],
    },
    {
      type: "p",
      content: [
        "Our directory includes 500+ dealerships across all 50 states. Filter by state or city, sort by rating, and open full profiles with hours, phone numbers, and maps. Many dealers also link to ",
        link("live inventory", ROUTES.vehicles),
        " so you can see what is on the lot before you make the drive.",
      ],
    },
    {
      type: "h3",
      content: ["How it works"],
    },
    {
      type: "p",
      content: [
        "Search or browse ",
        link("car dealerships", ROUTES.dealers),
        ", read ",
        link("verified dealer reviews", ROUTES.dealers),
        ", and shortlist your top choices. Visit dealer profiles for contact info, then continue to ",
        link("search car inventory", ROUTES.vehicles),
        " filtered by make, price, or body style. It is a straightforward path from research to test drive, built for buyers who want facts first.",
      ],
    },
  ],
};

export const VEHICLES_INTRO_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Search cars for sale from trusted dealers nationwide"],
    },
    {
      type: "p",
      content: [
        "Browse ",
        link("cars for sale", ROUTES.vehicles),
        " from verified dealerships across the country. Whether you are comparing ",
        link("used cars nationwide", ROUTES.vehicles),
        " or shopping for a specific make and model, our filters help you ",
        link("search car inventory", ROUTES.vehicles),
        " by price, year, mileage, condition, and body style in seconds.",
      ],
    },
    {
      type: "p",
      content: [
        "Every vehicle listing connects to a rated ",
        link("dealer profile", ROUTES.dealers),
        " so you can check reviews before you inquire. Sort by price or mileage, refine by state, and open any listing for full specs, photos, and dealer contact details, everything you need to move from browsing to buying with confidence.",
      ],
    },
  ],
};

export type { VehicleCategoryKey } from "@/config/vehicle-categories";
export {
  getVehicleCategoryConfig,
  isVehicleCategoryKey,
  vehicleCategoryHref,
  VEHICLE_CATEGORY_KEYS,
} from "@/config/vehicle-categories";

export function getVehicleCategorySeoContent(
  bodyStyle: string | undefined
): SeoContent | null {
  return getVehicleCategoryConfig(bodyStyle)?.seoContent ?? null;
}

export const ABOUT_EXTENDED_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Our mission: honest car shopping nationwide"],
    },
    {
      type: "p",
      content: [
        "AutoSalesReviews exists because buying a car should not feel like a gamble. We built a platform where drivers can ",
        link("find car dealerships", ROUTES.dealers),
        ", read ",
        link("auto dealer reviews", ROUTES.dealers),
        ", and ",
        link("search vehicle inventory", ROUTES.vehicles),
        " before they ever step onto a sales floor. Our mission is to put transparent information in your hands so you choose the right dealer, not just the closest one.",
      ],
    },
    {
      type: "h3",
      content: ["Trust signals you can rely on"],
    },
    {
      type: "p",
      content: [
        "We list 500+ dealerships and 10,000+ vehicles with coverage in all 50 states. Review scores are aggregated from established third-party sources, not edited by dealers or advertisers. Featured listings highlight quality stores; they do not replace verified ratings. We publish clear contact information, real locations, and ",
        link("dealer profiles", ROUTES.dealers),
        " you can compare side by side.",
      ],
    },
    {
      type: "h3",
      content: ["How our reviews work"],
    },
    {
      type: "p",
      content: [
        "Each dealership profile shows an average star rating compiled from customer feedback on trusted review platforms. We do not allow dealers to pay to remove or suppress negative reviews. Ratings reflect real experiences with sales staff, pricing transparency, and post-sale support. As we expand, shoppers will be able to submit reviews directly on AutoSalesReviews, today, we surface verified external scores so you still get an unbiased starting point.",
      ],
    },
    {
      type: "h3",
      content: ["Built for buyers, improving every month"],
    },
    {
      type: "p",
      content: [
        "Our team adds inventory search, regional browsing, and mobile-friendly profiles because those are the tools car buyers ask for most. Explore ",
        link("cars for sale", ROUTES.vehicles),
        ", read our ",
        link("FAQ", ROUTES.faq),
        ", or ",
        link("contact us", ROUTES.contact),
        " with questions. Whether you shop locally or ",
        link("buy used cars nationwide", ROUTES.vehicles),
        ", we are here to help you do it with confidence.",
      ],
    },
  ],
};

export const FOR_DEALERS_EXTENDED_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Grow your dealership with motivated buyers"],
    },
    {
      type: "p",
      content: [
        "AutoSalesReviews connects your store to shoppers actively comparing ",
        link("car dealerships", ROUTES.dealers),
        " and ",
        link("vehicle inventory", ROUTES.vehicles),
        " nationwide. Listing is built on trust: your reputation comes from real ",
        link("customer reviews", ROUTES.dealers),
        ", not ad spend. That attracts buyers who are ready to buy, not just browsing.",
      ],
    },
    {
      type: "h3",
      content: ["Platform stats at a glance"],
    },
    {
      type: "p",
      content: [
        "Shoppers use AutoSalesReviews to search 10,000+ vehicles from 500+ dealers across all 50 states. Dealership profiles include ratings, location, contact details, and links to inventory, giving your store visibility where buyers already research. Featured placement highlights quality partners without compromising review integrity.",
      ],
    },
    {
      type: "h3",
      content: ["Benefits of listing your dealership"],
    },
    {
      type: "p",
      content: [
        "Reach active buyers comparing options online. Showcase your full profile with maps, phone, and hours. Build credibility through verified review scores shoppers trust. Inventory integration lets buyers browse your stock from your profile and our ",
        link("vehicle search", ROUTES.vehicles),
        ". No pay-to-hide reviews, your service earns your rating.",
      ],
    },
    {
      type: "h3",
      content: ["How onboarding works"],
    },
    {
      type: "p",
      content: [
        "Email our team with your dealership name, city, state, and website. We verify your business and publish or update your profile, typically within one business day. Your listing goes live with ratings and contact details. We notify you when review responses and expanded inventory tools launch. ",
        link("See example profiles", ROUTES.dealers),
        " to preview what buyers see today.",
      ],
    },
  ],
};

export type DealersListingSeoContext =
  | { type: "default" }
  | { type: "state"; stateCode: string; stateName: string }
  | { type: "city"; city: string; stateCode: string; stateName: string };

export function getDealersListingSeoContent(
  context: DealersListingSeoContext = { type: "default" }
): { intro: SeoContent; extended: SeoContent } {
  if (context.type === "state") {
    return {
      intro: {
        blocks: [
          {
            type: "h2",
            content: [
              `Find car dealerships in ${context.stateName} with verified reviews`,
            ],
          },
          {
            type: "p",
            content: [
              `Shopping for a car in ${context.stateName}? Browse `,
              link(
                `car dealerships in ${context.stateName}`,
                ROUTES.dealerState(context.stateCode)
              ),
              " on AutoSalesReviews. Compare ",
              link("best car dealers", ROUTES.dealers),
              " by ",
              link("verified dealer reviews", ROUTES.dealers),
              ", star ratings, and contact details before you visit a showroom.",
            ],
          },
          {
            type: "p",
            content: [
              "Filter by city or minimum rating to shortlist stores near you, then explore ",
              link("cars for sale", ROUTES.vehicles),
              ` from ${context.stateName} dealers, or search our full `,
              link("nationwide inventory", ROUTES.vehicles),
              " if you are open to traveling for the right deal.",
            ],
          },
        ],
      },
      extended: {
        blocks: [
          {
            type: "h2",
            content: [`Why compare dealers in ${context.stateName}?`],
          },
          {
            type: "h3",
            content: ["Local inventory with transparent ratings"],
          },
          {
            type: "p",
            content: [
              `Every ${context.stateName} listing includes aggregated review scores from trusted platforms, business hours, phone numbers, and maps. That makes it easier to identify `,
              link("trusted car dealers", ROUTES.dealers),
              " without relying on word of mouth alone.",
            ],
          },
          {
            type: "h3",
            content: ["Search dealers and vehicles together"],
          },
          {
            type: "p",
            content: [
              "Start on this page to compare dealerships, then continue to ",
              link("search car inventory", ROUTES.vehicles),
              ` filtered to ${context.stateName}. You can also browse `,
              link("dealers nationwide", ROUTES.dealers),
              " if your search expands beyond state lines.",
            ],
          },
        ],
      },
    };
  }

  if (context.type === "city") {
    const cityLabel = `${context.city}, ${context.stateName}`;
    return {
      intro: {
        blocks: [
          {
            type: "h2",
            content: [
              `Car dealerships near me in ${cityLabel}`,
            ],
          },
          {
            type: "p",
            content: [
              `Looking for `,
              link(
                `car dealerships near me in ${context.city}`,
                ROUTES.dealerCity(
                  toCityStateSlug(context.city, context.stateCode)
                )
              ),
              "? Compare ",
              link("best car dealers", ROUTES.dealers),
              ` in ${cityLabel} with `,
              link("verified dealer reviews", ROUTES.dealers),
              ", combined star ratings, and full contact profiles.",
            ],
          },
          {
            type: "p",
            content: [
              "Read reviews, check hours and phone numbers, and browse ",
              link("local vehicle inventory", ROUTES.vehicles),
              ` from ${context.city} dealerships, or expand to `,
              link(`all dealers in ${context.stateName}`, ROUTES.dealerState(context.stateCode)),
              " for more options.",
            ],
          },
        ],
      },
      extended: {
        blocks: [
          {
            type: "h2",
            content: [`How to choose a dealer in ${cityLabel}`],
          },
          {
            type: "h3",
            content: ["Compare ratings before you visit"],
          },
          {
            type: "p",
            content: [
              "Use minimum rating filters and open each profile to read aggregated scores from Google, Yelp, and Carfax. Shoppers in ",
              cityLabel,
              " rely on ",
              link("auto dealer reviews", ROUTES.dealers),
              " to avoid surprises on pricing, trade-in offers, and service follow-through.",
            ],
          },
          {
            type: "h3",
            content: ["Browse inventory from local sellers"],
          },
          {
            type: "p",
            content: [
              "Many ",
              context.city,
              " dealers list ",
              link("cars for sale", ROUTES.vehicles),
              " on AutoSalesReviews. Search by make, price, and body style, then contact the dealership directly from any listing page.",
            ],
          },
        ],
      },
    };
  }

  return {
    intro: DEALERS_INTRO_SEO_CONTENT,
    extended: DEALERS_EXTENDED_SEO_CONTENT,
  };
}

export const BLOG_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Car buying tips from trusted dealer review experts"],
    },
    {
      type: "p",
      content: [
        "The AutoSalesReviews blog helps you shop smarter with practical guides on ",
        link("finding car dealerships", ROUTES.dealers),
        ", reading ",
        link("auto dealer reviews", ROUTES.dealers),
        ", and navigating ",
        link("cars for sale", ROUTES.vehicles),
        " nationwide. Whether you are buying your first vehicle or trading up, our articles cover financing, test drives, and how to spot a dealership you can trust.",
      ],
    },
    {
      type: "h3",
      content: ["Guides for every stage of your search"],
    },
    {
      type: "p",
      content: [
        "Browse buying guides, dealer insights, and industry news written for real shoppers, not sales pitches. When you are ready to act, use our ",
        link("vehicle search", ROUTES.vehicles),
        " and ",
        link("dealer directory", ROUTES.dealers),
        " to put what you learn into practice.",
      ],
    },
  ],
};

export const HOW_IT_WORKS_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["How to find trusted car dealers and buy with confidence"],
    },
    {
      type: "p",
      content: [
        "AutoSalesReviews makes it simple to ",
        link("find car dealerships", ROUTES.dealers),
        ", compare ",
        link("verified dealer reviews", ROUTES.dealers),
        ", and ",
        link("search car inventory", ROUTES.vehicles),
        " in three steps. Search by location or dealer name, review star ratings from Google, Yelp, and Carfax, then browse vehicles from stores that earn strong customer feedback.",
      ],
    },
    {
      type: "h3",
      content: ["From research to test drive"],
    },
    {
      type: "p",
      content: [
        "Filter ",
        link("cars for sale", ROUTES.vehicles),
        " by make, price, mileage, and body style. Open dealer profiles for phone numbers, hours, and maps. When you find the right match, contact the seller directly, no middleman, no pressure. Learn more on our ",
        link("FAQ", ROUTES.faq),
        " or ",
        link("About", ROUTES.about),
        " pages.",
      ],
    },
  ],
};

export const CONTACT_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["We help car buyers and dealerships nationwide"],
    },
    {
      type: "p",
      content: [
        "Questions about ",
        link("searching cars for sale", ROUTES.vehicles),
        ", reading ",
        link("dealer reviews", ROUTES.dealers),
        ", or ",
        link("listing your dealership", ROUTES.forDealers),
        "? Our team supports shoppers and dealer partners across all 50 states. Reach out by email or phone during business hours and we will respond within one business day.",
      ],
    },
    {
      type: "h3",
      content: ["Common reasons to contact us"],
    },
    {
      type: "p",
      content: [
        "Buyers contact us for help navigating search filters, understanding review scores, and reporting inaccurate listings. Dealerships reach out to ",
        link("join the platform", ROUTES.forDealers),
        ", update profile details, or ask about inventory integration. For quick answers, visit our ",
        link("FAQ", ROUTES.faq),
        " first.",
      ],
    },
  ],
};

export const FAQ_INTRO_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Answers about car search, dealer reviews, and listings"],
    },
    {
      type: "p",
      content: [
        "Whether you want to ",
        link("buy used cars nationwide", ROUTES.vehicles),
        ", compare ",
        link("best car dealers", ROUTES.dealers),
        ", or understand how ",
        link("verified dealer reviews", ROUTES.dealers),
        " work, this help center covers the essentials. Browse questions below or ",
        link("contact our team", ROUTES.contact),
        " for personalized support.",
      ],
    },
  ],
};

export const WRITE_REVIEW_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Share your dealership experience with other car buyers"],
    },
    {
      type: "p",
      content: [
        "Honest ",
        link("auto dealer reviews", ROUTES.dealers),
        " help the next shopper avoid bad experiences and find ",
        link("trusted car dealers", ROUTES.dealers),
        ". When review submission opens on AutoSalesReviews, you will rate your visit, describe sales and service quality, and contribute to the same scores other buyers rely on when they ",
        link("search car inventory", ROUTES.vehicles),
        ".",
      ],
    },
    {
      type: "h3",
      content: ["Why reviews matter"],
    },
    {
      type: "p",
      content: [
        "Detailed feedback keeps ratings accurate and gives dealerships fair incentive to improve. Until the form launches, browse ",
        link("dealer profiles", ROUTES.dealers),
        " to see how existing reviews help shoppers ",
        link("find car dealerships", ROUTES.dealers),
        " with confidence.",
      ],
    },
  ],
};

export const SITEMAP_SEO_CONTENT: SeoContent = {
  blocks: [
    {
      type: "h2",
      content: ["Explore every section of AutoSalesReviews"],
    },
    {
      type: "p",
      content: [
        "Use this sitemap to navigate ",
        link("cars for sale", ROUTES.vehicles),
        ", ",
        link("car dealerships nationwide", ROUTES.dealers),
        ", buying guides, and support pages. Shop by region, body style, or brand, or jump to ",
        link("dealer reviews", ROUTES.dealers),
        ", ",
        link("how it works", ROUTES.howItWorks),
        ", and ",
        link("FAQ", ROUTES.faq),
        " for help at every step of your search.",
      ],
    },
  ],
};

interface VehicleDetailSeoInput {
  year: number;
  make: string;
  model: string;
  bodyStyle: string;
  condition: string;
  dealer: { name: string; city: string; state: string; slug: string };
}

export function buildVehicleDetailSeoContent(
  vehicle: VehicleDetailSeoInput
): SeoContent {
  const label = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  const bodyStyleQuery = isVehicleCategoryKey(vehicle.bodyStyle)
    ? vehicleCategoryHref(vehicle.bodyStyle as VehicleCategoryKey)
    : `${ROUTES.vehicles}?bodyStyle=${encodeURIComponent(vehicle.bodyStyle)}`;

  return {
    blocks: [
      {
        type: "h2",
        content: [`About this ${label} for sale`],
      },
      {
        type: "p",
        content: [
          `This ${vehicle.condition.toLowerCase()} ${label} is listed by `,
          link(vehicle.dealer.name, ROUTES.dealerProfile(vehicle.dealer.slug)),
          ` in ${vehicle.dealer.city}, ${vehicle.dealer.state}. Browse photos, specifications, and features above, then contact the dealer to ask questions or schedule a test drive.`,
        ],
      },
      {
        type: "h3",
        content: ["More vehicles like this one"],
      },
      {
        type: "p",
        content: [
          "Compare similar ",
          link(`${vehicle.bodyStyle}s for sale`, bodyStyleQuery),
          ", explore ",
          link("all cars for sale", ROUTES.vehicles),
          ", or read ",
          link("dealer reviews", ROUTES.dealerProfile(vehicle.dealer.slug)),
          ` for ${vehicle.dealer.name} before you buy.`,
        ],
      },
    ],
  };
}

interface DealerProfileSeoInput {
  name: string;
  city: string;
  state: string;
  slug: string;
}

export function buildDealerProfileSeoContent(
  dealer: DealerProfileSeoInput
): SeoContent {
  return {
    blocks: [
      {
        type: "h2",
        content: [`${dealer.name} reviews and inventory in ${dealer.city}, ${dealer.state}`],
      },
      {
        type: "p",
        content: [
          link(dealer.name, ROUTES.dealerProfile(dealer.slug)),
          " is listed on AutoSalesReviews with ",
          link("verified dealer reviews", ROUTES.dealers),
          ", contact details, and ",
          link("vehicle inventory", ROUTES.vehicles),
          `. Compare ratings, read customer feedback, and browse cars for sale from this ${dealer.city} dealership.`,
        ],
      },
      {
        type: "h3",
        content: [`More dealers in ${dealer.city}, ${dealer.state}`],
      },
      {
        type: "p",
        content: [
          "Not ready to commit? Compare other ",
          link("car dealerships near me", ROUTES.dealers),
          ", ",
          link("search cars for sale nationwide", ROUTES.vehicles),
          ", or ",
          link("write a review", ROUTES.writeReview),
          ` after your visit to help other buyers find trusted car dealers.`,
        ],
      },
    ],
  };
}
