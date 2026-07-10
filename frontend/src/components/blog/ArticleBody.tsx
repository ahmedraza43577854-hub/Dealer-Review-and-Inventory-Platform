import { Quote } from "lucide-react";
import type { ArticleBlock } from "@/config/blog";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="pt-3 text-xl font-bold text-primary sm:text-2xl"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-foreground/90">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span className="text-base leading-relaxed text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="relative rounded-lg border-l-4 border-accent bg-secondary/60 p-5 pl-6"
              >
                <Quote className="mb-2 h-5 w-5 text-accent" />
                <p className="text-lg font-semibold italic text-primary">
                  {block.text}
                </p>
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
