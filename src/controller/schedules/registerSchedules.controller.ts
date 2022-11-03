import { Request, Response } from "express";
import registerSchedullesService from "../../service/schedules/registerSchedules.service";

const registerSchedulesController = async (req: Request, res: Response) => {
  const registerSchedule = req.body;
  console.log("esta aqui", registerSchedule);
  const id = req.params;
  const newSchedule = await registerSchedullesService(registerSchedule, id);

  return res.status(201).json({ message: "Successful", newSchedule });
};

export default registerSchedulesController;
