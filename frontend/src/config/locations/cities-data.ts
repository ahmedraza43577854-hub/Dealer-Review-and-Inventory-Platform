import { toCityStateSlug } from "@/lib/dealers/location-slugs";

export interface TargetCity {
  city: string;
  stateCode: string;
  slug: string;
  marketDescriptor: string;
  nearbySlugs: string[];
}

function city(
  name: string,
  stateCode: string,
  marketDescriptor: string,
  nearbySlugs: string[]
): TargetCity {
  return {
    city: name,
    stateCode,
    slug: toCityStateSlug(name, stateCode),
    marketDescriptor,
    nearbySlugs,
  };
}

/** Curated high-intent city landing pages for local SEO. */
export const TARGET_CITIES: TargetCity[] = [
  city("New York", "NY", "the nation's largest metro car market with borough-wide dealer options", [
    "brooklyn-ny", "queens-ny", "bronx-ny", "newark-nj", "jersey-city-nj",
  ]),
  city("Brooklyn", "NY", "a dense urban market where buyers weigh street parking and transit access", [
    "new-york-ny", "queens-ny", "jersey-city-nj", "newark-nj",
  ]),
  city("Queens", "NY", "a diverse borough with strong used-car demand near major airports", [
    "new-york-ny", "brooklyn-ny", "bronx-ny", "newark-nj",
  ]),
  city("Bronx", "NY", "a growing market for value-focused buyers north of Manhattan", [
    "new-york-ny", "queens-ny", "brooklyn-ny", "newark-nj",
  ]),
  city("Los Angeles", "CA", "Southern California's flagship market with year-round buying season", [
    "san-diego-ca", "san-jose-ca", "san-francisco-ca",
  ]),
  city("Chicago", "IL", "the Midwest hub where winter weather shapes SUV and AWD demand", [
    "indianapolis-in", "columbus-oh",
  ]),
  city("Houston", "TX", "a truck-heavy market with sprawling suburban dealer corridors", [
    "dallas-tx", "san-antonio-tx", "austin-tx", "fort-worth-tx",
  ]),
  city("Phoenix", "AZ", "a fast-growing desert metro where heat and dust affect vehicle choice", [
    "denver-co", "san-diego-ca",
  ]),
  city("Philadelphia", "PA", "a tri-state market bridging Pennsylvania, New Jersey, and Delaware buyers", [
    "pittsburgh-pa", "allentown-pa", "newark-nj", "jersey-city-nj",
  ]),
  city("San Antonio", "TX", "a family-oriented Texas market with strong used-truck inventory", [
    "austin-tx", "houston-tx", "dallas-tx",
  ]),
  city("San Diego", "CA", "a coastal California market favoring fuel-efficient and compact SUVs", [
    "los-angeles-ca", "phoenix-az", "san-jose-ca",
  ]),
  city("Dallas", "TX", "North Texas's largest dealer hub with competitive new and used pricing", [
    "fort-worth-tx", "houston-tx", "austin-tx", "san-antonio-tx",
  ]),
  city("San Jose", "CA", "Silicon Valley's tech-driven market with high demand for EVs and hybrids", [
    "san-francisco-ca", "los-angeles-ca", "san-diego-ca",
  ]),
  city("Austin", "TX", "a fast-growing capital city with transplants comparing dealers statewide", [
    "san-antonio-tx", "houston-tx", "dallas-tx", "fort-worth-tx",
  ]),
  city("Jacksonville", "FL", "Florida's largest city by area with strong pickup and family SUV sales", [
    "miami-fl", "atlanta-ga",
  ]),
  city("Fort Worth", "TX", "a Dallas–Fort Worth sibling market with independent dealer clusters", [
    "dallas-tx", "austin-tx", "houston-tx",
  ]),
  city("Columbus", "OH", "Central Ohio's anchor market with Midwest pricing and steady inventory", [
    "indianapolis-in", "pittsburgh-pa", "chicago-il",
  ]),
  city("Charlotte", "NC", "a banking-hub market with rapid suburban growth and commuting buyers", [
    "atlanta-ga", "columbus-oh", "nashville-tn",
  ]),
  city("Indianapolis", "IN", "the Crossroads of America with strong domestic brand loyalty", [
    "chicago-il", "columbus-oh", "nashville-tn",
  ]),
  city("San Francisco", "CA", "a compact urban market where parking and EV incentives shape purchases", [
    "san-jose-ca", "los-angeles-ca", "seattle-wa",
  ]),
  city("Seattle", "WA", "the Pacific Northwest hub where AWD and hybrid demand stays high", [
    "denver-co", "san-francisco-ca",
  ]),
  city("Denver", "CO", "a mountain-market metro where altitude and snow drive AWD and SUV sales", [
    "phoenix-az", "seattle-wa", "dallas-tx",
  ]),
  city("Nashville", "TN", "Music City's booming market with newcomers comparing dealers statewide", [
    "atlanta-ga", "charlotte-nc", "indianapolis-in",
  ]),
  city("Newark", "NJ", "North Jersey's gateway city with access to metro New York dealer inventory", [
    "jersey-city-nj", "paramus-nj", "hackensack-nj", "new-york-ny", "brooklyn-ny",
  ]),
  city("Jersey City", "NJ", "a Hudson waterfront market serving commuters shopping across state lines", [
    "newark-nj", "new-york-ny", "paramus-nj", "hackensack-nj",
  ]),
  city("Paramus", "NJ", "Bergen County's auto row with one of the highest dealer densities in the US", [
    "hackensack-nj", "newark-nj", "jersey-city-nj", "new-york-ny",
  ]),
  city("Hackensack", "NJ", "a Bergen County hub adjacent to Paramus with strong local competition", [
    "paramus-nj", "newark-nj", "jersey-city-nj", "new-york-ny",
  ]),
  city("Hartford", "CT", "Connecticut's capital region with insurance-industry commuters", [
    "new-haven-ct", "bridgeport-ct", "boston-ma",
  ]),
  city("New Haven", "CT", "a Yale-area market mixing urban buyers with shoreline shoppers", [
    "hartford-ct", "bridgeport-ct", "new-york-ny",
  ]),
  city("Bridgeport", "CT", "Fairfield County's alternative to New York metro pricing", [
    "new-haven-ct", "hartford-ct", "new-york-ny",
  ]),
  city("Pittsburgh", "PA", "Western Pennsylvania's market favoring AWD crossovers and trucks", [
    "philadelphia-pa", "allentown-pa", "columbus-oh",
  ]),
  city("Allentown", "PA", "the Lehigh Valley between Philadelphia and New York metro areas", [
    "philadelphia-pa", "pittsburgh-pa", "newark-nj",
  ]),
  city("Atlanta", "GA", "the Southeast's dominant sprawl market with mega-dealer groups", [
    "charlotte-nc", "nashville-tn", "miami-fl", "jacksonville-fl",
  ]),
  city("Miami", "FL", "an international market with strong luxury and used-import demand", [
    "jacksonville-fl", "atlanta-ga",
  ]),
  city("Boston", "MA", "New England's hub where salt-road winters define buyer priorities", [
    "hartford-ct", "new-york-ny", "newark-nj",
  ]),
];

export const TARGET_CITY_BY_SLUG = new Map(
  TARGET_CITIES.map((entry) => [entry.slug, entry])
);

export const NAV_DROPDOWN_CITIES = {
  northeast: [
    { label: "New York, NY", slug: "new-york-ny" },
    { label: "Newark, NJ", slug: "newark-nj" },
    { label: "Philadelphia, PA", slug: "philadelphia-pa" },
    { label: "Boston, MA", slug: "boston-ma" },
  ],
  south: [
    { label: "Houston, TX", slug: "houston-tx" },
    { label: "Atlanta, GA", slug: "atlanta-ga" },
    { label: "Miami, FL", slug: "miami-fl" },
    { label: "Dallas, TX", slug: "dallas-tx" },
  ],
  west: [
    { label: "Los Angeles, CA", slug: "los-angeles-ca" },
    { label: "San Francisco, CA", slug: "san-francisco-ca" },
    { label: "San Diego, CA", slug: "san-diego-ca" },
    { label: "Seattle, WA", slug: "seattle-wa" },
  ],
} as const;

export const HOMEPAGE_POPULAR_CITIES = [
  { city: "New York", stateCode: "NY", slug: "new-york-ny" },
  { city: "Los Angeles", stateCode: "CA", slug: "los-angeles-ca" },
  { city: "Chicago", stateCode: "IL", slug: "chicago-il" },
  { city: "Houston", stateCode: "TX", slug: "houston-tx" },
  { city: "Philadelphia", stateCode: "PA", slug: "philadelphia-pa" },
  { city: "Newark", stateCode: "NJ", slug: "newark-nj" },
  { city: "Atlanta", stateCode: "GA", slug: "atlanta-ga" },
  { city: "Miami", stateCode: "FL", slug: "miami-fl" },
] as const;
