export type VehicleCondition = "NEW" | "USED" | "CPO";

export type BodyStyle =
  | "SUV"
  | "Sedan"
  | "Truck"
  | "Coupe"
  | "Van"
  | "Minivan"
  | "Electric"
  | "Hatchback"
  | "Convertible"
  | "Wagon";

export type FuelType =
  | "Gasoline"
  | "Hybrid"
  | "Plug-in Hybrid"
  | "Electric"
  | "Diesel";

export interface DealerRatings {
  google: number;
  googleCount: number;
  yelp: number;
  yelpCount: number;
  carfax: number;
  combined: number;
  totalReviews: number;
}

export interface VehicleDealerRef {
  name: string;
  slug: string;
  city: string;
  state: string;
  phone: string;
  featured: boolean;
  ratings: DealerRatings;
}

export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: number;
  mileage: number;
  bodyStyle: BodyStyle;
  condition: VehicleCondition;
  fuelType: FuelType;
  transmission: string;
  drivetrain: string;
  exteriorColor: string;
  interiorColor: string;
  vin: string;
  mpg: string;
  photoCount: number;
  /** Hex tint used for the placeholder photo gradient. */
  accent: string;
  description: string;
  features: string[];
  dealer: VehicleDealerRef;
  /** Deterministic ordering used for the "Newest" sort (higher = newer). */
  freshness: number;
}

export interface VehicleFilters {
  make?: string;
  model?: string;
  yearFrom?: number;
  yearTo?: number;
  priceFrom?: number;
  priceTo?: number;
  maxMileage?: number;
  bodyStyle?: string;
  condition?: string;
  state?: string;
  city?: string;
  minRating?: number;
  query?: string;
}

export type VehicleSort =
  | "relevance"
  | "price-asc"
  | "price-desc"
  | "newest"
  | "rating";

/** Lightweight vehicle summary carried in the compare tray and its localStorage
 * persistence — deliberately excludes heavy fields (description, features, vin)
 * that aren't needed until the full comparison page looks the vehicle back up. */
export type CompareVehicleSummary = Pick<
  Vehicle,
  "id" | "year" | "make" | "model" | "trim" | "price" | "bodyStyle" | "accent" | "photoCount"
>;
