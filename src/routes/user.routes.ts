import { Router } from "express";
import createUserController from "../controller/user/createUser.controler";
import deleteUserController from "../controller/user/deleteUser.controller";
import listAllUserController from "../controller/user/listAllUser.controler";
import userLoginController from "../controller/user/userLogin.controller";
import updatedUserController from "../controller/user/userUpdate.controller";
import verifyAuth from "../middlewares/verifyAuth.middlewares";

import verifyEmailMiddleware from "../middlewares/verifyEmail.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
import verifyIsAdmUpdateMiddleware from "../middlewares/verifyIsAdmUpdate.middleware";

export const loginRouter = Router();
const router = Router();

router.post("", verifyEmailMiddleware, createUserController);
router.post("", userLoginController);
router.get("", verifyAuth, verifyIsAdmMiddleware, listAllUserController);
router.patch(
  "/:id",
  verifyAuth,
  verifyIsAdmUpdateMiddleware,
  updatedUserController
);
router.delete("/:id", verifyAuth, verifyIsAdmMiddleware, deleteUserController);

export default router;
