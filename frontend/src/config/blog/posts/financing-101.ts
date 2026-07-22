import { ROUTES } from "@/config/constants";
import type { BlogPostInput } from "../types";
import { p, h2, h3, ul, quote, faq, link } from "../utils";

export const financing101: BlogPostInput = {
  slug: "financing-101",
  title: "Financing 101: What to Know Before You Sign",
  excerpt:
    "APR, down payments, and trade-ins explained in plain English so you walk into the finance office fully prepared.",
  category: "Buying Guide",
  date: "June 3, 2026",
  author: "Latoya Jenkins",
  authorRole: "Finance Writer",
  icon: "Sedan",
  ctaLabel: "Find your next car",
  ctaHref: ROUTES.vehicles,
  query: "car loan paperwork signing contract",
  targetKeyword: "car financing tips",
  body: [
    p(
      "The finance office is where good car deals go to die, or where prepared buyers walk out smiling. Most people spend hours picking the right trim and ten minutes on the loan that actually determines what they pay. Dealers know this. That is why some lead with \"What monthly payment works for you?\" instead of \"What is the interest rate?\" Stretch a loan from sixty to seventy-two months and a payment drops enough to feel comfortable while thousands in interest quietly accumulate. Add-ons like gap insurance, paint protection, and extended warranties get folded into the same stack of papers, signed under fluorescent lights when you just want the keys."
    ),
    p(
      "Solid car financing tips start before you visit the lot. Know your credit score range, get pre-approved from a bank or credit union, and decide your down payment and maximum term in advance. Understand how trade-ins, taxes, and fees change the amount you finance, not just the price on the windshield."
    ),
    p(
      "This guide walks through APR, loan structure, and negotiation tactics in plain language so you can compare offers apples to apples. When you have financing squared away, browse ",
      link("vehicles for sale", ROUTES.vehicles),
      " with a budget you can defend, and read ",
      link("dealer reviews", ROUTES.dealers),
      " to avoid stores with a pattern of finance-office complaints."
    ),

    h2("APR and total cost: the numbers that actually matter"),
    h3("Why monthly payment is a trap"),
    p(
      "Monthly payment is an output, not an input. Change the term, the rate, the down payment, or the add-ons and the payment moves, while the car stays the same. A $400 payment at 6.9% over sixty months on a $22,000 loan costs far less interest than $400 at 8.9% over seventy-two months on a $26,000 balance with products you did not plan to buy. Always ask for the APR in writing and the total of payments over the life of the loan. If the dealer will not put both on paper before you sign, that itself tells you something."
    ),
    h3("How credit score shapes your rate"),
    p(
      "Lenders tier rates by credit score, loan-to-value ratio, and vehicle age. Scores above 740 often qualify for the best promotional rates on new cars; scores in the mid-600s may still approve but at higher APR. Check your report for errors thirty days before shopping, fixing a mistake can move you a tier. Subprime loans exist for lower scores but carry steep rates; in those cases, a cheaper used car and a shorter term beats a long loan on an overpriced vehicle every time."
    ),
    quote(
      "If you remember one car financing tip: compare APR and total cost, not just whether you can swing the monthly check."
    ),

    h2("Getting pre-approved before you shop"),
    h3("What pre-approval gives you"),
    p(
      "A pre-approval letter from your bank or credit union states how much you can borrow and at what rate, usually valid for thirty to sixty days. It turns dealer financing into a comparison instead of a default. If the dealer's captive lender beats your rate, common on new cars with subsidized programs, you can switch. If they cannot, you already have a lane. Pre-approval also clarifies your real budget before emotional test drives push you toward a trim you cannot afford."
    ),
    h3("Dealer financing vs. outside lenders"),
    p(
      "Dealers profit on financing through lender participation and rate markup within legal limits. That does not make dealer loans evil, sometimes they are genuinely competitive, especially on new models with manufacturer incentives. The mistake is accepting the first offer without comparison. Bring your pre-approval, ask the finance manager to beat it, and verify the APR matches what you were quoted verbally. Learn ",
      link("how buying works on our platform", ROUTES.howItWorks),
      " so you know when in the process financing typically enters the conversation."
    ),
    ul([
      "Apply to your credit union and one major bank, rates differ more than you expect.",
      "Get pre-approval in writing with rate, max term, and expiration date.",
      "Tell the dealer you are rate-shopping; competitive stores expect it.",
      "Avoid multiple hard pulls in a short window, rate shopping for auto loans usually counts as one inquiry within fourteen to forty-five days depending on the scoring model.",
    ]),

    h2("Down payments, terms, and negative equity"),
    h3("How much to put down"),
    p(
      "Twenty percent down on a new car and ten percent on used is a classic rule of thumb, it keeps you from owing more than the car is worth early in the loan. Zero-down deals exist, especially on new cars with incentives, but they increase risk if you need to sell or total the vehicle before equity builds. Cash down also lowers the financed amount, which can improve your rate tier. Never drain emergency savings to hit an arbitrary percentage; a smaller down payment with a manageable term beats zero cushion when life happens."
    ),
    h3("Loan length and negative equity"),
    p(
      "Sixty months is the sweet spot for many buyers, lower interest than eighty-four months, payments still reasonable. Seventy-two and eighty-four-month loans are increasingly common on pricier trucks and SUVs; they reduce payments but slow equity buildup and extend interest exposure. If you roll negative equity from a trade into a new loan, you start underwater before you leave the lot. That is survivable if you keep the car until the loan catches up, dangerous if you trade again in two years. Consider paying down old debt separately instead of folding it into the next note."
    ),

    h2("Trade-ins, taxes, and out-the-door price"),
    h3("Negotiate the car price first"),
    p(
      "Handle the trade-in as a separate conversation after you agree on the vehicle price, or better yet, get independent offers from online buyers and use the high bid as leverage. Bundling trade value with purchase price lets dealers give you a \"great trade number\" while holding firm on the sale price, you cannot see the swap. Know your trade's approximate wholesale and retail value from multiple sources. A few hundred dollars of research often returns thousands."
    ),
    h3("Out-the-door vs. advertised price"),
    p(
      "The out-the-door price includes sale price, doc fees, taxes, title, registration, and any dealer-installed accessories you accept. That is the number to compare across dealers and against your pre-approval limit. Online listings often show asking price without fees that vary by state and store. Ask for an itemized worksheet before you commit. Check our ",
      link("FAQ", ROUTES.faq),
      " for common fee questions buyers ask when closing a deal."
    ),

    h2("The finance office: add-ons and final paperwork"),
    p(
      "The F&I manager is not your enemy, but their job is to sell products and close the loan. Know what you want before you sit down."
    ),
    h3("Products you can usually skip or buy elsewhere"),
    p(
      "Extended warranties, gap insurance, tire and wheel protection, and appearance packages generate margin for the dealer. Some products have value for the right buyer, gap coverage matters if you put little down on a depreciating car, but prices are often inflated versus your insurer or credit union. Research costs ahead of time and never buy under pressure on the spot. You can often add gap through your auto insurer for less after you take delivery."
    ),
    h3("Reading the contract before you sign"),
    p(
      "Verify VIN, mileage, sale price, APR, term, payment, and total of payments. Confirm no blank spaces and that verbal promises appear in writing or are removed from the deal. If something changed from the worksheet, stop and ask why. You have the right to take your time, a reputable dealer will not rush you past the fine print. After signing, shop ",
      link("your next vehicle", ROUTES.vehicles),
      " with the confidence that you understood every line you signed this time."
    ),
    ul([
      "Decline add-ons you have not researched, you can often buy gap or warranty later for less.",
      "Match the contract APR and payment to your pre-approval benchmark.",
      "Keep copies of everything; disputes are easier with documentation.",
      "If the rate jumps at signing, walk, bait-and-switch financing is a pattern at bad stores.",
    ]),

    h2("Lease vs. buy: when each makes sense"),
    p(
      "Financing is not the only way to drive home. Leasing changes who owns the depreciation and how you exit the deal, worth understanding even if you plan to buy."
    ),
    h3("Leasing basics in one paragraph"),
    p(
      "Leasing is long-term renting, you pay for depreciation during the term plus interest (called a money factor) and fees. Monthly payments on leases are often lower than purchase loans on the same car because you are not financing the full price. At lease end you return the car, buy it for the residual, or lease something else. Mileage caps and wear charges apply; exceeding limits gets expensive fast."
    ),
    h3("Who should lease and who should buy"),
    p(
      "Leasing suits drivers who want a new car every two to three years, drive predictable miles under twelve to fifteen thousand annually, and can treat the car gently. Buying, new, used, or CPO, suits anyone who keeps vehicles long enough to spread depreciation across many years or who drives high mileage. Run both scenarios on the same model before the salesperson steers you toward whichever pays them more."
    ),
    p(
      "Whether you lease or buy, start with inventory from ",
      link("trusted dealers", ROUTES.dealers),
      " and compare finance offers against your pre-approval before you fall in love with a specific VIN."
    ),

    h2("Credit repair and timing your purchase"),
    p(
      "Your credit profile is not fixed, small changes before you apply can move you into a better rate tier. Timing matters as much as negotiating the sale price."
    ),
    h3("Small score improvements, big rate changes"),
    p(
      "Auto lenders tier rates in bands, jumping from 680 to 700 might drop your APR a full point or more. Pay down credit card balances before applying, avoid opening new credit lines during the shopping window, and dispute errors on your report. Even thirty days of cleanup can save thousands over a sixty-month note."
    ),
    h3("When to wait vs. when to pull the trigger"),
    p(
      "If your score is rising quickly and the car is not urgent, waiting one billing cycle for balances to report can help. If manufacturer incentives expire soon or the exact used car you want will not wait, finance at today's rate and ",
      link("refinance later", ROUTES.faq),
      " when your profile improves, provided savings exceed any refi fees. There is no universal right answer, only math on your timeline."
    ),
    h3("Co-signers and joint applications"),
    p(
      "A co-signer with strong credit can lower your rate, but they share legal responsibility, missed payments hurt both profiles. Some lenders prefer joint applications for household purchases. Understand the relationship before anyone signs. If a dealer pushes a co-signer immediately, verify whether your rate tier is fair on your own merit first; unnecessary co-sign arrangements sometimes mask markup."
    ),
    quote(
      "The cheapest car on the lot becomes expensive fast when the finance office writes the terms and you do not read them."
    ),

    faq([
      {
        question: "What APR is considered good for a car loan in 2026?",
        answer:
          "It depends on credit tier and whether the car is new or used. Well-qualified buyers on new cars with manufacturer incentives may see rates in the mid-single digits or lower. Used loans and lower credit scores run higher. Compare against your pre-approval and national averages for your score band, \"good\" is relative to what you qualify for.",
      },
      {
        question: "Should I finance through the dealer or my bank?",
        answer:
          "Whichever offers the lower APR and acceptable terms. Get pre-approved first, then let the dealer try to beat it. Dealer loans are convenient and sometimes subsidized on new models; credit unions often win on used cars. There is no universal winner, only the best offer for your situation.",
      },
      {
        question: "Is a longer loan term ever a good idea?",
        answer:
          "Longer terms lower payments but increase total interest and keep you underwater longer. They can make sense if you need cash flow relief and plan to keep the car until the loan is paid off, not if you trade every few years. Avoid terms beyond seventy-two months unless you have a specific reason and understand the extra cost.",
      },
      {
        question: "Can I refinance my car loan later?",
        answer:
          "Yes, if rates drop or your credit improves. Refinancing makes sense when savings exceed fees and you are not near the end of the original term. It does not fix a bad purchase price, it only adjusts the financing on what you already owe.",
      },
      {
        question: "What documents should I bring to the finance office?",
        answer:
          "Driver's license, proof of insurance, pre-approval letter, proof of income if required, and trade title or payoff information if applicable. Bring a calculator or use your phone to verify payment math against the worksheet before you sign.",
      },
    ]),

    h2("Finance with clarity, then find your car"),
    p(
      "Car financing tips only work if you use them before emotion takes over on the lot. Pre-approve, fixate on APR and out-the-door price, separate your trade-in, and treat add-ons as optional until you research them. The finance office is not a trap if you walk in with numbers you trust."
    ),
    p(
      "When your budget is set, ",
      link("search vehicles for sale", ROUTES.vehicles),
      " from dealers with transparent reputations, and keep your pre-approval in your pocket until someone earns your business with a better rate. Questions about fees or the buying process? Our ",
      link("FAQ", ROUTES.faq),
      " covers the basics; ",
      link("about us", ROUTES.about),
      " explains how we surface dealer ratings alongside listings."
    ),
    p(
      "Walk into the finance office with your numbers, your limits, and your willingness to leave if the deal changes. That posture alone separates prepared buyers from the rest."
    ),
    p(
      "Fair financing is out there, but it rarely finds buyers who never asked for the APR in writing."
    ),
    p(
      "Bring a calculator, bring your pre-approval, and bring the patience to read every line before you sign, that is the whole game."
    ),
  ],
};
