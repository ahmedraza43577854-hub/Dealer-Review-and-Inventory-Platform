import { prisma } from "../lib/prisma";

export const savedVehicleRepository = {
  listByVisitor(visitorId: string) {
    return prisma.savedVehicle.findMany({
      where: { visitorId },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        vehicleId: true,
        createdAt: true,
      },
    });
  },

  findOne(visitorId: string, vehicleId: string) {
    return prisma.savedVehicle.findUnique({
      where: {
        visitorId_vehicleId: { visitorId, vehicleId },
      },
    });
  },

  create(visitorId: string, vehicleId: string) {
    return prisma.savedVehicle.create({
      data: { visitorId, vehicleId },
      select: {
        id: true,
        vehicleId: true,
        createdAt: true,
      },
    });
  },

  delete(visitorId: string, vehicleId: string) {
    return prisma.savedVehicle.deleteMany({
      where: { visitorId, vehicleId },
    });
  },
};
