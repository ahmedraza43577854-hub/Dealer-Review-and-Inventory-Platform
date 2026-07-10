import { Check } from "lucide-react";

export function VehicleFeatures({ features }: { features: string[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2.5 text-sm">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10 text-success">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span className="text-foreground">{feature}</span>
        </li>
      ))}
    </ul>
  );
}
