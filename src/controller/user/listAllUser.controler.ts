import { Request, Response } from "express";
import listUsersService from "../../service/user/listAllUser.service";

const listAllUserController = async (req: Request, res: Response) => {
  try {
    const listUsers = await listUsersService();
    return res.status(201).json(listUsers);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default listAllUserController;
