import "dotenv/config";

import AppDataSource from "../../data-source";

import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const authPassword = bycrypt.compareSync(password, user.password!);

  if (!authPassword) {
    throw new Error("Invalid Email or Password");
  }

  const token = jwt.sign(
    {
      email: email,
      isAdm: user.isAdm,
      isActive: user.isActive,
      id: user.id,
    },
    "entregaS4-17",
    { expiresIn: "24h" }
  );

  return token;
};

export default userLoginService;
