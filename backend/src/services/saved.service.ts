import { NotFoundError } from "../errors/AppError";
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
      return {
        id: existing.id,
        vehicleId: existing.vehicleId,
        createdAt: existing.createdAt,
      };
    }
    return savedVehicleRepository.create(visitorId, vehicleId);
  },

  async remove(visitorId: string, vehicleId: string) {
    await savedVehicleRepository.delete(visitorId, vehicleId);
    return { ok: true as const };
  },
};
