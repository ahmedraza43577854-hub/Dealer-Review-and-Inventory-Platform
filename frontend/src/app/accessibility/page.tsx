import type { Metadata } from "next";
import {
  ContentPage,
  ContentSection,
  ContentProse,
} from "@/components/layout/ContentPage";
import { ROUTES, SITE } from "@/config/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Accessibility | ${SITE.name}`,
  description: `Our commitment to making ${SITE.name} accessible to everyone.`,
};

export default function AccessibilityPage() {
  return (
    <ContentPage
      title="Accessibility Statement"
      subtitle={`${SITE.name} is committed to making car shopping accessible to everyone.`}
      badge="Our commitment"
      centered
    >
      <ContentSection>
        <ContentProse wide>
          <p>
            {SITE.name} strives to ensure that our website is accessible to
            people of all abilities, including those who rely on assistive
            technologies such as screen readers, keyboard navigation, and screen
            magnification.
          </p>

          <h2>Standards we follow</h2>
          <p>
            We aim to conform to the Web Content Accessibility Guidelines (WCAG)
            2.1 Level AA. These guidelines help make web content more accessible
            to people with visual, auditory, motor, and cognitive disabilities.
          </p>

          <h2>What we do</h2>
          <ul>
            <li>Provide descriptive labels for interactive elements and images</li>
            <li>Support full keyboard navigation across pages and menus</li>
            <li>Maintain sufficient color contrast for text and controls</li>
            <li>Use semantic HTML and ARIA attributes where appropriate</li>
            <li>Design layouts that adapt to mobile, tablet, and desktop screens</li>
          </ul>

          <h2>Ongoing effort</h2>
          <p>
            Accessibility is an ongoing effort. We regularly review our site and
            work to address issues as our platform grows and new features are
            added.
          </p>

          <h2>Need help or found an issue?</h2>
          <p>
            If you encounter an accessibility barrier or need content in an
            alternative format, please let us know. Email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or use our{" "}
            <Link href={ROUTES.contact}>Contact page</Link>, and we will do our
            best to help.
          </p>
        </ContentProse>
      </ContentSection>
    </ContentPage>
  );
}
