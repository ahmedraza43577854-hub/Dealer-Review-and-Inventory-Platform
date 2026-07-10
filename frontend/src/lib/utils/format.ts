export function formatReviewCount(count: number): string {
  return `${count} ${count === 1 ? "review" : "reviews"}`;
}

export function formatLocation(city: string, state: string): string {
  return `${city}, ${state}`;
}

export function stripProtocol(url: string): string {
  return url.replace(/^https?:\/\//, "");
}

export function formatPrice(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}

export function formatPriceCompact(value: number): string {
  if (value >= 1000) {
    const k = value / 1000;
    return `$${Number.isInteger(k) ? k : k.toFixed(0)}K`;
  }
  return `$${value}`;
}

export function formatMileage(value: number): string {
  return `${value.toLocaleString("en-US")} mi`;
}

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return phone;
}
