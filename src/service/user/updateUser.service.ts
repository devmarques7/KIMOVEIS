import AppDataSource from "../../data-source";

import { hash } from "bcryptjs";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import { appError } from "../../errors/appError";

const updateUserService = async (
  id: string,
  { name, email, password }: IUserUpdate
) => {
  const usersRepository = AppDataSource.getRepository(User);
  const user = await usersRepository.findOneBy({ id });

  if (!user) {
    throw new appError(404, "User not found");
  }

  if (!name && !email && !password) {
    return user;
  }

  if (password) {
    password = await hash(password, 10);
  }

  const updates = {
    name,
    email,
    password,
  };

  await usersRepository.update(id, { ...updates });

  const newUserReq = await usersRepository.findOneBy({ id });
  const userUpdated = {
    name: newUserReq!.name,
    email: newUserReq!.email,
    isAdm: newUserReq!.isAdm,
    isActive: newUserReq!.isActive,
    createdAt: newUserReq!.createdAt,
    updatedAt: new Date(),
  };

  return userUpdated;
};

export default updateUserService;
