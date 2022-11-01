import { NextFunction, Response, Request } from "express";
import AppDataSource from "../data-source";
import { Categories } from "../entities/categories.entinty";

const validateNameCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  const categoryRepository = AppDataSource.getRepository(Categories);
  const validateName = await categoryRepository.findOneBy({ name });

  if (validateName) {
    return res.status(400).json({ message: "This category is alredy in use" });
  }

  next();
};
export default validateNameCategory;
