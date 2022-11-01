import { Router } from "express";
import createUserController from "../controller/user/createUser.controler";
import deleteUserController from "../controller/user/deleteUser.controller";
import listAllUserController from "../controller/user/listAllUser.controler";
import userLoginController from "../controller/user/userLogin.controller";
import updatedUserController from "../controller/user/userUpdate.controller";
import verifyAuth from "../middlewares/verifyAuth.middlewares";
import validateEmail from "../middlewares/verifyEmail.middleware";

import verifyIsAdm from "../middlewares/verifyIsAdm.middleware";
import verifyToUpdate from "../middlewares/verifyToUpdate.middleware";

export const loginRouter = Router();
const router = Router();

router.post("", validateEmail, createUserController);
router.post("", userLoginController);
router.get("", verifyAuth, verifyIsAdm, listAllUserController);
router.patch("/:id", verifyAuth, verifyToUpdate, updatedUserController);
router.delete("/:id", verifyAuth, verifyIsAdm, deleteUserController);

export default router;
