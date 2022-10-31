import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entinty";
import { appError } from "../../errors/appError";

const listAllPropertyByCategoryService = async (Categoryid: string) => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const listCategory = await categoryRepository.findOne({
    where: {
      id: Categoryid,
    },
    relations: {
      properties: true,
    },
  });

  if (!listCategory) {
    throw new appError(404, "Category not found");
  }

  return listCategory;
};

export default listAllPropertyByCategoryService;
