import { NextFunction, Request, Response } from "express";

const verifyIsAdm = async (req: Request, res: Response, next: NextFunction) => {
  const { isAdm } = req.user;
  if (!isAdm) {
    return res.status(403).json({ message: "Missing admin authorization" });
  }
  next();
};

export default verifyIsAdm;
