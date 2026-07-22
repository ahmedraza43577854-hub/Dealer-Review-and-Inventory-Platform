import { ChevronDown } from "lucide-react";
import type { LocationFaqItem } from "@/config/locations/location-content";

interface LocationFaqSectionProps {
  items: LocationFaqItem[];
  title?: string;
}

export function LocationFaqSection({
  items,
  title = "Frequently Asked Questions",
}: LocationFaqSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="border-t border-border/70 bg-white py-10 lg:py-12">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title}
          </h2>
          <div className="mt-6 divide-y divide-border/70 rounded-lg border border-border/70 bg-card shadow-card">
            {items.map((item) => (
              <details key={item.question} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold text-primary marker:content-none">
                  {item.question}
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
