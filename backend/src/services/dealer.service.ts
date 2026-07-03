import { dealerRepository } from "../repositories/dealer.repository";
import { toDealerDetailDto, toDealerSummaryDto } from "../dtos/dealer.dto";
import { ConflictError, NotFoundError } from "../errors/AppError";
import {
  CreateDealerInput,
  DealerListFilters,
} from "../types/dealer.types";
import { ListDealersQuery } from "../validators/dealer.validator";
import { generateSlug } from "../utils/slug";

export class DealerService {
  async listDealers(query: ListDealersQuery) {
    const filters: DealerListFilters = {
      state: query.state,
      city: query.city,
      search: query.search,
      minRating: query.minRating,
    };
    const dealers = await dealerRepository.findAll(filters);
    return dealers.map(toDealerSummaryDto);
  }

  async getDealerBySlug(slug: string) {
    const dealer = await dealerRepository.findBySlug(slug);

    if (!dealer) {
      throw new NotFoundError("Dealer");
    }

    return toDealerDetailDto(dealer);
  }

  async createDealer(input: CreateDealerInput) {
    const slug = generateSlug(input.name);

    if (!slug) {
      throw new ConflictError("Unable to generate a valid slug from dealer name");
    }

    const slugExists = await dealerRepository.slugExists(slug);
    if (slugExists) {
      throw new ConflictError("A dealer with this name already exists");
    }

    const dealer = await dealerRepository.create({ ...input, slug });
    return toDealerDetailDto(dealer);
  }
}

export const dealerService = new DealerService();
