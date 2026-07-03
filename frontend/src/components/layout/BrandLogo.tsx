"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import { SITE, ROUTES } from "@/config/constants";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  iconClassName?: string;
  variant?: "default" | "dark";
}

export function BrandLogo({
  className,
  iconClassName,
  variant = "default",
}: BrandLogoProps) {
  return (
    <Link href={ROUTES.home} className={cn("group flex items-center gap-2.5", className)}>
      <motion.div
        whileHover={{ scale: 1.05, rotate: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-md shadow-primary/25",
          variant === "dark" && "shadow-black/20"
        )}
      >
        <Car className={cn("h-5 w-5 text-white", iconClassName)} aria-hidden />
      </motion.div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-bold text-lg tracking-tight",
            variant === "dark" ? "text-white" : "text-slate-900"
          )}
        >
          {SITE.name}
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-widest mt-0.5",
            variant === "dark" ? "text-slate-400" : "text-slate-500"
          )}
        >
          {SITE.region}
        </span>
      </div>
    </Link>
  );
}
