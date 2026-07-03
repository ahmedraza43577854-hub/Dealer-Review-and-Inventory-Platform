"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Building2, Map } from "lucide-react";
import { SITE } from "@/config/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";

const STATS = [
  { icon: Building2, value: "16+", label: "Listed dealerships" },
  { icon: MapPin, value: "4", label: "States covered" },
  { icon: Star, value: "Live", label: "Rating averages" },
  { icon: Map, value: SITE.region, label: "Northeast focus" },
] as const;

export function StatsBar() {
  return (
    <section className="relative z-10 -mt-12 sm:-mt-14 pb-0">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-3 shadow-premium ring-hairline sm:gap-4 lg:grid-cols-4 lg:gap-4 lg:p-4"
        >
          {STATS.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="flex items-center gap-4 rounded-xl px-4 py-4 transition-colors hover:bg-slate-50 sm:px-5 sm:py-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-brand shadow-glow-primary">
                <Icon className="h-5 w-5 text-[hsl(43,96%,62%)]" aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                  {value}
                </p>
                <p className="mt-0.5 text-xs sm:text-sm text-slate-500">{label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
