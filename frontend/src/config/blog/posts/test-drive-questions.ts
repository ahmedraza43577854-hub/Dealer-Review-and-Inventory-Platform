import { ROUTES } from "@/config/constants";
import type { BlogPostInput } from "../types";
import { p, h2, h3, ul, quote, faq, link } from "../utils";

export const testDriveQuestions: BlogPostInput = {
  slug: "test-drive-questions",
  title: "10 Questions to Ask on Every Test Drive",
  excerpt:
    "Use this test drive checklist to catch mechanical issues, verify history, and ask the right questions before you commit, so your time behind the wheel actually protects your purchase.",
  category: "Checklist",
  date: "May 19, 2026",
  author: "Marcus Delgado",
  authorRole: "Senior Editor",
  icon: "Truck",
  ctaLabel: "Find a car to test drive",
  ctaHref: ROUTES.vehicles,
  query: "person driving car interior steering wheel",
  targetKeyword: "test drive checklist",
  body: [
    p(
      "A test drive is the closest you will come to living with a car before you buy it, yet many shoppers treat it like a ceremonial lap around the block. That is a mistake. The listing photos look perfect, the salesperson is friendly, and the payment estimate fits your budget, but none of that tells you whether the brakes pulse at highway speed, whether the transmission shudders on uphill merges, or whether the seller will stand behind the vehicle after you sign. A structured ",
      link("test drive checklist", ROUTES.vehicles),
      " turns thirty minutes behind the wheel into real due diligence. Plan a route with city stops, a highway segment, and at least one rough pavement section. Bring a passenger to notice noises you might miss while focusing on traffic. Silence the radio. And work through the questions below out loud, not to antagonize the dealer, but to surface issues while you still have leverage to walk away, negotiate, or request repairs before delivery."
    ),
    h2("Before You Turn the Key: Pre-Drive Questions"),
    p(
      "The best test drives start in the parking lot, engine off. You are establishing facts, not impressions. Ask whether the car has a clean title, how long the dealership has owned it, and whether any reconditioning was performed after acquisition. Request the vehicle history report and service records before you drive, if the seller hesitates, that hesitation is information. Confirm what is included in the quoted price and whether the car is still available for independent inspection."
    ),
    h3("Documentation You Should Request"),
    p(
      "You want to see a recent vehicle history report, available service records, and disclosure of any accident or paint work. For certified pre-owned units, ask what the inspection covered and what remains under manufacturer warranty versus dealer warranty. Write down the VIN and verify it matches the report and the window sticker. If you are shopping multiple stores, ",
      link("compare dealer ratings", ROUTES.dealers),
      " so you prioritize locations with consistent transparency reviews, the paperwork process is often a preview of post-sale support."
    ),
    h3("Setting Expectations With the Salesperson"),
    p(
      "Tell them you plan a twenty-to-thirty-minute drive on mixed roads and that you may bring the vehicle to your own mechanic if you proceed. Watch the reaction. A confident seller accommodates reasonable requests; evasiveness is a red flag. Confirm insurance coverage during the test drive and whether a staff member accompanies you, some stores require it, which is fine as long as it does not prevent you from focusing on the car."
    ),
    h2("What to Feel and Listen for Behind the Wheel"),
    p(
      "Once you are moving, your job is sensory data collection. Start in a quiet side street before merging onto faster roads. Note steering weight, brake pedal feel, and whether the vehicle tracks straight without correction on a flat lane. Transition deliberately through stop-and-go traffic, a tight parking-lot turn, and a highway merge above sixty miles per hour if conditions allow."
    ),
    h3("Steering, Brakes, and Suspension"),
    p(
      "On a straight, level road, briefly release the wheel, only when safe, to detect pull left or right. Brakes should engage smoothly without pulsing, grinding, or pulling. Over bumps, listen for clunks that suggest worn suspension components or loose exhaust hardware. Vibration through the steering wheel at highway speed often points to tire balance, alignment, or worn driveline parts, none of which are cheap surprises you want after purchase."
    ),
    h3("Powertrain and Transmission Behavior"),
    p(
      "Accelerate firmly from a stop and again at highway speed. The engine or motor should respond without hesitation, knocking, or excessive noise. Automatic transmissions should shift cleanly; manual gearboxes should engage without grinding. In hybrids and EVs, test regen braking levels and transition between electric and gas power if applicable. Warning lights should remain off, if any illuminate, stop and ask what they mean before continuing."
    ),
    quote(
      "If a seller hesitates to let you inspect the car or review its history, treat that as an answer in itself."
    ),
    h2("Interior, Technology, and Comfort Checks"),
    p(
      "Modern buyers spend hours inside the cabin each week. Comfort and ergonomics matter as much as mechanical soundness. Adjust the seat and mirrors to your usual driving position. Confirm visibility over your shoulder and through the rear window. Operate every window, lock, mirror, and seat adjustment. Run the climate control on both cold and hot settings, weak AC or heat can signal expensive repairs."
    ),
    h3("Infotainment, Safety Features, and Noise"),
    p(
      "Pair your phone, test navigation, backup camera clarity, and parking sensors if equipped. Driver-assist features like lane keeping and adaptive cruise should activate without error messages. At highway speed, note wind noise, tire roar, and rattles from the dash or doors. Musty odors or damp carpet hint at water intrusion, pair that finding with a ",
      link("vehicle history report review", ROUTES.blogPost("understanding-carfax")),
      " before you proceed."
    ),
    h3("Cargo and Family Practicality"),
    p(
      "If you carry kids, pets, or gear, bring what you normally transport. Install a car seat, fold split seats, and load the trunk. Measure whether your lifestyle fits, a test drive that ignores daily usability is incomplete. Power liftgates, third-row access, and tow modes deserve a specific try if they influenced your shopping list."
    ),
    h2("Ten Questions to Ask Out Loud"),
    p(
      "Use these questions every time. They are not confrontational, they are the minimum bar for an informed purchase. The answers belong in your notes, not your memory."
    ),
    ul([
      "Can I see the vehicle history report and service records before we finalize anything?",
      "Has this car been in any reported accident, flood, or paint work?",
      "What warranty coverage remains, factory, certified, or dealer, and what does it exclude?",
      "May I take this vehicle to an independent mechanic for a pre-purchase inspection?",
      "What is the out-the-door price including all fees, taxes, and add-ons?",
      "Are there open recalls, and will they be completed before delivery?",
      "Why was this car traded in, and how long has it been on your lot?",
      "Can you provide a written breakdown of any reconditioning performed?",
      "What is your return or exchange policy if an issue appears shortly after purchase?",
      "Who do I contact for service follow-up if something arises post-sale?",
    ]),
    h3("How to Record Answers Without Escalating Tension"),
    p(
      "Frame questions as standard procedure: you ask them on every test drive regardless of store. Take notes on your phone. Polite consistency beats aggressive interrogation, you are gathering facts, not auditioning for a courtroom. If answers contradict the listing or history report, pause the process. You owe no explanation for needing a night to think."
    ),
    h2("After the Drive: Next Steps Before You Commit"),
    p(
      "A good drive does not end in the finance office the same hour. Sleep on it if the deal is not time-sensitive. Compare your notes against other vehicles you have driven. If the car is used, schedule a pre-purchase inspection, many independent shops offer them for a reasonable fee and catch issues no test drive reveals. Review ",
      link("how to inspect a used car", ROUTES.blogPost("inspect-used-car")),
      " for the walkaround steps that complement your drive."
    ),
    h3("When to Walk Away"),
    p(
      "Walk away if the seller refuses history documentation, if warning lights appeared, if brake or steering issues surfaced, or if the out-the-door price suddenly includes unexplained fees. Emotional momentum is the dealer's ally and your risk. The right car will still exist tomorrow; the wrong one will not fix itself after you sign. For new vehicles, compare multiple ",
      link("vehicles for sale", ROUTES.vehicles),
      ", inventory depth gives you alternatives without pressure."
    ),
    h3("Negotiation Leverage From the Test Drive"),
    p(
      "Documented issues become negotiation points or repair conditions before delivery, not anecdotes after the fact. Present findings calmly with inspection quotes when available. If the store agrees to fixes, get them in writing on the purchase agreement. A test drive checklist only protects you when you act on what it reveals."
    ),
    p(
      "Treat every test drive like a job interview where the car and the seller both need to pass. Ask the hard questions early, drive the hard roads, and refuse to rush the paperwork. When you are ready to schedule drives on models that fit your budget and lifestyle, ",
      link("search vehicles near you", ROUTES.vehicles),
      " and book appointments at dealers who earned strong combined ratings for transparent, no-pressure experiences."
    ),
    faq([
      {
        question: "How long should a test drive last?",
        answer:
          "Aim for twenty to thirty minutes on mixed roads, city, highway, and rough pavement. Short loops around the dealership miss issues that appear at speed or under braking load.",
      },
      {
        question: "Should I test drive alone or with the salesperson?",
        answer:
          "If store policy allows solo drives and insurance permits, solo focus helps you notice noises and dynamics. When accompaniment is required, keep conversation minimal so you can concentrate.",
      },
      {
        question: "Can I test drive a car before getting pre-approved for financing?",
        answer:
          "Yes. Driving and financing are separate steps. Pre-approval helps later when you negotiate out-the-door price, but it is not required to evaluate the vehicle itself.",
      },
      {
        question: "What if the dealer will not provide a history report?",
        answer:
          "Buy your own report using the VIN or walk away. Refusal to share basic history suggests the seller knows something you should discover before committing.",
      },
      {
        question: "Is a pre-purchase inspection worth it after a good test drive?",
        answer:
          "Absolutely on used vehicles. Test drives reveal drivability; inspections reveal hidden mechanical, structural, and leak issues. The small inspection fee prevents large regrets.",
      },
    ]),
  ],
};
