import type { ArticleBlock } from "@/config/blog";
import type { BlogPost } from "@/config/blog";
import { countArticleWords } from "@/config/blog";
import type { TargetCity } from "@/config/locations/cities-data";
import { ROUTES, SITE } from "@/config/constants";
import { getCanonicalUrl } from "@/lib/seo";
import type { DealerDetail } from "@/types/dealer";
import type { DealerRatings, Vehicle } from "@/types/vehicle";
import type { FaqItem, JsonLd } from "@/lib/schema/types";
import { SCHEMA_CONTEXT } from "@/lib/schema/types";
import { getStateLabel } from "@/lib/dealers/state-slugs";

function withContext(schema: JsonLd): JsonLd {
  return { "@context": SCHEMA_CONTEXT, ...schema };
}

/** Combines multiple schemas into one JSON-LD document using @graph. */
export function buildSchemaGraph(schemas: JsonLd[]): JsonLd {
  if (schemas.length === 0) {
    return { "@context": SCHEMA_CONTEXT };
  }
  if (schemas.length === 1) {
    return withContext(schemas[0]);
  }
  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": schemas,
  };
}

export function buildOrganizationSchema(): JsonLd {
  return {
    "@type": "Organization",
    name: SITE.name,
    url: getCanonicalUrl(ROUTES.home),
    description: SITE.description,
    logo: getCanonicalUrl("/favicon.ico"),
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: SITE.coverage,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: getCanonicalUrl(ROUTES.home),
    },
  };
}

export function buildWebSiteSchema(): JsonLd {
  return {
    "@type": "WebSite",
    name: SITE.name,
    url: getCanonicalUrl(ROUTES.home),
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: getCanonicalUrl(ROUTES.home),
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${getCanonicalUrl(ROUTES.vehicles)}?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildAutoDealerSchema(
  dealer: DealerDetail,
  ratings: DealerRatings
): JsonLd {
  return {
    "@type": ["AutoDealer", "LocalBusiness"],
    name: dealer.name,
    url: getCanonicalUrl(ROUTES.dealerProfile(dealer.slug)),
    description:
      dealer.description ??
      `${dealer.name} is a trusted car dealership in ${dealer.city}, ${dealer.state}.`,
    telephone: dealer.phone ?? undefined,
    ...(dealer.website ? { sameAs: dealer.website } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: dealer.address,
      addressLocality: dealer.city,
      addressRegion: dealer.state,
      postalCode: dealer.zip,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratings.combined,
      reviewCount: ratings.totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function parseBlogDate(date: string): string {
  const parsed = new Date(date);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().split("T")[0];
  }
  return date;
}

export function buildArticleSchema(post: BlogPost): JsonLd {
  return {
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: parseBlogDate(post.date),
    wordCount: countArticleWords(post.body),
    keywords: post.targetKeyword,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: getCanonicalUrl(ROUTES.home),
      logo: {
        "@type": "ImageObject",
        url: getCanonicalUrl("/favicon.ico"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getCanonicalUrl(ROUTES.blogPost(post.slug)),
    },
    image: getCanonicalUrl(`/blog/${post.slug}.jpg`),
    articleSection: post.category,
  };
}

/** Extracts FAQ pairs from explicit FAQ blocks in article body. */
export function extractArticleFaqs(blocks: ArticleBlock[]): FaqItem[] {
  const faqs: FaqItem[] = [];

  for (const block of blocks) {
    if (block.type === "faq") {
      faqs.push(...block.items);
    }
  }

  return faqs;
}

export function buildFaqPageSchema(faqs: FaqItem[]): JsonLd | null {
  if (faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildContactPageSchema(): JsonLd {
  return {
    "@type": "ContactPage",
    name: `Contact ${SITE.name}`,
    url: getCanonicalUrl(ROUTES.contact),
    description:
      "Contact AutoSalesReviews for help with vehicle search, dealer reviews, or dealership listings.",
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      url: getCanonicalUrl(ROUTES.home),
      email: SITE.email,
      telephone: SITE.phone,
    },
  };
}

export function buildAboutPageSchema(): JsonLd {
  return {
    "@type": "AboutPage",
    name: `About ${SITE.name}`,
    url: getCanonicalUrl(ROUTES.about),
    description:
      "Learn about AutoSalesReviews, the trusted source for real car dealer reviews and vehicle listings nationwide.",
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      url: getCanonicalUrl(ROUTES.home),
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      logo: getCanonicalUrl("/favicon.ico"),
      areaServed: SITE.coverage,
    },
  };
}

export function buildDealerListingServiceSchema(): JsonLd {
  return {
    "@type": "Service",
    name: "Dealership Listing & Review Platform",
    url: getCanonicalUrl(ROUTES.forDealers),
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: getCanonicalUrl(ROUTES.home),
    },
    serviceType: "Automotive dealer marketing and reputation management",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description:
      "List your dealership on AutoSalesReviews to reach motivated car buyers, showcase inventory, and build trust with verified customer reviews.",
  };
}

export function buildProductSchema(vehicle: Vehicle): JsonLd {
  const name = `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim}`.trim();

  return {
    "@type": "Product",
    name,
    description: vehicle.description,
    image: getCanonicalUrl(`/vehicles/${vehicle.id}-1.jpg`),
    brand: {
      "@type": "Brand",
      name: vehicle.make,
    },
    category: vehicle.bodyStyle,
    sku: vehicle.vin,
    offers: {
      "@type": "Offer",
      price: vehicle.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: getCanonicalUrl(ROUTES.vehicleDetail(vehicle.id)),
      seller: {
        "@type": "AutoDealer",
        name: vehicle.dealer.name,
        url: getCanonicalUrl(ROUTES.dealerProfile(vehicle.dealer.slug)),
      },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "mileage", value: vehicle.mileage },
      { "@type": "PropertyValue", name: "condition", value: vehicle.condition },
      { "@type": "PropertyValue", name: "fuelType", value: vehicle.fuelType },
    ],
  };
}

export function buildBlogCategorySchema(post: BlogPost): JsonLd {
  return {
    "@type": "CollectionPage",
    name: `${post.category} | ${SITE.name} Blog`,
    url: getCanonicalUrl(ROUTES.blogPost(post.slug)),
    about: {
      "@type": "Thing",
      name: post.category,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

/** City landing page LocalBusiness schema representing the market page. */
export function buildCityLocalBusinessSchema(target: TargetCity): JsonLd {
  const stateName = getStateLabel(target.stateCode);
  return {
    "@type": ["LocalBusiness", "AutoDealer"],
    name: `Car Dealerships in ${target.city}, ${stateName}`,
    description: `Directory of trusted car dealerships in ${target.city}, ${stateName} with verified reviews and inventory on ${SITE.name}.`,
    url: getCanonicalUrl(ROUTES.dealerCity(target.slug)),
    areaServed: {
      "@type": "City",
      name: target.city,
      containedInPlace: {
        "@type": "State",
        name: stateName,
      },
    },
    parentOrganization: {
      "@type": "Organization",
      name: SITE.name,
      url: getCanonicalUrl(ROUTES.home),
    },
  };
}

export function buildCityPageSchemas(
  target: TargetCity,
  faqs: FaqItem[]
): JsonLd[] {
  const stateName = getStateLabel(target.stateCode);
  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Home", path: ROUTES.home },
    { name: "Dealers", path: ROUTES.dealers },
    { name: stateName, path: ROUTES.dealerState(target.stateCode) },
    {
      name: target.city,
      path: ROUTES.dealerCity(target.slug),
    },
  ]);

  const faqSchema = buildFaqPageSchema(faqs);
  return [
    buildCityLocalBusinessSchema(target),
    breadcrumbs,
    ...(faqSchema ? [faqSchema] : []),
  ];
}

export function buildStatePageSchemas(
  stateCode: string,
  faqs: FaqItem[]
): JsonLd[] {
  const stateName = getStateLabel(stateCode);
  const breadcrumbs = buildBreadcrumbSchema([
    { name: "Home", path: ROUTES.home },
    { name: "Dealers", path: ROUTES.dealers },
    { name: stateName, path: ROUTES.dealerState(stateCode) },
  ]);
  const faqSchema = buildFaqPageSchema(faqs);
  return [breadcrumbs, ...(faqSchema ? [faqSchema] : [])];
}
