import { Request, Response } from "express";
import registerPropertyService from "../../service/properties/registerProperties.service";

const registerPropertyController = async (req: Request, res: Response) => {
  const body = req.body;

  const newPropertie = await registerPropertyService(body);

  return res.status(201).json(newPropertie);
};

export default registerPropertyController;
