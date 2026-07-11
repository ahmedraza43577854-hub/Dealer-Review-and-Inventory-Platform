"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/config/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const AVATAR_GRADIENTS = [
  "bg-gradient-brand",
  "bg-gradient-gold",
  "bg-gradient-teal",
] as const;

function initialsFor(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="Buyer stories"
          title="What car buyers are saying"
          description="Honest feedback from real people who found their dealer through us."
          centered
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="relative flex h-full flex-col rounded-2xl border-2 border-border bg-card p-7 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              <Quote className="h-8 w-8 text-primary/15" aria-hidden />

              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-3 flex" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < testimonial.rating
                        ? "h-4 w-4 fill-accent text-accent"
                        : "h-4 w-4 fill-muted text-muted"
                    }
                  />
                ))}
              </div>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]}`}
                  aria-hidden
                >
                  {initialsFor(testimonial.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
