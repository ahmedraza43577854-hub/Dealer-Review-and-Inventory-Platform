"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HOW_IT_WORKS_STEPS, ROUTES } from "@/config/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const STEP_ICONS = [Search, Star, MapPin] as const;

export function HowItWorksPreview() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Simple process"
          title="How it works"
          description="From search to showroom in three steps. No guesswork."
          action={
            <Button variant="outline" asChild className="hidden sm:inline-flex border-primary/30">
              <Link href={ROUTES.howItWorks}>
                Full guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          }
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = STEP_ICONS[index] ?? Search;
            return (
              <motion.div
                key={item.step}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-black text-primary/15 group-hover:text-primary/25 transition-colors">
                      {item.step}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
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
