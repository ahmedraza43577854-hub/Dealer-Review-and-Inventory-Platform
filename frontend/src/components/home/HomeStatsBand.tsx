import { Car, Store, MapPin, ShieldCheck } from "lucide-react";

const STATS = [
  { icon: Car, value: "10,000+", label: "Vehicles" },
  { icon: Store, value: "500+", label: "Dealers" },
  { icon: MapPin, value: "All 50 States", label: "Nationwide Coverage" },
  { icon: ShieldCheck, value: "Verified", label: "Reviews" },
];

export function HomeStatsBand() {
  return (
    <section className="border-b border-border/70 bg-white">
      <div className="container-page py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 md:justify-center"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <stat.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-extrabold leading-tight text-primary">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
