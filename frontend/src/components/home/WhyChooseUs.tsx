"use client";

import { motion } from "framer-motion";
import { Shield, Scale, MapPinned, Smartphone } from "lucide-react";
import { WHY_CHOOSE_US } from "@/config/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const ICONS = [MapPinned, Scale, Shield, Smartphone] as const;

const ICON_STYLES = [
  { bg: "bg-gradient-brand", icon: "text-white", glow: "shadow-primary/20" },
  { bg: "bg-gradient-gold", icon: "text-slate-900", glow: "shadow-accent/20" },
  { bg: "bg-gradient-teal", icon: "text-white", glow: "shadow-teal/20" },
  { bg: "bg-gradient-brand", icon: "text-white", glow: "shadow-primary/20" },
] as const;

export function WhyChooseUs() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(221,83%,96%),transparent)]"
        aria-hidden
      />
      <div className="container relative mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why us"
          title="Built for serious car buyers"
          description="Not another generic directory. Every feature serves Northeast shoppers."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICONS[index] ?? Shield;
            const style = ICON_STYLES[index % ICON_STYLES.length];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                className="group flex gap-5 rounded-2xl border-2 border-border bg-card p-7 shadow-sm transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-md ${style.bg} ${style.glow} group-hover:scale-105 transition-transform`}
                >
                  <Icon className={`h-7 w-7 ${style.icon}`} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
