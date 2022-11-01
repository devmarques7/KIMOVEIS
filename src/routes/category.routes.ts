import { Router } from "express";
import createCategoryController from "../controller/categories/createCategory.controller";
import listAllPropertyByCategoryController from "../controller/categories/listAllCategoryByProperty.contoller";
import listAllCategoriesController from "../controller/categories/listCategoryController";
import verifyAuth from "../middlewares/verifyAuth.middlewares";

import validateNameCategory from "../middlewares/verifyCategorieName.middleware";
import verifyIsAdm from "../middlewares/verifyIsAdm.middleware";

const router = Router();
router.post(
  "",
  verifyAuth,
  verifyIsAdm,
  validateNameCategory,
  createCategoryController
);
router.get("", listAllCategoriesController);
router.get("/:id/properties", listAllPropertyByCategoryController);

export default router;
