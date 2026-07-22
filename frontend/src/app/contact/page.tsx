import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircleQuestion, Phone } from "lucide-react";
import { ContentPage, ContentSection } from "@/components/layout/ContentPage";
import { ContactForm } from "@/components/pages/ContactForm";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { ROUTES, SITE } from "@/config/constants";
import { CONTACT_SEO_CONTENT } from "@/config/seo-content";
import { PAGE_SEO } from "@/config/seo";
import { buildContactPageSchema } from "@/lib/schema/builders";

export const metadata: Metadata = PAGE_SEO.contact;

const METHODS = [
  {
    icon: Mail,
    label: "Email us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    hint: "Replies within 1 business day",
  },
  {
    icon: Phone,
    label: "Call us",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\D/g, "")}`,
    hint: "Mon–Fri, 9AM–6PM ET",
  },
  {
    icon: MapPin,
    label: "Coverage area",
    value: "Nationwide",
    href: ROUTES.dealers,
    hint: "Dealerships in all 50 states",
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup data={buildContactPageSchema()} />
      <ContentPage
      title="Contact Us"
      subtitle="Have a question about a car, a dealer, or listing your dealership? Our team is here to help."
      badge="We're here to help"
      centered
    >
      <ContentSection>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {METHODS.map((m) => (
            <a
              key={m.label}
              href={m.href}
              className="group flex flex-col gap-2 rounded-lg border border-border/70 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <m.icon className="h-5 w-5" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {m.label}
              </p>
              <p className="text-base font-bold text-primary">{m.value}</p>
              <p className="text-sm text-muted-foreground">{m.hint}</p>
            </a>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
          <ContactForm />

          <aside className="space-y-4">
            <div className="rounded-lg border border-border/70 bg-white p-5 shadow-card">
              <h3 className="flex items-center gap-2 text-base font-bold text-primary">
                <Clock className="h-5 w-5" />
                Support Hours
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Mon – Friday</span>
                  <span className="font-semibold text-primary">9AM – 6PM ET</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold text-primary">10AM – 4PM ET</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-accent/40 bg-gold-light p-5 shadow-card">
              <h3 className="flex items-center gap-2 text-base font-bold text-primary">
                <MessageCircleQuestion className="h-5 w-5" />
                Looking for quick answers?
              </h3>
              <p className="mt-2 text-sm text-foreground/80">
                Many common questions are answered on our FAQ page.
              </p>
              <Link
                href={ROUTES.faq}
                className="mt-3 inline-block text-sm font-bold text-primary hover:underline"
              >
                Visit the FAQ →
              </Link>
            </div>
          </aside>
        </div>
      </ContentSection>

      <SeoContentSection content={CONTACT_SEO_CONTENT} variant="muted" />
    </ContentPage>
    </>
  );
}
