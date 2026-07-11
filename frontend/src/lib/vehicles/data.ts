import type {
  DealerRatings,
  Vehicle,
  VehicleDealerRef,
} from "@/types/vehicle";

/* -------------------------------------------------------------------------- */
/*  Demo dealers                                                              */
/*  Backend has no vehicle model, so inventory is a self-contained frontend   */
/*  dataset. Dealer refs are denormalized onto each vehicle so the car-first  */
/*  UI always renders, independent of the dealer API.                         */
/* -------------------------------------------------------------------------- */

function ratings(
  google: number,
  googleCount: number,
  yelp: number,
  yelpCount: number,
  carfax: number
): DealerRatings {
  const combined = Math.round(((google + yelp + carfax) / 3) * 10) / 10;
  return {
    google,
    googleCount,
    yelp,
    yelpCount,
    carfax,
    combined,
    totalReviews: googleCount + yelpCount,
  };
}

export const DEMO_DEALERS: Record<string, VehicleDealerRef> = {
  "bergen-car": {
    name: "Bergen Car",
    slug: "bergen-car",
    city: "Paramus",
    state: "NJ",
    phone: "(201) 555-0142",
    featured: true,
    ratings: ratings(4.2, 142, 4.0, 67, 4.5),
  },
  "liberty-auto-group": {
    name: "Liberty Auto Group",
    slug: "liberty-auto-group",
    city: "Austin",
    state: "TX",
    phone: "(512) 555-0188",
    featured: false,
    ratings: ratings(4.4, 210, 4.1, 88, 4.6),
  },
  "empire-motors": {
    name: "Empire Motors",
    slug: "empire-motors",
    city: "Chicago",
    state: "IL",
    phone: "(312) 555-0173",
    featured: false,
    ratings: ratings(4.0, 175, 3.8, 54, 4.2),
  },
  "summit-auto-group": {
    name: "Summit Auto Group",
    slug: "summit-auto-group",
    city: "Denver",
    state: "CO",
    phone: "(303) 555-0119",
    featured: false,
    ratings: ratings(4.5, 98, 4.3, 40, 4.4),
  },
  "sunbelt-motors": {
    name: "Sunbelt Motors",
    slug: "sunbelt-motors",
    city: "Phoenix",
    state: "AZ",
    phone: "(602) 555-0164",
    featured: false,
    ratings: ratings(4.1, 120, 3.9, 61, 4.3),
  },
  "peachtree-auto-mart": {
    name: "Peachtree Auto Mart",
    slug: "peachtree-auto-mart",
    city: "Atlanta",
    state: "GA",
    phone: "(404) 555-0150",
    featured: false,
    ratings: ratings(3.9, 230, 3.7, 95, 4.0),
  },
  "golden-gate-autos": {
    name: "Golden Gate Autos",
    slug: "golden-gate-autos",
    city: "San Jose",
    state: "CA",
    phone: "(408) 555-0131",
    featured: false,
    ratings: ratings(4.6, 76, 4.4, 33, 4.7),
  },
};

const ACCENT: Record<string, string> = {
  SUV: "#33517a",
  Sedan: "#3d6187",
  Truck: "#6b5535",
  Coupe: "#7a3a4d",
  Electric: "#1f7a68",
  Minivan: "#4b4a7a",
  Van: "#4b4a7a",
  Hatchback: "#2f6b7a",
  Convertible: "#7a4a2f",
  Wagon: "#3a6b55",
};

let vinCounter = 0;
function vin(make: string, model: string): string {
  vinCounter += 1;
  const base = `${make}${model}`.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const raw = `1HG${base}${vinCounter}XYZ2024`.replace(/[IOQ]/g, "0");
  return raw.slice(0, 17).padEnd(17, "0");
}

type Seed = Omit<
  Vehicle,
  "id" | "dealer" | "accent" | "vin" | "freshness" | "photoCount"
> & { photoCount?: number };

let idCounter = 0;
function build(dealerSlug: string, seed: Seed): Vehicle {
  idCounter += 1;
  return {
    ...seed,
    id: String(idCounter),
    vin: vin(seed.make, seed.model),
    accent: ACCENT[seed.bodyStyle] ?? "#3d6187",
    photoCount: seed.photoCount ?? 12,
    freshness: 1000 - idCounter,
    dealer: DEMO_DEALERS[dealerSlug],
  };
}

const F = {
  comfort: [
    "Bluetooth",
    "Backup Camera",
    "Apple CarPlay",
    "Android Auto",
    "Heated Seats",
    "Keyless Entry",
    "Cruise Control",
  ],
  premium: [
    "Navigation System",
    "Leather Seats",
    "Sunroof / Moonroof",
    "Blind Spot Monitor",
    "Adaptive Cruise Control",
    "Premium Sound System",
    "Ventilated Seats",
  ],
  safety: [
    "Lane Departure Warning",
    "Automatic Emergency Braking",
    "Parking Sensors",
    "All-Wheel Drive",
    "Third Row Seating",
  ],
};

/* -------------------------------------------------------------------------- */
/*  Inventory. Bergen Car (featured) is defined first and always leads.        */
/* -------------------------------------------------------------------------- */

const VEHICLES: Vehicle[] = [
  // ---- Bergen Car (8) ----
  build("bergen-car", {
    year: 2022,
    make: "Toyota",
    model: "RAV4",
    trim: "XLE Premium AWD",
    price: 28995,
    mileage: 31450,
    bodyStyle: "SUV",
    condition: "CPO",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Magnetic Gray",
    interiorColor: "Black",
    mpg: "27 city / 34 hwy",
    description:
      "A one-owner, Certified Pre-Owned RAV4 XLE Premium with all-wheel drive, a power moonroof, and a clean Carfax. Serviced on schedule and inspected across 160 points by our factory-trained technicians.",
    features: [
      ...F.comfort.slice(0, 5),
      "Navigation System",
      "Blind Spot Monitor",
      "All-Wheel Drive",
    ],
  }),
  build("bergen-car", {
    year: 2023,
    make: "Honda",
    model: "Accord",
    trim: "Sport 1.5T",
    price: 27499,
    mileage: 18900,
    bodyStyle: "Sedan",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "CVT Automatic",
    drivetrain: "Front-Wheel Drive",
    exteriorColor: "Still Night Pearl",
    interiorColor: "Black Cloth",
    mpg: "29 city / 37 hwy",
    description:
      "Sharp, low-mileage Accord Sport with the punchy 1.5T engine, wireless Apple CarPlay, and Honda Sensing safety suite. Drives like new and priced to move.",
    features: [
      ...F.comfort.slice(0, 4),
      "Adaptive Cruise Control",
      "Lane Departure Warning",
      "Automatic Emergency Braking",
    ],
  }),
  build("bergen-car", {
    year: 2021,
    make: "Ford",
    model: "F-150",
    trim: "XLT SuperCrew 4x4",
    price: 39995,
    mileage: 42300,
    bodyStyle: "Truck",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "10-Speed Automatic",
    drivetrain: "4x4",
    exteriorColor: "Oxford White",
    interiorColor: "Medium Earth Gray",
    mpg: "19 city / 24 hwy",
    description:
      "Capable F-150 XLT SuperCrew with the 3.5L EcoBoost V6, tow package, and spray-in bedliner. Ready for work or weekends with plenty of life left.",
    features: [
      "Backup Camera",
      "Apple CarPlay",
      "Cruise Control",
      "Tow Package",
      "Parking Sensors",
      "All-Wheel Drive",
    ],
  }),
  build("bergen-car", {
    year: 2024,
    make: "Tesla",
    model: "Model 3",
    trim: "Long Range AWD",
    price: 41990,
    mileage: 6200,
    bodyStyle: "Electric",
    condition: "NEW",
    fuelType: "Electric",
    transmission: "Single-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Pearl White",
    interiorColor: "Black Premium",
    mpg: "333 mi range",
    description:
      "Nearly-new Model 3 Long Range with dual-motor all-wheel drive, Autopilot, and a full glass roof. Supercharging-ready with an estimated 333 miles of range.",
    features: [
      "Navigation System",
      "Backup Camera",
      "Adaptive Cruise Control",
      "Premium Sound System",
      "Blind Spot Monitor",
      "Heated Seats",
    ],
  }),
  build("bergen-car", {
    year: 2020,
    make: "BMW",
    model: "X3",
    trim: "xDrive30i",
    price: 32450,
    mileage: 38700,
    bodyStyle: "SUV",
    condition: "CPO",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Phytonic Blue",
    interiorColor: "Cognac Leather",
    mpg: "23 city / 29 hwy",
    description:
      "Certified X3 xDrive30i with the Premium Package, panoramic roof, and heated leather seats. Balanced luxury and utility, backed by BMW's CPO warranty.",
    features: [
      "Leather Seats",
      "Navigation System",
      "Sunroof / Moonroof",
      "Heated Seats",
      "Blind Spot Monitor",
      "All-Wheel Drive",
    ],
  }),
  build("bergen-car", {
    year: 2023,
    make: "Hyundai",
    model: "Tucson",
    trim: "SEL Convenience",
    price: 25990,
    mileage: 21100,
    bodyStyle: "SUV",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Amazon Gray",
    interiorColor: "Gray Cloth",
    mpg: "24 city / 29 hwy",
    description:
      "Bold, roomy Tucson SEL with the Convenience Package, wireless charging, and a huge cargo area. A standout value in the compact SUV segment.",
    features: [
      "Backup Camera",
      "Apple CarPlay",
      "Heated Seats",
      "Blind Spot Monitor",
      "Adaptive Cruise Control",
      "All-Wheel Drive",
    ],
  }),
  build("bergen-car", {
    year: 2019,
    make: "Honda",
    model: "Civic",
    trim: "EX Sedan",
    price: 18999,
    mileage: 54800,
    bodyStyle: "Sedan",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "CVT Automatic",
    drivetrain: "Front-Wheel Drive",
    exteriorColor: "Cosmic Blue",
    interiorColor: "Black Cloth",
    mpg: "30 city / 38 hwy",
    description:
      "Reliable, fuel-sipping Civic EX with a sunroof, remote start, and Honda's proven drivetrain. An ideal first car or commuter under $19K.",
    features: [
      "Sunroof / Moonroof",
      "Backup Camera",
      "Apple CarPlay",
      "Keyless Entry",
      "Cruise Control",
    ],
  }),
  build("bergen-car", {
    year: 2022,
    make: "Kia",
    model: "Telluride",
    trim: "EX AWD",
    price: 38995,
    mileage: 27600,
    bodyStyle: "SUV",
    condition: "CPO",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Everlasting Silver",
    interiorColor: "Black Leather",
    mpg: "19 city / 24 hwy",
    description:
      "Award-winning Telluride EX with three rows, heated and ventilated leather seats, and a smooth V6. Family-ready and Kia CPO certified.",
    features: [
      "Leather Seats",
      "Third Row Seating",
      "Ventilated Seats",
      "Navigation System",
      "Blind Spot Monitor",
      "All-Wheel Drive",
    ],
  }),

  // ---- Liberty Auto Group (3) ----
  build("liberty-auto-group", {
    year: 2021,
    make: "Toyota",
    model: "Camry",
    trim: "SE",
    price: 23495,
    mileage: 34200,
    bodyStyle: "Sedan",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "Front-Wheel Drive",
    exteriorColor: "Celestial Silver",
    interiorColor: "Black SofTex",
    mpg: "28 city / 39 hwy",
    description:
      "Sporty Camry SE with sport-tuned suspension, Apple CarPlay, and Toyota Safety Sense. Dependable and efficient.",
    features: [...F.comfort.slice(0, 4), "Lane Departure Warning"],
  }),
  build("liberty-auto-group", {
    year: 2023,
    make: "Jeep",
    model: "Grand Cherokee",
    trim: "Limited 4x4",
    price: 42990,
    mileage: 16800,
    bodyStyle: "SUV",
    condition: "CPO",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "4x4",
    exteriorColor: "Diamond Black",
    interiorColor: "Global Black Leather",
    mpg: "19 city / 26 hwy",
    description:
      "Loaded Grand Cherokee Limited with leather, panoramic roof, and Uconnect 5. Certified with warranty coverage.",
    features: [
      "Leather Seats",
      "Navigation System",
      "Sunroof / Moonroof",
      "Blind Spot Monitor",
      "All-Wheel Drive",
    ],
  }),
  build("liberty-auto-group", {
    year: 2020,
    make: "Nissan",
    model: "Altima",
    trim: "SV",
    price: 19995,
    mileage: 46500,
    bodyStyle: "Sedan",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "CVT Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Gun Metallic",
    interiorColor: "Charcoal Cloth",
    mpg: "26 city / 36 hwy",
    description:
      "All-wheel-drive Altima SV with remote start, heated seats, and NissanConnect. Great value for cold-weather winters.",
    features: ["Heated Seats", "Backup Camera", "Apple CarPlay", "All-Wheel Drive"],
  }),

  // ---- Empire Motors (3) ----
  build("empire-motors", {
    year: 2022,
    make: "Chevrolet",
    model: "Equinox",
    trim: "LT AWD",
    price: 24450,
    mileage: 29800,
    bodyStyle: "SUV",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "6-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Summit White",
    interiorColor: "Jet Black",
    mpg: "25 city / 30 hwy",
    description:
      "Well-kept Equinox LT with all-wheel drive, heated seats, and a spacious interior. Ready for the daily commute.",
    features: ["Heated Seats", "Backup Camera", "Apple CarPlay", "All-Wheel Drive"],
  }),
  build("empire-motors", {
    year: 2021,
    make: "BMW",
    model: "3 Series",
    trim: "330i xDrive",
    price: 31990,
    mileage: 33100,
    bodyStyle: "Sedan",
    condition: "CPO",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Alpine White",
    interiorColor: "Black SensaTec",
    mpg: "25 city / 34 hwy",
    description:
      "Certified 330i xDrive with the Convenience Package, live cockpit, and heated seats. Sporty and refined.",
    features: [
      "Navigation System",
      "Heated Seats",
      "Sunroof / Moonroof",
      "Blind Spot Monitor",
      "All-Wheel Drive",
    ],
  }),
  build("empire-motors", {
    year: 2018,
    make: "Ford",
    model: "Escape",
    trim: "SE",
    price: 15995,
    mileage: 68200,
    bodyStyle: "SUV",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "6-Speed Automatic",
    drivetrain: "Front-Wheel Drive",
    exteriorColor: "Ingot Silver",
    interiorColor: "Charcoal Black",
    mpg: "23 city / 30 hwy",
    description:
      "Budget-friendly Escape SE with a clean history, backup camera, and SYNC infotainment. A practical compact SUV under $16K.",
    features: ["Backup Camera", "Bluetooth", "Cruise Control", "Keyless Entry"],
  }),

  // ---- Summit Auto Group (3) ----
  build("summit-auto-group", {
    year: 2023,
    make: "Subaru",
    model: "Outback",
    trim: "Premium",
    price: 29995,
    mileage: 19400,
    bodyStyle: "Wagon",
    condition: "CPO",
    fuelType: "Gasoline",
    transmission: "CVT Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Autumn Green",
    interiorColor: "Slate Black",
    mpg: "26 city / 32 hwy",
    description:
      "Certified Outback Premium with symmetrical all-wheel drive, EyeSight safety, and heated seats. Perfect for every season.",
    features: [
      "Heated Seats",
      "Apple CarPlay",
      "Adaptive Cruise Control",
      "Lane Departure Warning",
      "All-Wheel Drive",
    ],
  }),
  build("summit-auto-group", {
    year: 2022,
    make: "Mercedes-Benz",
    model: "GLC",
    trim: "GLC 300 4MATIC",
    price: 38900,
    mileage: 24600,
    bodyStyle: "SUV",
    condition: "CPO",
    fuelType: "Gasoline",
    transmission: "9-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Selenite Gray",
    interiorColor: "Black MB-Tex",
    mpg: "22 city / 29 hwy",
    description:
      "Elegant GLC 300 4MATIC with MBUX, panoramic roof, and heated seats. Mercedes-Benz Certified with warranty.",
    features: [
      "Leather Seats",
      "Navigation System",
      "Sunroof / Moonroof",
      "Heated Seats",
      "All-Wheel Drive",
    ],
  }),
  build("summit-auto-group", {
    year: 2024,
    make: "Honda",
    model: "CR-V",
    trim: "EX-L AWD",
    price: 34495,
    mileage: 4800,
    bodyStyle: "SUV",
    condition: "NEW",
    fuelType: "Hybrid",
    transmission: "CVT Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Canyon River Blue",
    interiorColor: "Gray Leather",
    mpg: "40 city / 34 hwy",
    description:
      "Brand-new CR-V Hybrid EX-L with leather, moonroof, and outstanding fuel economy. The benchmark compact SUV.",
    features: [
      "Leather Seats",
      "Sunroof / Moonroof",
      "Heated Seats",
      "Adaptive Cruise Control",
      "Blind Spot Monitor",
      "All-Wheel Drive",
    ],
  }),

  // ---- Sunbelt Motors (3) ----
  build("sunbelt-motors", {
    year: 2021,
    make: "Kia",
    model: "Sorento",
    trim: "LX",
    price: 24990,
    mileage: 37800,
    bodyStyle: "SUV",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Gravity Gray",
    interiorColor: "Black Cloth",
    mpg: "24 city / 29 hwy",
    description:
      "Three-row Sorento LX with all-wheel drive and roomy seating for the whole family. Clean and well-maintained.",
    features: [
      "Third Row Seating",
      "Backup Camera",
      "Apple CarPlay",
      "All-Wheel Drive",
    ],
  }),
  build("sunbelt-motors", {
    year: 2020,
    make: "Chevrolet",
    model: "Silverado",
    trim: "LT 4WD",
    price: 33995,
    mileage: 51200,
    bodyStyle: "Truck",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "8-Speed Automatic",
    drivetrain: "4x4",
    exteriorColor: "Black",
    interiorColor: "Jet Black",
    mpg: "16 city / 21 hwy",
    description:
      "Rugged Silverado LT crew cab with the 5.3L V8, tow package, and heated seats. Built for hauling.",
    features: [
      "Heated Seats",
      "Backup Camera",
      "Apple CarPlay",
      "Tow Package",
      "All-Wheel Drive",
    ],
  }),
  build("sunbelt-motors", {
    year: 2019,
    make: "Hyundai",
    model: "Elantra",
    trim: "SEL",
    price: 14995,
    mileage: 61400,
    bodyStyle: "Sedan",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "6-Speed Automatic",
    drivetrain: "Front-Wheel Drive",
    exteriorColor: "Symphony Silver",
    interiorColor: "Gray Cloth",
    mpg: "28 city / 37 hwy",
    description:
      "Economical Elantra SEL with a clean Carfax, Apple CarPlay, and great gas mileage. Affordable and reliable.",
    features: ["Backup Camera", "Apple CarPlay", "Bluetooth", "Cruise Control"],
  }),

  // ---- Peachtree Auto Mart (2) ----
  build("peachtree-auto-mart", {
    year: 2022,
    make: "Nissan",
    model: "Rogue",
    trim: "SV AWD",
    price: 23990,
    mileage: 32700,
    bodyStyle: "SUV",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "CVT Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Pearl White",
    interiorColor: "Charcoal Cloth",
    mpg: "26 city / 33 hwy",
    description:
      "Comfortable Rogue SV with all-wheel drive, ProPILOT Assist, and a flexible cargo system. Ideal for city and highway.",
    features: [
      "Backup Camera",
      "Apple CarPlay",
      "Adaptive Cruise Control",
      "Blind Spot Monitor",
      "All-Wheel Drive",
    ],
  }),
  build("peachtree-auto-mart", {
    year: 2018,
    make: "Toyota",
    model: "Corolla",
    trim: "LE",
    price: 13999,
    mileage: 72900,
    bodyStyle: "Sedan",
    condition: "USED",
    fuelType: "Gasoline",
    transmission: "CVT Automatic",
    drivetrain: "Front-Wheel Drive",
    exteriorColor: "Classic Silver",
    interiorColor: "Steel Gray",
    mpg: "28 city / 36 hwy",
    description:
      "Bulletproof Corolla LE with legendary reliability, backup camera, and low cost of ownership. Under $14K.",
    features: ["Backup Camera", "Bluetooth", "Cruise Control", "Keyless Entry"],
  }),

  // ---- Golden Gate Autos (2) ----
  build("golden-gate-autos", {
    year: 2023,
    make: "Tesla",
    model: "Model Y",
    trim: "Long Range AWD",
    price: 44990,
    mileage: 12300,
    bodyStyle: "Electric",
    condition: "USED",
    fuelType: "Electric",
    transmission: "Single-Speed Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Midnight Silver",
    interiorColor: "Black Premium",
    mpg: "310 mi range",
    description:
      "Low-mileage Model Y Long Range with dual-motor AWD, Autopilot, and a panoramic glass roof. Fast, spacious, and efficient.",
    features: [
      "Navigation System",
      "Backup Camera",
      "Adaptive Cruise Control",
      "Premium Sound System",
      "Heated Seats",
      "All-Wheel Drive",
    ],
  }),
  build("golden-gate-autos", {
    year: 2021,
    make: "Subaru",
    model: "Forester",
    trim: "Premium",
    price: 26495,
    mileage: 35600,
    bodyStyle: "SUV",
    condition: "CPO",
    fuelType: "Gasoline",
    transmission: "CVT Automatic",
    drivetrain: "All-Wheel Drive",
    exteriorColor: "Ice Silver",
    interiorColor: "Gray Cloth",
    mpg: "26 city / 33 hwy",
    description:
      "Certified Forester Premium with EyeSight, all-weather package, and a panoramic moonroof. Confident in any conditions.",
    features: [
      "Sunroof / Moonroof",
      "Heated Seats",
      "Apple CarPlay",
      "Adaptive Cruise Control",
      "All-Wheel Drive",
    ],
  }),
];

/* -------------------------------------------------------------------------- */
/*  Ordering: featured dealer (Bergen Car) first, then newest.                */
/* -------------------------------------------------------------------------- */

function orderVehicles(list: Vehicle[]): Vehicle[] {
  return [...list].sort((a, b) => {
    if (a.dealer.featured !== b.dealer.featured) {
      return a.dealer.featured ? -1 : 1;
    }
    return b.freshness - a.freshness;
  });
}

export const ALL_VEHICLES: Vehicle[] = orderVehicles(VEHICLES);

export function getAllVehicles(): Vehicle[] {
  return ALL_VEHICLES;
}

export function getVehicleById(id: string): Vehicle | undefined {
  return ALL_VEHICLES.find((v) => v.id === id);
}

export function getFeaturedVehicles(limit = 6): Vehicle[] {
  return ALL_VEHICLES.slice(0, limit);
}

export function getVehiclesByDealerSlug(slug: string): Vehicle[] {
  return orderVehicles(ALL_VEHICLES.filter((v) => v.dealer.slug === slug));
}

export function getSimilarVehicles(vehicle: Vehicle, limit = 3): Vehicle[] {
  const sameDealer = ALL_VEHICLES.filter(
    (v) => v.dealer.slug === vehicle.dealer.slug && v.id !== vehicle.id
  );
  const sameBody = ALL_VEHICLES.filter(
    (v) =>
      v.dealer.slug !== vehicle.dealer.slug &&
      v.bodyStyle === vehicle.bodyStyle &&
      v.id !== vehicle.id
  );
  return [...sameDealer, ...sameBody].slice(0, limit);
}

export function getDemoDealerBySlug(slug: string): VehicleDealerRef | undefined {
  return DEMO_DEALERS[slug];
}

export const TOTAL_VEHICLE_COUNT = ALL_VEHICLES.length;
