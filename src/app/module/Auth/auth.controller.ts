import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const createUser = async (req: Request, res: Response) => {
  const result = await AuthService.createUserIntoDB(req.body);
  res.status(201).json({
    success: true,
    data: result,
    message: "User Registered Successfully",
  });
};
export const AuthController = { createUser };
