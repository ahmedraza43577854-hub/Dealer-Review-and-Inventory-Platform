import { z } from "zod";
import { VALID_STATES } from "../config/constants";

const stateCodeSchema = z.enum(VALID_STATES);

function parseOptionalState(value: unknown) {
  if (typeof value !== "string" || value === "All") return undefined;
  const upper = value.toUpperCase();
  return stateCodeSchema.safeParse(upper).success ? upper : undefined;
}

function parseOptionalMinRating(value: unknown) {
  if (typeof value !== "string" || !value) return undefined;
  const parsed = parseFloat(value);
  if (isNaN(parsed) || parsed < 1 || parsed > 5) return undefined;
  return parsed;
}

export const listDealersQuerySchema = z.object({
  state: z.preprocess(parseOptionalState, stateCodeSchema.optional()),
  city: z.string().trim().optional(),
  search: z.string().trim().optional(),
  minRating: z.preprocess(parseOptionalMinRating, z.number().optional()),
});

export const dealerSlugParamSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
});

export const createDealerBodySchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  address: z.string().trim().min(1, "Address is required"),
  city: z.string().trim().min(1, "City is required"),
  state: z.string().trim().toUpperCase().pipe(stateCodeSchema),
  zip: z.string().trim().min(1, "Zip is required"),
  phone: z.string().trim().optional().nullable(),
  email: z.string().email().optional().nullable().or(z.literal("")),
  website: z.string().url().optional().nullable().or(z.literal("")),
  description: z.string().trim().optional().nullable(),
  logo: z.string().url().optional().nullable().or(z.literal("")),
  featured: z.boolean().optional(),
});

export type ListDealersQuery = z.infer<typeof listDealersQuerySchema>;
export type CreateDealerBody = z.infer<typeof createDealerBodySchema>;
