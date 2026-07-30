import { z } from "zod";

export const visitorIdSchema = z
  .string()
  .uuid({ message: "Invalid visitor id" });

export const saveVehicleBodySchema = z.object({
  vehicleId: z
    .string()
    .min(1, "vehicleId is required")
    .max(128, "vehicleId is too long"),
});

export const vehicleIdParamSchema = z.object({
  vehicleId: z.string().min(1, "vehicleId is required").max(128),
});

export type SaveVehicleBody = z.infer<typeof saveVehicleBodySchema>;
export type VehicleIdParam = z.infer<typeof vehicleIdParamSchema>;
