import { BRAND_PILLS } from "@/config/vehicle";

type BrandName = (typeof BRAND_PILLS)[number];

/** Local brand marks under /public/brands (SVG when available, PNG otherwise). */
export const BRAND_LOGOS: Record<BrandName, string> = {
  Toyota: "/brands/toyota.svg",
  Honda: "/brands/honda.png",
  Ford: "/brands/ford.png",
  Chevrolet: "/brands/chevrolet.png",
  BMW: "/brands/bmw.svg",
  "Mercedes-Benz": "/brands/mercedes-benz.svg",
  Hyundai: "/brands/hyundai.svg",
  Nissan: "/brands/nissan.svg",
  Kia: "/brands/kia.svg",
  Subaru: "/brands/subaru.png",
};

export function brandDisplayName(brand: string): string {
  return brand === "Mercedes-Benz" ? "Mercedes" : brand;
}
