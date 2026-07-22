import { ROUTES } from "@/config/constants";
import type { BlogPostInput } from "../types";
import { p, h2, h3, ul, quote, faq, link } from "../utils";

export const readingCombinedRatings: BlogPostInput = {
  slug: "reading-combined-ratings",
  title: "How to Read a Dealer's Combined Rating Before You Visit",
  excerpt:
    "Google, Yelp, and Carfax each tell part of the story. Here's how to weigh them together to spot a trustworthy dealership.",
  category: "Dealer Insights",
  date: "June 24, 2026",
  author: "Priya Sharma",
  authorRole: "Consumer Reporter",
  icon: "Luxury",
  ctaLabel: "Compare top-rated dealers",
  ctaHref: ROUTES.dealers,
  query: "car salesman customer handshake dealership",
  targetKeyword: "dealer reviews",
  body: [
    p(
      "You found a car you like online. The price looks fair, the photos are clean, and the mileage checks out. Before you drive across town, there is one more screen worth studying: the dealer's reviews. A single star average on Google or Yelp can mislead you in both directions, a 4.8 from twelve reviews is not the same as a 4.3 from four hundred. Worse, a glowing overall score can hide recurring problems in the finance office or service department that only show up when you read the comments."
    ),
    p(
      "That is why AutoSalesReviews pulls ratings from Google, Yelp, and Carfax into one combined score. Each platform captures a different slice of the customer experience, and together they give you a fuller picture than any one source alone. Learning to read dealer reviews the right way, not just glancing at stars, but understanding sample size, recency, and patterns, saves hours of frustration and helps you walk onto the lot knowing what to expect."
    ),
    p(
      "Start on our ",
      link("dealer directory", ROUTES.dealers),
      " and treat the combined rating as your first filter, not your final answer. The sections below show what each review source emphasizes, which patterns matter, and how to build a shortlist you can trust before you ever test-drive a car."
    ),

    h2("What each review source actually measures"),
    h3("Google: volume and everyday experience"),
    p(
      "Google reviews tend to be the largest sample for most dealerships. Customers leave them after buying a car, getting service, or sometimes after a bad interaction that motivated them to vent. That volume makes Google's average more statistically stable, a dealer with 500 reviews and a 4.4 rating is probably consistently decent, while a dealer with 4.9 and eight reviews might just have a small, happy circle. Google comments often mention specific salespeople, wait times, and whether the advertised price matched what they paid. Scan for those details first."
    ),
    h3("Yelp: strong opinions and service patterns"),
    p(
      "Yelp skews toward customers who feel strongly enough to write a paragraph. That can surface service-department patterns, slow oil changes, disputed warranty work, rude front-desk staff, that a quick Google star tap never captures. Yelp also attracts buyers who research heavily before visiting, so their expectations run higher and their complaints can be sharper. A dealer with a solid Google score but mediocre Yelp reviews might be fine for a straightforward purchase but rough for long-term ownership. Read both."
    ),
    h3("Carfax: vehicle-focused feedback"),
    p(
      "Carfax dealer ratings emphasize the car itself and post-sale support tied to vehicle history. Customers often mention whether the Carfax report matched the car on the lot, how the dealer handled disclosed accidents, and whether follow-up issues got resolved. This layer matters when you are buying used and history transparency is non-negotiable. Combined with Google and Yelp, it helps answer: did this dealer stand behind the cars they sell?"
    ),

    h2("Reading the combined score without getting fooled"),
    h3("Sample size beats a perfect average"),
    p(
      "Two dealers can both show 4.2 stars. One has 320 reviews across platforms; the other has nineteen. Trust the larger sample unless you see a clear recent decline, a dealer who averaged 4.5 for three years but dropped to 3.8 in the last six months may have new management, staffing problems, or a pushy finance culture that recent buyers are flagging. Our combined rating weights multiple sources so you are not relying on a single platform's quirks, but you should still click through and read five to ten recent comments yourself."
    ),
    h3("Recency matters as much as the number"),
    p(
      "Dealerships change. Ownership turns over, sales managers rotate, and a store that earned great reviews in 2023 might pressure add-ons harder today. Sort reviews by newest first and look for themes in the last ninety days. Praise for \"no-pressure\" and \"transparent pricing\" in recent posts is a green light. Repeated mentions of \"bait and switch\" or \"hidden fees at signing\" are red flags even if the overall average stays high. Old five-star reviews do not cancel out a cluster of one-stars from last month."
    ),
    quote(
      "Stars tell you where to look. Comments tell you whether to go."
    ),

    h2("Green flags that show up in dealer reviews"),
    h3("Transparency and consistent pricing"),
    p(
      "Trustworthy dealers earn the same compliments repeatedly: the online price matched the contract, fees were explained upfront, and nobody hid the trade-in valuation until the last minute. When multiple reviewers name the same salesperson as helpful and straightforward, that is often a culture signal, not luck. You can cross-check by calling ahead with a stock number and asking for an out-the-door quote, then compare what you hear to what reviewers describe. Dealers who align with their ",
      link("FAQ on buying", ROUTES.faq),
      " promises tend to get consistent praise for honesty."
    ),
    h3("Service department follow-through"),
    p(
      "The sale is not the end of the relationship if you plan to service the car at the selling dealer, common during warranty years. Reviews that mention timely recall work, fair warranty claims, and reachable service advisors suggest the store invests in retention, not just one-time transactions. For CPO and new cars especially, a weak service reputation can erase the warranty advantage. Filter ",
      link("dealers near you", ROUTES.dealers),
      " by combined rating, then dig into service-specific comments on each platform."
    ),
    ul([
      "Multiple recent reviews praising clear, itemized pricing.",
      "Specific shout-outs to sales staff who did not push unwanted add-ons.",
      "Service visits described as fair, on-time, and communicative.",
      "Complaints answered professionally by management in public replies.",
    ]),

    h2("Red flags worth taking seriously"),
    h3("Finance office patterns"),
    p(
      "Some of the angriest dealer reviews never mention the car, they mention the F&I office. Stories about unexplained rate markups, pressure to buy gap insurance or paint protection, and contracts that differ from verbal promises show up again and again at problem stores. A high sales-floor rating paired with brutal finance reviews is a classic split personality. If you see it, get pre-approved elsewhere, read every line before signing, and be ready to walk if the numbers change."
    ),
    h3("Inventory and advertising mismatches"),
    p(
      "Reviews complaining that cars advertised online were \"already sold\" or priced lower on the website than in person suggest inventory games designed to drive foot traffic. Occasional mistakes happen; a pattern is a strategy. Similarly, watch for reviews alleging odometer discrepancies, undisclosed damage, or Carfax reports that did not match the vehicle, those cut to the core of trust on used inventory. One verified story like that is enough to shop elsewhere."
    ),
    h3("How management responds"),
    p(
      "Every dealer gets a bad review eventually. What matters is the response. Thoughtful replies that acknowledge problems and invite offline resolution show accountability. Copy-paste defensiveness or public arguments with customers tell you how disputes will go if you have one. A dealer who ignores dozens of unanswered one-star reviews is signaling that post-sale problems are your problem."
    ),

    h2("Using reviews in your visit strategy"),
    p(
      "Research only pays off when it changes what you do on the lot. Use the checklist mindset below from first phone call to final signature."
    ),
    h3("Before you leave home"),
    p(
      "Shortlist two or three dealers with strong combined ratings and read twenty comments across platforms. Note names, good and bad, and any department-specific warnings. Call to confirm the car is in stock and request a written out-the-door estimate. Bring your pre-approval letter and a printed listing. Dealers know informed buyers read reviews; showing up prepared shifts the dynamic in your favor. Learn ",
      link("how we calculate combined ratings", ROUTES.about),
      " so you understand what the number on the profile represents."
    ),
    h3("At the dealership and after"),
    p(
      "Reference nothing confrontational, just know what you are watching for. If the experience matches the worst patterns you read, leave. If it exceeds expectations, consider leaving a detailed review yourself. Specific, factual write-ups help the next shopper more than a bare five-star tap. You can also ",
      link("submit your own review", ROUTES.writeReview),
      " on our platform after your purchase to keep the community accurate."
    ),
    p(
      "Once you have picked a dealer you trust, browse their ",
      link("vehicles for sale", ROUTES.vehicles),
      " and schedule a test drive with confidence that the reputation you researched matches the store you are visiting."
    ),

    h2("Rating myths that steer shoppers wrong"),
    p(
      "Before you dive into comments, clear a few misconceptions that send buyers to the wrong lots, or keep them away from good ones."
    ),
    h3("Myth: one bad review means walk away"),
    p(
      "Every dealership serves someone who had a terrible day, unreasonable expectations, a car that was genuinely misrepresented, or a personality clash with staff. One detailed one-star from three years ago is data; fifty one-stars mentioning the same fee tactic is a pattern. Judge trends, not outliers. Read whether the dealer responded and whether similar complaints stopped after a management change."
    ),
    h3("Myth: perfect scores are always better"),
    p(
      "A 5.0 with eight reviews may reflect a small sample or selective solicitation of happy customers. Some stores ask only satisfied buyers to post, which skews upward. A 4.4 with four hundred reviews often reflects real-world consistency, most visits went well, some did not, and the average landed in a believable middle. Perfection on tiny volume deserves skepticism, not automatic trust."
    ),
    h3("Myth: online ratings replace your own judgment"),
    p(
      "Reviews narrow the field; they do not replace inspecting the car, verifying the history report, or trusting your gut when the lot feels off. Combined ratings are a filter, not a guarantee. Use them to pick where to spend your Saturday, then run the same due diligence you would anywhere else."
    ),

    h2("Building your personal shortlist"),
    p(
      "Research is only useful if it ends in a manageable list of stores worth visiting. Use the steps below to turn ratings into a plan."
    ),
    h3("Compare three dealers minimum"),
    p(
      "Never visit just one store because it had the only listing in your color. Shortlist three dealers within driving distance with strong combined ratings and overlapping inventory in your price range. Call each for an out-the-door quote on the same day, market conditions and manager specials change weekly. The dealer who is transparent on the phone often matches that behavior in person."
    ),
    h3("Weight service if you plan to return"),
    p(
      "Buyers who service elsewhere can ignore service-department Yelp threads, but if you want free oil changes during warranty or recall work handled locally, service reviews matter as much as sales praise. A great purchase followed by three months of ignored warranty claims erases the goodwill fast. Factor your five-year plan into which reviews you read most carefully."
    ),
    p(
      "If you are unsure whether a dealer's service department is worth your loyalty, ask about first-service appointments and warranty claim turnaround before you buy, the answer tells you a lot."
    ),
    ul([
      "Save screenshots of listings and quotes in case terms change at arrival.",
      "Note salesperson names from positive reviews and ask for them when booking.",
      "Cross-check the dealer's combined rating on our site with raw Google and Yelp pages.",
      "Leave your own detailed review after purchase to help the next shopper.",
    ]),

    faq([
      {
        question: "Is a 4.0 combined rating good enough to visit?",
        answer:
          "It can be, depending on volume and recent trends. A 4.0 with 400 reviews and steady recent praise is often safer than a 4.7 with fifteen reviews. Read the last few months of comments before deciding.",
      },
      {
        question: "Why would Google and Yelp scores differ for the same dealer?",
        answer:
          "Each platform attracts different customers and emphasizes different experiences. Google captures broad foot traffic; Yelp often over-represents service visits and detail-oriented buyers. Large gaps between platforms warrant reading both comment sections.",
      },
      {
        question: "Should I avoid a dealer with a few angry one-star reviews?",
        answer:
          "Not automatically, look for patterns, not outliers. A single one-star from someone upset about trade-in value differs from twenty one-stars mentioning the same hidden fee. Management responses also help you judge whether issues get addressed.",
      },
      {
        question: "Can dealers fake or filter reviews?",
        answer:
          "Platforms have policies against fake reviews, and patterns like dozens of five-stars posted the same week are suspicious. Cross-referencing Google, Yelp, and Carfax makes gaming all three harder. Still rely on detailed comments, not stars alone.",
      },
      {
        question: "Do combined ratings include vehicle quality or just the dealer?",
        answer:
          "They reflect the dealership experience, sales, finance, service, and how the business treats customers. Vehicle condition still requires your own inspection, history report, and test drive. Use reviews to pick where to shop, not to skip due diligence on the car.",
      },
    ]),

    h2("Shop smarter with reviews on your side"),
    p(
      "Dealer reviews are most powerful when you treat them as a map, not a verdict. Combined ratings get you to the right neighborhoods; comments get you to the right doorstep. Cross-check sources, favor recent detailed feedback, and walk away when patterns warn you off."
    ),
    p(
      "When you are ready to compare stores with confidence, ",
      link("explore top-rated dealers", ROUTES.dealers),
      ". After your visit, ",
      link("share your experience", ROUTES.writeReview),
      " so the next shopper benefits from what you learned, good or bad."
    ),
    p(
      "Dealer reviews work best as a community resource. The research you do today, and the review you leave tomorrow, makes the market more transparent for everyone."
    ),
    p(
      "Trust the patterns, verify with your own visit, and shop stores that treat transparency as a habit, not a marketing line."
    ),
  ],
};
