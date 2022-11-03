import { Router } from "express";
import listSchedulesByPropertyController from "../controller/schedules/listSchedules.controller";
import registerSchedulesController from "../controller/schedules/registerSchedules.controller";

import verifyAuth from "../middlewares/verifyAuth.middlewares";
import verifyIsAdm from "../middlewares/verifyIsAdm.middleware";

const router = Router();
router.post("", verifyAuth, registerSchedulesController);
router.get(
  "/properties/:id",
  verifyAuth,
  verifyIsAdm,
  listSchedulesByPropertyController
);

export default router;
