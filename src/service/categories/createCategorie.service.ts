import { Categories } from "../../entities/categories.entinty";
import { ICategoryRequest } from "../../interfaces/categories";

import AppDataSource from "../../data-source";

const createCategoryService = async ({ name }: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const newCategory = categoryRepository.create({
    name,
  });

  await categoryRepository.save(newCategory);

  return newCategory;
};
export default createCategoryService;
