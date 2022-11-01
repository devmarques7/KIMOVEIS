import { NextFunction, Request, Response } from "express";

import { IUpdate } from "../interfaces/users";
import jwt from "jsonwebtoken";

const verifyToUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user;
  const { id } = req.user;
  let token = req.headers.authorization;

  token = token!.split(" ")[1];

  const dataToken = jwt.decode(token) as IUpdate;

  if (dataToken.id !== id && isAdm == false) {
    return res.status(401).json({ message: "Missing admin authorization" });
  }
  next();
};

export default verifyToUpdate;
