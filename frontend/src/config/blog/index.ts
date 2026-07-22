import { finalizePost } from "./utils";
import { cpoExplained } from "./posts/cpo-explained";
import { electricCarsGuide } from "./posts/electric-cars-guide";
import { financing101 } from "./posts/financing-101";
import { inspectUsedCar } from "./posts/inspect-used-car";
import { bestFamilyRoadTripCars } from "./posts/best-family-road-trip-cars";
import { bestSuvsUnder30k } from "./posts/best-suvs-under-30k";
import { newVsUsedVsCpo } from "./posts/new-vs-used-vs-cpo";
import { readingCombinedRatings } from "./posts/reading-combined-ratings";
import { testDriveQuestions } from "./posts/test-drive-questions";
import { tradeInTips } from "./posts/trade-in-tips";
import { understandingCarfax } from "./posts/understanding-carfax";
import { winterDrivingPrep } from "./posts/winter-driving-prep";
import type { BlogPost } from "./types";

export type { ArticleBlock, BlogPost, InlinePart } from "./types";
export { countArticleWords, estimateReadTime, blockToPlainText } from "./utils";

const RAW_POSTS = [
  newVsUsedVsCpo,
  readingCombinedRatings,
  bestSuvsUnder30k,
  financing101,
  electricCarsGuide,
  testDriveQuestions,
  inspectUsedCar,
  tradeInTips,
  bestFamilyRoadTripCars,
  winterDrivingPrep,
  understandingCarfax,
  cpoExplained,
];

export const BLOG_POSTS: BlogPost[] = RAW_POSTS.map(finalizePost);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return BLOG_POSTS.slice(0, limit);
  const sameCategory = BLOG_POSTS.filter(
    (post) => post.slug !== slug && post.category === current.category
  );
  const others = BLOG_POSTS.filter(
    (post) => post.slug !== slug && post.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
