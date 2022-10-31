import { Request, Response } from "express";
import listAllPropertyByCategoryService from "../../service/categories/listCategory.service";

const listAllPropertyByCategoryController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const listOfProperties = await listAllPropertyByCategoryService(id);

  return res.status(200).json(listOfProperties);
};

export default listAllPropertyByCategoryController;
