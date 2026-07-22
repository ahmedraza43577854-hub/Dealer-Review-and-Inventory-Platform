export type JsonLd = Record<string, unknown>;

export interface FaqItem {
  question: string;
  answer: string;
}

export const SCHEMA_CONTEXT = "https://schema.org" as const;
