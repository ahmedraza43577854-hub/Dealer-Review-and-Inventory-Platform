import { ROUTES } from "@/config/constants";
import type { BlogPostInput } from "../types";
import { p, h2, h3, ul, quote, faq, link } from "../utils";

export const understandingCarfax: BlogPostInput = {
  slug: "understanding-carfax",
  title: "Understanding a Vehicle History Report",
  excerpt:
    "Accidents, ownership, service records, and title status, learn what a history report reveals and what it can miss.",
  category: "Buying Guide",
  date: "March 25, 2026",
  author: "Kevin O'Brien",
  authorRole: "Reviews Lead",
  icon: "Sedan",
  ctaLabel: "Browse vehicles",
  ctaHref: ROUTES.vehicles,
  query: "car documents paperwork report desk",
  targetKeyword: "vehicle history report",
  body: [
    p(
      "A ",
      link("vehicle history report", ROUTES.vehicles),
      " is one of the most valuable documents in used-car shopping, and one of the most misunderstood. Services like Carfax and AutoCheck aggregate data from insurance companies, DMVs, auctions, police reports, and service facilities to build a timeline of a vehicle's life. Done right, that timeline reveals accidents, title problems, odometer discrepancies, and ownership patterns long before you sign paperwork. Done carelessly, it becomes a false sense of security that lets serious issues slip through."
    ),
    p(
      "The report is not a mechanical inspection, it will not catch a slipping transmission or a hidden oil leak. What it does well is flag salvage titles, flood damage, airbag deployments, and odometer rollbacks before you sign paperwork. This guide explains each section, common data gaps, and how to pair the report with a physical inspection and a trustworthy seller."
    ),

    h2("What a Vehicle History Report Actually Shows"),
    p(
      "Most reports organize information into predictable categories. Understanding each one helps you scan a report in minutes while knowing which details deserve deeper investigation."
    ),
    h3("Accident and damage history"),
    p(
      "Reported collisions appear with dates, severity indicators, and sometimes the area of impact. Minor parking-lot incidents may show as less severe than frame-damaging crashes. Pay attention to airbag deployment records, deployed airbags often indicate significant force even when cosmetic damage looks minor. Multiple accidents in a short period may suggest aggressive driving or recurring repair quality issues."
    ),
    h3("Title and ownership records"),
    p(
      "Title status is non-negotiable: clean, salvage, rebuilt, junk, or flood titles each carry legal and financial implications. A salvage title means an insurer declared the vehicle a total loss; rebuilt titles indicate subsequent repairs passed state inspection, but resale value and insurance options shrink dramatically. Ownership count and duration matter too, one long-term owner who maintained the car diligently is a green flag; three owners in two years warrants questions."
    ),
    h3("Service, registration, and mileage"),
    p(
      "Reported oil changes, inspections, and registration renewals create a cadence you can evaluate for consistency. Gaps in registration may indicate the car sat unused or was exported. Odometer readings at each reported event should climb steadily; any rollback or plateau is an immediate stop sign. Compare the report's last recorded mileage to the odometer on the lot, they should match within normal driving distance since the last event."
    ),
    ul([
      "Accident and damage events with severity indicators.",
      "Title brand history including salvage, rebuilt, and flood designations.",
      "Number of owners and states where the vehicle was registered.",
      "Reported maintenance and inspection records when available.",
      "Odometer readings over time to detect inconsistencies.",
      "Lemon law buybacks, recalls, and open safety campaigns.",
    ]),

    h2("Red Flags That Should Pause or End the Deal"),
    p(
      "Not every blemish on a report kills a deal, a single minor fender bender on an otherwise clean history is common and often properly repaired. Certain patterns, however, should trigger hard stops or require independent verification before you proceed."
    ),
    h3("Title problems and branded history"),
    p(
      "Salvage, rebuilt, junk, and flood titles are the most serious findings. Financing and insurance become difficult or expensive, and resale value drops sharply. Some states title wash through lenient jurisdictions, so verify the current title state against the full report timeline. If the seller did not disclose a branded title upfront, treat that as a character issue regardless of price."
    ),
    h3("Structural damage and airbag events"),
    p(
      "Frame or structural damage affects crash performance even after repair. Airbag deployment suggests significant impact force; confirm that airbags were replaced with OEM or equivalent parts, not simply reset. Ask for repair invoices and photos from the body shop that performed the work, reputable sellers provide documentation willingly."
    ),
    h3("Odometer and mileage anomalies"),
    p(
      "Inconsistent mileage readings, sudden jumps backward, or implausibly low miles for the vehicle age suggest tampering or clerical errors that need resolution. Excessive mileage is not automatically bad, highway miles on a well-maintained car can be healthier than low miles with neglected maintenance, but the numbers must make sense across the timeline."
    ),
    quote(
      "A clean history report is a green light to keep shopping, not a green light to skip the inspection. It tells you what was recorded, not everything that happened."
    ),

    h2("What History Reports Commonly Miss"),
    p(
      "Vehicle history reports depend on reported events. Unreported accidents, private repairs paid out of pocket, and damage fixed without an insurance claim may never appear. Rental fleet use, commercial delivery duty, and repeated short-trip driving also rarely show up despite affecting wear."
    ),
    h3("Unreported damage and private repairs"),
    p(
      "A fender repaired in a backyard garage for cash leaves no paper trail. Paint meter readings during inspection reveal inconsistent thickness that suggests bodywork. Panel gap misalignment, overspray on trim, and mismatched paint texture are physical clues the report cannot capture. Always pair digital history with an in-person walk-around."
    ),
    h3("Mechanical condition and deferred maintenance"),
    p(
      "A vehicle can have a spotless report and a failing transmission. Service records help only when shops report to the history provider, many independent garages do not. Listen for engine noise, check fluid condition, and ",
      link("follow a used-car inspection checklist", ROUTES.blogPost("inspect-used-car")),
      " before committing. A pre-purchase inspection by an independent mechanic remains the gold standard for uncovering hidden mechanical issues."
    ),
    h3("Regional and data-source gaps"),
    p(
      "Reporting standards vary by state. Some jurisdictions delay title updates; others omit minor incidents. Auction and fleet data may lag. Treat the report as one data point in a broader due-diligence process rather than a complete biography of the car."
    ),

    h2("How to Use a Report During Negotiation"),
    p(
      "History findings translate directly into leverage. Documented accidents, incomplete service records, and fast ownership turnover justify lower offers or requests for recent maintenance. A clean report with consistent service supports fair asking prices but does not eliminate the need to negotiate on condition and market comparables."
    ),
    h3("Questions to ask the seller"),
    ul([
      "Can you provide repair invoices for any accident listed on the report?",
      "Why did the previous owner sell after only six months?",
      "Are there service records not shown on the report from your independent mechanic?",
      "Has the vehicle ever been repainted, and if so, which panels?",
      "Are there open recalls, and will you complete them before delivery?",
    ]),
    h3("Combining report data with market research"),
    p(
      "Cross-reference the report with pricing guides for the exact trim, mileage, and condition. A rebuilt-title car priced like a clean-title equivalent is overpriced regardless of cosmetics. Use ",
      link("vehicle listings", ROUTES.vehicles),
      " to compare similar models and ",
      link("dealer ratings", ROUTES.dealers),
      " to prioritize sellers with transparent histories and strong service reputations."
    ),

    h2("Working With Dealers Who Provide Reports"),
    p(
      "Many dealerships supply a free history report on used inventory, often displayed on the window sticker or listing page. Verify that the report matches the VIN on the vehicle you are test-driving, not a sister car with a cleaner history. Ask whether the dealer performed reconditioning after acquisition and whether any events on the report were addressed in their shop."
    ),
    h3("Free reports vs. buying your own"),
    p(
      "When a seller will not provide a report, purchase one yourself using the seventeen-digit VIN before traveling to the lot. The small fee is insignificant compared to a bad purchase. For private-party sales, run the report before handing over a deposit and confirm the seller's name matches the title."
    ),
    h3("Next steps after a promising report"),
    p(
      "A strong history report earns the vehicle a spot on your shortlist, not an automatic yes. Schedule a test drive, verify recall completion, and book an independent inspection if you are serious. ",
      link("Browse vehicles", ROUTES.vehicles),
      " from dealers who publish history upfront, and walk away from any seller who resists sharing the VIN or a recent report."
    ),

    faq([
      {
        question: "Is a clean Carfax report a guarantee the car is problem-free?",
        answer:
          "No. A clean report means no reported accidents, title issues, or odometer problems appeared in the databases the service monitors. Unreported damage, private repairs, and mechanical wear do not appear. Always combine a history report with a physical inspection and, ideally, an independent mechanic's evaluation.",
      },
      {
        question: "Should I avoid any car with an accident on its history?",
        answer:
          "Not necessarily. A single minor accident with professional repairs and documentation is common in the used market. Focus on severity, structural involvement, airbag deployment, and repair quality. Multiple accidents, structural damage, or incomplete documentation are stronger reasons to walk away.",
      },
      {
        question: "What is the difference between salvage and rebuilt titles?",
        answer:
          "A salvage title means an insurer declared the vehicle a total loss, usually after significant damage or theft recovery. A rebuilt title means the car was repaired and passed a state inspection to return to the road. Rebuilt-title vehicles are legal to drive but harder to finance, insure, and resell compared to clean-title cars.",
      },
      {
        question: "Can odometer fraud show up on a vehicle history report?",
        answer:
          "Yes, when mileage readings at reported events show inconsistencies, such as a lower reading at a later date. Not all rollbacks are caught if tampering occurs between reported events. Compare the report timeline to the current odometer and look for wear inconsistent with displayed miles during inspection.",
      },
      {
        question: "Should I pay for my own report when buying from a dealer?",
        answer:
          "If the dealer provides a current report matching the VIN, that is usually sufficient. Run your own report when buying privately, when the provided report looks outdated, or when anything on the listing does not match the document. The cost is minimal compared to the purchase price.",
      },
    ]),
  ],
};
