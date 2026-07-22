import { ROUTES } from "@/config/constants";
import type { BlogPostInput } from "../types";
import { p, h2, h3, ul, quote, faq, link } from "../utils";

export const inspectUsedCar: BlogPostInput = {
  slug: "inspect-used-car",
  title: "How to Inspect a Used Car Before You Buy",
  excerpt:
    "Buying a used car? Follow this step-by-step inspection guide, exterior, under the hood, interior, and on the road, to spot red flags before you negotiate or walk away.",
  category: "Buying Guide",
  date: "May 8, 2026",
  author: "Kevin O'Brien",
  authorRole: "Reviews Lead",
  icon: "SUV",
  ctaLabel: "Browse used vehicles",
  ctaHref: `${ROUTES.vehicles}?condition=USED`,
  query: "mechanic inspecting car engine",
  targetKeyword: "buying a used car",
  body: [
    p(
      "Buying a used car is one of the smartest ways to beat new-car depreciation, if you do the homework. The listing photos are polished, the price looks fair, and the seller assures you the vehicle was \"babied.\" None of that replaces your own eyes, hands, and judgment in daylight. You do not need a mechanic's license to catch most warning signs on a used vehicle. You need a systematic walkaround, a short list of deal-breakers, and the willingness to walk when something does not add up. This guide walks through exactly what to check before you buy, from tire wear and panel gaps to fluid condition and flood hints. Pair every step with a vehicle history report and, when stakes are high, a paid pre-purchase inspection. Think of it as insurance against the expensive surprises listings never mention."
    ),
    h2("Exterior Inspection: Paint, Panels, and Tires"),
    p(
      "Start outside in good daylight, not under showroom lights at dusk. Walk slowly around the entire vehicle, crouching to sight along the doors and fenders. You are looking for inconsistent panel gaps, ripples in the metal, overspray on trim, and color mismatch between panels. Each can indicate prior collision repair. Not every repaired car is a bad buy, but undisclosed damage should change the price or your interest level."
    ),
    h3("Reading Tire Wear and Wheel Alignment"),
    p(
      "Tires tell stories. Even wear across the tread suggests normal use; feathered edges or bald spots on one side point to alignment, suspension, or steering issues that cost real money to fix. Check tread depth with a gauge or penny test, uneven depth across an axle means the car may pull or vibrate at speed. Confirm all four tires match in type and size unless the manufacturer specifies a staggered setup. Mismatched cheap tires on one corner sometimes hide a problem the seller does not want to fund."
    ),
    h3("Glass, Lights, and Underbody Glance"),
    p(
      "Inspect windshield chips and cracks, some states fail inspection on large cracks in the driver's line of sight. Test headlights, brake lights, turn signals, and fog lights. Peek beneath the car if you can: fresh undercoating may conceal rust; excessive wetness on the oil pan or transmission case suggests active leaks. Bring a small flashlight, engine bays and wheel wells hide details your phone flash misses."
    ),
    quote(
      "A calm, systematic walkaround in daylight tells you more than a polished listing ever will."
    ),
    h2("Under the Hood: Fluids, Leaks, and Maintenance Clues"),
    p(
      "Pop the hood before you drive. The engine bay does not need to look showroom-new, but it should look cared for. Fresh steam cleaning can hide leaks temporarily, so look for wetness around valve covers, the oil filter housing, coolant hoses, and the transmission. Pull the oil dipstick, oil should be amber to dark brown, not milky, metallic, or gritty. Milky residue can indicate coolant mixing with oil, a serious internal issue."
    ),
    h3("Belts, Hoses, and Battery Health"),
    p(
      "Rubber belts and hoses should be pliable without cracks or fraying. A swollen or soft radiator hose may fail soon. Check battery terminals for corrosion and the date code on the battery, an old battery in a cold climate is a winter breakdown waiting to happen. Confirm coolant level and color in the reservoir; rusty or oily coolant is a concern. If service stickers are present, photograph them for cross-check against claimed mileage."
    ),
    h3("Cold Start Behavior"),
    p(
      "Ask to start the engine from cold if possible, first start of the day is ideal. Listen for knocking, ticking that fades slowly, or belts squealing. Exhaust smoke color matters: blue hints at oil burning, white steam that persists may mean coolant entering combustion, black smoke suggests rich fuel mixture. A smooth idle after thirty seconds is what you want. When buying a used car from a ",
      link("top-rated dealer", ROUTES.dealers),
      ", ask what reconditioning was performed and request receipts for major services."
    ),
    h2("Interior Inspection: Wear, Odors, and Electronics"),
    p(
      "Inside the cabin, wear should match the odometer. A claimed twenty-thousand-mile car with a worn driver's bolster, shiny steering wheel, and faded buttons raises questions. Musty or sweet odors suggest mold or coolant leaks; heavy perfume may mask smoke or flood damage. Lift floor mats and inspect carpet for water lines, rust on seat rails, or silt in crevices, classic flood indicators."
    ),
    h3("Testing Every Switch and Screen"),
    p(
      "Operate windows, locks, mirrors, seats, sunroof, HVAC, defroster, wipers, and every driver-assist button. Infotainment should boot without constant rebooting; backup camera image should be clear. Warning lights on the dash at idle are non-starters unless explained with documentation. Bring a USB cable to test charging ports. Delayed AC cooling or weak heat can mean compressor or heater core issues, negotiate repair or price accordingly."
    ),
    h3("Safety Equipment and Recalls"),
    p(
      "Verify airbag warning lights extinguish after start. Check tire pressure monitoring behavior after a short drive. Look up open recalls by VIN on the manufacturer site, unfixed recalls should be resolved before delivery, not after. Combine your interior findings with a ",
      link("vehicle history report", ROUTES.blogPost("understanding-carfax")),
      " to catch title brands, reported accidents, and odometer flags the seller might omit."
    ),
    h2("On-Road Evaluation and Mechanical Red Flags"),
    p(
      "Static inspection only goes so far. You need road speed to expose driveline vibration, brake pulsation, transmission hesitation, and steering wander. Follow a ",
      link("structured test drive checklist", ROUTES.blogPost("test-drive-questions")),
      " on mixed roads. Brakes should stop straight without pedal pulse. Transmission shifts should be smooth without flare or slam. Clunking over bumps suggests suspension or subframe issues."
    ),
    h3("Alignment, Noise, and Highway Manners"),
    p(
      "On a flat highway lane, note whether the car tracks straight with minimal correction. Wind noise and tire roar vary by model, but new rattles and grinding are not normal. Test reverse gear, parking brake hold on a slight grade, and hill-start behavior if manual. For AWD vehicles, listen for binding on tight turns, some binding is normal in certain systems, but severe shudder warrants professional diagnosis."
    ),
    h3("When to Pay for a Pre-Purchase Inspection"),
    p(
      "If you like the car after your walkaround and drive, spend the money on an independent inspection at a shop you choose, not one the seller names. A lift inspection reveals leaks, brake pad thickness, frame rust, and hidden collision damage. The report gives you leverage to negotiate or walk. Skipping inspection to save one hundred fifty dollars on a fifteen-thousand-dollar purchase is false economy."
    ),
    ul([
      "Inspect in daylight with a flashlight; avoid rain-soaked cars that hide paint flaws.",
      "Match interior wear to claimed mileage, inconsistencies are negotiation gold or walk-away signals.",
      "Pull fluids and look for leaks before and after the test drive.",
      "Always pair your inspection with a vehicle history report and recall check.",
      "Get an independent pre-purchase inspection before you finalize buying a used car.",
    ]),
    h2("Negotiation, Pricing, and Walking Away"),
    p(
      "Your inspection notes translate directly into dollars. Present findings calmly with repair estimates when possible. A seller who dismisses documented issues is telling you how post-sale problems will be handled. Compare asking price to market comps for the same year, trim, and mileage, tools are widely available online. Factor needed tires, brakes, and deferred maintenance into your offer. If the numbers only work when you ignore red flags, the right move is to ",
      link("browse other used vehicles", `${ROUTES.vehicles}?condition=USED`),
      " instead of forcing a bad match."
    ),
    h3("Certified Pre-Owned vs. Independent Used"),
    p(
      "Certified pre-owned programs add inspection, warranty, and sometimes roadside assistance at a premium. Independent used cars can be better values if your inspection is thorough and warranty remains. Read ",
      link("new vs. used vs. CPO", ROUTES.blogPost("new-vs-used-vs-cpo")),
      " to decide which condition tier fits your risk tolerance and budget before you shop."
    ),
    h3("Paperwork Before Money Changes Hands"),
    p(
      "Verify title status, lien release if applicable, and that the seller's name matches the title. Never pay cash without a bill of sale and title transfer plan. For private-party buys, meet at a bank or DMV-aware location. For dealer purchases, get the out-the-door price in writing with all fees listed. Your inspection protects the car; careful paperwork protects the transaction."
    ),
    p(
      "Buying a used car rewards patience and punishes optimism. Inspect systematically, document everything, and let problems change the deal, not your bank account after the fact. When you are ready to shop with confidence, ",
      link("browse used vehicles", `${ROUTES.vehicles}?condition=USED`),
      " from dealers with strong combined ratings, then schedule inspections and test drives on the short list that survives your walkaround."
    ),
    faq([
      {
        question: "Can I inspect a used car in the rain?",
        answer:
          "Daylight dry conditions are best for spotting paint flaws and panel alignment. Rain hides overspray and makes underbody rust harder to assess. If weather is bad, reschedule or inspect under cover with strong lighting.",
      },
      {
        question: "How much does a pre-purchase inspection cost?",
        answer:
          "Independent shops typically charge roughly one hundred to two hundred dollars depending on region and depth. That fee is small compared with transmission, flood, or frame repairs it can prevent.",
      },
      {
        question: "Should I trust a dealer's multi-point inspection?",
        answer:
          "Use it as supplemental information, not a substitute for your own review and an independent inspection on higher-dollar purchases. Conflicts of interest exist when the seller also appraises condition.",
      },
      {
        question: "What mileage is too high when buying a used car?",
        answer:
          "Condition and maintenance history matter more than a single number. A well-maintained ninety-thousand-mile car can outlast a neglected forty-thousand-mile one. Focus on service records, inspection results, and remaining warranty.",
      },
      {
        question: "What are instant walk-away signs?",
        answer:
          "Salvage or flood title without full disclosure, milky oil, persistent warning lights, refusal to allow inspection, odometer inconsistencies, or structural rust on frame rails are strong signals to stop and move on.",
      },
    ]),
  ],
};
