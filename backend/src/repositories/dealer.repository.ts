import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";
import {
  CreateDealerInput,
  DealerListFilters,
  DealerWithReviews,
} from "../types/dealer.types";

const dealerWithReviewsInclude = {
  reviews: { select: { rating: true } },
} satisfies Prisma.DealerInclude;

export class DealerRepository {
  async findAll(filters: DealerListFilters): Promise<DealerWithReviews[]> {
    if (filters.minRating !== undefined) {
      return this.findAllWithMinRating(filters);
    }

    return prisma.dealer.findMany({
      where: this.buildPrismaWhere(filters),
      include: dealerWithReviewsInclude,
      orderBy: [{ featured: "desc" }, { name: "asc" }],
    });
  }

  private buildPrismaWhere(
    filters: DealerListFilters
  ): Prisma.DealerWhereInput {
    const where: Prisma.DealerWhereInput = {};

    if (filters.state) {
      where.state = filters.state.toUpperCase();
    }

    if (filters.city) {
      where.city = { contains: filters.city, mode: "insensitive" };
    }

    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: "insensitive" } },
        { city: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    return where;
  }

  private async findAllWithMinRating(
    filters: DealerListFilters
  ): Promise<DealerWithReviews[]> {
    const state = filters.state?.toUpperCase() ?? null;
    const cityPattern = filters.city ? `%${filters.city}%` : null;
    const searchPattern = filters.search ? `%${filters.search}%` : null;
    const minRating = filters.minRating!;

    const rows = await prisma.$queryRaw<{ id: string }[]>`
      SELECT d.id
      FROM "Dealer" d
      LEFT JOIN "Review" r ON r."dealerId" = d.id
      WHERE
        (${state}::text IS NULL OR d.state = ${state})
        AND (${cityPattern}::text IS NULL OR d.city ILIKE ${cityPattern})
        AND (
          ${searchPattern}::text IS NULL
          OR d.name ILIKE ${searchPattern}
          OR d.city ILIKE ${searchPattern}
        )
      GROUP BY d.id
      HAVING COALESCE(AVG(r.rating), 0) >= ${minRating}
      ORDER BY MAX(CASE WHEN d.featured THEN 1 ELSE 0 END) DESC, MAX(d.name) ASC
    `;

    if (rows.length === 0) return [];

    return prisma.dealer.findMany({
      where: { id: { in: rows.map((row) => row.id) } },
      include: dealerWithReviewsInclude,
      orderBy: [{ featured: "desc" }, { name: "asc" }],
    });
  }

  async findBySlug(slug: string): Promise<DealerWithReviews | null> {
    return prisma.dealer.findUnique({
      where: { slug },
      include: dealerWithReviewsInclude,
    });
  }

  async slugExists(slug: string): Promise<boolean> {
    const count = await prisma.dealer.count({ where: { slug } });
    return count > 0;
  }

  async create(
    input: CreateDealerInput & { slug: string }
  ): Promise<DealerWithReviews> {
    return prisma.dealer.create({
      data: {
        name: input.name,
        slug: input.slug,
        address: input.address,
        city: input.city,
        state: input.state.toUpperCase(),
        zip: input.zip,
        phone: input.phone ?? null,
        email: input.email ?? null,
        website: input.website ?? null,
        description: input.description ?? null,
        logo: input.logo ?? null,
        featured: input.featured ?? false,
      },
      include: dealerWithReviewsInclude,
    });
  }
}

export const dealerRepository = new DealerRepository();
