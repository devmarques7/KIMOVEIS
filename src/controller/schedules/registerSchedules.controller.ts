import { Request, Response } from "express";
import registerSchedullesService from "../../service/schedules/registerSchedules.service";

const registerSchedulesController = async (req: Request, res: Response) => {
  const body = req.body;
  const id = req.params;
  const newSchedule = await registerSchedullesService(body, id);

  return res.status(201).json({ message: "Successful" });
};

export default registerSchedulesController;
