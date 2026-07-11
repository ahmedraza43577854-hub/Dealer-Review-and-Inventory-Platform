import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, ChevronRight, Clock } from "lucide-react";
import {
  BLOG_POSTS,
  getPostBySlug,
  getRelatedPosts,
} from "@/config/blog";
import { ROUTES, SITE } from "@/config/constants";
import { BlogCover } from "@/components/blog/BlogCover";
import { BlogCard } from "@/components/blog/BlogCard";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { Button } from "@/components/ui/button";

interface ArticlePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: `Blog | ${SITE.name}` };
  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.excerpt,
  };
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-border/70 bg-white">
        <div className="container-page py-3">
          <nav
            className="flex items-center gap-1.5 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href={ROUTES.home} className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={ROUTES.blog} className="hover:text-primary">
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="truncate font-medium text-primary">
              {post.category}
            </span>
          </nav>
        </div>
      </div>

      <article className="container-page py-8 lg:py-10">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <span className="inline-block rounded-md bg-secondary px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{post.excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-4 border-b border-border/70 pb-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {initials(post.author)}
              </span>
              <div>
                <p className="text-sm font-bold text-primary">{post.author}</p>
                <p className="text-xs text-muted-foreground">
                  {post.authorRole}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Cover */}
          <BlogCover
            post={post}
            className="mt-6 aspect-[16/9] w-full rounded-lg border border-border/70 shadow-card"
            sizes="(max-width: 768px) 100vw, 768px"
            iconClassName="h-20 w-20"
            priority
          />

          {/* Body */}
          <div className="mt-8">
            <ArticleBody blocks={post.body} />
          </div>

          {/* In-article CTA */}
          <div className="mt-10 flex flex-col items-start gap-3 rounded-lg border border-accent/40 bg-gold-light p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-bold text-primary">
                Ready to put this into practice?
              </p>
              <p className="text-sm text-foreground/80">
                Explore real inventory and trusted dealers across the United States.
              </p>
            </div>
            <Button asChild variant="gold" className="shrink-0">
              <Link href={post.ctaHref}>
                {post.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8">
            <Link
              href={ROUTES.blog}
              className="text-sm font-bold text-primary hover:underline"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mx-auto mt-14 max-w-5xl border-t border-border/70 pt-10">
            <h2 className="mb-6 text-2xl font-bold text-primary">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} post={r} />
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
