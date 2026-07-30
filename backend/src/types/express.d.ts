import {
  ListDealersQuery,
  CreateDealerBody,
} from "../validators/dealer.validator";

declare global {
  namespace Express {
    interface Request {
      validatedQuery?: ListDealersQuery;
      validatedBody?: CreateDealerBody;
      validatedParams?: { slug: string };
      visitorId?: string;
    }
  }
}

export {};
