import { Router } from "express";
import { dealerController } from "../controllers/dealer.controller";
import { validate } from "../middleware/validate";
import {
  createDealerBodySchema,
  dealerSlugParamSchema,
  listDealersQuerySchema,
} from "../validators/dealer.validator";

const router = Router();

router.get(
  "/",
  validate(listDealersQuerySchema, "query"),
  dealerController.list
);

router.get(
  "/:slug",
  validate(dealerSlugParamSchema, "params"),
  dealerController.getBySlug
);

router.post(
  "/",
  validate(createDealerBodySchema, "body"),
  dealerController.create
);

export default router;
