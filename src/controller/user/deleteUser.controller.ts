import { Request, Response } from "express";
import deleteUserService from "../../service/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteUserService(id);
    return res.status(204).send(response);
  } catch (err) {
    if (err instanceof Error) {
      const status = err.message == "User not found" ? 404 : 400;
      return res.status(status).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default deleteUserController;
