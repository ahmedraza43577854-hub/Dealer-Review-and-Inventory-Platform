import { PrismaClient } from "@prisma/client";
import { generateSlug } from "../src/utils/slug";

const prisma = new PrismaClient();

const reviewComments = [
  "Great experience buying my car here. Staff was friendly and helpful.",
  "Fair pricing and no pressure sales tactics. Would recommend.",
  "Service department was quick and professional.",
  "Found exactly what I was looking for. Smooth transaction.",
  "Decent selection but wait times were a bit long.",
  "Excellent customer service from start to finish.",
  "Good deals on used vehicles. Happy with my purchase.",
  "The finance team made everything easy to understand.",
  "Clean showroom and knowledgeable sales staff.",
  "Had some issues with paperwork but they resolved it quickly.",
  "Best dealership experience I've had in years.",
  "Inventory was limited but quality was top notch.",
  "Negotiated a fair price without any hassle.",
  "Test drive was easy to schedule. Very accommodating.",
  "Would definitely come back for my next vehicle.",
];

function randomRating(): number {
  return Math.floor(Math.random() * 5) + 1;
}

function randomReviews(count: number) {
  const shuffled = [...reviewComments].sort(() => Math.random() - 0.5);
  const authors = [
    "John D.",
    "Sarah M.",
    "Mike R.",
    "Lisa K.",
    "David P.",
    "Emily T.",
    "Chris W.",
    "Amanda B.",
    "Robert H.",
    "Jennifer L.",
  ];

  return Array.from({ length: count }, (_, i) => ({
    authorName: authors[i % authors.length],
    rating: randomRating(),
    comment: shuffled[i % shuffled.length],
  }));
}

const dealers = [
  {
    name: "Bergen Car",
    address: "100 Main Street",
    city: "Bergen",
    state: "NJ",
    zip: "07601",
    phone: "(201) 555-0100",
    email: "info@bergencar.com",
    website: "https://bergencar.com",
    description:
      "Bergen Car is a premier dealership serving the Bergen County area with new and pre-owned vehicles, exceptional service, and competitive financing options.",
    featured: true,
  },
  {
    name: "Hudson Auto Group",
    address: "250 River Road",
    city: "Jersey City",
    state: "NJ",
    zip: "07302",
    phone: "(201) 555-0101",
    website: "https://hudsonauto.com",
    description: "Full-service auto dealership in Jersey City.",
  },
  {
    name: "Garden State Motors",
    address: "88 Route 17",
    city: "Paramus",
    state: "NJ",
    zip: "07652",
    phone: "(201) 555-0102",
    website: "https://gardenstatemotors.com",
    description: "New and used cars in Paramus, NJ.",
  },
  {
    name: "Princeton Auto Sales",
    address: "15 Nassau Street",
    city: "Princeton",
    state: "NJ",
    zip: "08540",
    phone: "(609) 555-0103",
    website: "https://princetonauto.com",
    description: "Trusted dealership serving Princeton and Mercer County.",
  },
  {
    name: "Atlantic City Auto",
    address: "500 Boardwalk Ave",
    city: "Atlantic City",
    state: "NJ",
    zip: "08401",
    phone: "(609) 555-0104",
    website: "https://atlanticcityauto.com",
    description: "Coastal dealership with a wide selection of vehicles.",
  },
  {
    name: "Manhattan Motors",
    address: "1200 Broadway",
    city: "New York",
    state: "NY",
    zip: "10001",
    phone: "(212) 555-0200",
    website: "https://manhattanmotors.com",
    description: "Premium vehicles in the heart of Manhattan.",
  },
  {
    name: "Brooklyn Auto Exchange",
    address: "450 Atlantic Ave",
    city: "Brooklyn",
    state: "NY",
    zip: "11217",
    phone: "(718) 555-0201",
    website: "https://brooklynauto.com",
    description: "Family-owned dealership in Brooklyn since 1985.",
  },
  {
    name: "Queens Car Center",
    address: "78 Northern Blvd",
    city: "Queens",
    state: "NY",
    zip: "11354",
    phone: "(718) 555-0202",
    website: "https://queenscarcenter.com",
    description: "Your neighborhood car dealer in Queens.",
  },
  {
    name: "Buffalo Auto World",
    address: "300 Main Street",
    city: "Buffalo",
    state: "NY",
    zip: "14202",
    phone: "(716) 555-0203",
    website: "https://buffaloautoworld.com",
    description: "Western New York's trusted auto dealer.",
  },
  {
    name: "Albany Auto Plaza",
    address: "55 Central Ave",
    city: "Albany",
    state: "NY",
    zip: "12206",
    phone: "(518) 555-0204",
    website: "https://albanyautoplaza.com",
    description: "Capital region's premier auto dealership.",
  },
  {
    name: "Philadelphia Auto Hub",
    address: "900 Market Street",
    city: "Philadelphia",
    state: "PA",
    zip: "19107",
    phone: "(215) 555-0300",
    website: "https://phillyautohub.com",
    description: "City of Brotherly Love's top car dealer.",
  },
  {
    name: "Pittsburgh Motors",
    address: "200 Liberty Ave",
    city: "Pittsburgh",
    state: "PA",
    zip: "15222",
    phone: "(412) 555-0301",
    website: "https://pittsburghmotors.com",
    description: "Steel City automotive excellence.",
  },
  {
    name: "Harrisburg Auto Sales",
    address: "33 State Street",
    city: "Harrisburg",
    state: "PA",
    zip: "17101",
    phone: "(717) 555-0302",
    website: "https://harrisburgauto.com",
    description: "Serving central Pennsylvania since 1990.",
  },
  {
    name: "Allentown Car Company",
    address: "410 Hamilton Street",
    city: "Allentown",
    state: "PA",
    zip: "18101",
    phone: "(610) 555-0303",
    website: "https://allentowncar.com",
    description: "Lehigh Valley's favorite dealership.",
  },
  {
    name: "Hartford Auto Group",
    address: "150 Trumbull Street",
    city: "Hartford",
    state: "CT",
    zip: "06103",
    phone: "(860) 555-0400",
    website: "https://hartfordauto.com",
    description: "Connecticut's capital city auto leader.",
  },
  {
    name: "New Haven Motors",
    address: "220 Chapel Street",
    city: "New Haven",
    state: "CT",
    zip: "06511",
    phone: "(203) 555-0401",
    website: "https://newhavenmotors.com",
    description: "Yale town's trusted vehicle source.",
  },
];

async function main() {
  console.log("Seeding database...");

  await prisma.review.deleteMany();
  await prisma.dealer.deleteMany();

  for (const dealerData of dealers) {
    const slug = generateSlug(dealerData.name);
    const reviewCount = Math.floor(Math.random() * 3) + 3; // 3 to 5 reviews

    const dealer = await prisma.dealer.create({
      data: {
        ...dealerData,
        slug,
        featured: "featured" in dealerData ? dealerData.featured : false,
        reviews: {
          create: randomReviews(reviewCount),
        },
      },
    });

    console.log(`  Created ${dealer.name} with ${reviewCount} reviews`);
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
