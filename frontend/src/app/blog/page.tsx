import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { ContentPage, ContentSection } from "@/components/layout/ContentPage";
import { BlogCover } from "@/components/blog/BlogCover";
import { BlogCard } from "@/components/blog/BlogCard";
import { SeoContentSection } from "@/components/seo/SeoContentSection";
import { BLOG_POSTS } from "@/config/blog";
import { ROUTES } from "@/config/constants";
import { BLOG_SEO_CONTENT } from "@/config/seo-content";
import { PAGE_SEO } from "@/config/seo";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { buildBlogListingSchemas } from "@/lib/schema/builders";

export const metadata: Metadata = PAGE_SEO.blog;

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <SchemaMarkup data={buildBlogListingSchemas()} />
      <ContentPage
      title="Blog & Buying Guides"
      subtitle="Practical tips, dealer insights, and guides to help you shop smarter."
      badge="AutoSalesReviews Blog"
      centered
    >
      <ContentSection>
        {/* Featured post */}
        <Link
          href={`${ROUTES.blog}/${featured.slug}`}
          className="group mb-8 grid overflow-hidden rounded-lg border border-border/70 bg-white shadow-card transition-all hover:shadow-card-hover md:grid-cols-2"
        >
          <div className="relative">
            <BlogCover
              post={featured}
              className="w-full"
              sizes="(max-width: 768px) 100vw, 620px"
              iconClassName="h-20 w-20"
              priority
            />
            <span className="absolute left-4 top-4 rounded-md bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
              Featured
            </span>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-wide text-accent-foreground/70">
              {featured.category}
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-primary group-hover:text-navy-600">
              {featured.title}
            </h2>
            <p className="mt-2 text-muted-foreground">{featured.excerpt}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                {featured.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {featured.readTime}
              </span>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
              Read article
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </ContentSection>

      <SeoContentSection content={BLOG_SEO_CONTENT} variant="muted" />
    </ContentPage>
    </>
  );
}
