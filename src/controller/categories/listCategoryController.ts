import { Request, Response } from "express";
import listAllCategoriesService from "../../service/categories/listAllCategory.service";

const listAllCategoriesController = async (req: Request, res: Response) => {
  const listcategories = await listAllCategoriesService();
  return res.status(200).json(listcategories);
};

export default listAllCategoriesController;
