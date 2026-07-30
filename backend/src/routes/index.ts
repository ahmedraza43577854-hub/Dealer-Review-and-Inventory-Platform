import { Router } from "express";
import dealerRoutes from "./dealer.routes";
import savedRoutes from "./saved.routes";

const router = Router();

router.use("/dealers", dealerRoutes);
router.use("/saved", savedRoutes);

export default router;
