import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";
import { ROBOTS_ALLOW, ROBOTS_DISALLOW } from "@/lib/robots";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [...ROBOTS_ALLOW],
      disallow: [...ROBOTS_DISALLOW],
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
