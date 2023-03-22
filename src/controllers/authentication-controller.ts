import { Request, Response } from "express";
import authenticationService from "../service/authentication-controller.ts";
export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const result = await authenticationService.signIn({ email, password });
    const user = {
      id: result.user.id,
        name:result.user.name ,
          email: result.user.email,
          token: result.token
    }
  
    return res.status(201).send(user);
} catch (error) {
  return res.status(403).send(error);
}
}
