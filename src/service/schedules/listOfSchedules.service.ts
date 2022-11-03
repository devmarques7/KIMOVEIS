import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { appError } from "../../errors/appError";

const listAllSchedulesByPropertyService = async (id: string) => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const listSchedules = await propertyRepository.findOne({
    where: {
      id,
    },
    relations: {
      schedule: true,
    },
  });

  if (!listSchedules) {
    throw new appError(404, "Schedules not found");
  }

  return listSchedules;
};

export default listAllSchedulesByPropertyService;
