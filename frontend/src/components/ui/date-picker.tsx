"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  placeholder?: string;
  /** Extra classes for the popover content (e.g. z-index inside a modal). */
  contentClassName?: string;
  /** Disable dates before today. */
  disablePast?: boolean;
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Pick a date",
  contentClassName,
  disablePast = true,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex h-11 w-full items-center gap-2 rounded-lg border border-input bg-white px-3 text-left text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20",
            !value && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          {value ? format(value, "EEE, MMM d, yyyy") : placeholder}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className={cn("w-auto p-3", contentClassName)}
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
          disabled={disablePast ? { before: today } : undefined}
          defaultMonth={value ?? today}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
