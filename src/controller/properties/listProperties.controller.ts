import { Request, Response } from "express";
import listAllPropertiesService from "../../service/properties/listProperties.service";

const listAllPropertiesController = async (req: Request, res: Response) => {
  const listProperties = await listAllPropertiesService();
  return res.status(200).json(listProperties);
};

export default listAllPropertiesController;
