export function formatReviewCount(count: number): string {
  return `${count} ${count === 1 ? "review" : "reviews"}`;
}

export function formatLocation(city: string, state: string): string {
  return `${city}, ${state}`;
}

export function stripProtocol(url: string): string {
  return url.replace(/^https?:\/\//, "");
}
