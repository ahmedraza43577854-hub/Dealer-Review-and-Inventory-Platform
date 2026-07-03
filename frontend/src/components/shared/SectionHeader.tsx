import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
  action?: ReactNode;
  className?: string;
  dark?: boolean;
  centered?: boolean;
}

export function SectionHeader({
  title,
  description,
  eyebrow,
  action,
  className,
  dark = false,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10 md:mb-12",
        centered && "sm:flex-col sm:items-center text-center",
        className
      )}
    >
      <div className={cn(centered && "max-w-2xl")}>
        {eyebrow && (
          <span
            className={cn(
              "mb-3 inline-block text-xs font-bold uppercase tracking-widest",
              dark ? "text-accent" : "text-primary"
            )}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl",
            dark ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-3 text-base sm:text-lg leading-relaxed",
              dark ? "text-slate-400" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
