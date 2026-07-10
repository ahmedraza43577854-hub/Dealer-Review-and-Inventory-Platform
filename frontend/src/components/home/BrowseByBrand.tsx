import Link from "next/link";
import { BRAND_PILLS } from "@/config/vehicle";
import { ROUTES } from "@/config/constants";

export function BrowseByBrand() {
  return (
    <section className="bg-white">
      <div className="container-page py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Browse by Brand
          </h2>
          <p className="mt-2 text-muted-foreground">
            Shop by the makes buyers search for most.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {BRAND_PILLS.map((brand) => (
            <Link
              key={brand}
              href={`${ROUTES.vehicles}?make=${encodeURIComponent(brand)}`}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold text-primary shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
            >
              {brand === "Mercedes-Benz" ? "Mercedes" : brand}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
