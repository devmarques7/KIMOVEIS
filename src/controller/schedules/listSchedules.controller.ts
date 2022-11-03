import { Request, Response } from "express";
import listAllSchedulesByPropertyService from "../../service/schedules/listOfSchedules.service";

const listAllSchedulesByPropertyController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const listSchedules = await listAllSchedulesByPropertyService(id);
  return res.json(listSchedules);
};

export default listAllSchedulesByPropertyController;
