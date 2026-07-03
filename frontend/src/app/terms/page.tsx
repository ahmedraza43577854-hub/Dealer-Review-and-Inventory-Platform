import type { Metadata } from "next";
import {
  ContentPage,
  ContentSection,
  ContentProse,
} from "@/components/layout/ContentPage";
import { SITE } from "@/config/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE.name}`,
  description: `Terms of Service for ${SITE.name}.`,
};

const LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function TermsPage() {
  return (
    <ContentPage
      title="Terms of Service"
      subtitle={`Last updated: ${LAST_UPDATED}. The rules and guidelines for using ${SITE.name}.`}
      badge="Legal"
      centered
    >
      <ContentSection>
        <ContentProse wide>
          <p>
            By accessing or using {SITE.name}, you agree to these Terms of
            Service. If you do not agree, please do not use the site.
          </p>

          <h2>Use of the service</h2>
          <p>
            {SITE.name} provides a directory of car dealerships and related
            information for shoppers in {SITE.region}. You may use the site for
            personal, non-commercial purposes in accordance with these terms.
          </p>

          <h2>User content and reviews</h2>
          <p>
            When review submission is available, you are responsible for the
            accuracy and legality of content you post. You agree not to submit
            false, defamatory, harassing, or misleading reviews. We reserve the
            right to remove content that violates these terms.
          </p>

          <h2>Dealer listings</h2>
          <p>
            Dealer information is provided for informational purposes. We strive
            for accuracy but do not guarantee that every listing is complete or
            current. Dealers may contact us to request updates to their profiles.
          </p>

          <h2>Prohibited conduct</h2>
          <ul>
            <li>Scraping, crawling, or automated access without permission</li>
            <li>Attempting to disrupt or compromise the platform</li>
            <li>Impersonating another person or dealership</li>
            <li>Posting spam, malware, or unlawful material</li>
          </ul>

          <h2>Disclaimer of warranties</h2>
          <p>
            The site is provided &quot;as is&quot; without warranties of any kind.
            We do not warrant uninterrupted access, error-free operation, or
            that listings will meet your expectations.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {SITE.name} and its operators
            are not liable for indirect, incidental, or consequential damages
            arising from your use of the site or reliance on dealer information
            or reviews.
          </p>

          <h2>Changes</h2>
          <p>
            We may modify these terms at any time. Continued use after changes
            are posted constitutes acceptance of the updated terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </ContentProse>
      </ContentSection>
    </ContentPage>
  );
}
