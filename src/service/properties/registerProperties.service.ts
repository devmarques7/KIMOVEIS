import AppDataSource from "../../data-source";

import { Address } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entinty";
import { Properties } from "../../entities/properties.entity";

import { appError } from "../../errors/appError";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";

const registerPropertyService = async ({
  value,
  size,
  address,
  categoryId,
}: IPropertyRequest): Promise<Properties> => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Address);
  const categoriesRepository = AppDataSource.getRepository(Categories);

  console.log(value, size, address, categoryId);

  const categorie = await categoriesRepository.findOneBy({ id: categoryId });
  if (!categorie) {
    throw new appError(404, "Categorie not found");
  }

  if (address.state.length > 2) {
    throw new appError(400, "Invalid State");
  }
  const Unvaiable = await addressRepository.findOneBy({
    district: address.district,
  });

  if (Unvaiable) {
    throw new appError(400, "Address already exists");
  }

  const newAddressObj: IAddressRequest = {
    district: address.district,
    zipCode: address.zipCode,
    number: address.number,
    city: address.city,
    state: address.state,
  };

  const newAddress = addressRepository.create(newAddressObj);
  await addressRepository.save(newAddress);

  const newPropertie = propertiesRepository.create({
    value,
    size,
  });

  await propertiesRepository.save(newPropertie);

  return newPropertie;
};

export default registerPropertyService;
