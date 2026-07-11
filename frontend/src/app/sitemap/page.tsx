import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContentPage, ContentSection } from "@/components/layout/ContentPage";
import { REGIONS, ROUTES, SITE } from "@/config/constants";
import { BRAND_PILLS, HOME_BODY_STYLES } from "@/config/vehicle";

export const metadata: Metadata = {
  title: `Sitemap | ${SITE.name}`,
  description: `Browse every section of ${SITE.name} — vehicles, dealers, and support pages.`,
};

interface SitemapGroup {
  title: string;
  links: { href: string; label: string }[];
}

const GROUPS: SitemapGroup[] = [
  {
    title: "Browse",
    links: [
      { href: ROUTES.home, label: "Home" },
      { href: ROUTES.vehicles, label: "Find Cars" },
      { href: ROUTES.dealers, label: "Dealers" },
      { href: ROUTES.writeReview, label: "Write a Review" },
    ],
  },
  {
    title: "Shop by region",
    links: REGIONS.map((r) => ({
      href: `${ROUTES.dealers}?region=${r.key}`,
      label: `${r.label} Dealers`,
    })),
  },
  {
    title: "Shop by type",
    links: HOME_BODY_STYLES.map((b) => ({
      href: `${ROUTES.vehicles}?bodyStyle=${b.value}`,
      label: b.label,
    })),
  },
  {
    title: "Shop by brand",
    links: BRAND_PILLS.map((b) => ({
      href: `${ROUTES.vehicles}?make=${encodeURIComponent(b)}`,
      label: b === "Mercedes-Benz" ? "Mercedes" : b,
    })),
  },
  {
    title: "Company",
    links: [
      { href: ROUTES.about, label: "About Us" },
      { href: ROUTES.howItWorks, label: "How It Works" },
      { href: ROUTES.forDealers, label: "For Dealers" },
      { href: ROUTES.contact, label: "Contact Us" },
    ],
  },
  {
    title: "Support & legal",
    links: [
      { href: ROUTES.faq, label: "FAQ" },
      { href: ROUTES.accessibility, label: "Accessibility" },
      { href: ROUTES.privacy, label: "Privacy Policy" },
      { href: ROUTES.terms, label: "Terms of Service" },
      { href: ROUTES.cookies, label: "Cookie Policy" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <ContentPage
      title="Sitemap"
      subtitle="Find every page on AutoSalesReviews in one place."
      badge="Navigation"
      centered
    >
      <ContentSection>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-border/70 bg-white p-5 shadow-card"
            >
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-primary">
                {group.title}
              </h2>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>
    </ContentPage>
  );
}
