"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/constants";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden section-dark py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" aria-hidden />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-accent/10 blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 7, repeat: Infinity }}
        aria-hidden
      />

      <div className="container relative mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            Get started
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Ready to find your next dealer?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400 leading-relaxed">
            Search listings across four states, compare ratings, and visit the
            lot with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-12 px-8 text-base font-bold bg-gradient-gold text-slate-900 hover:opacity-90 shadow-xl shadow-accent/20"
            >
              <Link href={ROUTES.dealers}>
                Browse all dealers
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 px-8 text-base border-white/25 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href={ROUTES.writeReview}>Share your experience</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
