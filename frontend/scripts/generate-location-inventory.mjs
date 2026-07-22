/**
 * Generates location-based vehicle inventory from backend dealers + Pexels photos.
 *
 * Usage:
 *   PEXELS_API_KEY=xxx NEXT_PUBLIC_API_URL=http://localhost:4000 node scripts/generate-location-inventory.mjs
 */
import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public", "vehicles");
const INVENTORY_OUT = path.join(ROOT, "src", "lib", "vehicles", "inventory.generated.ts");
const IMAGES_OUT = path.join(ROOT, "src", "lib", "vehicles", "images.generated.ts");

const API_KEY = process.env.PEXELS_API_KEY;
const API_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000").replace(/\/$/, "");
const VEHICLES_PER_DEALER = 2;
const IMAGES_PER_VEHICLE = 2;

if (!API_KEY) {
  console.error("Missing PEXELS_API_KEY environment variable");
  process.exit(1);
}

const ACCENT = {
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

const TEMPLATES = [
  { make: "Toyota", model: "RAV4", trim: "XLE Premium AWD", bodyStyle: "SUV", condition: "CPO", fuelType: "Gasoline", transmission: "8-Speed Automatic", drivetrain: "All-Wheel Drive", mpg: "27 city / 34 hwy", basePrice: 28995 },
  { make: "Honda", model: "Accord", trim: "Sport 1.5T", bodyStyle: "Sedan", condition: "USED", fuelType: "Gasoline", transmission: "CVT Automatic", drivetrain: "Front-Wheel Drive", mpg: "29 city / 37 hwy", basePrice: 26499 },
  { make: "Ford", model: "F-150", trim: "XLT SuperCrew", bodyStyle: "Truck", condition: "USED", fuelType: "Gasoline", transmission: "10-Speed Automatic", drivetrain: "Four-Wheel Drive", mpg: "20 city / 26 hwy", basePrice: 38995 },
  { make: "Tesla", model: "Model 3", trim: "Long Range AWD", bodyStyle: "Electric", condition: "USED", fuelType: "Electric", transmission: "Single-Speed", drivetrain: "All-Wheel Drive", mpg: "134 MPGe combined", basePrice: 32995 },
  { make: "BMW", model: "X3", trim: "xDrive30i", bodyStyle: "SUV", condition: "CPO", fuelType: "Gasoline", transmission: "8-Speed Automatic", drivetrain: "All-Wheel Drive", mpg: "23 city / 29 hwy", basePrice: 36995 },
  { make: "Hyundai", model: "Tucson", trim: "SEL AWD", bodyStyle: "SUV", condition: "USED", fuelType: "Gasoline", transmission: "8-Speed Automatic", drivetrain: "All-Wheel Drive", mpg: "25 city / 32 hwy", basePrice: 24995 },
  { make: "Jeep", model: "Grand Cherokee", trim: "Limited 4x4", bodyStyle: "SUV", condition: "USED", fuelType: "Gasoline", transmission: "8-Speed Automatic", drivetrain: "Four-Wheel Drive", mpg: "19 city / 26 hwy", basePrice: 31995 },
  { make: "Chevrolet", model: "Silverado", trim: "LT Crew Cab", bodyStyle: "Truck", condition: "USED", fuelType: "Gasoline", transmission: "10-Speed Automatic", drivetrain: "Four-Wheel Drive", mpg: "17 city / 22 hwy", basePrice: 35995 },
  { make: "Nissan", model: "Rogue", trim: "SV AWD", bodyStyle: "SUV", condition: "USED", fuelType: "Gasoline", transmission: "CVT Automatic", drivetrain: "All-Wheel Drive", mpg: "28 city / 35 hwy", basePrice: 23495 },
  { make: "Subaru", model: "Outback", trim: "Premium AWD", bodyStyle: "Wagon", condition: "CPO", fuelType: "Gasoline", transmission: "CVT Automatic", drivetrain: "All-Wheel Drive", mpg: "26 city / 33 hwy", basePrice: 27995 },
  { make: "Mercedes-Benz", model: "GLC", trim: "GLC 300 4MATIC", bodyStyle: "SUV", condition: "CPO", fuelType: "Gasoline", transmission: "9-Speed Automatic", drivetrain: "All-Wheel Drive", mpg: "22 city / 29 hwy", basePrice: 39995 },
  { make: "Kia", model: "Telluride", trim: "EX AWD", bodyStyle: "SUV", condition: "USED", fuelType: "Gasoline", transmission: "8-Speed Automatic", drivetrain: "All-Wheel Drive", mpg: "20 city / 26 hwy", basePrice: 34995 },
  { make: "Toyota", model: "Camry", trim: "SE", bodyStyle: "Sedan", condition: "USED", fuelType: "Gasoline", transmission: "8-Speed Automatic", drivetrain: "Front-Wheel Drive", mpg: "28 city / 39 hwy", basePrice: 21995 },
  { make: "Honda", model: "CR-V", trim: "EX-L AWD", bodyStyle: "SUV", condition: "CPO", fuelType: "Gasoline", transmission: "CVT Automatic", drivetrain: "All-Wheel Drive", mpg: "27 city / 32 hwy", basePrice: 26995 },
  { make: "Ford", model: "Escape", trim: "SEL Hybrid AWD", bodyStyle: "SUV", condition: "USED", fuelType: "Hybrid", transmission: "CVT Automatic", drivetrain: "All-Wheel Drive", mpg: "43 city / 37 hwy", basePrice: 24495 },
];

const COLORS = [
  { ext: "Magnetic Gray", int: "Black" },
  { ext: "Pearl White", int: "Gray" },
  { ext: "Midnight Blue", int: "Black" },
  { ext: "Ruby Red", int: "Black" },
  { ext: "Silver Metallic", int: "Gray" },
];

const FEATURES = [
  "Bluetooth",
  "Backup Camera",
  "Apple CarPlay",
  "Android Auto",
  "Heated Seats",
  "Keyless Entry",
  "Cruise Control",
  "Blind Spot Monitor",
  "Lane Departure Warning",
];

function hash(input) {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

function clampRating(value) {
  return Math.min(5, Math.max(0, Math.round(value * 10) / 10));
}

function deriveRatings(average, totalReviews, seed) {
  const h = hash(seed);
  const google = clampRating(average + 0.1);
  const yelp = clampRating(average - 0.2);
  const carfax = clampRating(average + 0.3);
  const combined = clampRating((google + yelp + carfax) / 3);
  const base = Math.max(totalReviews, 40 + (h % 180));
  const googleCount = Math.round(base * 0.62);
  const yelpCount = base - googleCount;
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

function bodyQuerySuffix(bodyStyle) {
  if (bodyStyle === "Truck") return "truck";
  if (bodyStyle === "Electric") return "electric car";
  if (bodyStyle === "SUV") return "suv";
  return "car";
}

async function fetchDealers() {
  const res = await fetch(`${API_URL}/api/dealers`);
  if (!res.ok) {
    throw new Error(`Failed to fetch dealers: HTTP ${res.status}. Is the backend running on ${API_URL}?`);
  }
  return res.json();
}

async function searchPexels(query, perPage = 6) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=landscape`;
  const res = await fetch(url, { headers: { Authorization: API_KEY } });
  if (!res.ok) {
    console.warn(`  Pexels search failed for "${query}": HTTP ${res.status}`);
    return [];
  }
  const data = await res.json();
  return data.photos ?? [];
}

async function photosForTemplate(template) {
  const suffix = bodyQuerySuffix(template.bodyStyle);
  const queries = [
    `${template.make} ${template.model} ${suffix}`,
    `${template.make} ${template.model}`,
    `${template.make} ${suffix}`,
    `${suffix} vehicle`,
  ];
  for (const q of queries) {
    const photos = await searchPexels(q);
    if (photos.length >= IMAGES_PER_VEHICLE) {
      return { photos: photos.slice(0, IMAGES_PER_VEHICLE), query: q };
    }
    if (photos.length > 0) {
      return { photos, query: q };
    }
    await sleep(250);
  }
  return { photos: [], query: null };
}

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function saveWebp(buffer, dest) {
  const sharp = (await import("sharp")).default;
  await sharp(buffer)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function pickTemplates(dealerSlug, count) {
  const start = hash(dealerSlug) % TEMPLATES.length;
  const picked = [];
  for (let i = 0; i < count; i++) {
    picked.push(TEMPLATES[(start + i * 3) % TEMPLATES.length]);
  }
  return picked;
}

function buildVin(make, model, seq) {
  const base = `${make}${model}${seq}`.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const raw = `1HG${base}2024`.replace(/[IOQ]/g, "0");
  return raw.slice(0, 17).padEnd(17, "0");
}

async function main() {
  console.log(`Fetching dealers from ${API_URL}/api/dealers ...`);
  const dealers = await fetchDealers();
  console.log(`Found ${dealers.length} dealers\n`);

  await mkdir(PUBLIC_DIR, { recursive: true });

  const imageManifest = {};
  const photoCache = new Map();
  const vehicles = [];
  let vehicleSeq = 0;

  for (const dealer of dealers) {
    const templates = pickTemplates(dealer.slug, VEHICLES_PER_DEALER);
    console.log(`${dealer.city}, ${dealer.state} | ${dealer.name}`);

    for (const template of templates) {
      vehicleSeq += 1;
      const id = String(vehicleSeq);
      const cacheKey = `${template.make}|${template.model}|${template.bodyStyle}`;

      let photoPaths = [];
      if (photoCache.has(cacheKey)) {
        photoPaths = photoCache.get(cacheKey);
        console.log(`  #${id} ${template.year ?? ""} ${template.make} ${template.model} (cached images)`);
      } else {
        const { photos, query } = await photosForTemplate(template);
        if (photos.length === 0) {
          console.warn(`  #${id} ${template.make} ${template.model}: no Pexels photos`);
        } else {
          for (let i = 0; i < photos.length; i++) {
            const src = photos[i].src.large2x || photos[i].src.large || photos[i].src.original;
            const file = `${id}-${i + 1}.webp`;
            const dest = path.join(PUBLIC_DIR, file);
            try {
              const buffer = await downloadBuffer(src);
              await saveWebp(buffer, dest);
              photoPaths.push(`/vehicles/${file}`);
            } catch (e) {
              console.warn(`  ! download ${file}: ${e.message}`);
            }
            await sleep(150);
          }
          photoCache.set(cacheKey, [...photoPaths]);
          console.log(`  #${id} ${template.make} ${template.model}: ${photoPaths.length} imgs (q="${query}")`);
        }
        await sleep(300);
      }

      imageManifest[id] = photoPaths;

      const h = hash(`${dealer.slug}-${id}`);
      const color = COLORS[h % COLORS.length];
      const year = 2020 + (h % 5);
      const mileage = 8000 + (h % 62000);
      const price = template.basePrice + (h % 4000) - 2000;
      const featureStart = h % 4;

      vehicles.push({
        id,
        year,
        make: template.make,
        model: template.model,
        trim: template.trim,
        price,
        mileage,
        bodyStyle: template.bodyStyle,
        condition: template.condition,
        fuelType: template.fuelType,
        transmission: template.transmission,
        drivetrain: template.drivetrain,
        exteriorColor: color.ext,
        interiorColor: color.int,
        vin: buildVin(template.make, template.model, id),
        mpg: template.mpg,
        photoCount: Math.max(photoPaths.length, 4),
        accent: ACCENT[template.bodyStyle] ?? "#3d6187",
        freshness: 10000 - Number(id),
        description: `${year} ${template.make} ${template.model} ${template.trim} available at ${dealer.name} in ${dealer.city}, ${dealer.state}. Clean history, inspected and ready for test drive.`,
        features: FEATURES.slice(featureStart, featureStart + 5),
        dealer: {
          name: dealer.name,
          slug: dealer.slug,
          city: dealer.city,
          state: dealer.state,
          phone: dealer.phone || "(800) 555-0199",
          featured: dealer.featured,
          ratings: deriveRatings(dealer.averageRating ?? 4.2, dealer.totalReviews ?? 50, dealer.slug),
        },
      });
    }
  }

  const inventoryHeader =
    "// AUTO-GENERATED by scripts/generate-location-inventory.mjs — do not edit by hand.\n" +
    "// Inventory mapped to backend dealers by city/state.\n\n" +
    'import type { Vehicle } from "@/types/vehicle";\n\n' +
    "export const GENERATED_INVENTORY: Vehicle[] = ";

  await writeFile(
    INVENTORY_OUT,
    inventoryHeader + JSON.stringify(vehicles, null, 2) + ";\n"
  );

  const imagesHeader =
    "// AUTO-GENERATED by scripts/generate-location-inventory.mjs — do not edit by hand.\n" +
    "// Vehicle photos sourced from Pexels (https://pexels.com).\n\n";

  await writeFile(
    IMAGES_OUT,
    imagesHeader +
      "export const VEHICLE_IMAGES: Record<string, string[]> = " +
      JSON.stringify(imageManifest, null, 2) +
      ";\n"
  );

  const byState = {};
  for (const v of vehicles) {
    byState[v.dealer.state] = (byState[v.dealer.state] || 0) + 1;
  }

  console.log(`\nDone: ${vehicles.length} vehicles, ${Object.keys(imageManifest).length} image sets`);
  console.log("By state:", byState);
  console.log(`\nWrote ${path.relative(ROOT, INVENTORY_OUT)}`);
  console.log(`Wrote ${path.relative(ROOT, IMAGES_OUT)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
