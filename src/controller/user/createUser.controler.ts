import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import createUserService from "../../service/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const user: IUserRequest = req.body;
    const newUser = await createUserService(user);
    const { password, ...rest } = newUser;
    return res.status(201).json(rest);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default createUserController;
