"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  category: string;
  items: FaqItem[];
}

function AccordionRow({ item, id }: { item: FaqItem; id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/70 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-base font-semibold text-primary">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180 text-primary"
          )}
        />
      </button>
      <div
        id={id}
        className={cn(
          "grid transition-all duration-200",
          open ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ groups }: { groups: FaqGroup[] }) {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.category}>
          <h2 className="mb-2 text-lg font-bold text-primary">
            {group.category}
          </h2>
          <div className="rounded-lg border border-border/70 bg-white px-5 shadow-card">
            {group.items.map((item, i) => (
              <AccordionRow
                key={item.question}
                item={item}
                id={`${group.category}-${i}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
