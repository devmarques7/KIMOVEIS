import AppDataSource from "../../data-source";

import { appError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { Properties } from "../../entities/properties.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import { Schedule } from "../../entities/shedules_users_properties";

const registerSchedullesService = async (
  { date, hour, propertyId }: IScheduleRequest,
  id: any
) => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const property = await propertiesRepository.findOneBy({ id: propertyId });

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  const scheduleRepository = AppDataSource.getRepository(Schedule);
  const validateHour = +hour.split(" : ")[0];

  if (validateHour < 8 || validateHour >= 18) {
    throw new appError(400, "Invalid Hour");
  }

  const validateDate = new Date(date).getDay();
  if (validateDate === 0 || validateDate === 6) {
    throw new appError(400, "Invalid Date");
  }

  if (!property || !user) {
    throw new appError(404, "User or property not found");
  }

  const schedules = await scheduleRepository.find();
  const schedulesAlredyExists = schedules.find((elem) => elem);

  if (schedulesAlredyExists) {
    throw new appError(400, "Date and hour invalid");
  }

  const newSchedule = scheduleRepository.create({
    date,
    hour,
  });
  await scheduleRepository.save(newSchedule);

  return newSchedule;
};

export default registerSchedullesService;
