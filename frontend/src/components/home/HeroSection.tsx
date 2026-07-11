"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2, Sparkles } from "lucide-react";
import { DealerSearchForm } from "@/components/dealers/DealerSearchForm";
import { SITE } from "@/config/constants";

const TRUST_POINTS = [
  "Real buyer reviews",
  "Nationwide coverage",
  "Updated dealer ratings",
] as const;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#070c18]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_15%_-5%,rgba(37,99,235,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_45%_at_92%_15%,rgba(245,158,11,0.09),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 sm:px-6 pt-14 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-300"
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
              Now covering all 50 states
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
            >
              Find trusted{" "}
              <span className="bg-gradient-to-r from-blue-400 to-[hsl(38,92%,58%)] bg-clip-text text-transparent">
                dealerships
              </span>{" "}
              before you buy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {SITE.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-9 rounded-xl bg-white p-1.5 shadow-2xl shadow-black/30 ring-1 ring-white/10"
            >
              <DealerSearchForm variant="hero" />
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-7"
            >
              {TRUST_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-slate-500"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400/80" />
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="hidden lg:col-span-5 lg:block"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-px shadow-2xl shadow-black/40">
              <div className="rounded-2xl bg-slate-900/60 p-8 backdrop-blur-sm">
                <div className="flex items-end justify-between gap-4 border-b border-slate-700/60 pb-6">
                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      Platform average
                    </p>
                    <p className="mt-1 text-5xl font-bold tracking-tight text-white">
                      4.2
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex justify-end gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="mt-1.5 text-sm text-slate-500">Across all dealers</p>
                  </div>
                </div>

                <blockquote className="mt-6">
                  <p className="text-[15px] leading-relaxed text-slate-300">
                    &ldquo;Finally a site that makes it easy. Found a great
                    dealer in Bergen within minutes.&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-medium text-slate-500">
                    Verified buyer
                  </footer>
                </blockquote>

                <dl className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-slate-800/60 px-4 py-3 ring-1 ring-white/5">
                    <dt className="text-xs text-slate-500">Dealerships</dt>
                    <dd className="mt-0.5 text-xl font-bold text-white">16+</dd>
                  </div>
                  <div className="rounded-xl bg-slate-800/60 px-4 py-3 ring-1 ring-white/5">
                    <dt className="text-xs text-slate-500">States</dt>
                    <dd className="mt-0.5 text-xl font-bold text-white">4</dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
