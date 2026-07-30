import type { FaqItem } from "@/lib/schema/types";
import { SITE } from "@/config/constants";
import type { Vehicle } from "@/types/vehicle";

type VehicleFaqContext = Pick<
  Vehicle,
  "year" | "make" | "model" | "condition" | "mileage" | "dealer"
>;

const CONDITION_COPY: Record<Vehicle["condition"], string> = {
  NEW: "listed as new from the dealership",
  USED: "listed as used, so ask the dealer for service history and a pre-purchase inspection",
  CPO: "listed as certified pre-owned, which typically includes an inspection and remaining or extended warranty coverage — confirm details with the dealer",
};

/**
 * Buyer FAQs shown at the bottom of every vehicle detail page.
 * Copy stays tied to real product actions (EMI calculator, Book This Car, dealer contact).
 */
export function getVehicleDetailFaqs(vehicle: VehicleFaqContext): FaqItem[] {
  const label = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  const dealerName = vehicle.dealer.name;

  return [
    {
      question: `Can I get financing through ${SITE.name}?`,
      answer: `We help you estimate payments with the Calculate Monthly EMI tool on this page. Financing itself is arranged through ${dealerName} or a lender they work with. Use Book This Car to ask about rates, terms, and current offers on the ${label}.`,
    },
    {
      question: "Is this vehicle's mileage verified?",
      answer: `The ${vehicle.mileage.toLocaleString("en-US")} miles shown for this ${label} come from the dealer's listing. Treat it as a starting point: confirm odometer reading in person, and ask ${dealerName} for a vehicle history report before you buy.`,
    },
    {
      question: "Can I get this car shipped to another state?",
      answer: `Many dealerships can arrange transport or recommend a carrier. Shipping cost and timing depend on distance and the vehicle. Tap Book This Car or call ${dealerName} in ${vehicle.dealer.city}, ${vehicle.dealer.state} to ask about delivery options for the ${label}.`,
    },
    {
      question: "What does the Condition Report cover?",
      answer: `This ${label} is ${CONDITION_COPY[vehicle.condition]}. ${SITE.name} surfaces the dealer's listed condition so you can compare inventory quickly. For a full condition picture, request inspection notes, warranty details, and any available history report directly from ${dealerName}.`,
    },
    {
      question: "Is the price negotiable?",
      answer: `The listed price is the dealer's asking price and is often negotiable depending on demand, condition, and incentives. Use Book This Car or Book a Test Drive to start a conversation with ${dealerName} about out-the-door pricing on this ${label}.`,
    },
  ];
}
