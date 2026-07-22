import type { Metadata } from "next";

/**
 * Returns the public site origin (no trailing slash).
 * Required in production via NEXT_PUBLIC_SITE_URL.
 */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL environment variable is not defined"
    );
  }

  return url.replace(/\/$/, "");
}

/** Used by the root layout so relative canonical paths resolve correctly. */
export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}

/**
 * Normalizes a pathname for canonical URLs.
 * Strips query strings and hashes; ensures a leading slash; removes trailing slashes (except root).
 */
export function normalizeCanonicalPath(path: string): string {
  const pathname = path.split("?")[0].split("#")[0];

  if (!pathname || pathname === "/") {
    return "/";
  }

  const withLeading = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withLeading.replace(/\/+$/, "") || "/";
}

/** Returns the absolute self-referencing canonical URL for a page (never includes query params). */
export function getCanonicalUrl(path: string): string {
  const normalized = normalizeCanonicalPath(path);
  return normalized === "/" ? `${getSiteUrl()}/` : `${getSiteUrl()}${normalized}`;
}

/** Attaches a self-referencing absolute canonical URL. Path must not include query params. */
export function withCanonical(metadata: Metadata, path: string): Metadata {
  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: getCanonicalUrl(path),
    },
  };
}
