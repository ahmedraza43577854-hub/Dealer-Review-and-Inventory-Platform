import { Router } from "express";
import { savedVehicleController } from "../controllers/saved.controller";
import { requireVisitorId } from "../middleware/visitor";
import { validate } from "../middleware/validate";
import {
  saveVehicleBodySchema,
  vehicleIdParamSchema,
} from "../validators/saved.validator";

const router = Router();

router.use(requireVisitorId);

router.get("/", savedVehicleController.list);

router.post(
  "/",
  validate(saveVehicleBodySchema, "body"),
  savedVehicleController.save
);

router.delete(
  "/:vehicleId",
  validate(vehicleIdParamSchema, "params"),
  savedVehicleController.remove
);

export default router;
