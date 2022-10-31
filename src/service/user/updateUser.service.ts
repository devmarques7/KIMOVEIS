import AppDataSource from "../../data-source";

import { hash } from "bcryptjs";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";

const updateUserService = async (
  id: string,
  { name, email, password }: IUserUpdate
) => {
  const usersRepository = AppDataSource.getRepository(User);
  const user = await usersRepository.findOneBy({ id });

  if (!user) {
    throw new Error("User not found");
  }

  await usersRepository.update(id, {
    name: name ? name : user.name,
    email: email ? email : user.email,
    password: password ? await hash(password, 10) : user.password,
  });

  const updatedUser = await usersRepository.findOneBy({
    id,
  });

  return updatedUser;
};

export default updateUserService;
