import { User } from "../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";

const createUserIntoDB = async (payload: User) => {
  try {
    const newUser = await prisma.user.create({ data: payload });
    return newUser;
  } catch (error) {}
};
export const AuthService = { createUserIntoDB };
