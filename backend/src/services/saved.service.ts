import { ConflictError, NotFoundError } from "../errors/AppError";
import { savedVehicleRepository } from "../repositories/saved.repository";

export const savedVehicleService = {
  async list(visitorId: string) {
    const rows = await savedVehicleRepository.listByVisitor(visitorId);
    return {
      vehicleIds: rows.map((row) => row.vehicleId),
      items: rows,
    };
  },

  async save(visitorId: string, vehicleId: string) {
    const existing = await savedVehicleRepository.findOne(
      visitorId,
      vehicleId
    );
    if (existing) {
      throw new ConflictError("Vehicle already saved");
    }
    return savedVehicleRepository.create(visitorId, vehicleId);
  },

  async remove(visitorId: string, vehicleId: string) {
    const result = await savedVehicleRepository.delete(visitorId, vehicleId);
    if (result.count === 0) {
      throw new NotFoundError("Saved vehicle");
    }
    return { ok: true as const };
  },
};
