import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import type { BlogPost } from "@/config/blog";
import { ROUTES } from "@/config/constants";
import { BlogCover } from "@/components/blog/BlogCover";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`${ROUTES.blog}/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <BlogCover
        post={post}
        className="h-44"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
      />
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-bold uppercase tracking-wide text-accent-foreground/70">
          {post.category}
        </span>
        <h3 className="mt-1.5 text-base font-bold text-primary group-hover:text-navy-600">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
