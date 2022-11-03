import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import updateUserService from "../../service/user/updateUser.service";

const updatedUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates: IUserUpdate = req.body;
    const updateUser = await updateUserService(id, updates);
    return res.json({
      message: "User updated",
      ...updateUser,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default updatedUserController;
