"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Car,
  Check,
} from "lucide-react";
import { FOOTER, ROUTES, SITE } from "@/config/constants";

const SOCIAL = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
        Stay Updated
      </h3>
      <p className="mb-3 text-sm text-white/70">
        New inventory and dealer reviews, straight to your inbox.
      </p>
      {submitted ? (
        <p className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-sm font-medium text-accent">
          <Check className="h-4 w-4" />
          Thanks — you&apos;re on the list!
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setSubmitted(true);
          }}
          className="flex flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="h-10 flex-1 rounded-lg border border-white/20 bg-white/10 px-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
          <button
            type="submit"
            className="h-10 rounded-lg bg-accent px-4 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-600"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Link href={ROUTES.home} className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                <Car className="h-5 w-5 text-primary" strokeWidth={2.25} />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                AutoSales<span className="text-accent">Reviews</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.description}
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterColumn title="Explore" links={FOOTER.explore} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Support" links={FOOTER.support} />
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <EmailSignup />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
            Serving {SITE.region}.
          </p>
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
            aria-label="Legal"
          >
            {FOOTER.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/60 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
