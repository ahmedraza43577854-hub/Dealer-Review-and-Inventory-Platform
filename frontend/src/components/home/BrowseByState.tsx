import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/config/constants";

const STATE_CARDS = [
  { code: "NJ", name: "New Jersey", dealers: 184 },
  { code: "NY", name: "New York", dealers: 213 },
  { code: "PA", name: "Pennsylvania", dealers: 167 },
  { code: "CT", name: "Connecticut", dealers: 92 },
];

export function BrowseByState() {
  return (
    <section className="bg-background">
      <div className="container-page py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Find Dealers by State
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore trusted dealerships across the Northeast.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATE_CARDS.map((state) => (
            <Link
              key={state.code}
              href={`${ROUTES.dealers}?state=${state.code}`}
              className="group flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-sm font-extrabold text-white">
                  {state.code}
                </span>
                <p className="mt-3 text-base font-bold text-primary">
                  {state.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {state.dealers} dealers
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
