import {
  ListDealersQuery,
  CreateDealerBody,
} from "../validators/dealer.validator";
import type { SaveVehicleBody, VehicleIdParam } from "../validators/saved.validator";

declare global {
  namespace Express {
    interface Request {
      validatedQuery?: ListDealersQuery;
      validatedBody?: CreateDealerBody | SaveVehicleBody;
      validatedParams?: { slug: string } | VehicleIdParam;
      visitorId?: string;
    }
  }
}

export {};
