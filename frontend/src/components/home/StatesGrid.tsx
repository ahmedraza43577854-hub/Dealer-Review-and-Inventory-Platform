"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ROUTES, STATES } from "@/config/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function StatesGrid() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Regional coverage"
          title="Shop by state"
          description="Jump straight to dealerships in your area."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATES.map((state) => (
            <motion.div key={state.code} variants={staggerItem}>
              <Link
                href={`${ROUTES.dealers}?state=${state.code}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/8"
              >
                <div className="relative bg-gradient-to-br from-[hsl(222,50%,14%)] to-[hsl(218,55%,10%)] px-6 py-5">
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                    aria-hidden
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="text-2xl font-black tracking-tight text-white">
                      {state.code}
                    </span>
                    <ArrowRight className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:text-[hsl(43,96%,56%)] group-hover:translate-x-0.5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-lg font-bold text-slate-900">{state.label}</p>
                    <p className="mt-1.5 text-sm text-slate-500">
                      Browse verified dealerships
                    </p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(218,80%,35%)] transition-colors group-hover:text-[hsl(218,80%,28%)]">
                    View dealers
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
