import { Request, Response } from "express";
import userService from "../service/users-service";

export async function usersPost(req: Request, res: Response) {
  const { name, email, password } = req.body;
  try {
    const user = await userService.createUser({ name, email, password });
    return res.status(201).json({
      id: user.id,
      email: user.email,
    });
  } catch (e) {
    return res.status(400).send(e);
  }
}
