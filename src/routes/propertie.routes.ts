import { Router } from "express";

import ensureAuthMiddleware from "../middlewares/verifyAuth.middlewares";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

import listAllPropertiesController from "../controller/properties/listProperties.controller";
import registerPropertyController from "../controller/properties/registerPropertie.controller";

const router = Router();
router.post(
  "",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  registerPropertyController
);
router.get("", listAllPropertiesController);

export default router;
