import { ROUTES } from "@/config/constants";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  /** Fallback body-style icon when no image is available. */
  icon: string;
  /** In-article call-to-action. */
  ctaLabel: string;
  ctaHref: string;
  /** Pexels search query used to fetch the cover image. */
  query: string;
  body: ArticleBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "new-vs-used-vs-cpo",
    title: "New vs. Used vs. Certified Pre-Owned: Which Is Right for You?",
    excerpt:
      "Understand the real trade-offs in price, warranty, and peace of mind so you can pick the right condition for your budget.",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "July 2, 2026",
    author: "Marcus Delgado",
    authorRole: "Senior Editor",
    icon: "Sedan",
    ctaLabel: "Browse vehicles by condition",
    ctaHref: ROUTES.vehicles,
    query: "car dealership showroom new cars",
    body: [
      {
        type: "p",
        text: "One of the first decisions every car shopper faces is condition: brand new, used, or certified pre-owned (CPO). Each comes with a very different balance of price, warranty coverage, and peace of mind. Knowing where you land helps you filter listings faster and negotiate with confidence.",
      },
      { type: "h2", text: "Buying new" },
      {
        type: "p",
        text: "A new car gives you the latest safety tech, a full factory warranty, and zero prior wear. The trade-off is depreciation — a new vehicle can lose 20% or more of its value in the first year. If you keep cars for a decade and value the newest features, new can still make sense.",
      },
      { type: "h2", text: "Buying used" },
      {
        type: "p",
        text: "Used cars offer the biggest savings because someone else absorbed that first-year depreciation. The catch is variability: history, maintenance, and remaining warranty differ from car to car. Always review a vehicle history report and, when possible, get an independent inspection.",
      },
      { type: "h2", text: "Certified pre-owned" },
      {
        type: "p",
        text: "CPO sits in the middle. These are late-model used cars that passed a manufacturer inspection and come with an extended warranty. You pay a premium over a comparable used car, but you get much of the confidence of buying new.",
      },
      {
        type: "ul",
        items: [
          "Choose new if you want the latest tech and plan to keep the car long-term.",
          "Choose used to maximize savings and don't mind doing your homework.",
          "Choose CPO for a low-mileage car with warranty-backed peace of mind.",
        ],
      },
      {
        type: "quote",
        text: "The best condition is the one that matches how long you'll keep the car and how much risk you're comfortable taking.",
      },
    ],
  },
  {
    slug: "reading-combined-ratings",
    title: "How to Read a Dealer's Combined Rating Before You Visit",
    excerpt:
      "Google, Yelp, and Carfax each tell part of the story. Here's how to weigh them together to spot a trustworthy dealership.",
    category: "Dealer Insights",
    readTime: "4 min read",
    date: "June 24, 2026",
    author: "Priya Sharma",
    authorRole: "Consumer Reporter",
    icon: "Luxury",
    ctaLabel: "Compare top-rated dealers",
    ctaHref: ROUTES.dealers,
    query: "car salesman customer handshake dealership",
    body: [
      {
        type: "p",
        text: "A single star rating rarely tells the whole story. That's why AutoSalesReviews combines scores from Google, Yelp, and Carfax into one number — so you can judge a dealership at a glance without opening five tabs.",
      },
      { type: "h2", text: "What each source emphasizes" },
      {
        type: "ul",
        items: [
          "Google reviews are the largest sample and best reflect the everyday buying experience.",
          "Yelp skews toward customers who feel strongly — great for spotting service patterns.",
          "Carfax ratings focus on the dealership's vehicles and post-sale support.",
        ],
      },
      { type: "h2", text: "Look past the average" },
      {
        type: "p",
        text: "Two dealers can both average 4.2, but one might have 300 reviews and the other 15. More reviews mean the score is more reliable. Read a handful of recent comments to see whether complaints are about the cars, the finance office, or follow-up service.",
      },
      { type: "h2", text: "Red and green flags" },
      {
        type: "p",
        text: "Consistent praise for transparency and no-pressure sales is a strong green flag. Repeated mentions of surprise fees, pushy add-ons, or ignored service requests are worth taking seriously — even at a dealer with a high overall score.",
      },
    ],
  },
  {
    slug: "best-suvs-under-30k",
    title: "The Best SUVs Under $30,000 in the Northeast Right Now",
    excerpt:
      "From the RAV4 to the Tucson, these family-friendly SUVs deliver space, safety, and value without breaking the bank.",
    category: "Roundup",
    readTime: "7 min read",
    date: "June 15, 2026",
    author: "Kevin O'Brien",
    authorRole: "Reviews Lead",
    icon: "SUV",
    ctaLabel: "Shop SUVs under $30K",
    ctaHref: `${ROUTES.vehicles}?bodyStyle=SUV&priceTo=30000`,
    query: "white suv car road",
    body: [
      {
        type: "p",
        text: "Compact and midsize SUVs remain the sweet spot for Northeast buyers: enough ground clearance for winter, enough cargo room for a Costco run, and fuel economy that won't punish your commute. Here are the models that consistently deliver under $30,000.",
      },
      { type: "h2", text: "Toyota RAV4" },
      {
        type: "p",
        text: "The benchmark for a reason — available all-wheel drive, strong resale, and Toyota's reputation for reliability. Look for XLE trims with a moonroof and blind-spot monitoring.",
      },
      { type: "h2", text: "Hyundai Tucson" },
      {
        type: "p",
        text: "Bold styling, a roomy cabin, and a long warranty make the Tucson a standout value. Recent model years feel a class above their price.",
      },
      { type: "h2", text: "Honda CR-V" },
      {
        type: "p",
        text: "Spacious, efficient, and easy to live with. Hybrid versions stretch your fuel budget even further on highway trips.",
      },
      {
        type: "ul",
        items: [
          "Prioritize all-wheel drive if you drive through winters.",
          "Certified pre-owned examples often land just under $30K with a warranty.",
          "Check for active safety features — they're standard on most recent trims.",
        ],
      },
    ],
  },
  {
    slug: "financing-101",
    title: "Financing 101: What to Know Before You Sign",
    excerpt:
      "APR, down payments, and trade-ins explained in plain English so you walk into the finance office fully prepared.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "June 3, 2026",
    author: "Latoya Jenkins",
    authorRole: "Finance Writer",
    icon: "Sedan",
    ctaLabel: "Find your next car",
    ctaHref: ROUTES.vehicles,
    query: "car loan paperwork signing contract",
    body: [
      {
        type: "p",
        text: "The finance office is where deals are won or lost. A little preparation keeps you from paying for products you don't need and helps you recognize a fair offer when you see one.",
      },
      { type: "h2", text: "Know your APR, not just the payment" },
      {
        type: "p",
        text: "Dealers often lead with the monthly payment because it's easy to stretch across a longer term. Focus on the annual percentage rate (APR) and total cost instead. A lower payment over 72 months can cost far more than a slightly higher payment over 48.",
      },
      { type: "h2", text: "Get pre-approved first" },
      {
        type: "p",
        text: "A pre-approval from your bank or credit union gives you a baseline rate to beat. If the dealer can match or beat it, great — if not, you already have financing lined up.",
      },
      { type: "h2", text: "Handle your trade-in separately" },
      {
        type: "p",
        text: "Negotiate the price of the car first, then discuss your trade-in as a separate transaction. Bundling them makes it easy to lose track of where the discount actually went.",
      },
      {
        type: "ul",
        items: [
          "Bring a pre-approval so you can compare rates on the spot.",
          "Ask for the out-the-door price, including all fees.",
          "Decline add-ons you didn't research — you can often buy them later for less.",
        ],
      },
    ],
  },
  {
    slug: "electric-cars-northeast",
    title: "Electric Cars in NJ, NY, PA & CT: Incentives and Range Tips",
    excerpt:
      "Thinking of going electric? Here's what to know about charging, real-world range, and regional incentives.",
    category: "EV Guide",
    readTime: "8 min read",
    date: "May 28, 2026",
    author: "Daniel Kim",
    authorRole: "EV Correspondent",
    icon: "Electric",
    ctaLabel: "Browse electric vehicles",
    ctaHref: `${ROUTES.vehicles}?bodyStyle=Electric`,
    query: "electric car charging station",
    body: [
      {
        type: "p",
        text: "Electric vehicles have gone mainstream across the Northeast, with growing charging networks and meaningful incentives. If you're EV-curious, here's what actually matters before you buy.",
      },
      { type: "h2", text: "Real-world range" },
      {
        type: "p",
        text: "Published range figures assume mild weather. Cold Northeast winters can trim 20–30% off range temporarily. Buy enough range headroom that even a cold day comfortably covers your commute with margin to spare.",
      },
      { type: "h2", text: "Charging at home vs. on the road" },
      {
        type: "p",
        text: "Most EV owners charge overnight at home, waking up to a full battery daily. A Level 2 charger makes this painless. For road trips, plan around DC fast-charging stops — modern EVs add substantial range in 20–30 minutes.",
      },
      { type: "h2", text: "Incentives to check" },
      {
        type: "p",
        text: "Federal, state, and utility incentives can meaningfully lower the cost of going electric. Programs change often, so confirm current eligibility for the specific model and your state before you buy.",
      },
      {
        type: "ul",
        items: [
          "Aim for range that covers your worst-case winter day with margin.",
          "Install a Level 2 home charger if you have a driveway or garage.",
          "Verify current federal and state incentives for your exact model.",
        ],
      },
    ],
  },
  {
    slug: "test-drive-questions",
    title: "10 Questions to Ask on Every Test Drive",
    excerpt:
      "Make the most of your time behind the wheel with this checklist that surfaces issues before you buy.",
    category: "Checklist",
    readTime: "4 min read",
    date: "May 19, 2026",
    author: "Marcus Delgado",
    authorRole: "Senior Editor",
    icon: "Truck",
    ctaLabel: "Find a car to test drive",
    ctaHref: ROUTES.vehicles,
    query: "person driving car interior steering wheel",
    body: [
      {
        type: "p",
        text: "A test drive is your best chance to catch problems a listing won't mention. Don't just circle the block — plan a route with highway merging, tight turns, and rough pavement, and work through this checklist.",
      },
      { type: "h2", text: "What to feel for behind the wheel" },
      {
        type: "ul",
        items: [
          "Does the car pull left or right on a flat, straight road?",
          "Are the brakes smooth, or do they pulse or squeal?",
          "Any vibration through the steering wheel at highway speed?",
          "Does the transmission shift cleanly without hesitation?",
          "Are there rattles, wind noise, or warning lights?",
        ],
      },
      { type: "h2", text: "What to ask the dealer" },
      {
        type: "ul",
        items: [
          "Can I see the vehicle history and service records?",
          "Is there any remaining factory or certified warranty?",
          "Has the car had any accident or paint work?",
          "Can I take it to my own mechanic for an inspection?",
          "What's the out-the-door price with all fees included?",
        ],
      },
      {
        type: "quote",
        text: "If a seller hesitates to let you inspect the car or review its history, treat that as an answer in itself.",
      },
    ],
  },
  {
    slug: "inspect-used-car",
    title: "How to Inspect a Used Car Before You Buy",
    excerpt:
      "A step-by-step walkaround — from tire wear to fluid leaks — that helps you spot red flags a listing won't mention.",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "May 8, 2026",
    author: "Kevin O'Brien",
    authorRole: "Reviews Lead",
    icon: "SUV",
    ctaLabel: "Browse used vehicles",
    ctaHref: `${ROUTES.vehicles}?condition=USED`,
    query: "mechanic inspecting car engine",
    body: [
      {
        type: "p",
        text: "You don't need to be a mechanic to catch most warning signs on a used car. A calm, systematic walkaround in daylight tells you a lot — and gives you leverage to negotiate or walk away.",
      },
      { type: "h2", text: "Exterior and tires" },
      {
        type: "p",
        text: "Check for uneven panel gaps or mismatched paint, which can hint at past collision work. Uneven tire wear may point to alignment or suspension issues. All four tires should match and have plenty of tread.",
      },
      { type: "h2", text: "Under the hood" },
      {
        type: "p",
        text: "Look for fluid leaks, corrosion, and cleanliness. Pull the oil dipstick — the oil should be amber to brown, not milky or gritty. A well-kept engine bay usually reflects a well-kept car.",
      },
      { type: "h2", text: "Interior and electronics" },
      {
        type: "p",
        text: "Test every window, light, the AC and heat, infotainment, and the backup camera. Musty smells or water stains can signal a leak or flood history.",
      },
      {
        type: "ul",
        items: [
          "Inspect in daylight and bring a flashlight for the engine bay.",
          "Always pair your walkaround with a vehicle history report.",
          "When in doubt, pay for an independent pre-purchase inspection.",
        ],
      },
    ],
  },
  {
    slug: "trade-in-tips",
    title: "Trade-In Tips: How to Get the Most for Your Old Car",
    excerpt:
      "Timing, prep, and negotiation moves that can add hundreds — sometimes thousands — to your trade-in value.",
    category: "Money Saver",
    readTime: "5 min read",
    date: "April 30, 2026",
    author: "Latoya Jenkins",
    authorRole: "Finance Writer",
    icon: "Sedan",
    ctaLabel: "Find dealers near you",
    ctaHref: ROUTES.dealers,
    query: "car keys handover dealership",
    body: [
      {
        type: "p",
        text: "Your trade-in is real money toward your next car, yet many shoppers leave hundreds on the table. A little prep and the right approach can meaningfully raise your offer.",
      },
      { type: "h2", text: "Know your number first" },
      {
        type: "p",
        text: "Look up your car's trade-in value before you walk in. Having a realistic range keeps the conversation grounded and makes a lowball offer obvious.",
      },
      { type: "h2", text: "Clean it up and gather records" },
      {
        type: "p",
        text: "A clean, detailed car photographs and appraises better. Bring service records and both sets of keys — small signals of good ownership that support a higher offer.",
      },
      { type: "h2", text: "Negotiate it separately" },
      {
        type: "p",
        text: "Settle the price of the car you're buying first, then discuss the trade-in on its own. Get more than one offer if you can — competition works in your favor.",
      },
      {
        type: "ul",
        items: [
          "Research your trade-in value before visiting a dealer.",
          "Detail the car and gather service records and spare keys.",
          "Keep the trade-in and purchase as separate negotiations.",
        ],
      },
    ],
  },
  {
    slug: "best-family-road-trip-cars",
    title: "The Best Family Cars for Northeast Road Trips",
    excerpt:
      "Three-row space, great safety scores, and highway comfort — these are the cars families love for the long haul.",
    category: "Roundup",
    readTime: "7 min read",
    date: "April 18, 2026",
    author: "Priya Sharma",
    authorRole: "Consumer Reporter",
    icon: "Minivan",
    ctaLabel: "Shop family SUVs",
    ctaHref: `${ROUTES.vehicles}?bodyStyle=SUV`,
    query: "family road trip car scenic highway",
    body: [
      {
        type: "p",
        text: "A great family road-trip car blends space, safety, and quiet highway comfort. Whether you're headed to the shore or the mountains, these picks keep everyone happy for the long haul.",
      },
      { type: "h2", text: "Three-row SUVs" },
      {
        type: "p",
        text: "Models like the Kia Telluride and Toyota Highlander offer genuine third-row space, generous cargo room, and top safety scores — ideal for bigger families or gear-heavy trips.",
      },
      { type: "h2", text: "Right-sized crossovers" },
      {
        type: "p",
        text: "If you don't need three rows, a roomy two-row SUV like the CR-V or RAV4 delivers comfort and better fuel economy, leaving more budget for the trip itself.",
      },
      {
        type: "ul",
        items: [
          "Prioritize advanced safety features for highway peace of mind.",
          "Look for rear climate control and USB ports for passengers.",
          "Check real cargo space behind the last row, not just total volume.",
        ],
      },
    ],
  },
  {
    slug: "winter-driving-prep",
    title: "Winter Driving Prep for NJ, NY, PA & CT Drivers",
    excerpt:
      "From tires to emergency kits, get your vehicle ready for snow, ice, and cold-weather commutes across the Northeast.",
    category: "Maintenance",
    readTime: "5 min read",
    date: "April 6, 2026",
    author: "Daniel Kim",
    authorRole: "EV Correspondent",
    icon: "Truck",
    ctaLabel: "Find all-wheel-drive vehicles",
    ctaHref: ROUTES.vehicles,
    query: "car driving snow winter road",
    body: [
      {
        type: "p",
        text: "Northeast winters are hard on cars and drivers alike. A bit of preparation before the first storm keeps you safe and your vehicle reliable through the season.",
      },
      { type: "h2", text: "Tires matter most" },
      {
        type: "p",
        text: "Good tread and proper pressure do more for winter traction than any other single factor. If you regularly drive in snow, dedicated winter tires dramatically outperform all-seasons.",
      },
      { type: "h2", text: "Check the essentials" },
      {
        type: "ul",
        items: [
          "Test your battery — cold weather is when weak batteries fail.",
          "Top up winter-rated washer fluid and replace worn wipers.",
          "Confirm your heater, defroster, and lights all work.",
        ],
      },
      { type: "h2", text: "Keep an emergency kit" },
      {
        type: "p",
        text: "Stow a blanket, flashlight, jumper cables, an ice scraper, and a small shovel. If you ever get stuck, you'll be glad you did.",
      },
    ],
  },
  {
    slug: "understanding-carfax",
    title: "Understanding a Vehicle History Report",
    excerpt:
      "Accidents, ownership, service records, and title status — learn what a history report reveals and what it can miss.",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "March 25, 2026",
    author: "Kevin O'Brien",
    authorRole: "Reviews Lead",
    icon: "Sedan",
    ctaLabel: "Browse vehicles",
    ctaHref: ROUTES.vehicles,
    query: "car documents paperwork report desk",
    body: [
      {
        type: "p",
        text: "A vehicle history report is one of the most powerful free-to-review tools in used-car shopping. It won't catch everything, but it flags the big issues that should shape your decision.",
      },
      { type: "h2", text: "What it shows" },
      {
        type: "ul",
        items: [
          "Reported accidents and the severity of damage.",
          "Number of previous owners and how long each kept the car.",
          "Service and maintenance records when reported.",
          "Title status — clean, salvage, rebuilt, or flood.",
        ],
      },
      { type: "h2", text: "What it can miss" },
      {
        type: "p",
        text: "Not every accident or repair gets reported, especially minor work paid out of pocket. That's why a history report should complement — not replace — an in-person inspection and test drive.",
      },
      {
        type: "quote",
        text: "Treat a clean history report as a good sign, not a guarantee. Your own inspection still matters.",
      },
    ],
  },
  {
    slug: "cpo-explained",
    title: "Certified Pre-Owned, Explained",
    excerpt:
      "What certification actually covers, why CPO costs more, and how to tell a genuine program from marketing spin.",
    category: "Buying Guide",
    readTime: "5 min read",
    date: "March 12, 2026",
    author: "Marcus Delgado",
    authorRole: "Senior Editor",
    icon: "Luxury",
    ctaLabel: "Shop certified pre-owned",
    ctaHref: `${ROUTES.vehicles}?condition=CPO`,
    query: "luxury car showroom dealership",
    body: [
      {
        type: "p",
        text: "\"Certified pre-owned\" gets used loosely, so it pays to know what real certification includes. Done right, CPO gives you a late-model car with warranty-backed confidence.",
      },
      { type: "h2", text: "Manufacturer vs. dealer certification" },
      {
        type: "p",
        text: "A true manufacturer CPO program has strict age and mileage limits, a multi-point inspection, and a factory-backed extended warranty. Some dealers run their own \"certified\" programs that are far less comprehensive — always ask who backs the certification.",
      },
      { type: "h2", text: "What you're paying for" },
      {
        type: "p",
        text: "CPO cars cost more than comparable used cars because you're buying reduced risk: inspection, reconditioning, and warranty coverage. For many buyers that premium is worth the peace of mind.",
      },
      {
        type: "ul",
        items: [
          "Ask whether the program is manufacturer-backed or dealer-only.",
          "Get the inspection checklist and warranty terms in writing.",
          "Compare the CPO price against a similar used car plus a warranty.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return BLOG_POSTS.slice(0, limit);
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
