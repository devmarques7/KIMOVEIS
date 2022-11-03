import { Router } from "express";

import listAllPropertiesController from "../controller/properties/listProperties.controller";
import registerPropertyController from "../controller/properties/registerPropertie.controller";
import verifyAuth from "../middlewares/verifyAuth.middlewares";
import verifyIsAdm from "../middlewares/verifyIsAdm.middleware";

const router = Router();
router.post("", verifyAuth, verifyIsAdm, registerPropertyController);
router.get("", listAllPropertiesController);

export default router;
