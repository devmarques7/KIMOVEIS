import { Request, Response } from "express";

import { IUserLogin } from "../../interfaces/users";
import userLoginService from "../../service/user/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  try {
    const login: IUserLogin = req.body;
    console.log(login);
    const response = await userLoginService(login);

    return res.status(200).json({ token: response });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(403).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userLoginController;
