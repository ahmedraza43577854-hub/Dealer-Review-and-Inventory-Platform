import {
  Car,
  Truck,
  Zap,
  Gem,
  Caravan,
  CarFront,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  SUV: CarFront,
  Sedan: Car,
  Truck: Truck,
  Coupe: Car,
  Van: Caravan,
  Minivan: Caravan,
  Electric: Zap,
  Hatchback: Car,
  Convertible: Car,
  Wagon: Car,
  Luxury: Gem,
};

export function bodyStyleIcon(bodyStyle: string): LucideIcon {
  return MAP[bodyStyle] ?? Car;
}
