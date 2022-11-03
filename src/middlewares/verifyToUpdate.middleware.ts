import { NextFunction, request, Request, Response } from "express";

import { IUpdate } from "../interfaces/users";
import jwt from "jsonwebtoken";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { appError } from "../errors/appError";

const verifyToUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;
  const { id } = req.params;
  const data = req.body;
  let token = req.headers.authorization;

  token = token!.split(" ")[1];

  const dataToken = jwt.decode(token) as IUpdate;

  if (dataToken.id !== id && isAdm == false) {
    return res.status(401).json({ message: "Missing Admin authorization" });
  }

  console.log(data, data.id, data.isAdm, data.isActive);

  if (data.id || data.isAdm || data.isActive) {
    return res.status(401).json({ message: "Updates unathorization" });
  }

  const usersRepository = AppDataSource.getRepository(User);
  const user = await usersRepository.findOneBy({ id });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  next();
};

export default verifyToUpdate;
