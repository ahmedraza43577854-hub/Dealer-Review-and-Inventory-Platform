"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { FOOTER, ROUTES, SITE, STATES } from "@/config/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
] as const;

function FooterLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1 text-sm text-footer-muted transition-colors duration-200 hover:text-accent"
      >
        <span>{label}</span>
        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-footer text-footer relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(38,92%,50%) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 sm:px-6 pt-14 pb-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8"
        >
          <motion.div variants={staggerItem} className="lg:col-span-4 space-y-5">
            <BrandLogo variant="dark" />
            <p className="text-sm leading-relaxed text-footer-muted max-w-sm">
              {SITE.description} Your trusted guide to finding the best car
              dealerships in the Northeast.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-footer-muted transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {FOOTER.explore.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER.company.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem} className="lg:col-span-4 space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 text-sm text-footer-muted transition-colors hover:text-accent group"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-accent/10">
                    <Mail className="h-4 w-4 text-accent" />
                  </span>
                  <span>
                    <span className="block text-xs text-footer-muted/70 mb-0.5">Email us</span>
                    {SITE.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="flex items-start gap-3 text-sm text-footer-muted transition-colors hover:text-accent group"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 group-hover:bg-accent/10">
                    <Phone className="h-4 w-4 text-accent" />
                  </span>
                  <span>
                    <span className="block text-xs text-footer-muted/70 mb-0.5">Call us</span>
                    {SITE.phone}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-footer-muted">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="h-4 w-4 text-accent" />
                </span>
                <span>
                  <span className="block text-xs text-footer-muted/70 mb-0.5">Coverage area</span>
                  {STATES.map((s) => s.label).join(" · ")}
                </span>
              </li>
            </ul>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-medium text-white mb-1">Stay updated</p>
              <p className="text-xs text-footer-muted mb-3">
                New dealer reviews and ratings are on the way. Sign up for updates soon.
              </p>
              <Link
                href={ROUTES.dealers}
                className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
              >
                Browse dealers now
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs text-footer-muted">
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
                className="text-xs text-footer-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
