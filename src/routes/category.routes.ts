import { Router } from "express";
import createCategoryController from "../controller/categories/createCategory.controller";
import listAllPropertyByCategoryController from "../controller/categories/listAllCategoryByProperty.contoller";
import listAllCategoriesController from "../controller/categories/listCategoryController";

import ensureAuthMiddleware from "../middlewares/verifyAuth.middlewares";
import verifyCategoryNameMiddleware from "../middlewares/verifyCategorieName.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";

const router = Router();
router.post(
  "",
  ensureAuthMiddleware,
  verifyIsAdmMiddleware,
  verifyCategoryNameMiddleware,
  createCategoryController
);
router.get("", listAllCategoriesController);
router.get("/:id/properties", listAllPropertyByCategoryController);

export default router;
