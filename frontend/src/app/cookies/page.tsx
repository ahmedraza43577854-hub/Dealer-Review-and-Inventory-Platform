import type { Metadata } from "next";
import Link from "next/link";
import {
  ContentPage,
  ContentSection,
  ContentProse,
} from "@/components/layout/ContentPage";
import { ROUTES, SITE } from "@/config/constants";
import { PAGE_SEO } from "@/config/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildWebPageSchema } from "@/lib/schema/builders";

export const metadata: Metadata = PAGE_SEO.cookies;

const LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function CookiesPage() {
  return (
    <>
      <SchemaMarkup
        data={buildWebPageSchema(
          "Cookie Policy",
          `How ${SITE.name} uses cookies and similar technologies.`,
          ROUTES.cookies
        )}
      />
      <ContentPage
      title="Cookie Policy"
      subtitle={`Last updated: ${LAST_UPDATED}. How we use cookies and similar technologies.`}
      badge="Legal"
      centered
    >
      <ContentSection>
        <ContentProse wide>
          <p>
            This Cookie Policy explains how {SITE.name} uses cookies and similar
            technologies when you visit our website.
          </p>

          <h2>What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help the site remember your preferences and understand
            how pages are used.
          </p>

          <h2>How we use cookies</h2>
          <ul>
            <li>
              <strong>Essential cookies:</strong> required for basic site
              functionality and security.
            </li>
            <li>
              <strong>Analytics cookies:</strong> help us understand traffic and
              improve the user experience when enabled.
            </li>
            <li>
              <strong>Preference cookies:</strong> remember settings such as
              filter selections during your session.
            </li>
          </ul>

          <h2>Third-party cookies</h2>
          <p>
            We may use third-party services for hosting, analytics, or embedded
            content. Those providers may set their own cookies subject to their
            privacy policies.
          </p>

          <h2>Managing cookies</h2>
          <p>
            Most browsers let you block or delete cookies through settings. Note
            that disabling essential cookies may affect how the site works.
          </p>

          <h2>Updates</h2>
          <p>
            We may update this Cookie Policy as our practices change. Check this
            page for the latest version.
          </p>

          <h2>More information</h2>
          <p>
            For details on how we handle personal data, see our{" "}
            <Link href={ROUTES.privacy}>Privacy Policy</Link>. Questions? Email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </ContentProse>
      </ContentSection>
    </ContentPage>
    </>
  );
}
