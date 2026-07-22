"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function FooterEmailSignup() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
        Stay Updated
      </h3>
      <p className="mb-3 text-sm text-white/70">
        New inventory and dealer reviews, straight to your inbox.
      </p>
      {submitted ? (
        <p className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-sm font-medium text-accent">
          <Check className="h-4 w-4" />
          Thanks, you&apos;re on the list!
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setSubmitted(true);
          }}
          className="flex flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="h-10 flex-1 rounded-lg border border-white/20 bg-white/10 px-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
          />
          <button
            type="submit"
            className="h-10 rounded-lg bg-accent px-4 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-600"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
