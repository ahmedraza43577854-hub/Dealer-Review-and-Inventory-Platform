import { Request, Response } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { savedVehicleService } from "../services/saved.service";

export class SavedVehicleController {
  list = asyncHandler(async (req: Request, res: Response) => {
    const data = await savedVehicleService.list(req.visitorId!);
    res.json(data);
  });

  save = asyncHandler(async (req: Request, res: Response) => {
    const { vehicleId } = req.validatedBody as { vehicleId: string };
    const item = await savedVehicleService.save(req.visitorId!, vehicleId);
    res.status(201).json(item);
  });

  remove = asyncHandler(async (req: Request, res: Response) => {
    const { vehicleId } = req.validatedParams as { vehicleId: string };
    const result = await savedVehicleService.remove(
      req.visitorId!,
      vehicleId
    );
    res.json(result);
  });
}

export const savedVehicleController = new SavedVehicleController();
