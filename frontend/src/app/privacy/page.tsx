import type { Metadata } from "next";
import Link from "next/link";
import {
  ContentPage,
  ContentSection,
  ContentProse,
} from "@/components/layout/ContentPage";
import { ROUTES, SITE } from "@/config/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE.name}`,
  description: `Privacy Policy for ${SITE.name}.`,
};

const LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const SECTIONS = [
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use it" },
  { id: "share", label: "Sharing" },
  { id: "retention", label: "Data retention" },
  { id: "rights", label: "Your rights" },
  { id: "children", label: "Children's privacy" },
  { id: "changes", label: "Policy changes" },
  { id: "contact", label: "Contact" },
] as const;

export default function PrivacyPage() {
  return (
    <ContentPage
      title="Privacy Policy"
      subtitle={`Last updated: ${LAST_UPDATED}. How we collect, use, and protect your information.`}
      badge="Legal"
      centered
    >
      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-3">
            <nav
              className="lg:sticky lg:top-24 rounded-xl border bg-card p-5 shadow-sm"
              aria-label="On this page"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                On this page
              </p>
              <ul className="space-y-2">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            <ContentProse wide>
              <p>
                {SITE.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
                privacy. This policy explains what information we collect, how we
                use it, and the choices you have when you use our website and
                services.
              </p>

              <h2 id="collect">Information we collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Information you provide:</strong> name, email address,
                  review content, and other details you submit through forms.
                </li>
                <li>
                  <strong>Automatic data:</strong> IP address, browser type, device
                  information, pages visited, and referring URLs via cookies.
                </li>
                <li>
                  <strong>Dealer information:</strong> business name, address,
                  phone, website, and related listing data.
                </li>
              </ul>

              <h2 id="use">How we use your information</h2>
              <ul>
                <li>Operate and improve the {SITE.name} platform</li>
                <li>Display dealer listings, ratings, and reviews</li>
                <li>Respond to support requests and dealer inquiries</li>
                <li>Monitor usage, prevent abuse, and maintain security</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 id="share">Sharing of information</h2>
              <p>
                We do not sell your personal information. We may share data with
                service providers who help us host the site, analyze traffic, or
                send communications, subject to confidentiality agreements.
              </p>

              <h2 id="retention">Data retention</h2>
              <p>
                We retain information for as long as needed to provide our
                services, comply with legal requirements, resolve disputes, and
                enforce our agreements.
              </p>

              <h2 id="rights">Your rights</h2>
              <p>
                Depending on your location, you may have the right to access,
                correct, delete, or restrict processing of your personal data.
                Contact us at{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>

              <h2 id="children">Children&apos;s privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children.
              </p>

              <h2 id="changes">Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post
                the revised version on this page with an updated date.
              </p>

              <h2 id="contact">Contact</h2>
              <p>
                Questions? Email{" "}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or read our{" "}
                <Link href={ROUTES.terms}>Terms of Service</Link>.
              </p>
            </ContentProse>
          </div>
        </div>
      </ContentSection>
    </ContentPage>
  );
}
