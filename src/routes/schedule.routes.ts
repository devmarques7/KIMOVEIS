import { Router } from "express";
import listSchedulesByPropertyController from "../controller/schedules/listSchedules.controller";
import registerSchedulesController from "../controller/schedules/registerSchedules.controller";

import ensureAuthMiddleware from "../middlewares/verifyAuth.middlewares";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();
router.post("", ensureAuthMiddleware, registerSchedulesController);
router.get(
  "/properties/:id",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  listSchedulesByPropertyController
);

export default router;
