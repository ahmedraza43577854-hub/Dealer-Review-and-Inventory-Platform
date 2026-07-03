import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ROUTES } from "@/config/constants";
import { cn } from "@/lib/utils";

interface ContentPageProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function ContentPage({
  title,
  subtitle,
  badge,
  children,
  className,
  centered = true,
}: ContentPageProps) {
  return (
    <div className={cn("min-h-[60vh]", className)}>
      <div className="relative overflow-hidden bg-[#070c18]">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_0%,rgba(37,99,235,0.22),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_45%_at_90%_10%,rgba(245,158,11,0.09),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_55%_at_50%_0%,black,transparent)]"
          aria-hidden
        />

        <div className="container relative mx-auto px-4 sm:px-6 py-14 sm:py-16 md:py-20">
          <nav
            className={cn(
              "mb-6 flex items-center gap-1 text-sm text-slate-500",
              centered && "justify-center"
            )}
            aria-label="Breadcrumb"
          >
            <Link href={ROUTES.home} className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span className="text-slate-300 font-medium">{title}</span>
          </nav>

          <div className={cn(centered && "mx-auto max-w-3xl text-center")}>
            {badge && (
              <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                {badge}
              </span>
            )}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col">{children}</div>
    </div>
  );
}

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "card";
}

export function ContentSection({
  children,
  className,
  variant = "default",
}: ContentSectionProps) {
  return (
    <section
      className={cn(
        "w-full py-12 sm:py-16 md:py-20",
        variant === "muted" && "bg-muted/40 border-y",
        variant === "card" && "bg-card border-y",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

interface ContentSectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export function ContentSectionHeader({
  title,
  description,
  centered = true,
}: ContentSectionHeaderProps) {
  return (
    <div className={cn("mb-10 md:mb-12", centered && "mx-auto max-w-2xl text-center")}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

interface ContentProseProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export function ContentProse({ children, className, wide }: ContentProseProps) {
  return (
    <div
      className={cn(
        "mx-auto space-y-6 text-muted-foreground leading-relaxed",
        wide ? "max-w-4xl" : "max-w-3xl",
        "[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:first:mt-0 [&_h2]:mb-3",
        "[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2",
        "[&_p]:text-base [&_p]:leading-relaxed",
        "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2",
        "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2",
        "[&_a]:text-primary [&_a]:font-medium hover:[&_a]:underline",
        "[&_strong]:text-foreground [&_strong]:font-semibold",
        className
      )}
    >
      {children}
    </div>
  );
}

interface PageCtaBandProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function PageCtaBand({ title, description, children }: PageCtaBandProps) {
  return (
    <section className="relative overflow-hidden section-dark py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[550px] rounded-full bg-accent/10 blur-[100px]"
        aria-hidden
      />
      <div className="container relative mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl text-white">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-400 leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          {children}
        </div>
      </div>
    </section>
  );
}
