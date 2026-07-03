import { Router } from "express";
import dealerRoutes from "./dealer.routes";

const router = Router();

router.use("/dealers", dealerRoutes);

export default router;
