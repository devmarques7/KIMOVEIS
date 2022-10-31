import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyAuth = async (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization Token",
    });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded: any) => {
    if (error) {
      return res.status(401).json({ message: error.message });
    }
    req.user = {
      isAdm: decoded.isAdm,
      id: decoded.id,
    };
    next();
  });
};

export default verifyAuth;
